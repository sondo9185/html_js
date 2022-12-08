const nameH1Elemnent = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');
console.log(nameH1Elemnent);
const inputModalElement = document.querySelector('#inputModal');
const studentNoElement = document.querySelector('label.studentNo');
const emailElement = document.querySelector('label.email');

const setUserName = (name) => {
  nameH1Elemnent.textContent = name;
  connectNameElement.textContent = name;
};
const setstudentNo = (number) => {
  studentNoElement.textContent = number;
};
const setemail = (email) => {
  emailElement.textContent = email;
};

const localName = localStorage.getItem('name');
if (localName) setUserName(localName);

const localnumber = localStorage.getItem('number');
if (localnumber) setstudentNo(localnumber);

const localemail = localStorage.getItem('number');
if (localemail) setstudentNo(localemail);

console.log(inputModalElement);
nameH1Elemnent.onclick = () => {
  inputModalElement.showModal();
};

const modalSubmitBtn = document.querySelector('button.modalSubmit');

modalSubmitBtn.onclick = () => {
  const modalFormElement = document.querySelector('.modalForm');
  const formData = new FormData(modalFormElement);

  for (const [key, value] of formData) {
    localStorage.setItem(key, value);
    if (key==='userName') setUserName(value);
    else if (key==='studentNo') setstudentNo(value);
    else if (key==='email') setemail(value);
  }

  inputModalElement.close();
};

inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') inputModalElement.close();
};
