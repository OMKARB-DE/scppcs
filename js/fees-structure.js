// Complete Itemized Particulars
const feeParticulars = [
  { id: 1, name: "Tuition Fees", key: "tuition" },
  { id: 2, name: "Admission Fees", key: "admission" },
  { id: 3, name: "Registration Fees", key: "registration" },
  { id: 4, name: "Library Deposit", key: "lib_deposit" },
  { id: 5, name: "Library Fees", key: "lib_fees" },
  { id: 6, name: "Laboratory Fees", key: "lab_fees" },
  { id: 7, name: "Magazine Fees", key: "magazine" },
  { id: 8, name: "SAF Fees", key: "saf" },
  { id: 9, name: "College Games Fees", key: "games" },
  { id: 10, name: "Gathering Fees", key: "gathering" },
  { id: 11, name: "Student Welfare Fees", key: "welfare" },
  { id: 12, name: "College Development Fees", key: "dev_fees" },
  { id: 13, name: "Identity Card Fees", key: "id_card" },
  { id: 14, name: "Student Forum Fees", key: "forum" },
  { id: 15, name: "Home Exam Fees", key: "home_exam" },
  { id: 16, name: "Medical Exam Fees", key: "medical_exam" },
  { id: 17, name: "University Sports Fees", key: "uni_sports" },
  { id: 18, name: "Other Fees", key: "other_fees" },
  { id: 19, name: "Book Bank", key: "book_bank" },
  { id: 20, name: "Youth Festival Fees", key: "youth_fest" },
  { id: 21, name: "Ashwamedh Fees", key: "ashwamedh" },
  { id: 22, name: "Avishkar & NSS Fees", key: "avishkar_nss" },
  { id: 23, name: "Emergency Fees", key: "emergency" },
  { id: 24, name: "Student Insurance Fees", key: "insurance" },
  { id: 25, name: "Eligibility Fees", key: "eligibility" },
  { id: 26, name: "Chancellors Office Activities Fees", key: "chancellor" },
  { id: 27, name: "Zonal Sports Council Fees", key: "zonal_sports" },
  { id: 28, name: "Processing Fees VDF", key: "processing" },
  { id: 29, name: "Internet Fees", key: "internet" },
  { id: 30, name: "Extra Curricular / Activity Fees", key: "extracurricular" }
];

