import { Restaurant, apiData } from './types';

const cleanData = (data: apiData) => {
  return data.businesses.map(business => {
    return {
      id: business.id,
      name: business.name,
      image_url: business.image_url,
      url: business.url,
      rating: business.rating,
      location: business.location,
      display_phone: business.display_phone
    }
  })
}

export default cleanData;