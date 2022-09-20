import { v4 as uuidv4 } from 'uuid';

import Notes from './notes';
import Popup from './popup';
import DateUtils from './utils/datesUtils';

class Note extends Notes {
  #popup = new Popup();

  addNoteButton = document.querySelector('#addNoteButton');

  #deleteNote(event) {
    const parenNode = event.target.closest('.note');
    const noteIndex = this.notesData.findIndex((el) => el.id === parenNode.id);

    this.notesData.splice(noteIndex, 1);
    parenNode.remove();
  }

  #toggleStatus(event) {
    const parenNode = event.target.closest('.note');
    const noteIndex = this.notesData.findIndex((el) => el.id === parenNode.id);

    this.notesData[noteIndex].isActive = !this.notesData[noteIndex].isActive;
    parenNode.remove();
  }

  #saveEditedNote(prevData, newData, index) {
    const editedNote = {
      id: prevData.id,
      name: newData.name,
      created: prevData.created,
      category: newData.category,
      content: newData.content,
      dates: prevData.dates,
      isActive: true,
    };

    this.notesData[index] = { ...editedNote };
    this.showActiveNotes();
  }

  #editTask(event) {
    const parenNode = event.target.closest('.note');
    const noteIndex = this.notesData.findIndex((el) => el.id === parenNode.id);
    const activeNote = this.notesData[noteIndex];

    this.#popup.showEditNoteWindow(activeNote);
    this.#popup.onCloseButtonClick();
    this.#popup.onSaveEditedNoteButtonClick(activeNote, noteIndex, this.#saveEditedNote.bind(this));
  }

  #saveNewNote(newData) {
    const { name, category, content } = newData;

    const created = DateUtils.getFormattedNowDate();

    const dates = DateUtils.getDate(content);

    const newNote = {
      id: uuidv4(),
      name,
      created,
      category,
      content,
      dates,
      isActive: true,
    };

    this.notesData.push(newNote);

    this.setActiveNotesTab();
  }

  #addNewNote() {
    this.#popup.showAddNoteWindow();
    this.#popup.onCloseButtonClick();
    this.#popup.onSaveNewNoteButtonClick(this.#saveNewNote.bind(this));
  }

  onNoteClick() {
    this.notesList.addEventListener('click', (event) => {
      if (event.target.id === 'deleteNote') {
        this.#deleteNote(event);
      } else if (event.target.id === 'archiveNoteButton') {
        this.#toggleStatus(event);
      } else if (event.target.id === 'editNoteButton') {
        this.#editTask(event);
      }
    });
  }

  onAddButtonClick() {
    this.addNoteButton.addEventListener('click', (event) => this.#addNewNote(event));
  }

  inputsValidator() {
    this.#popup.onNameInputChange();
    this.#popup.onContentInputChange();
  }
}

export default Note;
