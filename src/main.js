import {Lookup} from './DoctorLookup';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


const doctorLookup = new Lookup();


$(function()
{
  $('#submit-name').click(function ()
  {
    $('#info-list').html("");
    let url = doctorLookup.GetUrl();
    let firstName = $("#first-name").val().trim();
    let lastName = $("#last-name").val().trim();
    let insertIntoUrl = "";
    if (firstName != "")
    {
      insertIntoUrl += `&first_name=${firstName}`;
    }
    if (lastName != "")
    {
      insertIntoUrl += `&last_name=${lastName}`;
    }
    if (firstName != "" && lastName != "")
    {
      insertIntoUrl = `&name=${firstName}_${lastName}`;
    }
   
    $.get(url+insertIntoUrl+`&user_key=${doctorLookup.GetKey()}`, function (values)
    {
      console.log(url);
      let tempDoctors = values.data;
      if (tempDoctors.length != 0)
      {
        for (let i = 0; i < tempDoctors.length; i++)
        {
          let name = tempDoctors[i].profile.title;
          name += " " + tempDoctors[i].profile.first_name;
          name += " "+ tempDoctors[i].profile.last_name;
          $('#info-list').append("<li>" + name + "</li>");
        }
      }
      else
      {
        $('#info-list').append("<li>" + "No Doctors Meet the Criteria" + "</li>");
      }
      console.log(tempDoctors);
    });
  });

  $('#submit-issue').click(function ()
  {
    $('#info-list').html("");
    let tempQuery = $('#issue').val();

    let url = doctorLookup.GetUrl() + `&query=${tempQuery}` + `&user_key=${doctorLookup.GetKey()}`;
    $.get(url , function (values)
    {
      console.log(url);
      let tempSpecialties = values.data;
      console.log(tempSpecialties);

      if (tempSpecialties.length != 0)
      {
        for (let i = 0; i < tempSpecialties.length; i++)
        {
          let name = tempSpecialties[i].profile.title;
          name += " " + tempSpecialties[i].profile.first_name;
          name += " " + tempSpecialties[i].profile.last_name;
          $('#info-list').append("<li>" + name + "</li>");
        }
      }
      else
      {
        $('#info-list').append("<li>" + "No Doctors Meet the Criteria" + "</li>");
      }
    });
  });
});


