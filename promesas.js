
fetch("https://wikipedia.org")   
    .then(resp => resp.text())
    .then(html => {
        document.open();
        document.write(html);
        document.close();
    })
