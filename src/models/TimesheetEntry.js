class TimesheetEntry {
    constructor(id, taskId, description, start, end) {
        this.id = id;        
        this.taskId = taskId;
        this.description = description;
        this.start = start;
        this.end = end;        
    }
}

export default TimesheetEntry;