// Course Master Dataset mapped from document sources
const coursesData = {
  UG: [
    {
      id: "bca_bcs",
      name: "B.C.A / B.C.S",
      fees: {
        EBC: { tuition: 0, admission: 50, registration: 20, lib_deposit: 100, lib_fees: 150, lab_fees: 1500, magazine: 50, saf: 10, games: 75, gathering: 70, welfare: 60, dev_fees: 75, id_card: 15, forum: 20, home_exam: 35, medical_exam: 5, uni_sports: 75, other_fees: 25, book_bank: 10, youth_fest: 50, ashwamedh: 30, avishkar_nss: 20, emergency: 15, insurance: 25, eligibility: 132, chancellor: 32, zonal_sports: 50, processing: 100, internet: 600, extracurricular: 365, total: 3764 },
        PAYING: { tuition: 17600, admission: 50, registration: 20, lib_deposit: 100, lib_fees: 150, lab_fees: 1500, magazine: 50, saf: 10, games: 75, gathering: 70, welfare: 60, dev_fees: 75, id_card: 15, forum: 20, home_exam: 35, medical_exam: 5, uni_sports: 75, other_fees: 25, book_bank: 10, youth_fest: 50, ashwamedh: 30, avishkar_nss: 20, emergency: 15, insurance: 25, eligibility: 132, chancellor: 32, zonal_sports: 50, processing: 100, internet: 600, extracurricular: 365, total: 21364 }
      }
    },
    {
      id: "ds_bba",
      name: "B.Sc. Data Science / B.B.A",
      fees: {
        EBC: { tuition: 0, admission: 50, registration: 20, lib_deposit: 100, lib_fees: 150, lab_fees: 1500, magazine: 50, saf: 10, games: 75, gathering: 70, welfare: 60, dev_fees: 75, id_card: 15, forum: 20, home_exam: 35, medical_exam: 5, uni_sports: 75, other_fees: 25, book_bank: 10, youth_fest: 50, ashwamedh: 30, avishkar_nss: 20, emergency: 15, insurance: 25, eligibility: 0, chancellor: 32, zonal_sports: 50, processing: 100, internet: 600, extracurricular: 365, total: 3632 },
        PAYING: { tuition: 17600, admission: 50, registration: 20, lib_deposit: 100, lib_fees: 150, lab_fees: 1500, magazine: 50, saf: 10, games: 75, gathering: 70, welfare: 60, dev_fees: 75, id_card: 15, forum: 20, home_exam: 35, medical_exam: 5, uni_sports: 75, other_fees: 25, book_bank: 10, youth_fest: 50, ashwamedh: 30, avishkar_nss: 20, emergency: 15, insurance: 25, eligibility: 0, chancellor: 32, zonal_sports: 50, processing: 100, internet: 600, extracurricular: 365, total: 21232 }
      }
    }
  ],
  PG: [
    {
      id: "msc_cs",
      name: "M.Sc. Computer Science / Chemistry",
      fees: {
        EBC: { tuition: 24200, admission: 50, registration: 30, lib_deposit: 100, lib_fees: 150, lab_fees: 1500, magazine: 50, saf: 10, games: 75, gathering: 70, welfare: 60, dev_fees: 75, id_card: 15, forum: 20, home_exam: 35, medical_exam: 5, uni_sports: 75, other_fees: 25, book_bank: 10, youth_fest: 50, ashwamedh: 30, avishkar_nss: 20, emergency: 15, insurance: 25, eligibility: 0, chancellor: 32, zonal_sports: 50, processing: 200, internet: 600, extracurricular: 365, total: 27942 },
        PAYING: { tuition: 24200, admission: 50, registration: 30, lib_deposit: 100, lib_fees: 150, lab_fees: 1500, magazine: 50, saf: 10, games: 75, gathering: 70, welfare: 60, dev_fees: 75, id_card: 15, forum: 20, home_exam: 35, medical_exam: 5, uni_sports: 75, other_fees: 25, book_bank: 10, youth_fest: 50, ashwamedh: 30, avishkar_nss: 20, emergency: 15, insurance: 25, eligibility: 132, chancellor: 32, zonal_sports: 50, processing: 200, internet: 600, extracurricular: 365, total: 28074 }
      }
    },
    {
      id: "msc_math",
      name: "M.Sc. Mathematics",
      fees: {
        EBC: { tuition: 9350, admission: 50, registration: 30, lib_deposit: 100, lib_fees: 150, lab_fees: 1500, magazine: 50, saf: 10, games: 75, gathering: 70, welfare: 60, dev_fees: 75, id_card: 15, forum: 20, home_exam: 35, medical_exam: 5, uni_sports: 75, other_fees: 25, book_bank: 10, youth_fest: 50, ashwamedh: 30, avishkar_nss: 20, emergency: 15, insurance: 25, eligibility: 0, chancellor: 32, zonal_sports: 50, processing: 200, internet: 600, extracurricular: 365, total: 13092 },
        PAYING: { tuition: 9350, admission: 50, registration: 30, lib_deposit: 100, lib_fees: 150, lab_fees: 1500, magazine: 50, saf: 10, games: 75, gathering: 70, welfare: 60, dev_fees: 75, id_card: 15, forum: 20, home_exam: 35, medical_exam: 5, uni_sports: 75, other_fees: 25, book_bank: 10, youth_fest: 50, ashwamedh: 30, avishkar_nss: 20, emergency: 15, insurance: 25, eligibility: 132, chancellor: 32, zonal_sports: 50, processing: 200, internet: 600, extracurricular: 365, total: 13224 }
      }
    }
  ]
};

