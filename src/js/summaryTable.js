/* eslint-disable class-methods-use-this */
class SummaryTable {
  #taskActive = document.querySelector('#taskActiveCount');

  #taskArchived = document.querySelector('#taskArchivedCount');

  #randomThoughtActive = document.querySelector('#randomThoughtActiveCount');

  #randomThoughtArchived = document.querySelector('#randomThoughtArchivedCount');

  #ideaActive = document.querySelector('#ideaActiveCount');

  #ideaArchived = document.querySelector('#ideaArchivedCount');

  #countNotes(data) {
    const taskActive = data.filter((el) => el.category === 'Task' && el.isActive).length;
    const taskArchived = data.filter((el) => el.category === 'Task' && !el.isActive).length;

    const randomActive = data.filter(
      (el) => el.category === 'Random thought' && el.isActive,
    ).length;
    const randomArchived = data.filter(
      (el) => el.category === 'Random thought' && !el.isActive,
    ).length;

    const ideaActive = data.filter((el) => el.category === 'Idea' && el.isActive).length;
    const ideaArchive = data.filter((el) => el.category === 'Idea' && !el.isActive).length;

    return {
      task: {
        active: taskActive,
        archived: taskArchived,
      },
      randomThought: {
        active: randomActive,
        archived: randomArchived,
      },
      idea: {
        active: ideaActive,
        archived: ideaArchive,
      },
    };
  }

  showResult(data) {
    const result = this.#countNotes(data);
    this.#taskActive.textContent = result.task.active;
    this.#taskArchived.textContent = result.task.archived;

    this.#randomThoughtActive.textContent = result.randomThought.active;
    this.#randomThoughtArchived.textContent = result.randomThought.archived;

    this.#ideaActive.textContent = result.idea.active;
    this.#ideaArchived.textContent = result.idea.archived;
  }
}

export default SummaryTable;
