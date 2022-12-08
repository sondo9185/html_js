const nameH1Elemnent = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');

const localName = localStorage.getItem('name');
if (localName) {
  nameH1Elemnent.textContent = localName;
  connectNameElement.textContent = localName;
}
nameH1Elemnent.textContent = localName;


nameH1Elemnent.oncick = () => {
  const inputName = prompt('이름을 입력해주세요.');
  if (inputName) {
    localStorage.setItem('name', inputName);

    nameH1Elemnent.textContent = inputName;
    connectNameElement.textContent = inputName;
  } else {
    alert('이름이 입력되지 않았습니다.');
  }
};

