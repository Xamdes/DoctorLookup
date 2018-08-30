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

    $.get(url + insertIntoUrl + `&user_key=${doctorLookup.GetKey()}`, function (values, status,xhr)
    {
      if (xhr.status === 200)
      {
        let tempDoctors = values.data;
        OutputList(tempDoctors);
      }
      else
      {
        $('#info-list').html("An error has occurred code:" + xhr.status);
      }
    });
  });

  $('#submit-issue').click(function ()
  {
    $('#info-list').html("");
    let tempQuery = $('#issue').val();

    let url = doctorLookup.GetUrl() + `&query=${tempQuery}` + `&user_key=${doctorLookup.GetKey()}`;
    $.get(url, function (values, status, xhr)
    {
      if (xhr.status === 200)
      {
        let tempSpecialties = values.data;
        OutputList(tempSpecialties);
      }
      else
      {
        $('#info-list').html("An error has occurred code:" + xhr.status);
      }

    });
  });
});


function OutputList(tempSpecialties)
{
  //console.log(tempSpecialties);
  if (tempSpecialties.length != 0)
  {
    for (let i = 0; i < tempSpecialties.length; i++)
    {
      let name = tempSpecialties[i].profile.title;
      let practices = tempSpecialties[i].practices;

      name += " " + tempSpecialties[i].profile.first_name;
      name += " " + tempSpecialties[i].profile.last_name;

      let index = 0;
      for (let j = 0; j < practices.length; j++)
      {
        if (practices[j].within_search_area)
        {
          index = j;
        }
      }
      let practice = practices[index];
      let visitAddress = practice.visit_address;
      let address = visitAddress.street;
      if (typeof visitAddress.street2 != 'undefined')
      {
        address += ", " + visitAddress.street2
      }

      address += ", " + visitAddress.city + ", " + visitAddress.state + ", " + visitAddress.zip;

      index = 0;
      for (let j = 0; j < practice.phones.length; j++)
      {
        if (practice.phones[j].type === 'landline')
        {
          index = j;
        }
      }

      let phone = practice.phones[index].number;
      let website = practice.website;
      if (typeof website === 'undefined')
      {
        website = "Not Listed";
      }
      let newPatients = "No";
      if (practice.accepts_new_patients)
      {
        newPatients = "Yes";
      }

      let doctorInfo = "<li>" + name +
        "<ul>" +
        "<li>" +
        address +
        "</li>" +
        "<li>" +
        phone +
        "</li>" +
        "<li>" +
        website +
        "</li>" +
        "<li>" +
        newPatients +
        "</li>" +
        "</ul>" +
        "</li>";
      $('#info-list').append(doctorInfo);
    }
  }
  else
  {
    $('#info-list').append("<li>" + "No Doctors Meet the Criteria" + "</li>");
  }
}
