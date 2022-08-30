
import {makeImage}  from './flower-card.js';
import {getServices} from './services.js';


makeImage();
getServices();


window.addEventListener('scroll',(e)=>{
    
    const header = document.querySelector('header');
    header.classList.add('bg-light')
    

})
