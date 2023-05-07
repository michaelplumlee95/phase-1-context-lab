/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// createEmployeeRecord Function
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
}

// createEmployeeRecords Function
function createEmployeeRecords(employeesArray) {
  return employeesArray.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  const timeInEvent = {
    type: "TimeIn",
    hour: parseInt(hour),
    date: date,
  };
  this.timeInEvents.push(timeInEvent);
  return this;
}

// createTimeOutEvent Function
function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  const timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(hour),
    date: date,
  };
  this.timeOutEvents.push(timeOutEvent);
  return this;
}

// hoursWorkedOnDate Function
function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(function (event) {
    return event.date === date;
  });

  let timeOut = this.timeOutEvents.find(function (event) {
    return event.date === date;
  });

  return (timeOut.hour - timeIn.hour) / 100;
}

// wagesEarnedOnDate Function
function wagesEarnedOnDate(date) {
  let hours = hoursWorkedOnDate.call(this, date);
  let pay = hours * this.payPerHour;
  return pay;
}

// // allWagesFor Function
// function allWagesFor(employeeRecord) {
//   const datesWorked = employeeRecord.timeInEvents.map((event) => event.date);
//   return datesWorked.reduce(
//     (totalWages, date) => totalWages + wagesEarnedOnDate(employeeRecord, date),
//     0
//   );
// }

// findEmployeeByFirstName Function
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((record) => record.firstName === firstName);
}

// calculatePayroll Function
function calculatePayroll(employeeRecords) {
  let totalPayroll = 0;
  employeeRecords.forEach(function (record) {
    totalPayroll += allWagesFor.call(record);
  });
  return totalPayroll;
}

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
