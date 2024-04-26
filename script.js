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

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

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
    0: 'homeroom_1', // A
    1: 'พ22102_1', // 1
    2: 'ท22101_1', // 2
    3: 'break_1', // Break
    4: 'อ22102_2', // 3
    5: 'lunch_1', // 4
    6: 'ว22101_3', // 5
    7: 'ค22101_2', // 6
    8: 'อ20223_3', // 7
    9: 'ส22103_1', // 8
  },
};

const times = {
  0: hmToMs(7, 25),
  1: hmToMs(8, 15),
  2: hmToMs(9, 5),
  3: hmToMs(10, 10),
  4: hmToMs(11, 0),
  5: hmToMs(11, 50),
  6: hmToMs(12, 40),
  7: hmToMs(13, 30),
  8: hmToMs(14, 20),
  9: hmToMs(15, 10),
  10: hmToMs(17, 50),
};

const timesTest = {
  0: hmToMs(7, 25), // A
  1: hmToMs(8, 15), // 1
  2: hmToMs(9, 5), // 2
  3: hmToMs(9, 55), // Break
  4: hmToMs(10, 10), // 3
  5: hmToMs(11, 0), // Lunch
  6: hmToMs(11, 50), // 5
  7: hmToMs(12, 40), // 6
  8: hmToMs(13, 30), // 7
  9: hmToMs(14, 20), // 8
  10: hmToMs(15, 10), // 9
};

const periodCodesNames = {
  รักการอ่าน: 'รักการอ่าน',
  lunch: 'Lunch',
  ประชุมระดับ: 'ประชุมระดับ',

  แนะแนว: 'แนะแนว',
  break: 'Break',

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

const periodCodesNamesSimplified = {
  รักการอ่าน: 'รักการอ่าน',
  lunch: 'Lunch',
  ประชุมระดับ: 'ประชุมระดับ',

  แนะแนว: 'แนะแนว',
  break: 'Break',

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

const periodTeachers = {
  รักการอ่าน_1: '-',
  lunch_1: '-',
  ประชุมระดับ_1: '-',

  แนะแนว_1: 'Unknown',
  break_1: '-',

  ท22101_1: 'ครูนวีณา',
  ค22101_1: 'ครูณัฐภัทร',
  ค22101_2: 'T. Jay',
  ว22101_1: 'ครูปวีณา',
  ว22101_2: 'T. Girlie',
  ว22101_3: 'T. Girlie/ครูปวีณา',
  ว22104_2: 'T. Tommy',
  ส22101_1: 'ครูรมณีย์',
  ส22103_1: 'ครูรมณีย์',
  ส22105_1: 'พระอาจารย์',
  พ22101_3: 'T. Leonor/ครูกิติยา',
  พ22102_1: 'ครูมะยิ้',
  ศ22103_1: 'ครูธัญรัตน์',
  ศ22104_1: 'ครูอรทัย',
  ง22101_1: 'ครูทยิตา',
  อ22102_2: 'T. Inspire',
  อ22102_3: 'T. Inspire/ครูกฤตพร',
  ว22201_1: 'ครูปวีณา',
  อ20223_3: 'T. Mazha/ครูอารียา',
  อ20233_3: 'อ.ทวี/ครูกฤตพร',
  จ20201_1: 'ภาษาจีนเพื่อความเพลิดเพลิน 2',
  ญ20201_1: 'ครูวาวุฒิ/อ.นาราวดี',

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

const timeE = document.getElementById('time');

const startTimeE = document.getElementById('startTime');
const endTimeE = document.getElementById('endTime');
const periodNameE = document.getElementById('periodName');
const periodCodeE = document.getElementById('periodCode');
const teachersE = document.getElementById('teachers');
const timeElapsedE = document.getElementById('timeElapsed');

const startTimeE2 = document.getElementById('startTime2');
const endTimeE2 = document.getElementById('endTime2');
const periodNameE2 = document.getElementById('periodName2');
const periodCodeE2 = document.getElementById('periodCode2');
const teachersE2 = document.getElementById('teachers2');
const timeTillE = document.getElementById('timeTill2');
const progressInsideE = document.getElementById('progressInside');

const useSimplifiedPeriodNames = true;

setInterval(update, 1000);

function update() {
  const d = new Date();

  let dayOfWeek = days[d.getDay()];
  let dayOfMonth = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let time = d.toLocaleTimeString('en-GB');

  timeE.textContent = `${dayOfWeek}, ${month} ${ordinal_suffix_of(
    dayOfMonth
  )} ${year}, ${time}`;

  let msSinceDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  let ms = d.getTime() - msSinceDay.getTime();

  console.log(ms);

  let period = 0;

  let referenceTimes = timesTest;

  //if (d.getDay() !== 0 && d.getDay() !== 6) {
  for (let i = 0; i < Object.keys(referenceTimes).length; i++) {
    if (between(ms, referenceTimes[i], referenceTimes[i + 1])) {
      period = parseInt(getKeyByValue(referenceTimes, referenceTimes[i]));
      break;
    }
  }

  console.log(referenceTimes[5]);

  let referencePeriodNames = periodCodesNames;
  if (useSimplifiedPeriodNames)
    referencePeriodNames = periodCodesNamesSimplified;

  let periodCode = periods[dayOfWeek.toLowerCase()][period];
  let periodName =
    referencePeriodNames[
      String(periodCode).substring(0, String(periodCode).length - 2)
    ];

  console.log(String(periodCode).substring(0, String(periodCode).length - 2));

  let periodCode2 = periods[dayOfWeek.toLowerCase()][period + 1];
  let periodName2 =
    referencePeriodNames[
      String(periodCode2).substring(0, String(periodCode2).length - 2)
    ];

  if (periodCode[periodCode.length - 2] === '_') {
    periodCodeE.textContent = periodCode.substring(
      0,
      String(periodCode).length - 2
    );
  } else {
    periodCodeE.textContent = periodCode;
  }

  if (periodCode2[periodCode2.length - 2] === '_') {
    periodCodeE2.textContent = periodCode2.substring(
      0,
      String(periodCode2).length - 2
    );
  } else {
    periodCodeE2.textContent = periodCode2;
  }

  periodNameE.textContent = periodName;
  teachersE.textContent = periodTeachers[periodCode];

  periodNameE2.textContent = periodName2;
  teachersE2.textContent = periodTeachers[periodCode2];
  console.log(periodTeachers[periodCode2]);

  startTimeE.textContent = msToHms(timesTest[period]).fullHrsMins;
  endTimeE.textContent = msToHms(timesTest[period + 1]).fullHrsMins;

  startTimeE2.textContent = msToHms(timesTest[period + 1]).fullHrsMins;
  endTimeE2.textContent = msToHms(timesTest[period + 2]).fullHrsMins;

  let timeElapsedMs = ms - referenceTimes[period];
  timeElapsedE.textContent = msToHms(timeElapsedMs).fullMinsSecs;

  let timeTillMs = referenceTimes[period + 1] - ms;
  timeTillE.textContent = msToHms(timeTillMs).fullMinsSecs;

  progressInsideE.style.width = `${
    (timeElapsedMs / (referenceTimes[period + 1] - referenceTimes[period])) *
    100
  }%`;
  console.log(
    referenceTimes[period + 1] - referenceTimes[period],
    timeElapsedMs
  );
}

// Get the object key name by value
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

  return { hours, minutes, fullHrsMins, fullMinsSecs };
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
