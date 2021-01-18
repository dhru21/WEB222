/* Add any JavaScript you need to this file.
 *
 *   Name: Dhruv Bipinbhai Patel
 *   Student#: 142572197
 *   Email: dbpatel31@myseneca.ca
 */
// eslint-disable-next-line no-unused-vars
function yesnoCheck() {
  if (document.getElementById('order-problem').checked) {
    document.getElementById('orderNum').style.visibility = 'visible';
  } else document.getElementById('orderNum').style.visibility = 'hidden';
}

window.onload = function() {
  let form = document.querySelector('#contactUs-form');

  form.onsubmit = function(event) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      event.preventDefault();
      return false;
    }
    return true;
  };
};
