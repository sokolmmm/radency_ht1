import Validator from './utils/validator';

class Popup {
  #popup = document.querySelector('.popup-wrapper');

  #closePopupButton = document.querySelector('#closePopupButton');

  #saveNoteButton = document.querySelector('#saveNoteButton');

  #nameInput = document.querySelector('input[name="name"]');

  #contentInput = document.querySelector('input[name="content"]');

  #categorySelect = document.querySelector('select[name="category"]');

  #isValid = {
    name: false,
    content: false,
  };

  #showPopup() {
    this.#popup.classList.remove('hide');
  }

  #hidePopup() {
    this.#popup.classList.add('hide');
  }

  #resetValues() {
    this.#nameInput.value = '';
    this.#contentInput.value = '';
    this.#categorySelect.value = 'Task';
  }

  #setInitialValues(prevData) {
    const { name, content, category } = prevData;
    this.#nameInput.value = name;
    this.#contentInput.value = content;
    this.#categorySelect.value = category;
  }

  #getValues() {
    return {
      name: this.#nameInput.value,
      content: this.#contentInput.value,
      category: this.#categorySelect.value,
    };
  }

  #saveEditedNote(activeNote, noteIndex, callback) {
    return () => {
      this.#hidePopup();

      const newValues = this.#getValues();

      callback(activeNote, newValues, noteIndex);
    };
  }

  #saveNewNote(callback) {
    return () => {
      this.#hidePopup();
      const newValues = this.#getValues();
      callback(newValues);
    };
  }

  #disableSaveButton() {
    this.#saveNoteButton.disabled = true;
  }

  #enableSaveButton() {
    this.#saveNoteButton.disabled = false;
  }

  showEditNoteWindow(prevData) {
    this.#showPopup();
    this.#setInitialValues(prevData);
  }

  showAddNoteWindow() {
    this.#showPopup();
    this.#resetValues();
    this.#disableSaveButton();
  }

  onCloseButtonClick() {
    this.#closePopupButton.addEventListener(
      'click',
      () => {
        this.#hidePopup();
      },
      { once: true },
    );
  }

  onSaveEditedNoteButtonClick(activeNote, noteIndex, callback) {
    this.#saveNoteButton.addEventListener(
      'click',
      this.#saveEditedNote(activeNote, noteIndex, callback),
      {
        once: true,
      },
    );
  }

  onSaveNewNoteButtonClick(callback) {
    this.#saveNoteButton.addEventListener('click', this.#saveNewNote(callback), {
      once: true,
    });
  }

  #inputValidate(name, secondProp, id, value) {
    this.#isValid[name] = false;

    const result = Validator.inputValidate({ name, value });

    const errorBlock = document.querySelector(id);

    if (!result.isValid) {
      errorBlock.textContent = result.errorMessage;
      this.#disableSaveButton();
    } else {
      errorBlock.textContent = '';
      this.#isValid[name] = true;
      if (this.#isValid[secondProp]) this.#enableSaveButton();
    }
  }

  onNameInputChange() {
    this.#nameInput.addEventListener('focusout', (event) => {
      this.#inputValidate('name', 'content', '#nameInputError', event.target.value);
    });
  }

  onContentInputChange() {
    this.#contentInput.addEventListener('focusout', (event) => {
      this.#inputValidate('content', 'name', '#contentInputError', event.target.value);
    });
  }
}

export default Popup;
