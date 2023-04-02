import { ICountry } from './ICountry';

export const getCountries = (): Promise<ICountry[]> => new Promise((resolve, reject) => {
  fetch('https://restcountries.com/v3.1/all?fields=name,capital,region')
    .then((res) => res.json())
    .then((result: any[]) => {
      const countries = result.map((data: any) => {
        const { name, capital, region } = data;
        return { name, capital, region } as ICountry;
      });
      resolve(countries);
    })
    .catch(reject);
})