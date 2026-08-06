// Dataset structured from original schedule documents
const timetableData = {
  ds: {
    title: "B.Sc. (Data Science) Timetable (Semester I & III)",
    pdfPath: "../pdfs/BSc-DS-Timetable.pdf", // Update path to your actual PDF location
    classes: ["B.Sc. (DS)-I", "B.Sc. (DS)-II"],
    headers: ["08:00-10:00", "10:00", "11:00", "BREAK", "01:00-03:00", "03:00-05:00"],
    breakIndex: 3,
    days: [
      {
        day: "MON",
        slots: [
          { class: "B.Sc. (DS)-I", data: ["Lab-Excel Batch-B (SMS)", "Python (ATH)", "Web Tech (Pathan)", "Lab-Web Tech Batch A (Pathan)", ""] },
          { class: "B.Sc. (DS)-II", data: ["", "SQL (Pathan)", "Statics (SPK)", "", "Statics Batch-B (SPK)"] }
        ]
      },
      {
        day: "TUE",
        slots: [
          { class: "B.Sc. (DS)-I", data: ["Lab-Excel Batch-A (SMS)", "Python (ATH)", "Web Tech (Pathan)", "Lab-Web Tech Batch B (Pathan)", ""] },
          { class: "B.Sc. (DS)-II", data: ["", "SQL (Pathan)", "Statics (SPK)", "", "Statics Batch-A (SPK)"] }
        ]
      },
      {
        day: "WED",
        slots: [
          { class: "B.Sc. (DS)-I", data: ["Lab-Python Batch A (ATH)", "Excel (SMS)", "IKS (SPK)", "", "Basic of IT Batch-B (SPK)"] },
          { class: "B.Sc. (DS)-II", data: ["", "MIL (SBD)", "AEC", "SQL (Pathan) Batch-A", ""] }
        ]
      },
      {
        day: "THU",
        slots: [
          { class: "B.Sc. (DS)-I", data: ["Lab-Python Batch B (ATH)", "Excel (SMS)", "IKS (SPK)", "", "Basic of IT Batch-A (SPK)"] },
          { class: "B.Sc. (DS)-II", data: ["", "MIL (SBD)", "AEC", "SQL (Pathan) Batch-B", ""] }
        ]
      },
      {
        day: "FRI",
        slots: [
          { class: "B.Sc. (DS)-I", data: ["", "GE", "MIL (SBD)", "", ""] },
          { class: "B.Sc. (DS)-II", data: ["", "Python With DS (SGR)", "GE", "AI tool ChatGPT Batch-A (Pathan)", ""] }
        ]
      },
      {
        day: "SAT",
        slots: [
          { class: "B.Sc. (DS)-I", data: ["", "GE", "MIL (SBD)", "", ""] },
          { class: "B.Sc. (DS)-II", data: ["Python with DS (SGR) Batch-A", "Python With DS (SGR)", "GE", "AI tool ChatGPT Batch-B (Pathan)", "Python with DS Batch-B (SGR)"] }
        ]
      }
    ],
    legend: [
      { code: "SDTSCT1101", title: "Data Analysis with Excel (SMS)" },
      { code: "SDTSCP1101", title: "Data Analysis with Excel(P) (SMS)" },
      { code: "SDTSMT1101", title: "Web Technology (Pathan)" },
      { code: "SDTSMP1101", title: "Web Technology (P) (Pathan)" },
      { code: "SDTSMT1102", title: "Programming with Python (ATH)" },
      { code: "SDTSMP1102", title: "Programming with Python (P) (ATH)" },
      { code: "SBTSSC1101", title: "Basics of IT (P) (SPK)" },
      { code: "AECENG1101", title: "L1-Compulsory English" },
      { code: "IKSXXX1101", title: "Indian Knowledge System (SPK)" },
      { code: "ACEMIL1101", title: "Marathi (SBD)" },
      { code: "SDSCCT1201", title: "Statistical Method for DS (SPK)" },
      { code: "SDSCCP1201", title: "Data analytics with Python (SGR)" },
      { code: "SDSCCT1203", title: "Statistical Method for DS (SPK) (P)" },
      { code: "SDSCCP1204", title: "Data analytics with Python (SGR) (P)" },
      { code: "SDSCMT1201", title: "Analyzing Data with SQL (Pathan)" },
      { code: "SDSCMP1201", title: "Analyzing Data with SQL (Pathan) (P)" },
      { code: "SDSCSC1201", title: "AI Tool-ChatGPT (Pathan) (P)" }
    ]
  },
  bca: {
    title: "BCA Timetable (Semester I, III & V)",
    pdfPath: "../pdfs/BCA-Timetable.pdf", // Update path to your actual PDF location
    classes: ["BCA-I", "BCA-II", "BCA-III"],
    headers: ["08:00-10:00", "10:00", "11:00", "12:00", "01:00-03:00", "03:00-05:00"],
    breakIndex: -1,
    days: [
      {
        day: "MON",
        slots: [
          { class: "BCA-I", data: ["Lab-PST Batch-A (ATH)", "MFCS (SMS)", "CA (SGR)", "", "Lab-CA Batch-B (SGR)", ""] },
          { class: "BCA-II", data: ["", "DBMS (SGR)", "Python (ATH)", "", "", ""] },
          { class: "BCA-III", data: ["", "", "ML (SMS)", "", "", "Lab-ML Batch-A (SMS)"] }
        ]
      },
      {
        day: "TUE",
        slots: [
          { class: "BCA-I", data: ["Lab-PST Batch-B (ATH)", "MFCS (SMS)", "CA (SGR)", "", "Lab-CA Batch-A (SGR)", ""] },
          { class: "BCA-II", data: ["", "DBMS (SGR)", "Python (ATH)", "", "", ""] },
          { class: "BCA-III", data: ["", "", "ML (SMS)", "", "", "Lab-ML Batch-B (SMS)"] }
        ]
      },
      {
        day: "WED",
        slots: [
          { class: "BCA-I", data: ["", "PST (ATH)", "GE (ATH)", "CA (SGR)", "", ""] },
          { class: "BCA-II", data: ["", "SE (Pathan)", "Probability (SMS)", "", "", ""] },
          { class: "BCA-III", data: ["", "QT (Sunil)", "Data Sci (SGR)", "Time Series (SMS)", "Lab-Data Sci Batch-A (SGR)", "Lab-Time Series Batch-B (SMS)"] }
        ]
      },
      {
        day: "THU",
        slots: [
          { class: "BCA-I", data: ["", "PST (ATH)", "GE (ATH)", "", "", ""] },
          { class: "BCA-II", data: ["", "SE (Pathan)", "Probability (SMS)", "", "", ""] },
          { class: "BCA-III", data: ["", "QT (Sunil)", "Data Sci (SGR)", "Time Series (SMS)", "Lab-Data Sci Batch-B (SGR)", "Lab-Time Series Batch-A (SMS)"] }
        ]
      },
      {
        day: "FRI",
        slots: [
          { class: "BCA-I", data: ["", "MFCS-I (SMS)", "IKS (Sunil)", "", "", ""] },
          { class: "BCA-II", data: ["Lab-Python Batch-A (ATH)", "", "Probability (SMS)", "DBMS (SGR)", "Lab-DBMS Batch-B (SGR)", "Lab-Data Sci Batch-A (SPK)"] },
          { class: "BCA-III", data: ["", "", "Data Sci (SGR)", "Time Series (SMS)", "", ""] }
        ]
      },
      {
        day: "SAT",
        slots: [
          { class: "BCA-I", data: ["", "PST (ATH)", "IKS (Sunil)", "", "", ""] },
          { class: "BCA-II", data: ["Lab-Python Batch-B (ATH)", "Data Sci (SPK)", "SE (Pathan)", "", "Lab-DBMS Batch-A (SGR)", "Lab-Data Sci Batch-B (SPK)"] },
          { class: "BCA-III", data: ["", "SMS (ML)", "", "", "", ""] }
        ]
      }
    ],
    legend: [
      { code: "PST", title: "Problem Solving Techniques (ATH)" },
      { code: "MFCS", title: "Mathematical Foundations of Computer Science (SMS)" },
      { code: "CA", title: "Computer Architecture (SGR)" },
      { code: "DBMS", title: "Database Management Systems (SGR)" },
      { code: "SE", title: "Software Engineering (Pathan)" },
      { code: "ML", title: "Machine Learning (SMS)" },
      { code: "Data Sci", title: "Data Science (SGR / SPK)" },
      { code: "QT", title: "Quantitative Techniques (Sunil)" },
      { code: "IKS", title: "Indian Knowledge System (Sunil)" }
    ]
  }
};

