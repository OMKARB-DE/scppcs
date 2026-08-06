// Dataset derived directly from SRTMUN Academic Calendars (2025-2026 & 2026-2027)
const calendarDatabase = {
  "2026-2027": {
    status: "active",
    label: "Official Calendar 2026–27",
    terms: [
      {
        institution: "1. All Affiliated Colleges, Constituent Colleges & Recognised Institution",
        firstTerm: "16/06/2026 To 16/12/2026",
        vacation1: "22/10/2026 To 15/11/2026",
        secondTerm: "17/12/2026 To 30/04/2027",
        vacation2: "02/05/2027 To 15/06/2027"
      },
      {
        institution: "2. All Affiliated Colleges Engineering & Pharmacy",
        firstTerm: "01/07/2026 To 19/12/2026",
        vacation1: "02/11/2026 To 21/11/2026",
        secondTerm: "22/12/2026 To 22/05/2027",
        vacation2: "24/05/2027 To 02/07/2027"
      },
      {
        institution: "3. All Affiliated Law Colleges",
        firstTerm: "01/07/2026 To 12/11/2026",
        vacation1: "13/11/2026 To 03/12/2026",
        secondTerm: "04/12/2026 To 15/05/2027",
        vacation2: "17/05/2027 To 30/06/2027"
      },
      {
        institution: "4. Campus & Sub-Campuses School/Dept.",
        firstTerm: "10/06/2026 To 07/11/2026",
        vacation1: "12/11/2026 To 07/12/2026",
        secondTerm: "08/12/2026 To 10/05/2027",
        vacation2: "11/05/2027 To 09/06/2027"
      },
      {
        institution: "5. All other programes admitting students based on MHT-CET / State Level Entrance exam",
        firstTerm: "16/06/2026 To 16/12/2026",
        vacation1: "22/10/2026 To 15/11/2026",
        secondTerm: "17/12/2026 To 30/04/2027",
        vacation2: "02/05/2027 To 15/07/2027"
      }
    ],
    admissions: [
      { sr: "01", stage: "Commencement of Admission", ug: "11/06/2026", pg: "16/06/2026" },
      { sr: "02", stage: "Last Date of Submission of Application for First Year only", ug: "18/06/2026", pg: "24/06/2026" },
      { sr: "03", stage: "Display of 1st Merit List for First Year", ug: "19/06/2026", pg: "25/05/2026" },
      { sr: "04", stage: "Last Date Payment of Fees & submission of documents of 1st Merit List", ug: "23/06/2026", pg: "27/06/2026" },
      { sr: "05", stage: "Display of 2nd Merit List for First Year", ug: "24/06/2026", pg: "29/06/2026" },
      { sr: "06", stage: "Last Date Payment of Fees & submission of documents of 2nd Merit List", ug: "29/06/2026", pg: "02/07/2026" },
      { sr: "07", stage: "Spot Admission & Last date of admission", ug: "30/06/2026", pg: "03/07/2026" },
      { sr: "08", stage: "Commencement of Classes", ug: "01/07/2026", pg: "06/07/2026" },
      { sr: "09", stage: "Last Date of Submission of Eligibility Form", ug: "31/08/2026", pg: "31/08/2026" }
    ],
    exams: [
      { sr: "01", name: "BA., B.Com, B.Sc., B.B.A., B.F.A., B. Lib., B.J., B.S.W., B.A. (F.D.), B.A.(Animation), B.A.(M.C.J.), B.A.(R.M.), B.A. (Lalit Kala), Administrative Services", term1: "17/11/2026", term2: "06/04/2027" },
      { sr: "02", name: "B.C.A., B.Sc.(CS), B.Sc.( Food Sci.), B.Sc.(IT)., B.Sc.(Bio-Tech.), B.Sc. (Bio-Chemistry). B.Sc. (H.S.), B.Sc.(Bio-Informatics), B.Sc. (S.E.), B.Sc. N.T.", term1: "17/11/2026", term2: "06/04/2027" },
      { sr: "03", name: "All M.A., M.Com,. All M.Sc., M.S.W., All B.Hoc., M.C.A., M.B.A.", term1: "01/12/2026", term2: "13/04/2027" },
      { sr: "04", name: "Education, Physical Educational, M.J., M.Lib., B.I.D.", term1: "01/12/2026", term2: "13/04/2027" },
      { sr: "05", name: "All Law Courses", term1: "08/12/2026", term2: "13/04/2027" },
      { sr: "06", name: "All Engineering Courses & Pharmacy", term1: "01/12/2026", term2: "04/05/2027" },
      { sr: "07", name: "Campus Schools & Sub-Campus Schools", term1: "12/10/2026", term2: "10/04/2027" },
      { sr: "08", name: "New Model Degree College", term1: "17/11/2026", term2: "06/04/2027" }
    ],
    events: [
      { title: "Avishkar Research Festival - College Level", dates: "05/10/2026 To 10/10/2026" },
      { title: "University Level Youth Festival", dates: "14/10/2026 To 17/10/2026" },
      { title: "Avishkar Research Festival - District Level", dates: "21/10/2026 To 28/10/2026" },
      { title: "Avishkar Research Festival - University Level", dates: "02/11/2026 To 07/11/2026" },
      { title: "Avishkar Research Festival - State Level", dates: "12/01/2027 To 14/01/2027" },
      { title: "Tentative Date of Convocation", dates: "Sept. 2026" }
    ]
  },
  "2025-2026": {
    status: "archive",
    label: "Official Calendar 2025–26",
    terms: [
      {
        institution: "1. All Affiliated Colleges, Constituent Colleges & Recognised Institutions",
        firstTerm: "16/06/2025 To 14/12/2025",
        vacation1: "16/10/2025 To 09/11/2025",
        secondTerm: "15/12/2025 To 30/04/2026",
        vacation2: "02/05/2026 To 15/06/2026"
      },
      {
        institution: "2. All Affiliated Colleges of Engineering & Pharmacy",
        firstTerm: "01/07/2025 To 30/11/2025",
        vacation1: "13/10/2025 To 31/10/2025",
        secondTerm: "01/12/2025 To 21/05/2026",
        vacation2: "22/05/2026 To 30/06/2026"
      },
      {
        institution: "3. All Affiliated Law Colleges",
        firstTerm: "01/07/2025 To 04/11/2025",
        vacation1: "05/11/2025 To 25/11/2025",
        secondTerm: "26/11/2025 To 16/05/2026",
        vacation2: "17/05/2026 To 30/06/2026"
      },
      {
        institution: "4. Campus Schools & Sub Campus (IInd Year)",
        firstTerm: "16/06/2025 To 18/12/2025",
        vacation1: "24/10/2025 To 18/11/2025",
        secondTerm: "19/11/2025 To 30/04/2026",
        vacation2: "02/05/2026 To 15/06/2026"
      },
      {
        institution: "5. All other Courses admitting students based on MHT-CET / State level Entrance exam & Campus Schools (First Year)",
        firstTerm: "11/07/2025 To 30/11/2025",
        vacation1: "24/10/2025 To 18/11/2025",
        secondTerm: "19/11/2025 To 30/04/2026",
        vacation2: "02/05/2026 To 15/06/2026"
      }
    ],
    admissions: [
      { sr: "01", stage: "Commencement of Admission", ug: "10/06/2025", pg: "10/06/2025" },
      { sr: "02", stage: "Last Date of Submission of Application for First Year only", ug: "17/06/2025", pg: "23/06/2025" },
      { sr: "03", stage: "Display of 1st Merit List for First Year", ug: "18/06/2025", pg: "24/06/2025" },
      { sr: "04", stage: "Last Date Payment of Fees & submission of documents of 1st Merit List", ug: "20/06/2025", pg: "27/06/2025" },
      { sr: "05", stage: "Display of 2nd Merit List for First Year", ug: "21/06/2025", pg: "28/06/2025" },
      { sr: "06", stage: "Last Date Payment of Fees & submission of documents of 2nd Merit List", ug: "23/06/2025", pg: "01/07/2025" },
      { sr: "07", stage: "Spot Admission & Last date of admission", ug: "24/06/2025", pg: "02/07/2025" },
      { sr: "08", stage: "Commencement of Classes", ug: "25/06/2025", pg: "03/07/2025" },
      { sr: "09", stage: "Last Date of Submission of Eligibility Form", ug: "31/08/2025", pg: "31/08/2025" }
    ],
    exams: [
      { sr: "01", name: "BA., B.Com, B.Sc., B.B.A., B.F.A., B.Lib., B.J., B.S.W., B.A.(F.D.), B.A.(Animation), B.A. (M.C.J.), B.A.(R.M.), B.A. (Lalit Kala), Administrative Services", term1: "11/11/2025", term2: "01/04/2026" },
      { sr: "02", name: "B.C.A., B.Sc.(C.S.), B.Sc. (Food Sci.), B.Sc.(IT), B.Sc. (Bio-Tech.), B.Sc. (Bio-Chemistry), B.Sc. (H.S.), B.Sc. (Bio-Informatics), B.Sc. (S.E.), B.Sc. N.T.", term1: "11/11/2025", term2: "01/04/2026" },
      { sr: "03", name: "All M.A., M.Com., All M.Sc., M.S.W., All B.Hoc., M.C.A., M.B.A.", term1: "26/11/2025", term2: "16/04/2026" },
      { sr: "04", name: "Education, Physical Educational, M.J., M.Lib., B.I.D.", term1: "26/11/2025", term2: "01/04/2026" },
      { sr: "05", name: "All Law Courses", term1: "02/12/2025", term2: "16/04/2026" },
      { sr: "06", name: "All Engineering Courses & Pharmacy", term1: "10/11/2025", term2: "10/04/2026" },
      { sr: "07", name: "Campus Schools & Sub-Campus Schools", term1: "25/11/2025", term2: "16/04/2026" },
      { sr: "08", name: "New Model Degree College", term1: "11/11/2025", term2: "01/04/2026" }
    ],
    events: [
      { title: "Avishkar Research Festival - College Level", dates: "07/10/2025 To 11/10/2025" },
      { title: "University Level Youth Festival", dates: "09/10/2025 To 12/10/2025" },
      { title: "Avishkar Research Festival - District Level", dates: "16/10/2025 To 18/11/2025" },
      { title: "Avishkar Research Festival - University Level", dates: "27/10/2025 To 28/10/2025" },
      { title: "Avishkar Research Festival - State Level", dates: "12/01/2026 To 14/01/2026" },
      { title: "Tentative Date of Convocation", dates: "August 2025" }
    ]
  }
};

