export const setupPhoneMask = () => {
  const phoneInput = document.querySelector('.form__field--phone');

  const getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  };


  const onPhonePaste = function (e) {
    const input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    const pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  const onPhoneInput = function (e) {
    const input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    const selectionStart = input.selectionStart;
    let formattedInputValue = '';

    if (!inputNumbersValue) {
      input.value = '';
      return ;
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8'].indexOf(inputNumbersValue[0]) > -1) {

      const firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';
      formattedInputValue = input.value = `${firstSymbols } `;
      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${ inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${ inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${ inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${ inputNumbersValue.substring(9, 11)}`;
      }
    } else {
      formattedInputValue = `+${ inputNumbersValue.substring(0, 16)}`;
    }
    input.value = formattedInputValue;
  };
  const onPhoneKeyDown = function (e) {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode === 8 && inputValue.length === 1) {
      e.target.value = '';
    }
  };

  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.addEventListener('input', onPhoneInput);
  phoneInput.addEventListener('paste', onPhonePaste);

};
