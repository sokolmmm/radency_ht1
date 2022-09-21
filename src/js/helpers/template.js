import deleteImg from '../../images/delete.png';
import editImg from '../../images/edit.png';
import archiveImg from '../../images/archive.png';

class Template {
  static activeNote(item) {
    return `<div class="note" id="${item.id}">
      <ul class="note__header-list">
        <li class="note__header-item">
          <span>Name</span>
        </li>
        <li class="note__header-item">
          <span>Created</span>
        </li>
        <li class="note__header-item">
          <span>Category</span>
        </li>
        <li class="note__header-item">
          <span>Content</span>
        </li>
        <li class="note__header-item">
          <span>Dates</span>
        </li>
      </ul>
      <ul class="note__list">
        <li class="note__item">
          <span>${item.name}</span>
        </li>
        <li class="note__item">
            <span>${item.created}</span>
        </li> 
        <li class="note__item">
          <span>${item.category}</span>
        </li>
        <li class="note__item">
          <span>${item.content}</span>
        </li>
        <li class="note__item">
          <span>${item.dates}</span>
        </li>
        <li class="note__item">
          <button type="button" id="editNoteButton" class="icon__button">
            <img src=${editImg} alt="Edit task">
          </button>
          <button type="button" id="archiveNoteButton" class="icon__button">
            <img src=${archiveImg} alt="Archive task">
          </button>
          <button type="button" id="deleteNote" class="icon__button">
            <img src=${deleteImg} alt="Delete task">
          </button>
        </li>
        </li>
      </ul>
    </div>`;
  }

  static archivedNote(item) {
    return `<div class="note" id="${item.id}">
      <ul class="note__header-list">
        <li class="note__header-item">
          <span>Name</span>
        </li>
        <li class="note__header-item">
          <span>Created</span>
        </li>
        <li class="note__header-item">
          <span>Category</span>
        </li>
        <li class="note__header-item">
          <span>Content</span>
        </li>
        <li class="note__header-item">
          <span>Dates</span>
        </li>
      </ul>
      <ul class="note__list">
        <li class="note__item">
          <span>${item.name}</span>
        </li>
        <li class="note__item">
            <span>${item.created}</span>
        </li> 
        <li class="note__item">
          <span>${item.category}</span>
        </li>
        <li class="note__item">
          <span>${item.content}</span>
        </li>
        <li class="note__item">
          <span>${item.dates}</span>
        </li>
        <li class="note__item">
          <button type="button" id="archiveNoteButton" class="icon__button">
            <img src=${archiveImg} alt="Archive task">
          </button>
          <button type="button" id="deleteNote" class="icon__button">
            <img src=${deleteImg} alt="Delete task">
          </button>
        </li>
        </li>
      </ul>
    </div>`;
  }
}

export default Template;
