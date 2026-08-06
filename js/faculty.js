// Advanced Faculty Dataset (Updated with Experience, Education & Awards)
const facultyDataset = [
  {
    id: "FAC-HOD-01",
    isHod: true,
    name: "Dr. Eleanor Vance",
    roleGroup: "hod",
    designation: "Head of Department & Senior Professor",
    qualification: "Ph.D. in Computer Science (Stanford University)",
    specialization: "Artificial Intelligence & Natural Language Processing",
    email: "e.vance@university.edu",
    phone: "+1 (555) 234-5678",
    office: "Alan Turing Block, Suite 301",
    orcid: "0000-0002-1825-0097",
    metrics: { experience: 18, patents: 4, activeGrants: "$1.4M" },
    avatarTheme: { bg: "#e6f0fa", accent: "#2a4b8d", symbol: "AI" },
    overview: "Dr. Eleanor Vance serves as the Head of Department. She has published over 90 peer-reviewed papers on neural machine translation and context-aware transformer models.",
    education: [
      "Ph.D. in Computer Science — Stanford University (2008)",
      "M.S. in Computer Science & Artificial Intelligence — MIT (2004)",
      "B.S. in Computer Engineering — UC Berkeley (2002)"
    ],
    awards: [
      "National Leadership in Computing Award (2024)",
      "IEEE Senior Member Recognition (2021)",
      "Outstanding Doctoral Dissertation Advisor Award (2018)"
    ],
    publications: [
      "Vance, E., & Miller, K. (2025). 'Contextual Attention Mechanisms in Large Scale LLMs.' Journal of AI Research, 45(3), 112-128.",
      "Vance, E., et al. (2023). 'Ethical Benchmarks in Generative Systems.' IEEE Transactions on Software Engineering, 18(1), 45-59."
    ],
    research: "Principal Investigator for $1.4M NSF Grant: 'Ethical & Scalable Neural Architectures' (2024–2027).",
    courses: ["CS-401: Advanced Artificial Intelligence", "CS-602: Deep Learning Architectures"]
  },
  {
    id: "FAC-PROF-02",
    isHod: false,
    name: "Prof. Marcus Brody",
    roleGroup: "professor",
    designation: "Professor of Cybersecurity",
    qualification: "Ph.D. in Information Security (MIT)",
    specialization: "Zero-Knowledge Cryptography & Distributed Systems",
    email: "m.brody@university.edu",
    phone: "+1 (555) 876-5432",
    office: "Cybernetics Wing, Room 104",
    orcid: "0000-0001-9234-1102",
    metrics: { experience: 14, patents: 3, activeGrants: "$850K" },
    avatarTheme: { bg: "#fef3c7", accent: "#b45309", symbol: "SEC" },
    overview: "Prof. Brody leads the Cryptographic Security Lab. His work centers on secure multi-party computation and zero-knowledge proof applications for enterprise consensus.",
    education: [
      "Ph.D. in Information Security — Massachusetts Institute of Technology (2012)",
      "M.S. in Applied Mathematics — Harvard University (2008)",
      "B.S. in Computer Science — Carnegie Mellon University (2006)"
    ],
    awards: [
      "Best Paper Award — Cryptography & Network Security Conference (2023)",
      "University Research Excellence Medal (2020)"
    ],
    publications: [
      "Brody, M. (2024). 'Non-Interactive Zero-Knowledge Proofs in Distributed Systems.' Cryptography Quarterly, 12(2), 204-219."
    ],
    research: "Director of the National Cyber Defense Infrastructure Project ($850K Grant).",
    courses: ["CS-305: Network Security Protocols", "CS-512: Applied Modern Cryptography"]
  },
  {
    id: "FAC-ASSOC-03",
    isHod: false,
    name: "Dr. Sophia Chen",
    roleGroup: "associate",
    designation: "Associate Professor",
    qualification: "Ph.D. in Data Science (UC Berkeley)",
    specialization: "Big Data Stream Analytics & Cloud Infrastructure",
    email: "s.chen@university.edu",
    phone: "+1 (555) 345-6789",
    office: "Data Engineering Center, Room 208",
    orcid: "0000-0003-4412-8871",
    metrics: { experience: 10, patents: 2, activeGrants: "$600K" },
    avatarTheme: { bg: "#e0e7ff", accent: "#4338ca", symbol: "DATA" },
    overview: "Dr. Sophia Chen focuses on low-latency stream processing pipelines and adaptive resource allocation in cloud environments.",
    education: [
      "Ph.D. in Data Science — UC Berkeley (2016)",
      "M.S. in Software Systems — Georgia Tech (2012)",
      "B.S. in Information Technology — University of Washington (2010)"
    ],
    awards: [
      "ACM Rising Star in Distributed Systems (2022)",
      "Faculty Excellence in Teaching Award (2019)"
    ],
    publications: [
      "Chen, S., & Zhang, R. (2025). 'Low-Latency Stream Partitioning in Cloud Clusters.' ACM Transactions on Database Systems."
    ],
    research: "Lead Researcher, Edge-Cloud Query Optimization Framework.",
    courses: ["DS-201: Foundations of Data Engineering", "DS-405: Cloud Computing Platforms"]
  },
  {
    id: "FAC-ASST-04",
    isHod: false,
    name: "Dr. Aris Thorne",
    roleGroup: "assistant",
    designation: "Assistant Professor",
    qualification: "Ph.D. in Quantum Computing (Oxford University)",
    specialization: "Quantum Algorithms & Fault-Tolerant Circuits",
    email: "a.thorne@university.edu",
    phone: "+1 (555) 456-7890",
    office: "Physics & Computing Annex, Room 112",
    orcid: "0000-0002-5561-9012",
    metrics: { experience: 6, patents: 1, activeGrants: "$420K" },
    avatarTheme: { bg: "#ecfdf5", accent: "#047857", symbol: "QNT" },
    overview: "Dr. Thorne's research explores error-correcting codes and compilation techniques for NISQ (Noisy Intermediate-Scale Quantum) processors.",
    education: [
      "Ph.D. in Quantum Computing — University of Oxford (2020)",
      "M.Phys. in Theoretical Physics — Imperial College London (2016)"
    ],
    awards: [
      "Early Career Quantum Researcher Fellowship (2023)",
      "Oxford Doctoral Fellowship Grant (2017)"
    ],
    publications: [
      "Thorne, A. (2024). 'Fault-Tolerant Quantum Circuit Synthesis.' Quantum Information Review, 8(4)."
    ],
    research: "Quantum Hardware Emulation Initiative Grantee.",
    courses: ["CS-480: Introduction to Quantum Computing", "CS-610: Quantum Algorithms"]
  }
];

