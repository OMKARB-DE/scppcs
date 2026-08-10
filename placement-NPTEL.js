/* ==========================================================================
   COMPREHENSIVE DATA STORE (PLACEMENTS & NPTEL BY YEAR & COURSE)
   ========================================================================== */
const prospectusPortalData = {
    placement: [
        {
            year: "2026",
            course: "M.Sc Computer Science",
            eligible: 45,
            appeared: 44,
            placed: 43,
            percent: "97.7%",
            highest: "₹18.5 LPA",
            average: "₹8.4 LPA",
            topRecruiters: "Microsoft, Google, Amazon",
            companiesVisited: 28,
            offers: 52,
            internships: 40,
            students: [
                { name: "Aarav Sharma", roll: "MSC2601", class: "Final Year", company: "Microsoft", role: "SDE-1", package: "₹18.5 LPA", location: "Bangalore", date: "12 Jan 2026", linkedin: "linkedin.com" },
                { name: "Priya Patel", roll: "MSC2602", class: "Final Year", company: "Google", role: "Cloud Engineer", package: "₹17.0 LPA", location: "Hyderabad", date: "15 Jan 2026", linkedin: "linkedin.com" },
                { name: "Rohan Verma", roll: "MSC2603", class: "Final Year", company: "Amazon", role: "Software Engineer", package: "₹16.5 LPA", location: "Chennai", date: "20 Jan 2026", linkedin: "linkedin.com" }
            ]
        },
        {
            year: "2025",
            course: "M.Sc Computer Science",
            eligible: 40,
            appeared: 39,
            placed: 38,
            percent: "97.4%",
            highest: "₹16.0 LPA",
            average: "₹7.8 LPA",
            topRecruiters: "Google, TCS, Infosys",
            companiesVisited: 25,
            offers: 45,
            internships: 35,
            students: [
                { name: "Kunal Shah", roll: "MSC2501", class: "Final Year", company: "Google", role: "SDE", package: "₹16.0 LPA", location: "Bangalore", date: "10 Feb 2025", linkedin: "linkedin.com" }
            ]
        },
        {
            year: "2026",
            course: "B.Sc Computer Science",
            eligible: 60,
            appeared: 58,
            placed: 55,
            percent: "94.8%",
            highest: "₹14.0 LPA",
            average: "₹6.8 LPA",
            topRecruiters: "Google, Infosys, Wipro",
            companiesVisited: 32,
            offers: 64,
            internships: 50,
            students: [
                { name: "Neha Singh", roll: "BSC2601", class: "Final Year", company: "Google", role: "Data Analyst", package: "₹14.0 LPA", location: "Bangalore", date: "10 Feb 2026", linkedin: "linkedin.com" }
            ]
        },
        {
            year: "2026",
            course: "BCA",
            eligible: 45,
            appeared: 42,
            placed: 40,
            percent: "95.2%",
            highest: "₹12.0 LPA",
            average: "₹6.0 LPA",
            topRecruiters: "TCS, Cognizant, Wipro",
            companiesVisited: 24,
            offers: 44,
            internships: 38,
            students: [
                { name: "Amit Kumar", roll: "BCA2601", class: "Final Year", company: "TCS", role: "Digital Innovator", package: "₹12.0 LPA", location: "Mumbai", date: "05 Feb 2026", linkedin: "linkedin.com" }
            ]
        },
        {
            year: "2026",
            course: "B.Sc Data Science",
            eligible: 30,
            appeared: 28,
            placed: 27,
            percent: "96.4%",
            highest: "₹15.0 LPA",
            average: "₹7.5 LPA",
            topRecruiters: "Amazon, Microsoft, Flipkart",
            companiesVisited: 20,
            offers: 32,
            internships: 25,
            students: [
                { name: "Sneha Rao", roll: "BSD2601", class: "Final Year", company: "Amazon", role: "Data Scientist", package: "₹15.0 LPA", location: "Hyderabad", date: "18 Jan 2026", linkedin: "linkedin.com" }
            ]
        }
    ],
    nptel: [
        {
            year: "2026",
            course: "Python for Data Science",
            registered: 70,
            appeared: 68,
            passed: 65,
            passPercent: "95.5%",
            highestScore: "98%",
            averageScore: "82.4%",
            elite: 25,
            silver: 15,
            gold: 10,
            topper: "Priya Patel",
            students: [
                { name: "Priya Patel", roll: "MSC2602", class: "Final Year", institute: "IIT Madras", score: "98/100", percentage: "98%", certificate: "Elite + Gold", link: "#" },
                { name: "Aarav Sharma", roll: "MSC2601", class: "Final Year", institute: "IIT Madras", score: "94/100", percentage: "94%", certificate: "Elite + Gold", link: "#" }
            ]
        },
        {
            year: "2025",
            course: "Python for Data Science",
            registered: 60,
            appeared: 58,
            passed: 55,
            passPercent: "94.8%",
            highestScore: "97%",
            averageScore: "80.2%",
            elite: 22,
            silver: 12,
            gold: 8,
            topper: "Kunal Shah",
            students: [
                { name: "Kunal Shah", roll: "MSC2501", class: "Final Year", institute: "IIT Madras", score: "97/100", percentage: "97%", certificate: "Elite + Gold", link: "#" }
            ]
        },
        {
            year: "2026",
            course: "Artificial Intelligence",
            registered: 50,
            appeared: 48,
            passed: 45,
            passPercent: "93.7%",
            highestScore: "97%",
            averageScore: "80.1%",
            elite: 20,
            silver: 10,
            gold: 8,
            topper: "Neha Singh",
            students: [
                { name: "Neha Singh", roll: "BSC2601", class: "Final Year", institute: "IIT Kharagpur", score: "97/100", percentage: "97%", certificate: "Elite + Gold", link: "#" }
            ]
        },
        {
            year: "2026",
            course: "Cloud Computing",
            registered: 45,
            appeared: 42,
            passed: 39,
            passPercent: "92.8%",
            highestScore: "95%",
            averageScore: "78.5%",
            elite: 18,
            silver: 10,
            gold: 5,
            topper: "Rohan Verma",
            students: [
                { name: "Rohan Verma", roll: "MSC2603", class: "Final Year", institute: "IIT Bombay", score: "95/100", percentage: "95%", certificate: "Elite + Gold", link: "#" }
            ]
        },
        {
            year: "2026",
            course: "Cyber Security",
            registered: 35,
            appeared: 30,
            passed: 27,
            passPercent: "90.0%",
            highestScore: "92%",
            averageScore: "75.8%",
            elite: 10,
            silver: 4,
            gold: 2,
            topper: "Amit Kumar",
            students: [
                { name: "Amit Kumar", roll: "BCA2601", class: "Final Year", institute: "IIT Kanpur", score: "92/100", percentage: "92%", certificate: "Elite + Silver", link: "#" }
            ]
        }
    ]
};

