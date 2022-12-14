import Note from './note';
import dataBase from './helpers/dataBase';

function initApp() {
  const note = new Note(dataBase);
  note.initNotes();
  note.onTabClick();
  note.onTableHeaderClick();
  note.inputsValidator();
  note.onNoteClick();
  note.onAddButtonClick();
}

export default initApp;