let activeYearKey = "2026-2027";

// DOM Elements
const yearGrid = document.getElementById('yearGrid');
const termsTableBody = document.getElementById('termsTableBody');
const admissionsTableBody = document.getElementById('admissionsTableBody');
const examsTableBody = document.getElementById('examsTableBody');
const eventsGrid = document.getElementById('eventsGrid');

const calendarSearch = document.getElementById('calendarSearch');
const categoryFilter = document.getElementById('categoryFilter');
const resetBtn = document.getElementById('resetBtn');
const activeYearTag = document.getElementById('activeYearTag');
const resultCountStatus = document.getElementById('resultCountStatus');

const detailModal = document.getElementById('detailModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalBody = document.getElementById('modalBody');

// Render Year Cards
function renderYearCards() {
  yearGrid.innerHTML = '';
  Object.keys(calendarDatabase).forEach(yearKey => {
    const data = calendarDatabase[yearKey];
    const card = document.createElement('div');
    card.className = `wiki-year-card ${yearKey === activeYearKey ? 'active' : ''}`;
    
    const badgeClass = data.status === 'active' ? 'status-active' : 'status-archive';

    card.innerHTML = `
      <div class="wiki-year-title">Academic Year ${yearKey}</div>
      <span class="wiki-status-badge ${badgeClass}">${data.label}</span>
    `;

    card.addEventListener('click', () => {
      activeYearKey = yearKey;
      renderYearCards();
      renderCalendarData();
    });

    yearGrid.appendChild(card);
  });
}

// Render Calendar Data
function renderCalendarData() {
  const query = calendarSearch.value.toLowerCase().trim();
  const category = categoryFilter.value;
  const calendar = calendarDatabase[activeYearKey];

  activeYearTag.textContent = `Active Session: ${activeYearKey}`;

  // Section Visibilities
  document.getElementById('blockTerms').style.display = (category === 'all' || category === 'terms') ? 'block' : 'none';
  document.getElementById('blockAdmissions').style.display = (category === 'all' || category === 'admissions') ? 'block' : 'none';
  document.getElementById('blockExams').style.display = (category === 'all' || category === 'exams') ? 'block' : 'none';
  document.getElementById('blockEvents').style.display = (category === 'all' || category === 'events') ? 'block' : 'none';

  // 1. Terms
  termsTableBody.innerHTML = '';
  const filteredTerms = calendar.terms.filter(t => 
    t.institution.toLowerCase().includes(query) ||
    t.firstTerm.toLowerCase().includes(query) ||
    t.secondTerm.toLowerCase().includes(query)
  );

  if (filteredTerms.length === 0) {
    termsTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#777;">No matching terms found.</td></tr>`;
  } else {
    filteredTerms.forEach(t => {
      termsTableBody.innerHTML += `
        <tr>
          <td><strong>${t.institution}</strong></td>
          <td>${t.firstTerm}</td>
          <td>${t.vacation1}</td>
          <td>${t.secondTerm}</td>
          <td>${t.vacation2}</td>
        </tr>
      `;
    });
  }

  // 2. Admissions
  admissionsTableBody.innerHTML = '';
  const filteredAdmissions = calendar.admissions.filter(a =>
    a.stage.toLowerCase().includes(query) ||
    a.ug.toLowerCase().includes(query) ||
    a.pg.toLowerCase().includes(query)
  );

  if (filteredAdmissions.length === 0) {
    admissionsTableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#777;">No matching admission entries found.</td></tr>`;
  } else {
    filteredAdmissions.forEach(a => {
      admissionsTableBody.innerHTML += `
        <tr>
          <td>${a.sr}</td>
          <td>${a.stage}</td>
          <td><span class="wiki-badge badge-ug">UG</span> ${a.ug}</td>
          <td><span class="wiki-badge badge-pg">PG</span> ${a.pg}</td>
        </tr>
      `;
    });
  }

  // 3. Exams
  examsTableBody.innerHTML = '';
  const filteredExams = calendar.exams.filter(e =>
    e.name.toLowerCase().includes(query) ||
    e.term1.toLowerCase().includes(query) ||
    e.term2.toLowerCase().includes(query)
  );

  if (filteredExams.length === 0) {
    examsTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#777;">No matching exam entries found.</td></tr>`;
  } else {
    filteredExams.forEach(e => {
      examsTableBody.innerHTML += `
        <tr>
          <td>${e.sr}</td>
          <td>${e.name}</td>
          <td><strong>${e.term1}</strong></td>
          <td><strong>${e.term2}</strong></td>
          <td><span class="wiki-action-btn" onclick="openExamModal('${e.name.replace(/'/g, "\\'")}', '${e.term1}', '${e.term2}')">View Rules</span></td>
        </tr>
      `;
    });
  }

  // 4. Events
  eventsGrid.innerHTML = '';
  const filteredEvents = calendar.events.filter(ev =>
    ev.title.toLowerCase().includes(query) ||
    ev.dates.toLowerCase().includes(query)
  );

  if (filteredEvents.length === 0) {
    eventsGrid.innerHTML = `<p style="grid-column: 1/-1; color:#777;">No events found.</p>`;
  } else {
    filteredEvents.forEach(ev => {
      eventsGrid.innerHTML += `
        <div class="wiki-event-card">
          <div class="wiki-event-title">${ev.title}</div>
          <div class="wiki-event-date">Dates: ${ev.dates}</div>
        </div>
      `;
    });
  }

  resultCountStatus.textContent = query 
    ? `Filtered results matching "${query}"` 
    : `Showing complete university schedule for ${activeYearKey}`;
}

// Modal Handler
window.openExamModal = function(course, term1, term2) {
  modalBody.innerHTML = `
    <h3 style="font-family: var(--wiki-font-serif); margin-bottom: 8px;">Official Exam Guidelines (${activeYearKey})</h3>
    <p style="font-size: 0.88rem; color: #555; margin-bottom: 12px;"><strong>Course:</strong> ${course}</p>
    <div style="background: #f8f9fa; border: 1px solid #a2a9b1; padding: 10px; font-size: 0.85rem; margin-bottom: 12px;">
      <div><strong>1st Term Exam Date:</strong> ${term1}</div>
      <div><strong>2nd Term Exam Date:</strong> ${term2}</div>
    </div>
    <ul style="font-size: 0.82rem; padding-left: 18px; color: #333; line-height: 1.5;">
      <li>If a holiday falls at the commencement/end of the term, the next working day will be observed as the first/last day.</li>
      <li>Backlog students' examinations shall commence before regular students' examinations.</li>
      <li>This schedule also applies to external (distance learning) courses.</li>
    </ul>
  `;
  detailModal.style.display = 'flex';
};

// Event Listeners
calendarSearch.addEventListener('input', renderCalendarData);
categoryFilter.addEventListener('change', renderCalendarData);

resetBtn.addEventListener('click', () => {
  calendarSearch.value = '';
  categoryFilter.value = 'all';
  renderCalendarData();
});

modalCloseBtn.addEventListener('click', () => {
  detailModal.style.display = 'none';
});

detailModal.addEventListener('click', (e) => {
  if (e.target === detailModal) detailModal.style.display = 'none';
});

// Init
renderYearCards();
renderCalendarData();