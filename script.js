// Alphabetical months for conversion
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Alphabetical days for conversion
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Periods of each day sorted respectively
const periods = {
  monday: {
    0: 'homeroom_1',
    1: 'รักการอ่าน_1',
    2: 'ท21101_1',
    3: 'break_1',
    4: 'ส22101_1',
    5: 'lunch_1',
    6: 'ว22201_1',
    7: 'ค22101_1',
    8: 'ศ22104_1',
    9: 'ชุมนุม_1',
  },
  tuesday: {
    0: 'homeroom_1',
    1: 'Scout_1',
    2: 'Language_1',
    3: 'break_1',
    4: 'ว22201_1',
    5: 'lunch_1',
    6: 'ค22101_2',
    7: 'ว22104_2',
    8: 'ท22101_1',
    9: 'ศ22103_1',
  },
  wednesday: {
    0: 'homeroom_1',
    1: 'อ20233_1',
    2: 'ค22101_3',
    3: 'break_1',
    4: 'ส22101_1',
    5: 'lunch_1',
    6: 'แนะแนว_1',
    7: 'ส22105_1',
    8: 'อ22102_3',
    9: 'ว22101_3',
    10: 'ว22101_2',
  },
  thursday: {
    0: 'homeroom_1',
    1: 'ประชุมระดับ_1',
    2: 'อ22102_3',
    3: 'break_1',
    4: 'พ22101_3',
    5: 'lunch_1',
    6: 'ค22101_3',
    7: 'อ20223_2',
    8: 'ง22101_1',
    9: 'ง22101_1',
  },
  friday: {
    0: 'homeroom_1',
    1: 'พ22102_1',
    2: 'ท22101_1',
    3: 'break_1',
    4: 'อ22102_2',
    5: 'lunch_1',
    6: 'ว22101_3',
    7: 'ค22101_2',
    8: 'อ20223_3',
    9: 'ส22103_1',
  },
};

// Ending times for period (or) starting times for pervious period
const times = {
  0: hmToMs(7, 25), // Period A (homeroom)
  1: hmToMs(8, 15), // 1st Period
  2: hmToMs(9, 5), // 2nd Period
  3: hmToMs(10, 10), // Break
  4: hmToMs(11, 0), // 3rd Period
  5: hmToMs(11, 50), // Lunch
  6: hmToMs(12, 40), // 4th Period
  7: hmToMs(13, 30), // 5th Period
  8: hmToMs(14, 20), // 6th Period
  9: hmToMs(15, 10), // 7th Period
  10: hmToMs(16, 0), // 8th Period (max for every day)
};

// Period names
const periodCodesNames = {
  homeroom: 'A',
  รักการอ่าน: 'รักการอ่าน',
  lunch: 'Lunch',
  ประชุมระดับ: 'ประชุมระดับ',

  แนะแนว: 'แนะแนว',
  break: 'Break',

  // 1st Semester
  ท22101: 'ภาษาไทยพื้นฐาน 3',
  ค22101: 'คณิตศาสตร์พื้นฐาน 3',
  ว22101: 'วิทยาศาสตร์พื้นฐาน 4',
  ว22104: 'การออกแบบเทคโนโลยี 2',
  ส22101: 'สังคมศึกษา 3',
  ส22103: 'ประวัติศาสตร์ 3',
  ส22105: 'ศาสนา ศีลธรรม จริยธรรม 3',
  พ22101: 'สุขศึกษา 2',
  พ22102: 'พลศึกษา 2',
  ศ22103: 'ดนตรีสากล 2',
  ศ22104: 'นาฏศิลป์ 2',
  ง22101: 'การงานอาชีพ 2',
  อ22102: 'ภาษาอังกฤษพื้นฐาน 2',
  ว22201: 'วิทยาศาสตร์เพิ่มเติม 4',
  อ20223: 'ภาษาอังกฤษอ่าน-เขียน 3',
  อ20233: 'การเขียนภาษาอังกฤษ 3',
  จ20201: 'ภาษาจีนเพื่อความเพลิดเพลิน 2',
  ญ20201: 'ภาษาญี่ปุ่นเพื่อความเพลิดเพลิน 2',

  // 2nd Semester
  ท21102: 'ภาษาไทยพื้นฐาน 4',
  ค22102: 'คณิตศาสตร์พื้นฐาน 4',
  ว22102: 'วิทยาศาสตร์พื้นฐาน 4',
  ว22103: 'วิทยาการคำนวณ 2',
  ส22102: 'สังคมศึกษา 4',
  ส22104: 'ประวัติศาสตร์ 4',
  ส22106: 'ศาสนา ศีลธรรม จริยธรรม 4',
  ศ22101: 'ทัศนศิลป์ 2',
  ศ22102: 'ดนตรีไทย 2',
  ว22202: 'วิทยาศาสตร์เพิ่มเติม 4',
  พ22201: 'สุขศึกษา 3',
  พ20202: 'กรีฑา',
  อ22202: 'ภาษาอังกฤษขั้นสูง 2',
  อ20224: 'ภาษาอังกฤษอ่าน-เขียน 4',
  อ20234: 'การเขียนภาษาอังกฤษ 4',
  จ20202: 'ภาษาจีนเพื่อความเพลิดเพลิน 2',
  ญ20202: 'ภาษาญี่ปุ่นเพื่อความเพลิดเพลิน 2',
};

