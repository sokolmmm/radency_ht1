import Template from './helpers/template';

class Notes {
  notesData;

  notesList = document.querySelector('.notes');

  #tableHeader = document.querySelector('.table-header');

  #activeNotesTabButton = document.querySelector('#activeNotesTab');

  #archivedNotesTabButton = document.querySelector('#archivedNotesTab');

  #activeTab = this.#activeNotesTabButton;

  constructor(initialValue) {
    this.notesData = initialValue;
  }

  #clearNoteList() {
    while (this.notesList.firstChild) {
      this.notesList.removeChild(this.notesList.firstChild);
    }
  }

  #deleteNotes() {
    if (this.#activeTab === this.#activeNotesTabButton) {
      this.notesData = this.notesData.filter((el) => !el.isActive);
    } else if (this.#activeTab === this.#archivedNotesTabButton) {
      this.notesData = this.notesData.filter((el) => el.isActive);
    }
    this.#clearNoteList();
  }

  #mapNotes(condition) {
    this.notesData = this.notesData.map((el) => {
      if (el.isActive === condition) {
        return { ...el, isActive: !condition };
      }
      return el;
    });
  }

  #allNotesStatusToggle() {
    if (this.#activeTab === this.#activeNotesTabButton) {
      this.#mapNotes(true);
    } else if (this.#activeTab === this.#archivedNotesTabButton) {
      this.#mapNotes(false);
    }
    this.#clearNoteList();
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

  #tabToggle(firstTab, secondTab, showNotesFunction) {
    firstTab.addEventListener('click', () => {
      if (!firstTab.className.includes('tab-button-active')) {
        firstTab.classList.add('tab-button-active');
        secondTab.classList.remove('tab-button-active');
        this.#activeTab = firstTab;
        showNotesFunction();
      }
    });
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

  onTabClick() {
    this.#tabToggle(
      this.#activeNotesTabButton,
      this.#archivedNotesTabButton,
      this.showActiveNotes.bind(this),
    );
    this.#tabToggle(
      this.#archivedNotesTabButton,
      this.#activeNotesTabButton,
      this.showArchivedNotes.bind(this),
    );
  }

  setActiveNotesTab() {
    if (this.#activeTab === this.#archivedNotesTabButton) {
      this.#archivedNotesTabButton.classList.remove('tab-button-active');
      this.#activeNotesTabButton.classList.add('tab-button-active');
      this.#activeTab = this.#activeNotesTabButton;
    }
    this.showActiveNotes();
  }

  onTableHeaderClick() {
    this.#tableHeader.addEventListener('click', (event) => {
      if (event.target.id === 'deleteAllNotes') {
        this.#deleteNotes();
      } else if (event.target.id === 'archiveAllNotes') {
        this.#allNotesStatusToggle();
      }
    });
  }
}

export default Notes;
