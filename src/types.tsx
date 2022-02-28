interface Categories {
  alias: string,
  title: string
}

interface Coordinates {
  latitude: number,
  longitude: number
}

export interface Location {
  address1: string,
  address2: string,
  address3: string,
  city: string,
  zip_code: string,
  country: string,
  state: string,
  display_address: string[]
}

export interface Restaurant {
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

export interface State {
  restaurants: Restaurant[];
  userLists: UserLists;
  error: string;
}

export interface IndividualList {
  displayName: string;
  restaurants: Restaurant[];
}

export interface UserLists {
  [key: string]: IndividualList;
}

interface Center {
  longitude: number;
  latitude: number;
}

interface Region {
  center: Center;
}

export interface apiData {
  businesses: Restaurant[];
  region: Region;
  total: number
}


