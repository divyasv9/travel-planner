const existingAccountMessage = document.getElementById('existing-account-message');
const profileFormContainer = document.getElementById('profile-form-container');

const hasExistingAccount = localStorage.getItem('wanderlust_account') !== null;

if (hasExistingAccount) {
  existingAccountMessage.classList.remove('d-none'); // Show the message
  profileFormContainer.classList.add('d-none'); // Hide the form
}
