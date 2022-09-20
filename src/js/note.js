import Notes from './notes';

class Note extends Notes {
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

  onNoteClick() {
    this.notesList.addEventListener('click', (event) => {
      if (event.target.id === 'deleteNote') {
        this.#deleteNote(event);
      } else if (event.target.id === 'archiveNoteButton') {
        this.#toggleStatus(event);
      }
    });
  }
}

export default Note;
