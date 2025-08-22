 export type Country = 'India' | 'Bangladesh';

 export type StateMap = {
      [state: string]: string[];
    };
   
 export type CountryStateCityMap = {
      [country in Country]: StateMap;
    };


 export const countryStateCityMap = {
  India: {
    Kerala: ['Trivandrum', 'Kochi', 'Kozhikode'],
    TamilNadu: ['Chennai', 'Madurai', 'Coimbatore']
  },
  Bangladesh: {
    Dhaka: ['Gulshan', 'Banani'],
    Chittagong: ['Agrabad', 'Pahartali']
  }
};
    
    