// Period names (simplified version)
const periodCodesNamesSimplified = {
  homeroom: 'A',
  รักการอ่าน: 'รักการอ่าน',
  lunch: 'Lunch',
  ประชุมระดับ: 'ประชุมระดับ',

  แนะแนว: 'แนะแนว',
  break: 'Break',

  // 1st Semester
  ท22101: 'Thai',
  ค22101: 'Maths',
  ว22101: 'Science',
  ว22104: 'Computer',
  ส22101: 'Social Studies',
  ส22103: 'History',
  ส22105: 'Buddhism',
  พ22101: 'Health Education (H.E.)',
  พ22102: 'Physical Education (P.E.)',
  ศ22103: 'International Music',
  ศ22104: 'Dance',
  ง22101: 'Career',
  อ22102: 'English',
  ว22201: 'Additional Science',
  อ20223: 'English Reading-Writing',
  อ20233: 'English Writing',
  จ20201: 'Chinese',
  ญ20201: 'Japanese',

  // 2nd Semester
  ท21102: 'Thai',
  ค22102: 'Maths',
  ว22102: 'Science',
  ว22103: 'วิทยาการคำนวณ',
  ส22102: 'Social Studies',
  ส22104: 'History',
  ส22106: 'Buddhism',
  ศ22101: 'Art',
  ศ22102: 'Thai Music',
  ว22202: 'Additional Science',
  พ22201: 'Health Education (H.E.)',
  พ20202: 'Athletics',
  อ22202: 'Advanced English',
  อ20224: 'English Reading-Writing',
  อ20234: 'English Writing',
  จ20202: 'Chinese',
  ญ20202: 'Japanese',
};

// List of teachers who teach for each subject
const periodTeachers = {
  homeroom: '-',
  รักการอ่าน_1: '-',
  lunch_1: '-',
  ประชุมระดับ_1: '-',

  แนะแนว_1: 'Unknown',
  break_1: '-',

  // 1st Semester
  ท22101_1: 'ครูนวีณา',
  ค22101_1: 'ครูณัฐภัทร',
  ค22101_2: 'T. Jay',
  ค22101_3: 'T. Jay, ครูณัฐภัทร',
  ว22101_1: 'ครูปวีณา',
  ว22101_2: 'T. Girlie',
  ว22101_3: 'T. Girlie, ครูปวีณา',
  ว22104_2: 'T. Tommy',
  ส22101_1: 'ครูรมณีย์',
  ส22103_1: 'ครูรมณีย์',
  ส22105_1: 'พระอาจารย์',
  พ22101_3: 'T. Leonor, ครูกิติยา',
  พ22102_1: 'ครูมะยิ้',
  ศ22103_1: 'ครูธัญรัตน์',
  ศ22104_1: 'ครูอรทัย',
  ง22101_1: 'ครูทยิตา',
  อ22102_2: 'T. Inspire',
  อ22102_3: 'T. Inspire, ครูกฤตพร',
  ว22201_1: 'ครูปวีณา',
  อ20223_3: 'T. Mazha, ครูอารียา',
  อ20233_3: 'อ.ทวี, ครูกฤตพร',
  จ20201_1: 'ภาษาจีนเพื่อความเพลิดเพลิน 2',
  ญ20201_1: 'ครูวาวุฒิ, อ.นาราวดี',

  // 2nd Semester
  ท21102_1: 'ครูนวีณา',
  ค22102: 'คณิตศาสตร์พื้นฐาน 4',
  ว22102: 'วิทยาศาสตร์พื้นฐาน 4',
  ว22103: 'วิทยาการคำนวณ 2',
  ส22102: 'สังคมศึกษา 4',
  ส22104: 'ประวัติศาสตร์ 4',
  ส22106: 'ศาสนา ศีลธรรม จริยธรรม 4',
  ศ22101: 'ทัศนศิลป์ 2',
  ศ22102: 'ดนตรีไทย 2',
  ว22202: 'วิทยาศาสตร์เพิ่มเติม 4',
  พ22201: 'สุขศึกษา 3',
  พ20202: 'กรีฑา',
  อ22202: 'ภาษาอังกฤษขั้นสูง 2',
  อ20224: 'ภาษาอังกฤษอ่าน-เขียน 4',
  อ20234: 'การเขียนภาษาอังกฤษ 4',
  จ20202: 'ภาษาจีนเพื่อความเพลิดเพลิน 2',
  ญ20202: 'ภาษาญี่ปุ่นเพื่อความเพลิดเพลิน 2',
};

