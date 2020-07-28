import renderPage from './render';
import { renderTabOne } from './tab1';
import { renderTabTwo } from './tab2';
import { renderTabThree } from './tab3'



const tab1 = document.getElementById('tab-1');
const tab2 = document.getElementById('tab-2');
const tab3 = document.getElementById('tab-3');

window.addEventListener('load', renderPage);
tab1.addEventListener('click', renderTabOne);
tab2.addEventListener('click', renderTabTwo);
tab3.addEventListener('click', renderTabThree);