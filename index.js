const modal = document.getElementById('modal')
const closeBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')


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
  const uploadText = document.getElementById('uploadText')
  setTimeout(() => {
    uploadText.innerHTML = 'Making the sale...'
  }, 1500)
});