let currentProgramKey = 'ds';
let currentClassFilter = 'all';
let currentDayFilter = 'all';
let currentSearchQuery = '';

// Determine current weekday name (MON, TUE, etc.)
const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const todayDayCode = dayNames[new Date().getDay()];

// DOM Elements
const tabDsBtn = document.getElementById('tabDsBtn');
const tabBcaBtn = document.getElementById('tabBcaBtn');
const classFilterSelect = document.getElementById('classFilter');
const dayFilterSelect = document.getElementById('dayFilter');
const searchInput = document.getElementById('searchInput');
const programHeading = document.getElementById('programHeading');
const activeProgramTag = document.getElementById('activeProgramTag');
const timetableHeader = document.getElementById('timetableHeader');
const timetableBody = document.getElementById('timetableBody');
const courseLegend = document.getElementById('courseLegend');
const printBtn = document.getElementById('printBtn');
const todayHighlightBadge = document.getElementById('todayHighlightBadge');

// Slot Detail Modal Elements
const slotModal = document.getElementById('slotModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalSubjectTitle = document.getElementById('modalSubjectTitle');
const modalBodyContent = document.getElementById('modalBodyContent');

// PDF Modal Elements
const viewPdfBtn = document.getElementById('viewPdfBtn');
const pdfModal = document.getElementById('pdfModal');
const pdfModalCloseBtn = document.getElementById('pdfModalCloseBtn');
const pdfModalTitle = document.getElementById('pdfModalTitle');
const pdfIframe = document.getElementById('pdfIframe');

function init() {
  setupEventListeners();
  renderProgram('ds');
}

function setupEventListeners() {
  tabDsBtn.addEventListener('click', () => {
    tabDsBtn.classList.add('active');
    tabBcaBtn.classList.remove('active');
    renderProgram('ds');
  });

  tabBcaBtn.addEventListener('click', () => {
    tabBcaBtn.classList.add('active');
    tabDsBtn.classList.remove('active');
    renderProgram('bca');
  });

  classFilterSelect.addEventListener('change', (e) => {
    currentClassFilter = e.target.value;
    renderTableBody();
  });

  dayFilterSelect.addEventListener('change', (e) => {
    currentDayFilter = e.target.value;
    renderTableBody();
  });

  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.toLowerCase().trim();
    renderTableBody();
  });

  printBtn.addEventListener('click', () => {
    window.print();
  });

  // Slot Modal Handlers
  modalCloseBtn.addEventListener('click', () => {
    slotModal.style.display = 'none';
  });

  slotModal.addEventListener('click', (e) => {
    if (e.target === slotModal) slotModal.style.display = 'none';
  });

  // PDF Viewer Modal Handlers
  if (viewPdfBtn) {
    viewPdfBtn.addEventListener('click', () => {
      const currentProg = timetableData[currentProgramKey];
      if (pdfModalTitle) pdfModalTitle.textContent = `Original PDF — ${currentProg.title}`;
      if (pdfIframe) pdfIframe.src = currentProg.pdfPath;
      if (pdfModal) pdfModal.style.display = 'flex';
    });
  }

  if (pdfModalCloseBtn) {
    pdfModalCloseBtn.addEventListener('click', () => {
      if (pdfModal) pdfModal.style.display = 'none';
      if (pdfIframe) pdfIframe.src = '';
    });
  }

  if (pdfModal) {
    pdfModal.addEventListener('click', (e) => {
      if (e.target === pdfModal) {
        pdfModal.style.display = 'none';
        if (pdfIframe) pdfIframe.src = '';
      }
    });
  }
}

