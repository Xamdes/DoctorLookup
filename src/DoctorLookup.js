const API_KEY = process.env.API_KEY;


/*eslint-disable */
export class Lookup
{
/*eslint-enable */
  constructor()
  {
    this.url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=45.512794,-122.679565,100&limit=100';
  }

  GetUrl()
  {
    return this.url;
  }

  GetKey()
  {
    return API_KEY;
  }
}
