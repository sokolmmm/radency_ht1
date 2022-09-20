class Popup {
  #popup = document.querySelector('.popup-wrapper');

  #closePopupButton = document.querySelector('#closePopupButton');

  #saveNoteButton = document.querySelector('#saveNoteButton');

  #nameInput = document.querySelector('input[name="name"]');

  #contentInput = document.querySelector('input[name="content"]');

  #categorySelect = document.querySelector('select[name="category"]');

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

  showEditNoteWindow(prevData) {
    this.#showPopup();
    this.#setInitialValues(prevData);
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

  showAddNoteWindow() {
    this.#showPopup();
    this.#resetValues();
  }
}

export default Popup;
