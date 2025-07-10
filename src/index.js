import eva from './Modules/eva.js';
import home from './Modules/Home.js';


// Run when page loads
document.addEventListener('DOMContentLoaded', () => {
    eva();     // sets up button listeners
    home();    // load default page (like Home)
});
