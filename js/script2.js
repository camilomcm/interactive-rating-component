import {ratingSelected} from './script.js'

let message = document.querySelector('.message');
message.textContent = `You selected ${ratingSelected()} out of 5`;