function renderProgram(programKey) {
  currentProgramKey = programKey;
  currentClassFilter = 'all';
  currentDayFilter = 'all';
  currentSearchQuery = '';
  searchInput.value = '';
  dayFilterSelect.value = 'all';

  const prog = timetableData[programKey];

  programHeading.textContent = prog.title;
  activeProgramTag.textContent = `Program: ${prog.title}`;

  // Populate Class Filter Options
  classFilterSelect.innerHTML = `<option value="all">All Classes</option>`;
  prog.classes.forEach(cls => {
    classFilterSelect.innerHTML += `<option value="${cls}">${cls}</option>`;
  });

  // Check if today badge should be displayed
  const hasToday = prog.days.some(d => d.day === todayDayCode);
  todayHighlightBadge.style.display = hasToday ? 'inline-flex' : 'none';

  renderTableHeader();
  renderTableBody();
  renderLegend();
}

function renderTableHeader() {
  const prog = timetableData[currentProgramKey];
  timetableHeader.innerHTML = '';

  const tr = document.createElement('tr');
  tr.innerHTML = `<th>Day</th><th>Class</th>`;

  prog.headers.forEach(h => {
    if (h === 'BREAK') {
      tr.innerHTML += `<th class="break-col">B<br>R<br>E<br>A<br>K</th>`;
    } else {
      tr.innerHTML += `<th>${h}</th>`;
    }
  });

  timetableHeader.appendChild(tr);
}

