import { Restaurant, apiData } from './types';

const cleanData = (data: apiData) => {
  data.businesses.map(business => {
    const newBusiness = {
      id: business.id,
      name: business.name,
      image_url: business.image_url,
      url: business.url,
      rating: business.rating,
      location: business.location
    }

    if (typeof newBusiness.id !== 'string') {
      newBusiness.id = newBusiness.id.toString();
    }

    if (typeof newBusiness.name !== 'string') {
      newBusiness.name = newBusiness.name.toString();
    }

    if (typeof newBusiness.image_url !== 'string') {
      newBusiness.image_url = newBusiness.image_url.toString();
    }

    if (typeof newBusiness.url !== 'string') {
      newBusiness.url = newBusiness.url.toString();
    }

    if (typeof newBusiness.rating !== 'number') {
      newBusiness.rating = parseInt(newBusiness.rating)
    }

    //check location

    if (typeof newBusiness.display_phone !== 'string') {
      
    }
  })
}

// id: string,
// name: string,
// image_url: string,
// url: string,
// rating: number,
// location: Location,
// display_phone: string

export default cleanData;