// SVG Vector Generator (Infographic Geometric Portraits - No PNG/JPG Icons)
function generateSvgAvatar(theme, size = 90) {
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="${theme.bg}" stroke="${theme.accent}" stroke-width="2"/>
      <circle cx="50" cy="38" r="18" fill="${theme.accent}" opacity="0.85"/>
      <path d="M 22 82 C 22 62, 35 56, 50 56 C 65 56, 78 62, 78 82 Z" fill="${theme.accent}" opacity="0.85"/>
      <rect x="62" y="14" width="30" height="16" rx="3" fill="${theme.accent}"/>
      <text x="77" y="25" fill="#ffffff" font-size="9" font-weight="bold" font-family="sans-serif" text-anchor="middle">${theme.symbol}</text>
    </svg>
  `;
}

// DOM References
const pvAdvGrid = document.getElementById('pvAdvGrid');
const pvAdvSearch = document.getElementById('pvAdvSearch');
const pvAdvRoleFilter = document.getElementById('pvAdvRoleFilter');
const pvAdvSort = document.getElementById('pvAdvSort');
const pvAdvCountStatus = document.getElementById('pvAdvCountStatus');
const pvAdvResetBtn = document.getElementById('pvAdvResetBtn');
const pvAdvModal = document.getElementById('pvAdvModal');
const pvAdvModalClose = document.getElementById('pvAdvModalClose');
const pvAdvTabContent = document.getElementById('pvAdvTabContent');

let activeFacultyRecord = null;
let activeTabName = 'overview';

// Render Skeleton Screen
function renderSkeletons() {
  pvAdvGrid.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const skel = document.createElement('div');
    skel.className = 'pv-adv-card pv-adv-skeleton';
    skel.innerHTML = `
      <div class="pv-adv-card-top">
        <div class="pv-adv-skel-circle pv-adv-skel-box"></div>
        <div style="flex: 1;">
          <div class="pv-adv-skel-line pv-adv-skel-box" style="width: 70%;"></div>
          <div class="pv-adv-skel-line pv-adv-skel-box" style="width: 40%;"></div>
          <div class="pv-adv-skel-line pv-adv-skel-box" style="width: 90%;"></div>
        </div>
      </div>
      <div class="pv-adv-card-metrics">
        <div class="pv-adv-skel-box" style="height: 30px; margin: 0 10px;"></div>
        <div class="pv-adv-skel-box" style="height: 30px; margin: 0 10px;"></div>
        <div class="pv-adv-skel-box" style="height: 30px; margin: 0 10px;"></div>
      </div>
    `;
    pvAdvGrid.appendChild(skel);
  }
}

// Render Main Faculty Cards
function renderFacultyGrid(records) {
  pvAdvGrid.innerHTML = '';
  pvAdvCountStatus.textContent = `Showing ${records.length} faculty profile${records.length === 1 ? '' : 's'}`;

  if (records.length === 0) {
    pvAdvGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; background: white; border: 1px dashed var(--pv-adv-border-dark);">No faculty profiles match your specified search criteria.</div>`;
    return;
  }

  records.forEach(faculty => {
    const card = document.createElement('div');
    card.className = `pv-adv-card ${faculty.isHod ? 'pv-adv-card-hod' : ''}`;
    
    card.innerHTML = `
      <div class="pv-adv-card-top">
        <div class="pv-adv-infographic-avatar">
          ${generateSvgAvatar(faculty.avatarTheme, 80)}
        </div>
        <div class="pv-adv-card-details">
          <div class="pv-adv-card-name-row">
            <h3 class="pv-adv-card-name">${faculty.name}</h3>
            ${faculty.isHod ? `<span class="pv-adv-hod-badge">HOD</span>` : ''}
          </div>
          <div class="pv-adv-card-desig">${faculty.designation}</div>
          <div class="pv-adv-card-qual">${faculty.qualification}</div>
          <div class="pv-adv-card-spec">Area: ${faculty.specialization}</div>
        </div>
      </div>

      <div class="pv-adv-card-metrics">
        <div class="pv-adv-metric-item">
          <div class="pv-adv-metric-num">${faculty.metrics.experience} Yrs</div>
          <div class="pv-adv-metric-tag">Experience</div>
        </div>
        <div class="pv-adv-metric-item">
          <div class="pv-adv-metric-num">${faculty.metrics.patents}</div>
          <div class="pv-adv-metric-tag">Patents</div>
        </div>
        <div class="pv-adv-metric-item">
          <div class="pv-adv-metric-num">${faculty.metrics.activeGrants}</div>
          <div class="pv-adv-metric-tag">Funding</div>
        </div>
      </div>

      <div class="pv-adv-card-footer">
        <button class="pv-adv-profile-btn" onclick="openFacultyModal('${faculty.id}')">See Profile</button>
      </div>
    `;
    pvAdvGrid.appendChild(card);
  });
}

