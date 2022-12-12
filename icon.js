

function closePopup2() {
	const popup = document.querySelector('#popup2');
  popup.classList.add('hide2');
}


function showPopup2(hasFilter2) {
	const popup = document.querySelector('#popup2');

  if (hasFilter2) {
  	popup.classList.add('has-filter2');
  } else {
  	popup.classList.remove('has-filter2');
  }

  popup.classList.remove('hide2');
}