function renderTableBody() {
  const prog = timetableData[currentProgramKey];
  timetableBody.innerHTML = '';

  // Filter Days
  const filteredDays = prog.days.filter(d => currentDayFilter === 'all' || d.day === currentDayFilter);

  filteredDays.forEach(dayObj => {
    const isToday = (dayObj.day === todayDayCode);

    // Filter Slots by Class
    const visibleSlots = dayObj.slots.filter(s => currentClassFilter === 'all' || s.class === currentClassFilter);

    visibleSlots.forEach((slot, index) => {
      const tr = document.createElement('tr');

      // Add Day cell (rowspan for first class of that day)
      if (index === 0) {
        const dayClass = isToday ? 'day-header is-today' : 'day-header';
        tr.innerHTML += `<td class="${dayClass}" rowspan="${visibleSlots.length}">${dayObj.day}${isToday ? '<br><small>(Today)</small>' : ''}</td>`;
      }

      // Add Class cell
      tr.innerHTML += `<td class="class-header">${slot.class}</td>`;

      // Render Time Slots
      let dataIdx = 0;
      prog.headers.forEach((h, headerIdx) => {
        if (h === 'BREAK') {
          if (index === 0) {
            tr.innerHTML += `<td class="break-col" rowspan="${visibleSlots.length}">BREAK</td>`;
          }
        } else {
          const content = slot.data[dataIdx] || '';
          const timeSlot = h;
          dataIdx++;

          const isMatchingSearch = currentSearchQuery && content.toLowerCase().includes(currentSearchQuery);

          if (content) {
            const highlightStyle = isMatchingSearch ? 'background-color: #fff3cd; border: 2px solid #ffc107;' : '';
            const todaySlotClass = isToday ? 'slot-cell is-today-slot' : 'slot-cell';

            tr.innerHTML += `
              <td class="${todaySlotClass}" style="${highlightStyle}" onclick="openSlotModal('${slot.class}', '${dayObj.day}', '${timeSlot}', '${content.replace(/'/g, "\\'")}')">
                <span class="subject-name">${content}</span>
              </td>
            `;
          } else {
            tr.innerHTML += `<td class="slot-cell empty-cell">-</td>`;
          }
        }
      });

      timetableBody.appendChild(tr);
    });
  });
}

function renderLegend() {
  const prog = timetableData[currentProgramKey];
  courseLegend.innerHTML = '';

  prog.legend.forEach(item => {
    courseLegend.innerHTML += `
      <div class="legend-card">
        <span class="legend-code">${item.code}:</span>
        <span class="legend-title"> ${item.title}</span>
      </div>
    `;
  });
}

function openSlotModal(className, day, time, content) {
  modalSubjectTitle.textContent = content;
  modalBodyContent.innerHTML = `
    <div class="modal-detail-item"><strong>Program / Class:</strong> ${className}</div>
    <div class="modal-detail-item"><strong>Scheduled Day:</strong> ${day}</div>
    <div class="modal-detail-item"><strong>Time Timing:</strong> ${time}</div>
    <hr style="margin: 12px 0; border:0; border-top: 1px solid #eaecf0;">
    <div class="modal-detail-item"><strong>Faculty / Location Note:</strong> Refer to the course code legend below for detailed paper titles and instructor details.</div>
  `;
  slotModal.style.display = 'flex';
}

init();