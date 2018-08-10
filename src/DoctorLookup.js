const apiKey = process.env.apiKey;


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
    return apiKey;
  }

 

}