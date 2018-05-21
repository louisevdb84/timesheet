import TimesheetEntry from '../models/TimesheetEntry';

var timesheetentries = [];

timesheetentries.push(new TimesheetEntry(1, 1, "18.05.2018 09:00", "18.05.2018 10:00"));
timesheetentries.push(new TimesheetEntry(2, 7, "18.05.2018 09:00", "18.05.2018 10:00")); 
timesheetentries.push(new TimesheetEntry(3, 5, "18.05.2018 12:00", "18.05.2018 10:00"));
timesheetentries.push(new TimesheetEntry(4, 6, "18.05.2018 15:00", "18.05.2018 10:00"));
timesheetentries.push(new TimesheetEntry(5, 1, "18.05.2018 16:00", "18.05.2018 10:00"));

export default timesheetentries;