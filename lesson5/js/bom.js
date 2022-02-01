const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('ul');
buttonElement.addEventListener('click', () => {
  if (inputElement.value != '') {
      let li = document.createElement('li');
      let deletebutton = document.createElement('button');
      li.textContent = inputElement.value;
      deletebutton.textContent = '❌';
      li.append(deletebutton);
      listElement.append(li);
      inputElement.value = '';
      inputElement.focus();
      deletebutton.onclick = function() {
          listElement.removeChild(li);
          inputElement.focus();
      }
  }
});