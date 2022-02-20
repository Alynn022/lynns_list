const apiKey = "AH6TkVNX-YvTWJNUDUWrGhPCWRjzowhc6chQ6pvs4uhx251m3PAI0UoMZT5jRW1IyQFG0DifaEmk6F3Iz64u4myxtcZRuGThLO9OHp_zAGCp7yGsEorWWz3lhLIOYnYx"
const url = "https://api.yelp.com/v3/businesses/search?location=Denver&categories=food"

// const getAllRestaurants = () => {
//   return fetch('https://fe-cors-proxy.herokuapp.com', {
//     headers: {
//     "Target-URL": "https://api.yelp.com/v3/businesses/search?location=Denver&categories=food",
//     "Authorization": "Bearer AH6TkVNX-YvTWJNUDUWrGhPCWRjzowhc6chQ6pvs4uhx251m3PAI0UoMZT5jRW1IyQFG0DifaEmk6F3Iz64u4myxtcZRuGThLO9OHp_zAGCp7yGsEorWWz3lhLIOYnYx"
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))
// }

const getAllRestaurants = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
    headers: {
    Authorization: `Bearer ${apiKey}`
  }
})
  .then(response => response.json())
  // .then(data => console.log(data))
  .catch(error => console.error(error))
}


export {getAllRestaurants};