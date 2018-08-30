# Project: DoctorLookup

  * Created 08/10/2018
  * Updated 08/30/2018

## Author(s)

  * Steven Colburn

## Instructions

  * Get Api from https://developer.betterdoctor.com/
  * .env File in Root Directory
    * API_KEY=[API_KEY GOES HERE]
  * git clone https://github.com/Xamdes/DoctorLookup.git
  * cd into DoctorLookup
  * run command
    * npm install; open http://localhost:8080/; npm start
    * reload http://localhost:8080/ in browser


## Specs

    * A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
    * A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
    * If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
    * If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
    * If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## MIT License

  Copyright (c) 2018 Steven Colburn

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