// Advanced Search, Filter, and Sorting Pipeline
function filterAndSortData() {
  const query = pvAdvSearch.value.toLowerCase().trim();
  const roleFilter = pvAdvRoleFilter.value;
  const sortBy = pvAdvSort.value;

  let filtered = facultyDataset.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(query) ||
                          faculty.specialization.toLowerCase().includes(query) ||
                          faculty.qualification.toLowerCase().includes(query) ||
                          faculty.courses.some(c => c.toLowerCase().includes(query));

    const matchesRole = roleFilter === 'all' || 
                       (roleFilter === 'hod' && faculty.isHod) ||
                       (roleFilter === faculty.roleGroup);

    return matchesSearch && matchesRole;
  });

  // Sorting
  filtered.sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'experience') return b.metrics.experience - a.metrics.experience;
    if (sortBy === 'patents') return b.metrics.patents - a.metrics.patents;
    if (sortBy === 'grants') {
      const gA = parseFloat(a.metrics.activeGrants.replace(/[^0-9.]/g, ''));
      const gB = parseFloat(b.metrics.activeGrants.replace(/[^0-9.]/g, ''));
      return gB - gA;
    }
    return 0;
  });

  renderFacultyGrid(filtered);
}

// Modal View Engine
function openFacultyModal(facultyId) {
  const faculty = facultyDataset.find(f => f.id === facultyId);
  if (!faculty) return;

  activeFacultyRecord = faculty;
  activeTabName = 'overview';

  // Infographic Vector Avatar
  document.getElementById('pvAdvModalAvatarContainer').innerHTML = generateSvgAvatar(faculty.avatarTheme, 100);

  // Text Metadata
  document.getElementById('pvAdvModalName').textContent = faculty.name;
  document.getElementById('pvAdvModalDesignation').textContent = faculty.designation;
  document.getElementById('pvAdvModalQual').textContent = faculty.qualification;
  document.getElementById('pvAdvModalSpec').textContent = `Specialization: ${faculty.specialization}`;

  // Contact Info
  document.getElementById('pvAdvModalEmail').textContent = faculty.email;
  document.getElementById('pvAdvModalPhone').textContent = faculty.phone;
  document.getElementById('pvAdvModalOffice').textContent = faculty.office;
  document.getElementById('pvAdvModalOrcid').textContent = faculty.orcid;

  // HOD Badge Toggle
  const hodBadge = document.getElementById('pvAdvModalHodBadge');
  hodBadge.style.display = faculty.isHod ? 'inline-block' : 'none';

  // Metrics Bar
  document.getElementById('pvAdvMetricExperience').textContent = `${faculty.metrics.experience} Yrs`;
  document.getElementById('pvAdvMetricPatents').textContent = faculty.metrics.patents;
  document.getElementById('pvAdvMetricGrants').textContent = faculty.metrics.activeGrants;

  renderTabContent();
  pvAdvModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function renderTabContent() {
  document.querySelectorAll('.pv-adv-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === activeTabName) {
      btn.classList.add('pv-adv-tab-active');
    } else {
      btn.classList.remove('pv-adv-tab-active');
    }
  });

  if (!activeFacultyRecord) return;

  if (activeTabName === 'overview') {
    pvAdvTabContent.innerHTML = `<p>${activeFacultyRecord.overview}</p>`;
  } else if (activeTabName === 'education') {
    const list = activeFacultyRecord.education.map(e => `<li>${e}</li>`).join('');
    pvAdvTabContent.innerHTML = `<ul>${list}</ul>`;
  } else if (activeTabName === 'awards') {
    const list = activeFacultyRecord.awards.map(a => `<li>${a}</li>`).join('');
    pvAdvTabContent.innerHTML = `<ul>${list}</ul>`;
  } else if (activeTabName === 'publications') {
    const list = activeFacultyRecord.publications.map(p => `<li>${p}</li>`).join('');
    pvAdvTabContent.innerHTML = `<ul>${list}</ul>`;
  } else if (activeTabName === 'research') {
    pvAdvTabContent.innerHTML = `<p>${activeFacultyRecord.research}</p>`;
  } else if (activeTabName === 'courses') {
    const list = activeFacultyRecord.courses.map(c => `<li>${c}</li>`).join('');
    pvAdvTabContent.innerHTML = `<ul>${list}</ul>`;
  }
}

// Event Listeners
pvAdvSearch.addEventListener('input', filterAndSortData);
pvAdvRoleFilter.addEventListener('change', filterAndSortData);
pvAdvSort.addEventListener('change', filterAndSortData);

pvAdvResetBtn.addEventListener('click', () => {
  pvAdvSearch.value = '';
  pvAdvRoleFilter.value = 'all';
  pvAdvSort.value = 'name';
  filterAndSortData();
});

document.getElementById('pvAdvModalTabs').addEventListener('click', (e) => {
  if (e.target.classList.contains('pv-adv-tab-btn')) {
    activeTabName = e.target.getAttribute('data-tab');
    renderTabContent();
  }
});

pvAdvModalClose.addEventListener('click', () => {
  pvAdvModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Initialization Sequence
renderSkeletons();
setTimeout(() => {
  filterAndSortData();
}, 1000);