// Other elements
const timeE = document.getElementById('time'); // Element for displaying time
const noticeE = document.getElementById('notice'); // Element for displaying certain things
const contentsE = document.getElementById('contents'); // Whole webpage (excluding notice and progress bar)

// Elements for displaying current subject's information
const startTimeE = document.getElementById('startTime'); // Element for displaying starting time for current subject
const endTimeE = document.getElementById('endTime'); // Element for displaying ending time for current subject
const periodNameE = document.getElementById('periodName'); // Element for displaying current subject's name
const periodCodeE = document.getElementById('periodCode'); // Element for displaying current subject's code
const teachersE = document.getElementById('teachers'); // Element for displaying current subject's teachers
const timeElapsedE = document.getElementById('timeElapsed'); // Element for displaying time elapsed since current subject starts

// Elements for displaying next subject's information
const startTimeE2 = document.getElementById('startTime2'); // Element for displaying starting time for next subject
const endTimeE2 = document.getElementById('endTime2'); // Element for displaying ending time for next subject
const periodNameE2 = document.getElementById('periodName2'); // Element for displaying next subject's name
const periodCodeE2 = document.getElementById('periodCode2'); // Element for displaying next subject's code
const teachersE2 = document.getElementById('teachers2'); // Element for displaying next subject's teachers
const timeTillE = document.getElementById('timeTill2'); // Element for displaying time till the next subject starts
const progressInsideE = document.getElementById('progressInside'); // Progress bar (the part inside)

const useSimplifiedPeriodNames = true; // Use easy-to-understand subject names than original

setInterval(update, 1000); // Update data every second

