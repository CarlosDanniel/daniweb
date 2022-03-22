function frente() {
	document.querySelector('.fac').classList.add('mostrar');
}
function frente_() {
	document.querySelector('.fac').classList.add('mostrar1');
}
function atras() {
	document.querySelector('.fac').classList.remove('mostrar');

}
function atras_() {
	document.querySelector('.fac').classList.remove('mostrar1');
}
function menulat(){
	let menuLat = document.getElementById('menu_lat');
	let section = document.getElementById('_add');

	if (menuLat.classList.contains('mostrar1') == true) {
		menuLat.classList.remove('mostrar1');
		section.classList.remove('add');

	}else {
		menuLat.classList.add('mostrar1');
		section.classList.add('add');
	}
}