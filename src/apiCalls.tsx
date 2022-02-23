const apiKey = "AH6TkVNX-YvTWJNUDUWrGhPCWRjzowhc6chQ6pvs4uhx251m3PAI0UoMZT5jRW1IyQFG0DifaEmk6F3Iz64u4myxtcZRuGThLO9OHp_zAGCp7yGsEorWWz3lhLIOYnYx"
const url = `https://api.yelp.com/v3/businesses/search?location=Denver&categories=food&limit=50`

const getAllRestaurants = (offset: number = 0) => {
  return fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
    "Target-URL": `${url}` + `&offset=${offset}`,
    "Authorization": `Bearer ${apiKey}`
  }
})
    .then(response => {
      return response.json()
    })
    .catch(error => console.error(error))
}

export {getAllRestaurants};