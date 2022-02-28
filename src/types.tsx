interface Categories {
  alias: string,
  title: string
}

interface Coordinates {
  latitude: number,
  longitude: number
}

interface Location {
  address1: string,
  address2: string,
  address3: string,
  city: string,
  zip_code: string,
  country: string,
  state: string,
  display_address: string[]
}

interface RawRestaurant {
  id: string,
  alias: string,
  name: string,
  image_url: string,
  is_closed: boolean,
  url: string,
  review_count: number,
  categories: Categories[],
  rating: number,
  coordinates: Coordinates,
  transactions: string[],
  price: string,
  location: Location,
  phone: string,
  display_phone: string,
  distance: number
}

interface Center {
  longitude: number;
  latitude: number;
}

interface Region {
  center: Center;
}

export interface apiData {
  businesses: RawRestaurant[];
  region: Region;
  total: number
}

export interface Restaurant {
  id: string,
  name: string,
  image_url: string,
  url: string,
  rating: number,
  location: Location,
  display_phone: string
}


interface IndividualList {
  displayName: string;
  restaurants: Restaurant[];
}

export interface UserLists {
  [key: string]: IndividualList;
}
