import docReady from '../shared/js/docReady';


docReady( onPageReady );


export default {
	onPageReady,
	// anything else you want to export
};


function onPageReady() {
	// do stuffs...
	console.log('Welcome to home page');
}