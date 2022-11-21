const modal = document.getElementById('modal')
const closeBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalInner = document.getElementById('modal-inner')


setTimeout(() => {
  modal.style.display = 'inline'
}, 1500)



closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
});


consentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  modalText.innerHTML = `<div class="modal-inner-loading">
  <img src="images/loading.gif" class="loading">
  <p id="uploadText"> Uploading your data to the dark web </p>
  </div>`

  setTimeout(() => {
    document.getElementById('uploadText').innerText = 'Making the sale...'
  }, 1500)
  setTimeout(() => {
    modalInner.innerHTML = `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.jpg" width='100px' height='250px'>
    </div>`
  }, 3000)
});