// Function to update data and time
function update() {
  const d = new Date(); // Data about current day

  let day = d.getDay(); // Get days in numbers. 0 = Sunday, 1 = Monday ... 6 = Saturday
  let dayOfWeek = days[day]; // Transform numerical days to alphabetical. 0 -> Sunday
  let dayOfMonth = d.getDate(); // Get day of month (1 - 28/29/30/31)
  let month = months[d.getMonth()]; // Transform numerical months (0-11 // 0 = January ... 11 = December) to alphabetical. 1 -> February
  let year = d.getFullYear(); // Get current year
  let time = d.toLocaleTimeString('en-GB'); // Get current time

  let msSinceDayFull = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  let ms = d.getTime() - msSinceDayFull.getTime(); // Gets milliseconds counting since midnight

  let referenceTimes = times; // Selected subject times data

  // Checks if current day is weekends (0 = Sunday, 6 = Saturday)
  if (day === 0 || day === 6) {
    contentsE.hidden = true;
    noticeE.textContent = `No school today, it's ${days[day]}!`;

    return;
  }

  // Checks if school starts yet
  else if (ms < referenceTimes[0]) {
    contentsE.hidden = true;
    noticeE.textContent = `School starts at ${
      msToHms(referenceTimes[0]).fullHrsMins
    }! About in ${msToHms(referenceTimes[0] - ms).fullChars}`;

    return;
  }

  // Checks if school is already over
  else if (
    ms > referenceTimes[Object.entries(periods[dayOfWeek.toLowerCase()]).length]
  ) {
    contentsE.hidden = true;
    noticeE.textContent = `School is over, time to go home!`;

    return;
  }

  timeE.textContent = `${dayOfWeek}, ${month} ${ordinal_suffix_of(
    dayOfMonth
  )} ${year}, ${time}`;

  // Period number
  let period = 0;

  for (let i = 0; i < Object.keys(referenceTimes).length; i++) {
    if (between(ms, referenceTimes[i], referenceTimes[i + 1])) {
      period = parseInt(getKeyByValue(referenceTimes, referenceTimes[i]));
      break;
    }
  }

  let referencePeriodNames = periodCodesNames;

  if (useSimplifiedPeriodNames)
    referencePeriodNames = periodCodesNamesSimplified;

  // Gets and displays period code for current subject
  let periodCode = periods[dayOfWeek.toLowerCase()][period];
  let periodName =
    referencePeriodNames[
      String(periodCode).substring(0, String(periodCode).length - 2)
    ];

  // Gets and displays period code for next subject
  let periodCode2 = periods[dayOfWeek.toLowerCase()][period + 1];
  let periodName2 =
    referencePeriodNames[
      String(periodCode2).substring(0, String(periodCode2).length - 2)
    ];

  // Removes "_x" suffix
  if (periodCode[periodCode.length - 2] === '_') {
    periodCodeE.textContent = periodCode.substring(
      0,
      String(periodCode).length - 2
    );
  } else {
    periodCodeE.textContent = periodCode;
  }

  // Removes "_x" suffix (for next subject)
  if (periodCode2[periodCode2.length - 2] === '_') {
    periodCodeE2.textContent = periodCode2.substring(
      0,
      String(periodCode2).length - 2
    );
  } else {
    periodCodeE2.textContent = periodCode2;
  }

  // Gets and displays teachers who teach for current subject
  periodNameE.textContent = periodName;
  teachersE.textContent = periodTeachers[periodCode];

  // Gets and displays teachers who teach for next subject
  periodNameE2.textContent = periodName2;
  teachersE2.textContent = periodTeachers[periodCode2];

  // Gets and displays the subject's starting and ending time for current subject
  startTimeE.textContent = msToHms(referenceTimes[period]).fullHrsMins;
  endTimeE.textContent = msToHms(referenceTimes[period + 1]).fullHrsMins;

  // Gets and displays the subject's starting and ending time for next subject
  startTimeE2.textContent = msToHms(referenceTimes[period + 1]).fullHrsMins;
  if (Object.entries(periods[dayOfWeek.toLowerCase()]).length < period + 2) {
    endTimeE2.textContent = msToHms(
      referenceTimes[period + 2] + 50 * 60 * 1000
    ).fullHrsMins;
  } else {
    endTimeE2.textContent = msToHms(referenceTimes[period + 2]).fullHrsMins;
  }

  // Gets and displays time elapsed for current subject
  let timeElapsedMs = ms - referenceTimes[period];
  timeElapsedE.textContent = msToHms(timeElapsedMs).fullMinsSecs;

  // Gets and displays time till the next subject
  let timeTillMs = referenceTimes[period + 1] - ms;
  timeTillE.textContent = msToHms(timeTillMs).fullMinsSecs;

  if (Object.entries(dayOfWeek.toLowerCase()).length === period) {
    document.getElementById('next').hidden = true;
  }

  // Updates the progress bar of the current subject
  progressInsideE.style.width = `${
    (timeElapsedMs / (referenceTimes[period + 1] - referenceTimes[period])) *
    100
  }%`;

  //
  //
  //
}

// Get the object key name by using value
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

// Turns milliseconds into hours and minutes
function msToHms(ms) {
  let hours = Math.floor(ms / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);

  let hS = String(hours);
  let mS = String(minutes);
  let sS = String(seconds);

  let fullHrsMins = `${hS.length < 2 ? '0' + hS : hS}:${
    mS.length < 2 ? '0' + mS : mS
  }`;
  let fullMinsSecs = `${mS.length < 2 ? '0' + mS : mS}:${
    sS.length < 2 ? '0' + sS : sS
  }`;

  let hoursChars =
    hours < 1 ? '' : `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  let minutesChars =
    minutes < 1 ? '' : `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
  let secondsChars =
    hours < 1
      ? seconds === 1
        ? `${seconds} second`
        : `${seconds} seconds`
      : '';

  let fullChars = `${hoursChars} ${minutesChars} ${secondsChars}`;

  return { hours, minutes, fullHrsMins, fullMinsSecs, fullChars };
}

// Turns hours and minutes into milliseconds
function hmToMs(h, m) {
  let hourMs = h * 60 * 60 * 1000;
  let minuteMs = m * 60 * 1000;

  return hourMs + minuteMs;
}

// Check if the number (x) is in between min and max
// Returns true if yes, false if no
function between(x, min, max) {
  return x >= min && x <= max;
}

// Adds ordinal suffixes (st, nd, rd, th) next to the number x
function ordinal_suffix_of(x) {
  let j = x % 10,
    k = x % 100;

  if (j === 1 && k !== 11) {
    return x + 'st';
  }
  if (j === 2 && k !== 12) {
    return x + 'nd';
  }
  if (j === 3 && k !== 13) {
    return x + 'rd';
  }
  return x + 'th';
}
