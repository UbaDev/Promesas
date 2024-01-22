fetch("https://www.youtube.com")
  .then((resp) => resp.text())
  .then((html) => {
    document.open();
    document.write(html);
    document.close();
  });
