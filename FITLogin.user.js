// INSTALL TAMPERMONKEY BEFORE USING THIS EXTENSION, OTHERWISE YOU'LL JUST SEE THIS LMAO
// ==UserScript==
// @name         FITLogin
// @namespace    *://*.fit.ba/student/login.aspx*
// @version      0.1
// @description  try to take over the world!
// @author       omznc
// @icon         https://i.imgur.com/5H07Ae0.png
// @match        *://*.fit.ba/student/login.aspx*
// @grant        none
// ==/UserScript==

(function() {
    let errormessage = document.getElementById("lblStatus");
    console.log(`Error: ${errormessage}`);
    if (errormessage != null) {
        localStorage.clear()
        errormessage.innerText = "Krivi podatci, osvjezite stranicu.";
        // redirect to login page after 3s
        setTimeout(function() {
            window.location.href = "https://www.fit.ba/student/login.aspx";
        }
                   , 1000);
    }
    else {
        let username = localStorage.getItem('username');
        let password = localStorage.getItem('password');

        if (username == null || password == null) {
            let username = prompt('Unesite IB, ostavite prazno kako bi ste ignorirali auto-login');
            if (username.length == 0) {
                alert('Auto-login je ignorisan do sljedeceg refresha.');
            }
            else {
                let password = prompt('Unesite sifru');
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            }

        }

        username = localStorage.getItem('username');
        password = localStorage.getItem('password');

        document.getElementById('txtBrojDosijea').value = username;
        document.getElementById('txtLozinka').value = password;

        document.getElementById('btnPrijava').click();
}




})();
