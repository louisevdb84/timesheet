class Task {
    constructor(id, userId, projectId, categoryId, name, repeat, isActive) {
        this.id = id;
        this.userId = userId;
        this.projectId = projectId;
        this.categoryId = categoryId;
        this.name = name;
        this.repeat = repeat;
        this.isActive = isActive;
    }
}

export default Task;