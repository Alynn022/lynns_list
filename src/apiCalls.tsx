import cleanData from './utilities';

const apiKey = 'AH6TkVNX-YvTWJNUDUWrGhPCWRjzowhc6chQ6pvs4uhx251m3PAI0UoMZT5jRW1IyQFG0DifaEmk6F3Iz64u4myxtcZRuGThLO9OHp_zAGCp7yGsEorWWz3lhLIOYnYx';

const url = `https://api.yelp.com/v3/businesses/search?location=Denver&categories=food&limit=50`;

const checkForError = (response: Response) => {
  if (response.status === 404) {
    throw (`${response.status} Error. Sorry, the page you're looking for doesn't exist.`)
  } else if ((!response.ok && response.status >= 400) && response.status < 500) {
    throw (`${response.status} Error. Sorry, the page you're looking for doesn't exist.`)
  } else if (!response.ok && response.status >= 500) {
    throw (`${response.status} Error. Something went wrong. Please try again!`)
  } else if (!response.ok){
    throw (`${response.status} Error. Something went wrong! We're not sure either, sorry!!`)
  } else {
    return response.json()
  }
}

const getAllRestaurants = (offset: number = 0) => {
  return fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
    "Target-URL": `${url}` + `&offset=${offset}`,
    "Authorization": `Bearer ${apiKey}`
    }
  })
  .then(response => checkForError(response))
  .then(data => cleanData(data))
}

export {getAllRestaurants};