function validateForm() {
  console.log("Entered")
    var firstName = document.forms["registrationForm"]["firstName"].value;
    var lastName = document.forms["registrationForm"]["lastName"].value;
    var email = document.forms["registrationForm"]["email"].value;
    var phone = document.forms["registrationForm"]["phone"].value;
    var dob = document.forms["registrationForm"]["dob"].value;
    var gender = document.forms["registrationForm"]["gender"].value;
    var address1 = document.forms["registrationForm"]["address1"].value;
    var city = document.forms["registrationForm"]["city"].value;
    var state = document.forms["registrationForm"]["state"].value;
    var zip = document.forms["registrationForm"]["zip"].value;
    var country = document.forms["registrationForm"]["country"].value;
    var jsonData = {
      "fname": firstName,
      "lname": lastName,
      "mail": email,
      "pno": phone,
      "dob": dob,
      "gend": gender,
      "address1": address1,
      "address2": address2,
      "city": city,
      "state": state,
      "zip": zip,
      "country": country
    };

    if (firstName == "") {
      alert("First name must be filled out");
      return false;
    }
    
    if (lastName == "") {
      alert("Last name must be filled out");
      return false;
    }
    
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    
    if (phone == "") {
      alert("Phone number must be filled out");
      return false;
    }

    if (dob == "") {
      alert("Date of birth must be filled out");
      return false;
    }
    
    if (gender == "") {
      alert("Gender must be selected");
      return false;
    }
    
    if (address1 == "") {
      alert("Address 1 must be filled out");
      return false;
    }
    
    if (city == "") {
      alert("City must be filled out");
      return false;
    }
    
    if (state == "") {
      alert("State must be filled out");
      return false;
    }
    
    if (zip == "") {
      alert("Zip code must be filled out");
      return false;
    }
    
    if (country == "") {
      alert("Country must be filled out");
      return false;
    }

    fetch("http://127.0.0.1:5000/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(jsonData)
})
.then(response => {
  if (response.ok) {
    console.log("JSON file sent successfully.");
  } else {
    console.error("Error sending JSON file.");
  }
})
.catch(error => {
  console.error("Error sending JSON file:", error);
});
  }
  