let selectedPlacementCourseTab = "All";
let selectedNptelCourseTab = "All";

document.addEventListener("DOMContentLoaded", () => {
    renderPlacementCards(prospectusPortalData.placement);
    renderNptelCards(prospectusPortalData.nptel);
});

/* ==========================================================================
   MAIN TAB SWITCHING (PLACEMENT / NPTEL)
   ========================================================================== */
function switchMainTab(tabName, btnElement) {
    document.querySelectorAll(".portal-tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".portal-content-section").forEach(sec => sec.classList.remove("active"));

    btnElement.classList.add("active");
    document.getElementById(tabName + "Section").classList.add("active");
}

/* ==========================================================================
   PLACEMENT RENDERING & FILTERING
   ========================================================================== */
function selectPlacementCourse(courseName, btnElement) {
    selectedPlacementCourseTab = courseName;
    document.querySelectorAll("#placementSection .course-tab-pill").forEach(p => p.classList.remove("active"));
    btnElement.classList.add("active");
    filterPlacementData();
}

function setPlacementView(viewType, btnElement) {
    document.querySelectorAll("#placementSection .view-btn").forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");
    
    let container = document.getElementById("placementCardsContainer");
    container.className = `reports-grid ${viewType}-view`;
}

function filterPlacementData() {
    let searchQuery = document.getElementById("placementSearch").value.toLowerCase();
    let yearQuery = document.getElementById("placementYearFilter").value;
    let statusQuery = document.getElementById("placementStatusFilter").value;
    let companyQuery = document.getElementById("placementCompanyFilter").value;

    let filtered = prospectusPortalData.placement.filter(item => {
        let matchCourse = (selectedPlacementCourseTab === "All" || item.course === selectedPlacementCourseTab);
        let matchYear = (!yearQuery || item.year === yearQuery);
        let matchSearch = (!searchQuery || item.course.toLowerCase().includes(searchQuery) || item.year.includes(searchQuery));
        return matchCourse && matchYear && matchSearch;
    });

    renderPlacementCards(filtered);
}

function resetPlacementFilters() {
    document.getElementById("placementSearch").value = "";
    document.getElementById("placementYearFilter").value = "";
    document.getElementById("placementStatusFilter").value = "";
    document.getElementById("placementCompanyFilter").value = "";
    selectedPlacementCourseTab = "All";
    document.querySelectorAll("#placementSection .course-tab-pill")[0].classList.add("active");
    renderPlacementCards(prospectusPortalData.placement);
}

function renderPlacementCards(dataArray) {
    let container = document.getElementById("placementCardsContainer");
    container.innerHTML = "";

    if(dataArray.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px; color:var(--text-muted);">No placement records found matching criteria.</p>`;
        return;
    }

    dataArray.forEach(item => {
        container.innerHTML += `
            <div class="prospectus-report-card">
                <div>
                    <div class="report-card-header">
                        <div>
                            <h3>${item.course}</h3>
                            <span>Department of Computer Science</span>
                        </div>
                        <div class="year-badge"><i class="fas fa-calendar-alt"></i> ${item.year} Report</div>
                    </div>
                    <div class="metrics-grid-card">
                        <div class="metric-box"><span class="m-val">${item.eligible}</span><span class="m-lbl">Eligible</span></div>
                        <div class="metric-box"><span class="m-val">${item.appeared}</span><span class="m-lbl">Appeared</span></div>
                        <div class="metric-box"><span class="m-val">${item.placed}</span><span class="m-lbl">Placed</span></div>
                        <div class="metric-box highlight"><span class="m-val">${item.percent}</span><span class="m-lbl">Placement %</span></div>
                        <div class="metric-box"><span class="m-val">${item.highest}</span><span class="m-lbl">Highest Pkg</span></div>
                        <div class="metric-box"><span class="m-val">${item.average}</span><span class="m-lbl">Average Pkg</span></div>
                        <div class="metric-box"><span class="m-val">${item.companiesVisited}</span><span class="m-lbl">Companies</span></div>
                        <div class="metric-box"><span class="m-val">${item.offers}</span><span class="m-lbl">Offers</span></div>
                    </div>
                </div>
                <div class="card-footer-action">
                    <div class="top-recruiter-text">Top: <strong>${item.topRecruiters}</strong></div>
                    <button class="view-details-action-btn ripple-btn" onclick="openPlacementModal('${item.year}', '${item.course}')">
                        <i class="fas fa-external-link-alt"></i> View Details
                    </button>
                </div>
            </div>
        `;
    });
}

/* ==========================================================================
   NPTEL RENDERING & FILTERING
   ========================================================================== */
function selectNptelCourse(courseName, btnElement) {
    selectedNptelCourseTab = courseName;
    document.querySelectorAll("#nptelSection .course-tab-pill").forEach(p => p.classList.remove("active"));
    btnElement.classList.add("active");
    filterNptelData();
}

function setNptelView(viewType, btnElement) {
    document.querySelectorAll("#nptelSection .view-btn").forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");
    
    let container = document.getElementById("nptelCardsContainer");
    container.className = `reports-grid ${viewType}-view`;
}

function filterNptelData() {
    let searchQuery = document.getElementById("nptelSearch").value.toLowerCase();
    let yearQuery = document.getElementById("nptelYearFilter").value;
    let certQuery = document.getElementById("nptelCertFilter").value;

    let filtered = prospectusPortalData.nptel.filter(item => {
        let matchCourse = (selectedNptelCourseTab === "All" || item.course === selectedNptelCourseTab);
        let matchYear = (!yearQuery || item.year === yearQuery);
        let matchSearch = (!searchQuery || item.course.toLowerCase().includes(searchQuery) || item.year.includes(searchQuery));
        return matchCourse && matchYear && matchSearch;
    });

    renderNptelCards(filtered);
}

function resetNptelFilters() {
    document.getElementById("nptelSearch").value = "";
    document.getElementById("nptelYearFilter").value = "";
    document.getElementById("nptelCertFilter").value = "";
    selectedNptelCourseTab = "All";
    document.querySelectorAll("#nptelSection .course-tab-pill")[0].classList.add("active");
    renderNptelCards(prospectusPortalData.nptel);
}

function renderNptelCards(dataArray) {
    let container = document.getElementById("nptelCardsContainer");
    container.innerHTML = "";

    if(dataArray.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px; color:var(--text-muted);">No NPTEL records found matching criteria.</p>`;
        return;
    }

    dataArray.forEach(item => {
        container.innerHTML += `
            <div class="prospectus-report-card">
                <div>
                    <div class="report-card-header">
                        <div>
                            <h3>${item.course}</h3>
                            <span>NPTEL Online Certification</span>
                        </div>
                        <div class="year-badge" style="background:#E0F2FE; color:#0369A1; border-color:#BAE6FD;"><i class="fas fa-calendar-alt"></i> ${item.year}</div>
                    </div>
                    <div class="metrics-grid-card">
                        <div class="metric-box"><span class="m-val">${item.registered}</span><span class="m-lbl">Registered</span></div>
                        <div class="metric-box"><span class="m-val">${item.appeared}</span><span class="m-lbl">Appeared</span></div>
                        <div class="metric-box"><span class="m-val">${item.passed}</span><span class="m-lbl">Passed</span></div>
                        <div class="metric-box highlight-blue"><span class="m-val">${item.passPercent}</span><span class="m-lbl">Pass %</span></div>
                        <div class="metric-box"><span class="m-val">${item.highestScore}</span><span class="m-lbl">Highest</span></div>
                        <div class="metric-box"><span class="m-val">${item.averageScore}</span><span class="m-lbl">Average</span></div>
                        <div class="metric-box"><span class="m-val">${item.elite}</span><span class="m-lbl">Elite</span></div>
                        <div class="metric-box"><span class="m-val" style="color:#D97706;">${item.gold}</span><span class="m-lbl">Gold</span></div>
                    </div>
                </div>
                <div class="card-footer-action">
                    <div class="top-recruiter-text">Topper: <strong>${item.topper}</strong></div>
                    <button class="view-details-action-btn ripple-btn" onclick="openNptelModal('${item.year}', '${item.course}')">
                        <i class="fas fa-external-link-alt"></i> View Details
                    </button>
                </div>
            </div>
        `;
    });
}

/* ==========================================================================
   MODAL POPUP LOGIC
   ========================================================================== */
function openPlacementModal(year, courseName) {
    document.getElementById("modalPlacementYearCourse").innerText = `${year} - ${courseName}`;
    
    let courseData = prospectusPortalData.placement.find(p => p.year === year && p.course === courseName);
    let tbody = document.getElementById("modalPlacementTableBody");
    tbody.innerHTML = "";

    let students = courseData && courseData.students.length > 0 ? courseData.students : [
        { name: "Rahul Sharma", roll: "CS2601", class: "Final Year", company: "Microsoft", role: "SDE", package: "₹15.0 LPA", location: "Bangalore", date: "10 Jan 2026", linkedin: "linkedin.com" },
        { name: "Ananya Gupta", roll: "CS2602", class: "Final Year", company: "Amazon", role: "Cloud Dev", package: "₹14.5 LPA", location: "Hyderabad", date: "12 Jan 2026", linkedin: "linkedin.com" }
    ];

    students.forEach(s => {
        tbody.innerHTML += `
            <tr>
                <td><div class="student-avatar-cell">${s.name.charAt(0)}</div></td>
                <td><strong>${s.name}</strong></td>
                <td>${s.roll}</td>
                <td>${s.class}</td>
                <td>${s.company}</td>
                <td>${s.role}</td>
                <td><strong style="color:var(--primary);">${s.package}</strong></td>
                <td>${s.location}</td>
                <td>${s.date}</td>
                <td><a href="#" onclick="alert('Opening LinkedIn profile...'); return false;" style="color:#0369A1; font-weight:600;"><i class="fab fa-linkedin"></i> Profile</a></td>
                <td><button class="view-details-action-btn" onclick="alert('Viewing full profile for ${s.name}')">View</button></td>
            </tr>
        `;
    });

    document.getElementById("placementModal").classList.remove("hide");
}

function closePlacementModal() {
    document.getElementById("placementModal").classList.add("hide");
}

function openNptelModal(year, courseName) {
    document.getElementById("modalNptelYearCourse").innerText = `${year} - ${courseName}`;
    
    let courseData = prospectusPortalData.nptel.find(n => n.year === year && n.course === courseName);
    let tbody = document.getElementById("modalNptelTableBody");
    tbody.innerHTML = "";

    let students = courseData && courseData.students.length > 0 ? courseData.students : [
        { name: "Priya Patel", roll: "CS2610", class: "Final Year", institute: "IIT Madras", score: "98/100", percentage: "98%", certificate: "Elite + Gold", link: "#" },
        { name: "Amit Verma", roll: "CS2611", class: "Final Year", institute: "IIT Madras", score: "92/100", percentage: "92%", certificate: "Elite + Silver", link: "#" }
    ];

    students.forEach(s => {
        let badgeClass = s.certificate.includes("Gold") ? "gold" : (s.certificate.includes("Silver") ? "silver" : "elite");
        tbody.innerHTML += `
            <tr>
                <td><div class="student-avatar-cell" style="background:#E0F2FE; color:#0369A1;">${s.name.charAt(0)}</div></td>
                <td><strong>${s.name}</strong></td>
                <td>${s.roll}</td>
                <td>${s.class}</td>
                <td>${s.institute}</td>
                <td><strong style="color:#0369A1;">${s.score}</strong></td>
                <td>${s.percentage}</td>
                <td><span class="status-badge ${badgeClass}">${s.certificate}</span></td>
                <td><button class="view-details-action-btn" onclick="alert('Downloading certificate PDF...')"><i class="fas fa-download"></i> Download</button></td>
                <td><button class="view-details-action-btn" onclick="alert('Viewing full profile for ${s.name}')">View</button></td>
            </tr>
        `;
    });

    document.getElementById("nptelModal").classList.remove("hide");
}

function closeNptelModal() {
    document.getElementById("nptelModal").classList.add("hide");
}

/* ==========================================================================
   MODAL SEARCH FILTERS
   ========================================================================== */
function filterModalPlacementTable() {
    let query = document.getElementById("modalPlacementSearch").value.toLowerCase();
    let rows = document.querySelectorAll("#modalPlacementTableBody tr");
    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(query) ? "" : "none";
    });
}

function filterModalNptelTable() {
    let query = document.getElementById("modalNptelSearch").value.toLowerCase();
    let rows = document.querySelectorAll("#modalNptelTableBody tr");
    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(query) ? "" : "none";
    });
}