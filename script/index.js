/**********************************************************************

This JavaScript code is linked to the index.html page

**********************************************************************/

// Importing data and functions
import { FormManager } from "./classes/FormManager.js";


function initPage() {

    const formElement = document.getElementById("calculator__form");
    const formManager = new FormManager(formElement);

}

initPage();