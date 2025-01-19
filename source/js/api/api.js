async function sendData (e) {

  const formData = new FormData (e);
  await fetch('https://echo.htmlacademy.ru', {
    method: 'POST',
    body: formData
  });
}


export {sendData};
