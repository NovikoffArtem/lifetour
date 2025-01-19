import { toggleSubmitButton } from '../utils/utils';
import { clearFields } from '../utils/utils';
import { form } from '../constants/constans';
import { sendData } from '../api/api';

export const submitForm = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    toggleSubmitButton(true);
    sendData(form)
      .then(clearFields)
      .finally(setTimeout(toggleSubmitButton, 500));
  });
};
