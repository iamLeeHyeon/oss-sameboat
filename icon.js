 function showPopup1(hasFilter1) {
	const popup = document.querySelector('#popup1');

  if (hasFilter1) {
  	popup.classList.add('has-filter1');
  } else {
  	popup.classList.remove('has-filter1');
  }

  popup.classList.remove('hide1');
}

function closePopup() {
	const popup = document.querySelector('#popup1');
  popup.classList.add('hide1');
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

function closePopup() {
	const popup = document.querySelector('#popup2');
  popup.classList.add('hide2');
}
