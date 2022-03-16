import cleanData from './utilities';

const apiKey = 'Ad0_XGC0yivo6Othpb0K30Z_KvuGmbz8B1ZNnqP5C0lQSP8SwrVXCSaLLxNwVCWe9DyUojQ6a42vz1KdOmMshvFgTzc-t1uO2XDl1c8_i-bn53L3zRZfXEaI1CIUYnYx';

const url = `https://api.yelp.com/v3/businesses/search?location=Denver&categories=food&limit=50`;

const checkForError = (response: Response) => {
  if (response.status === 404) {
    throw new Error (`${response.status} Error. Sorry, the page you're looking for doesn't exist.`)
  } else if ((!response.ok && response.status >= 400) && response.status < 500) {
    throw new Error (`${response.status} Error. Sorry, the page you're looking for doesn't exist.`)
  } else if (!response.ok && response.status >= 500) {
    throw new Error (`${response.status} Error. Something went wrong. Please try again!`)
  } else if (!response.ok){
    throw new Error (`${response.status} Error. Something went wrong! We're not sure either, sorry!!`)
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