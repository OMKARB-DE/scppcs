// Expanded Sample Notices Dataset
const noticesData = [
  {
    id: "NOT-2026-001",
    title: "Mid-Semester Examination Schedule for Spring Session 2026",
    category: "examinations",
    categoryName: "Examinations",
    date: "August 04, 2026",
    summary: "The mid-semester examinations for all undergraduate and postgraduate programs commence on August 20, 2026. Detailed seating arrangements and slot timetables are attached.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: "NOT-2026-002",
    title: "Application Call for Merit-cum-Means Scholarships 2026",
    category: "general",
    categoryName: "General Circulars",
    date: "July 28, 2026",
    summary: "Eligible students from all departments can apply for the university merit-cum-means financial aid. The deadline for online form submission is August 15, 2026.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: "NOT-2026-003",
    title: "M.Tech Special Spot Admission Round Guidelines 2026",
    category: "admissions",
    categoryName: "Admissions",
    date: "July 22, 2026",
    summary: "Instructions for candidates participating in the final spot round admission for remaining vacant seats across specialized engineering departments.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: "NOT-2026-004",
    title: "Annual University Tech Fest & Innovation Hackathon Registration",
    category: "events",
    categoryName: "Events & Workshops",
    date: "July 15, 2026",
    summary: "Registrations are now open for teams participating in the national-level student innovation challenge. Cash prizes and industry mentorship await winners.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: "NOT-2026-005",
    title: "Re-evaluation & Answer Script Verification Request Window",
    category: "examinations",
    categoryName: "Examinations",
    date: "July 10, 2026",
    summary: "Students seeking verification or re-evaluation of End-Semester answer scripts for the Winter term must submit their requests online by July 20, 2026.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: "NOT-2026-006",
    title: "Revised Hostel Accommodations & Room Allocation Lists",
    category: "general",
    categoryName: "General Circulars",
    date: "July 02, 2026",
    summary: "The official hostel room allotment list for incoming 2nd and 3rd-year students is now released. Complete fee clearance is required prior to key pickup.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: "NOT-2026-007",
    title: "International AI & Machine Learning Workshop Registration",
    category: "events",
    categoryName: "Events & Workshops",
    date: "June 25, 2026",
    summary: "A 3-day hands-on workshop on Deep Learning applications conducted by visiting IEEE fellows. Open to all CS & IT department students.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: "NOT-2026-008",
    title: "Ph.D. Entrance Examination & Interview Schedule Autumn 2026",
    category: "admissions",
    categoryName: "Admissions",
    date: "June 18, 2026",
    summary: "Shortlisted candidates for Ph.D. research interviews across Sciences and Humanities are requested to verify their reporting slots and venue details.",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  }
];

// DOM References
const pvNoticesGrid = document.getElementById('pvNoticesGrid');
const pvNoticeSearch = document.getElementById('pvNoticeSearch');
const pvCategoryTabs = document.getElementById('pvCategoryTabs');
const pvNoticeStatus = document.getElementById('pvNoticeStatus');
const pvViewSwitcher = document.getElementById('pvViewSwitcher');
const pvNoticeModal = document.getElementById('pvNoticeModal');
const pvPdfFrame = document.getElementById('pvPdfFrame');
const pvModalTitle = document.getElementById('pvModalTitle');
const pvModalClose = document.getElementById('pvModalClose');

let currentCategory = 'all';
let currentView = 'grid'; // Grid, Tile, or List

// Render Notices Function
function renderNotices(notices) {
  pvNoticesGrid.innerHTML = '';
  pvNoticeStatus.textContent = `Showing ${notices.length} notice${notices.length === 1 ? '' : 's'}`;

  if (notices.length === 0) {
    pvNoticesGrid.innerHTML = `<div class="pv-no-results">No notices found matching your search term or chosen category tab.</div>`;
    return;
  }

  notices.forEach(notice => {
    const card = document.createElement('div');
    card.className = 'pv-notice-card';
    card.innerHTML = `
      <div class="pv-card-main">
        <div class="pv-card-meta">
          <span class="pv-category-badge">${notice.categoryName}</span>
          <span class="pv-published-date">📅 ${notice.date}</span>
        </div>
        <h3 class="pv-notice-title">${notice.title}</h3>
        <p class="pv-notice-summary">${notice.summary}</p>
      </div>
      <div class="pv-card-actions">
        <button class="pv-btn pv-btn-view" onclick="openNoticeModal('${notice.pdfUrl}', '${notice.title}')">View PDF</button>
        <a class="pv-btn pv-btn-download" href="${notice.pdfUrl}" target="_blank" download="${notice.id}.pdf">Download</a>
      </div>
    `;
    pvNoticesGrid.appendChild(card);
  });
}

// Filter Function
function filterNotices() {
  const searchTerm = pvNoticeSearch.value.toLowerCase().trim();

  const filtered = noticesData.filter(notice => {
    const matchesCategory = currentCategory === 'all' || notice.category === currentCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm) ||
                          notice.summary.toLowerCase().includes(searchTerm) ||
                          notice.id.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  renderNotices(filtered);
}

// Switch View Mode Layout
function setViewMode(view) {
  currentView = view;
  pvNoticesGrid.className = `pv-notices-grid pv-view-${view}`;

  document.querySelectorAll('.pv-view-btn').forEach(btn => {
    if (btn.getAttribute('data-view') === view) {
      btn.classList.add('pv-view-active');
    } else {
      btn.classList.remove('pv-view-active');
    }
  });
}

// Modal View PDF Functions
function openNoticeModal(url, title) {
  pvModalTitle.textContent = title;
  pvPdfFrame.src = url;
  pvNoticeModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeNoticeModal() {
  pvNoticeModal.style.display = 'none';
  pvPdfFrame.src = '';
  document.body.style.overflow = 'auto';
}

// Event Listeners
pvNoticeSearch.addEventListener('input', filterNotices);

pvCategoryTabs.addEventListener('click', (e) => {
  if (e.target.classList.contains('pv-tab-btn')) {
    document.querySelectorAll('.pv-tab-btn').forEach(btn => btn.classList.remove('pv-tab-active'));
    e.target.classList.add('pv-tab-active');
    currentCategory = e.target.getAttribute('data-category');
    filterNotices();
  }
});

pvViewSwitcher.addEventListener('click', (e) => {
  const btn = e.target.closest('.pv-view-btn');
  if (btn) {
    const view = btn.getAttribute('data-view');
    setViewMode(view);
  }
});

pvModalClose.addEventListener('click', closeNoticeModal);

// Initial Load
renderNotices(noticesData);