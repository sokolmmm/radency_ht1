import Template from './helpers/template';

class Notes {
  notesData;

  notesList = document.querySelector('.notes');

  constructor(initialValue) {
    this.notesData = initialValue;
    this.initNotes();
  }

  #clearNoteList() {
    while (this.notesList.firstChild) {
      this.notesList.removeChild(this.notesList.firstChild);
    }
  }

  #showNotes(condition) {
    this.#clearNoteList();
    let html = '';
    this.notesData.forEach((el) => {
      if (condition) {
        if (el.isActive === condition) {
          html += Template.activeNote(el);
        }
      } else if (!condition) {
        if (el.isActive === condition) {
          html += Template.archivedNote(el);
        }
      }
    });
    this.notesList.insertAdjacentHTML('beforeend', html);
  }

  initNotes() {
    this.showActiveNotes();
  }

  showActiveNotes() {
    this.#showNotes(true);
  }

  showArchivedNotes() {
    this.#showNotes(false);
  }
}

export default Notes;