let currentLevel = 'UG';

// DOM Elements
const tabUgBtn = document.getElementById('tabUgBtn');
const tabPgBtn = document.getElementById('tabPgBtn');
const courseSelect = document.getElementById('courseSelect');
const categorySelect = document.getElementById('categorySelect');
const printBtn = document.getElementById('printBtn');

function init() {
  setupEventListeners();
  populateCourseOptions();
  renderFeeView();
}

function setupEventListeners() {
  tabUgBtn.addEventListener('click', () => switchCategory('UG'));
  tabPgBtn.addEventListener('click', () => switchCategory('PG'));
  courseSelect.addEventListener('change', renderFeeView);
  categorySelect.addEventListener('change', renderFeeView);
  printBtn.addEventListener('click', () => window.print());
}

function switchCategory(level) {
  currentLevel = level;
  tabUgBtn.classList.toggle('active', level === 'UG');
  tabPgBtn.classList.toggle('active', level === 'PG');
  
  populateCourseOptions();
  renderFeeView();
}

function populateCourseOptions() {
  courseSelect.innerHTML = '';
  coursesData[currentLevel].forEach(course => {
    courseSelect.innerHTML += `<option value="${course.id}">${course.name}</option>`;
  });
}

function renderFeeView() {
  renderSummaryCards();
  renderItemizedTable();
}

function renderSummaryCards() {
  const container = document.getElementById('courseSummaryGrid');
  container.innerHTML = '';

  coursesData[currentLevel].forEach(course => {
    container.innerHTML += `
      <div class="fee-card">
        <h3><i class="fa-solid fa-graduation-cap"></i> ${course.name}</h3>
        <div class="fee-amount-group">
          <span>Paying Category:</span>
          <span class="amount-badge">₹${course.fees.PAYING.total.toLocaleString('en-IN')}</span>
        </div>
        <div class="fee-amount-group">
          <span>EBC / Reserved Category:</span>
          <span class="amount-badge amount-ebc">₹${course.fees.EBC.total.toLocaleString('en-IN')}</span>
        </div>
      </div>
    `;
  });
}

function renderItemizedTable() {
  const courseId = courseSelect.value;
  const category = categorySelect.value;
  
  const course = coursesData[currentLevel].find(c => c.id === courseId);
  if (!course) return;

  const activeFees = course.fees[category];
  
  document.getElementById('breakdownTitle').textContent = 
    `Itemized Fee Breakup — ${course.name} (${category} Category)`;

  const thead = document.getElementById('feeTableHeader');
  thead.innerHTML = `
    <tr>
      <th style="width: 80px;">Sr. No</th>
      <th>Fee Particulars</th>
      <th style="width: 180px; text-align: right;">Amount (₹)</th>
    </tr>
  `;

  const tbody = document.getElementById('feeTableBody');
  tbody.innerHTML = '';

  feeParticulars.forEach(p => {
    const val = activeFees[p.key] || 0;
    const isTuition = p.key === 'tuition' ? 'class="tuition-highlight"' : '';
    
    tbody.innerHTML += `
      <tr ${isTuition}>
        <td style="text-align: center;">${p.id}</td>
        <td>${p.name}</td>
        <td style="text-align: right;">${val === 0 ? 'Nil' : '₹' + val.toLocaleString('en-IN')}</td>
      </tr>
    `;
  });

  const tfoot = document.getElementById('feeTableFooter');
  tfoot.innerHTML = `
    <tr style="background: var(--wiki-bg-page); font-weight: bold; font-size: 0.95rem;">
      <td colspan="2" style="text-align: right; padding: 10px;">TOTAL FEES PAYABLE:</td>
      <td style="text-align: right; color: var(--primary-color); padding: 10px;">₹${activeFees.total.toLocaleString('en-IN')}</td>
    </tr>
  `;
}

document.addEventListener('DOMContentLoaded', init);