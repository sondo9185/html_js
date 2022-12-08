const nameH1Elemnent = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');

const inputModalElement = document.querySelector('#inputModal');

const setUserName = (name) => {
  nameH1Elemnent.textContent = name;
  connectNameElement.textContent = name;
};


const localName = localStorage.getItem('name');
if (localName) setUserName(localName);
//  nameH1Elemnent.textContent = localName;

//  console.log(nameH1Elemnent);
nameH1Elemnent.onclick = () => {
  //  console.log(inputModalElement);
  inputModalElement.showModal();
  //  const inputName = prompt('이름을 입력해주세요.');
  //  if (inputName) {
  //    localStorage.setItem('name', inputName);
  //
  //    setUserName(inputName);
  //  } else {
  //    alert('이름이 입력되지 않았습니다.');
  //  }
};

const modalSubmitBtn = document.querySelector('button.modalSubmit');

modalSubmitBtn.onclick = () => {
  const modalFormElement = document.querySelector('.modalForm');
  const formData = new FormData(modalFormElement);

  for (const [key, value] of formData) {
    localStorage.setItem(key, value);
    if (key === 'userName') setUserName(value);
    //  console.log('${key}: ${value}');
  }
  inputModalElement.close();
};

inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') inputModalElement.close();
  //  console.log(event.target.nodeName);
};
