export interface Restaurant {
  "id": string,
  "alias": string,
  "name": "Little Man Ice Cream",
  "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/M9JjCgC5u_zoH2_1vG1jTQ/o.jpg",
  "is_closed": false,
  "url": "https://www.yelp.com/biz/little-man-ice-cream-denver?adjust_creative=E6U6G8Kpna_RIMndHiaPpw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E6U6G8Kpna_RIMndHiaPpw",
  "review_count": 2442,
  "categories": [
      {
          "alias": "icecream",
          "title": "Ice Cream & Frozen Yogurt"
      }
  ],
  "rating": 4.5,
  "coordinates": {
      "latitude": 39.7595,
      "longitude": -105.01104
  },
  "transactions": [
      "delivery"
  ],
  "price": "$$",
  "location": {
      "address1": "2620 16th St",
      "address2": "",
      "address3": "",
      "city": "Denver",
      "zip_code": "80211",
      "country": "US",
      "state": "CO",
      "display_address": [
          "2620 16th St",
          "Denver, CO 80211"
      ]
  },
  "phone": "+13034553811",
  "display_phone": "(303) 455-3811",
  "distance": 4391.371861946149
}

export interface State {
  restaurants: any[];
}