var url = "https://random-data-api.com/api/v2/users";

async function GetData() {

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
/// basic
      document.getElementById("first_name").innerHTML = data.first_name
      document.getElementById("last_name").innerHTML = data.last_name
      document.getElementById("gender").innerHTML = data.gender
      document.getElementById("dob").innerHTML = data.date_of_birth
/// Contact
      document.getElementById("phone_number").innerHTML = data.phone_number
      document.getElementById("email").innerHTML = data.email
      document.getElementById("password").innerHTML = data.password
/// Address
      document.getElementById("street_address").innerHTML = data.address.street_address
      document.getElementById("city").innerHTML = data.address.city
      document.getElementById("state").innerHTML = data.address.state
      document.getElementById("country").innerHTML = data.address.country
      document.getElementById("zip").innerHTML = data.address.zip_code
/// Misc
      document.getElementById("ssn").innerHTML = data.social_insurance_number
      document.getElementById("employment").innerHTML = data.employment.title
      document.getElementById("cc").innerHTML = data.credit_card.cc_number
    });
}

GetData();

