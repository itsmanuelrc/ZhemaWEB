/* Author: Manuel


*/

/* EFECTO SEARCH */

var	search = document.getElementById('livesearch'),

    searchurl = document.getElementById('searchurl');

  search.onkeyup = updatesearch;

function updatesearch() {


  // classList(document.body)[ search.value !== '' ? 'add' : 'remove']('searchvalue');

  if (search.value != '') {
    searchurl.href='./#' + search.value;
    searchurl.className = 'active';

  } else {
    searchurl.className = '';

  }
}

