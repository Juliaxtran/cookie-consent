const modal = document.getElementById('modal')
const closeBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalInner = document.getElementById('modal-inner')
const declineBtn = document.getElementById('decline-btn')
const modalBtns = document.querySelector('.modal-choice-btns');

setTimeout(() => {
  modal.style.display = 'inline'
}, 1500)



closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
});



declineBtn.addEventListener('mouseenter', function(){
  // Add a class of reverse
  modalBtns.classList.toggle('reverse');
})


consentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);

  const name = consentFormData.get('fullName');

  modalText.innerHTML = `<div class="modal-inner-loading">
  <img src="images/loading.gif" class="loading">
  <p id="uploadText"> Uploading your data to the dark web </p>
  </div>`

  setTimeout(() => {
    document.getElementById('uploadText').innerText = 'Making the sale...'
  }, 1500)
  setTimeout(() => {
    modalInner.innerHTML = `<h2>
    <span class="modal-display-name">${name}</span>.Thanks you sucker! </h2> </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.jpg" width='100px' height='200px'>
    </div>`
    closeBtn.disabled = false;
  }, 3000)

});

