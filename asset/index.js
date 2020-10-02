const electron = require('electron')
const { app, BrowserWindow } = require('electron')

function alertMake() {
    const text = document.getElementById('msgInput').value;
    const type = document.getElementById('typInput').value;
    const cli = document.getElementById('output');

    cli.innerHTML = '<p>$ ' + text + '</p>'
    if (type == 'alert') {
        alert(text);
    } else {
        var prmpt = confirm(text);
        if (prmpt == true) {
            cli.innerHTML = '<p>$ Question: ' + text + ', Response true</p>'
        } else {
            cli.innerHTML = '<p>$ Question: ' + text + ', Response false</p>'
        }
    }
}