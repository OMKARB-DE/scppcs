// Question Papers Dataset
const papersData = [
  {
    id: 1,
    name: "Data Structures & Algorithms",
    code: "CS302",
    marks: 70,
    duration: "3 Hours",
    year: "2024",
    class: "B.Tech",
    sem: "Sem 3",
    season: "Winter",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 2,
    name: "Database Management Systems",
    code: "CS401",
    marks: 80,
    duration: "3 Hours",
    year: "2024",
    class: "B.Tech",
    sem: "Sem 4",
    season: "Summer",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 3,
    name: "Discrete Mathematics",
    code: "MA201",
    marks: 60,
    duration: "2.5 Hours",
    year: "2023",
    class: "B.Sc",
    sem: "Sem 2",
    season: "Winter",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 4,
    name: "Computer Networks",
    code: "BCA502",
    marks: 75,
    duration: "3 Hours",
    year: "2025",
    class: "BCA",
    sem: "Sem 5",
    season: "Summer",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  }
];

// DOM Elements
const papersGrid = document.getElementById('papersGrid');
const searchInput = document.getElementById('searchInput');
const filterClass = document.getElementById('filterClass');
const filterSem = document.getElementById('filterSem');
const filterYear = document.getElementById('filterYear');
const filterSeason = document.getElementById('filterSeason');
const resultsCount = document.getElementById('resultsCount');
const viewerModal = document.getElementById('viewerModal');
const pdfFrame = document.getElementById('pdfFrame');
const viewerTitle = document.getElementById('viewerTitle');
const btnCloseModal = document.getElementById('btnCloseModal');

// Render Paper Cards
function renderPapers(papers) {
  papersGrid.innerHTML = '';
  resultsCount.textContent = `Showing ${papers.length} paper${papers.length === 1 ? '' : 's'}`;

  if (papers.length === 0) {
    papersGrid.innerHTML = `<div class="no-results">No question papers match your current search and filter criteria.</div>`;
    return;
  }

  papers.forEach(paper => {
    const card = document.createElement('div');
    card.className = 'paper-card';
    card.innerHTML = `
      <div>
        <div class="card-header">
          <h3 class="paper-name">${paper.name}</h3>
          <span class="paper-code-badge">${paper.code}</span>
        </div>
        <div class="meta-grid">
          <div class="meta-item">
            <span class="meta-label">Class</span>
            <span class="meta-value">${paper.class}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Semester</span>
            <span class="meta-value">${paper.sem}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Year & Season</span>
            <span class="meta-value">${paper.year} (${paper.season})</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Marks / Duration</span>
            <span class="meta-value">${paper.marks} M / ${paper.duration}</span>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-view" onclick="openPdfViewer('${paper.pdfUrl}', '${paper.name} (${paper.code})')">View PDF</button>
        <a class="btn btn-download" href="${paper.pdfUrl}" target="_blank" rel="noopener noreferrer" download="${paper.code}_${paper.year}.pdf">Download</a>
      </div>
    `;
    papersGrid.appendChild(card);
  });
}

// Filter Logic
function filterPapers() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedClass = filterClass.value;
  const selectedSem = filterSem.value;
  const selectedYear = filterYear.value;
  const selectedSeason = filterSeason.value;

  const filtered = papersData.filter(paper => {
    const matchesSearch = paper.name.toLowerCase().includes(searchTerm) || 
                          paper.code.toLowerCase().includes(searchTerm);
    const matchesClass = !selectedClass || paper.class === selectedClass;
    const matchesSem = !selectedSem || paper.sem === selectedSem;
    const matchesYear = !selectedYear || paper.year === selectedYear;
    const matchesSeason = !selectedSeason || paper.season === selectedSeason;

    return matchesSearch && matchesClass && matchesSem && matchesYear && matchesSeason;
  });

  renderPapers(filtered);
}

// Modal In-Page PDF Controls
function openPdfViewer(url, title) {
  viewerTitle.textContent = title;
  pdfFrame.src = url;
  viewerModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePdfViewer() {
  viewerModal.style.display = 'none';
  pdfFrame.src = '';
  document.body.style.overflow = 'auto';
}

// Event Listeners
searchInput.addEventListener('input', filterPapers);
filterClass.addEventListener('change', filterPapers);
filterSem.addEventListener('change', filterPapers);
filterYear.addEventListener('change', filterPapers);
filterSeason.addEventListener('change', filterPapers);
btnCloseModal.addEventListener('click', closePdfViewer);

// Initial Render
renderPapers(papersData);