import './style.css'
import 'animate.css';


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();




const selectedRadio = document.querySelector(
    '.mainSelectors__new--items--input:checked'
) as HTMLInputElement;

if (selectedRadio) {
    console.log("Selected value:", selectedRadio.value); // "all", "land", etc.
    console.log("Selected ID:", selectedRadio.id);      // "mainSelectors__new--all", etc.
}
