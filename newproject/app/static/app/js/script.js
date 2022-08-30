console.log("YES RUN THIS SIDE");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const contactNumber = document.getElementById("contact");
const message = document.getElementById("message");
const selectCourse = document.getElementById("course");
const submitBtn = document.getElementById("submit");

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

// check name:
const validName = () => {
  let flag;
  const name = (fullName.value + "").toLowerCase();
  const check1 = name === "";
  const check2 = /\d/.test(name);
  const check3 = name.length >= 3;
  if (!check1 && !check2 && check3) {
    fullName.style.border = "2px solid green";
    flag = true;
  } else {
    fullName.style.border = "2px solid red";
    flag = false;
  }
  return flag;
};

// check contact Number:
const validContact = () => {
  const contactNum = contactNumber.value + "";
  const regPhone = /^\d{10}$/;
  if (
    contactNum == "" ||
    !regPhone.test(contactNum) ||
    !contactNum.startsWith(9)
  ) {
    contactNumber.style.border = "2px solid red";
    flag = false;
  } else {
    contactNumber.style.border = "2px solid green";
    flag = true;
  }
  return flag;
};

const validEmail = () => {
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

submitBtn.addEventListener("click", (e) => {
  let check1 = validName();
  let check2 = validEmail();
  let check3 = validContact();
  let check4 = validCourse();
  if (check1 && check2 && check3 && check4) {
    console.log("go further");
  } else {
    // console.log("NOT GO");
    e.preventDefault();
  }
});
