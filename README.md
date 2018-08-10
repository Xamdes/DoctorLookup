# Project: DoctorLookup

## Author(s)

  * Steven Colburn

## Created 08/10/2018

## Specs

    * A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
    * A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
    * If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
    * If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
    * If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Helpful to Remember

  * Use process.env.API_KEY for API Keys
  * .env File in Root Directory
    * API_KEY=[API_KEY GOES HERE]
    * OTHER_API_KEY=[OTHER API_KEY GOES HERE]

## License

