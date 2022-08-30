const fullName = document.getElementById("name");
const email = document.getElementById("email");
const contactNumber = document.getElementById("contact");
const selectCourse = document.getElementById("course");
const location1 = document.getElementById("location");
// const address = document.getElementById("location");
const enrollBtn = document.getElementById("enroll");

// check location:
const validLocation = () => {
  let flag;
  let address = (location1.value + "").toLowerCase();
  if (address.length < 4) {
    location1.style.border = "2px solid red";
    flag = false;
  } else {
    location1.style.border = "2px solid green";
    flag = true;
  }
  return flag;
};

// check name:
const validName = () => {
  let flag;
  const name = (fullName.value + "").toLowerCase();
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const check0 = format.test(name);
  const check1 = name === "";
  const check2 = /\d/.test(name);
  const check3 = name.length >= 3;
  if (!check0 && !check1 && !check2 && check3) {
    fullName.style.border = "2px solid green";
    flag = true;
  } else {
    fullName.style.border = "2px solid red";
    flag = false;
  }
  return flag;
};

const validEmail = () => {
  let flag;
  const userEmail = (email.value + "").toLowerCase();
  const regx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let check = regx.test(userEmail);
  if (check) {
    email.style.border = "2px solid green";
    flag = true;
  } else {
    email.style.border = "2px solid red";
    flag = false;
  }
  return flag;
};

// check contact Number:
const validContact = () => {
  let flag;
  const contactNum = contactNumber.value + "";
  const regPhone = /^\d{10}$/;
  let check1 = contactNum.startsWith("0");
  const regPhone2 = /^\d{9}$/;

  if (
    contactNum == "" ||
    !regPhone.test(contactNum) ||
    (!contactNum.startsWith(9) && regPhone2.test(check1))
  ) {
    contactNumber.style.border = "2px solid red";
    flag = false;
  } else {
    contactNumber.style.border = "2px solid green";
    flag = true;
  }
  return flag;
};

const validCourse = () => {
  let flag;
  if (selectCourse.value == "") {
    selectCourse.style.border = "2px solid red";
    flag = false;
  } else {
    selectCourse.style.border = "2px solid green";
    flag = true;
  }
  return flag;
};

enrollBtn.addEventListener("click", (e) => {
  let name = validName();
  let email = validEmail();
  let contact = validContact();
  let course = validCourse();
  let location = validLocation();

  console.log(name == false);
  let collection = [];
  if (name == false) {
    collection.push("name");
  }
  if (email == false) {
    collection.push("email");
  }
  if (contact == false) {
    collection.push("contact");
  }
  if (location == false) {
    collection.push("location");
  }
  if (course == false) {
    collection.push("course");
  }
  let incorrectData = collection.join(", ");
  if (name && email && contact && course && location) {
    // alert("You Form has been submitted successfully");
    console.log("go further");
  } else {
    alert(`Invalid ${incorrectData}.`);
    e.preventDefault();
  }
});
