/**
 * Advanced Course-Wise Admission Process Engine
 * Department of Computer Science — Shri Shivaji College, Parbhani
 */

const admissionPrograms = {
  bca: {
    code: "bca",
    name: "Bachelor of Computer Applications",
    shortName: "BCA",
    level: "UG",
    duration: "3 Years",
    mode: "CET Based",
    modeFull: "Maharashtra BCA/BBA CET",
    theme: "bca",
    flow: ["Application", "CET Exam", "Result", "College Selection", "Document Verification", "Fee Payment", "Confirmed"],
    officialLinks: {
      cetPortal: "https://cetcell.mahacet.org/",
      collegeAdmission: "#",
      collegeWebsite: "https://shrishivajicollege.edu.in/"
    },
    stages: [
      {
        id: 1,
        title: "Check Eligibility",
        action: "Verify 10+2 / HSC qualification and minimum aggregate marks as per State CET Cell norms.",
        documents: ["HSC Marksheet (10+2)", "SSC Marksheet (10)", "School Leaving Certificate"],
        note: "Candidates appearing for qualifying exams may also register subject to eligibility verification during counseling."
      },
      {
        id: 2,
        title: "CET Registration",
        action: "Register on the official Maharashtra State CET Cell portal within the notified registration window.",
        documents: ["Valid Mobile Number", "Active Email ID", "Scanned Photograph", "Scanned Signature"],
        note: "Keep login credentials secure for admit card generation and score check."
      },
      {
        id: 3,
        title: "Application Form",
        action: "Fill personal, academic, and test-center preference details accurately on the CET portal.",
        documents: ["Category details (if applicable)", "Parent Income Certificate", "Aadhaar Card"],
        note: "Verify all entries before final submission; edits are restricted after confirmation."
      },
      {
        id: 4,
        title: "Upload Documents",
        action: "Upload scanned passport photo, signature, and required category certificates per specifications.",
        documents: ["Passport Photograph (<50KB)", "Signature (<30KB)", "Caste Certificate (if claiming reservation)"],
        note: "Ensure uploaded documents are clearly legible to avoid application rejection."
      },
      {
        id: 5,
        title: "Application Fee",
        action: "Pay the prescribed CET registration fee online via debit card, credit card, UPI, or net banking.",
        documents: ["Payment Gateway Receipt / Transaction Reference Number"],
        note: "Save payment confirmation receipt until the entire admission cycle concludes."
      },
      {
        id: 6,
        title: "Admit Card",
        action: "Download and print the CET Hall Ticket from the official portal once released.",
        documents: ["Printed CET Admit Card", "Valid Government Photo ID (Aadhaar / PAN / Voter ID)"],
        note: "Verify exam center address and reporting time mentioned on the hall ticket."
      },
      {
        id: 7,
        title: "CET Examination",
        action: "Appear for the Maharashtra BCA/BBA CET computer-based test at the designated center.",
        documents: ["Admit Card", "Original Photo ID", "Ballpoint pen (if required for rough work)"],
        note: "Report to the exam center strictly as per reporting time slot."
      },
      {
        id: 8,
        title: "CET Result / Score",
        action: "Check and download your scorecard showing percentile and marks upon result declaration.",
        documents: ["CET Scorecard / Rank Letter"],
        note: "Scorecard is mandatory for subsequent Centralized Admission Process (CAP) rounds."
      },
      {
        id: 9,
        title: "College Selection",
        action: "Select Shri Shivaji College, Parbhani (Department of Computer Science) during CAP option form filling.",
        documents: ["CAP Application ID", "CET Scorecard Details"],
        note: "Exercise college options carefully according to cut-off trends and preferences."
      },
      {
        id: 10,
        title: "Seat Allotment",
        action: "Check centralized seat allotment results published on the State CET portal.",
        documents: ["Allotment Letter", "Seat Acceptance Status"],
        note: "If allotted, choose 'Freeze', 'Betterment', or 'Float' as per your preference."
      },
      {
        id: 11,
        title: "Report to College",
        action: "Visit the Department of Computer Science, Shri Shivaji College, Parbhani for physical reporting.",
        documents: ["Allotment Letter", "All Original Certificates & Marksheets", "Fee Payment Challan"],
        note: "Reporting must be completed strictly within the stipulated dates."
      },
      {
        id: 12,
        title: "Document Verification",
        action: "Submit original certificates for verification by the college admission committee.",
        documents: ["10th & 12th Marksheets", "Leaving Certificate", "CET Scorecard", "Caste / Domicile (if applicable)"],
        note: "Original transfer and migration certificates are retained by the college."
      },
      {
        id: 13,
        title: "Fee Payment",
        action: "Pay prescribed college tuition and university fees via college payment portal or bank challan.",
        documents: ["College Fee Receipt", "Bank Payment Acknowledgment"],
        note: "Fee structure is governed by university and government norms."
      },
      {
        id: 14,
        title: "Admission Confirmed",
        action: "Collect final admission confirmation receipt and student ID card acknowledgment.",
        documents: ["Fee Receipt", "Admission Acknowledgement Slip"],
        note: "Welcome to the Department of Computer Science! Attend orientation as notified."
      }
    ],
    documents: [
      { name: "HSC (10+2) Marksheet", type: "Mandatory", desc: "Original and 2 self-attested copies" },
      { name: "SSC (10th) Marksheet", type: "Mandatory", desc: "For date of birth verification" },
      { name: "Maharashtra CET Scorecard", type: "Mandatory", desc: "Official scorecard with percentile" },
      { name: "Transfer / Leaving Certificate (TC)", type: "Mandatory", desc: "Original TC from last attended institution" },
      { name: "Migration Certificate", type: "Conditional", desc: "Required if passing from outside Maharashtra board" },
      { name: "Caste & Category Certificate", type: "Conditional", desc: "Required for reserved category candidates" },
      { name: "Validity / Non-Creamy Layer", type: "Conditional", desc: "As applicable per government regulations" },
      { name: "Domicile Certificate", type: "Conditional", desc: "Proof of Maharashtra residency" },
      { name: "Passport Size Photographs", type: "Mandatory", desc: "4 recent color photographs" },
      { name: "Aadhaar Card Copy", type: "Mandatory", desc: "Government identity proof" }
    ],
    faqs: [
      {
        q: "Is BCA admission entirely CET based?",
        a: "Yes, admission to the Bachelor of Computer Applications program is conducted through the Maharashtra BCA/BBA CET and subsequent Centralized Admission Process (CAP) rounds."
      },
      {
        q: "Where should I register for the CET?",
        a: "Registration must be completed on the official Maharashtra State CET Cell portal (cetcell.mahacet.org) during the active announcement window."
      },
      {
        q: "What happens after the CET result declaration?",
        a: "Qualified candidates must participate in CAP option form filling, select Shri Shivaji College, Parbhani, and complete document verification upon seat allotment."
      },
      {
        q: "Can I apply directly to the college without CET?",
        a: "Direct institutional quota or vacant seat admissions, if any, are conducted strictly according to State CET Cell guidelines and university regulations after CAP rounds."
      },
      {
        q: "Which documents are required during physical reporting?",
        a: "You must bring your CET scorecard, allotment letter, 10th & 12th marksheets, leaving certificate, and category documents in original along with photocopies."
      }
    ]
  },

  bscCS: {
    code: "bscCS",
    name: "Bachelor of Science in Computer Science",
    shortName: "B.Sc CS",
    level: "UG",
    duration: "3 Years",
    mode: "Merit Based",
    modeFull: "College Merit List Based",
    theme: "bscCS",
    flow: ["College Registration", "Application", "Merit Preparation", "Merit List", "Document Verification", "Seat Confirmation", "Fee Payment", "Confirmed"],
    officialLinks: {
      cetPortal: "#",
      collegeAdmission: "https://shivajicollege.org/admission",
      collegeWebsite: "https://shivajicollege.org"
    },
    stages: [
      {
        id: 1,
        title: "Check Eligibility",
        action: "Verify 10+2 science stream qualification with Mathematics / Computer Science as per university rules.",
        documents: ["HSC Science Marksheet", "SSC Marksheet"],
        note: "Minimum aggregate percentage criteria apply as per university guidelines."
      },
      {
        id: 2,
        title: "College Registration",
        action: "Register on the Shri Shivaji College online admission portal for undergraduate admissions.",
        documents: ["Active Email ID", "Mobile Number", "Applicant Profile details"],
        note: "Create your unique admission account for tracking application status."
      },
      {
        id: 3,
        title: "Submit Academic Details",
        action: "Enter HSC marks, personal information, and course preference (B.Sc. Computer Science).",
        documents: ["HSC Marksheet", "Personal Details"],
        note: "Ensure mark entries match original marksheets exactly."
      },
      {
        id: 4,
        title: "Upload Documents",
        action: "Upload scanned copies of qualifying marksheets, photograph, and applicable certificates.",
        documents: ["12th Marksheet", "Leaving Certificate", "Category Certificate (if applicable)"],
        note: "Incomplete uploads may lead to disqualification from merit preparation."
      },
      {
        id: 5,
        title: "Application Verification",
        action: "College committee verifies submitted academic data and category claims.",
        documents: ["Submitted Application Form", "Uploaded Document Proofs"],
        note: "Discrepancies noted during verification will be notified via portal or SMS."
      },
      {
        id: 6,
        title: "Merit Preparation",
        action: "College computes merit scores based on qualifying examination marks and reservation rules.",
        documents: ["Verified Applicant Database"],
        note: "Merit list is prepared transparently adhering to university norms."
      },
      {
        id: 7,
        title: "Merit List Publication",
        action: "First, second, and subsequent merit lists are published on the college notice board and website.",
        documents: ["Published Merit List PDF"],
        note: "Check your merit rank and cutoff percentages."
      },
      {
        id: 8,
        title: "Check Merit Status",
        action: "Log in to the admission portal to check your selection status and reporting schedule.",
        documents: ["Login Credentials"],
        note: "Selected candidates must report within the specified window."
      },
      {
        id: 9,
        title: "Document Verification",
        action: "Report to the Department of Computer Science with original documents for physical scrutiny.",
        documents: ["Original 10th & 12th Marksheets", "Original Leaving Certificate", "Cast/Income proofs"],
        note: "Physical verification is mandatory before fee payment activation."
      },
      {
        id: 10,
        title: "Seat Confirmation",
        action: "Receive seat confirmation slip from the admission committee upon successful verification.",
        documents: ["Verified Document Slip"],
        note: "Secures your seat temporarily pending fee payment."
      },
      {
        id: 11,
        title: "Fee Payment",
        action: "Pay admission fees online or via authorized bank counter within the deadline.",
        documents: ["Fee Payment Receipt"],
        note: "Failure to pay fees within the deadline results in seat cancellation."
      },
      {
        id: 12,
        title: "Final Admission",
        action: "Obtain final admission acknowledgment and submit student registration form.",
        documents: ["Fee Receipt", "Signed Admission Form"],
        note: "Admission is formally confirmed for the academic year."
      }
    ],
    documents: [
      { name: "HSC Science Marksheet", type: "Mandatory", desc: "Original + 2 photocopies" },
      { name: "SSC Marksheet", type: "Mandatory", desc: "For birth date verification" },
      { name: "Leaving / Transfer Certificate", type: "Mandatory", desc: "Original TC" },
      { name: "Migration Certificate", type: "Conditional", desc: "For out-of-board candidates" },
      { name: "Caste Certificate", type: "Conditional", desc: "For reserved categories" },
      { name: "Income Certificate", type: "Conditional", desc: "For fee concession claims" },
      { name: "Passport Photographs", type: "Mandatory", desc: "4 copies" },
      { name: "Aadhaar Card", type: "Mandatory", desc: "Identity proof" }
    ],
    faqs: [
      {
        q: "How is B.Sc Computer Science admission conducted?",
        a: "Admission is strictly merit-based, calculated on the basis of marks obtained in the 10+2 (Science) qualifying examination and governed by university reservation policies."
      },
      {
        q: "How do I register for the college merit process?",
        a: "Visit the official college admission portal (shivajicollege.org) during the notification window and complete the online registration form."
      },
      {
        q: "Where will the merit list be displayed?",
        a: "Merit lists are published on the college notice board and uploaded on the official college website."
      },
      {
        q: "What happens if my name appears in the merit list?",
        a: "You must report to the department with all original documents for verification and pay the prescribed fees within the given deadline."
      },
      {
        q: "What happens if I miss document verification?",
        a: "If you fail to report during the allotted window, your claimed seat becomes vacant and will be offered to the next candidate in the merit queue."
      }
    ]
  },

  bscDS: {
    code: "bscDS",
    name: "Bachelor of Science in Data Science",
    shortName: "B.Sc Data Science",
    level: "UG",
    duration: "3 Years",
    mode: "Merit Based",
    modeFull: "College Merit List Based",
    theme: "bscDS",
    flow: ["College Registration", "Application", "Verification", "Merit List", "Selection", "Document Check", "Fee Payment", "Confirmed"],
    officialLinks: {
      cetPortal: "#",
      collegeAdmission: "https://shivajicollege.org/admission",
      collegeWebsite: "https://shivajicollege.org"
    },
    stages: [
      {
        id: 1,
        title: "Check Eligibility",
        action: "Verify 10+2 qualification with Mathematics / Statistics / Computer Science background.",
        documents: ["HSC Marksheet with Mathematics/Science"],
        note: "Strong mathematical aptitude is recommended for Data Science curriculum."
      },
      {
        id: 2,
        title: "Merit Registration",
        action: "Register on the Shri Shivaji College admission portal for B.Sc. Data Science.",
        documents: ["Valid Email", "Mobile Number"],
        note: "Select B.Sc. Data Science as your primary program choice."
      },
      {
        id: 3,
        title: "Submit Application",
        action: "Fill academic scores in Mathematics and Science subjects along with personal details.",
        documents: ["HSC Marksheet"],
        note: "Ensure accuracy in marks entered for merit calculation."
      },
      {
        id: 4,
        title: "Information Verification",
        action: "College verification committee reviews academic records and math scores.",
        documents: ["Application Form", "Uploaded Marksheets"],
        note: "Data Science merit gives due consideration to mathematics proficiency."
      },
      {
        id: 5,
        title: "Merit Preparation",
        action: "Merit list is compiled based on aggregate and mathematics scores.",
        documents: ["Compiled Merit Database"],
        note: "Published per university schedule."
      },
      {
        id: 6,
        title: "Merit Publication",
        action: "Check official merit list on the college website and notice board.",
        documents: ["Merit PDF"],
        note: "Note your merit rank and reporting date."
      },
      {
        id: 7,
        title: "Selection Status",
        action: "Log in to verify if you have been selected in the current round.",
        documents: ["Portal Login"],
        note: "Selected candidates receive notification via SMS/portal."
      },
      {
        id: 8,
        title: "Document Verification",
        action: "Bring original marksheets, leaving certificate, and math score proofs for verification.",
        documents: ["Original 10th & 12th Marksheets", "Leaving Certificate"],
        note: "Mandatory step before fee challan issuance."
      },
      {
        id: 9,
        title: "Seat Confirmation",
        action: "Secure your allotted seat by obtaining the verification clearance slip.",
        documents: ["Clearance Slip"],
        note: "Proceed immediately to fee payment counter."
      },
      {
        id: 10,
        title: "Fee Payment",
        action: "Deposit semester/annual fees online or at designated bank counter.",
        documents: ["Fee Receipt"],
        note: "Confirms admission registration."
      },
      {
        id: 11,
        title: "Final Admission",
        action: "Complete enrollment formalities and receive student ID credentials.",
        documents: ["Fee Receipt", "Application Copy"],
        note: "Welcome to B.Sc. Data Science Program!"
      }
    ],
    documents: [
      { name: "HSC Marksheet (with Math)", type: "Mandatory", desc: "Original + 2 copies" },
      { name: "SSC Marksheet", type: "Mandatory", desc: "Verification proof" },
      { name: "Leaving Certificate", type: "Mandatory", desc: "Original TC" },
      { name: "Caste Certificate", type: "Conditional", desc: "If applicable" },
      { name: "Domicile Certificate", type: "Conditional", desc: "State residency proof" },
      { name: "Passport Photos", type: "Mandatory", desc: "4 recent copies" }
    ],
    faqs: [
      {
        q: "Is B.Sc Data Science admission merit-based?",
        a: "Yes, admissions are determined by a merit list prepared considering qualifying examination scores, with specific emphasis on Mathematics."
      },
      {
        q: "What academic background is preferred?",
        a: "Students with 10+2 Science (Mathematics / Statistics / Computer Science) are eligible to apply."
      },
      {
        q: "How will I know my merit status?",
        a: "Merit rankings are published on the college website and candidate portals."
      },
      {
        q: "What happens after selection?",
        a: "Selected candidates must complete physical document verification and pay admission fees within the prescribed deadline."
      }
    ]
  },

  mscCS: {
    code: "mscCS",
    name: "Master of Science in Computer Science",
    shortName: "M.Sc CS",
    level: "PG",
    duration: "2 Years",
    mode: "Merit + First Come First Serve",
    modeFull: "Merit + First Come First Serve",
    theme: "mscCS",
    flow: ["Application", "Eligibility", "Merit Evaluation", "Seat Availability", "First Come First Serve", "Document Verification", "Fee Payment", "Confirmed"],
    officialLinks: {
      cetPortal: "#",
      collegeAdmission: "https://shivajicollege.org/admission",
      collegeWebsite: "https://shivajicollege.org"
    },
    stages: [
      {
        id: 1,
        title: "Check Eligibility",
        action: "Verify B.Sc. (Computer Science / IT / BCA) graduation degree eligibility with minimum required aggregate.",
        documents: ["Graduation Degree Marksheets (Sem I to VI)", "Degree Certificate"],
        note: "Must meet university-prescribed graduation percentage criteria."
      },
      {
        id: 2,
        title: "College Application",
        action: "Submit postgraduate admission application form online through the college portal.",
        documents: ["Graduation Marksheets", "Personal Details"],
        note: "Ensure all semester marksheets are accurately entered."
      },
      {
        id: 3,
        title: "Submit Academic Details",
        action: "Provide aggregate graduation marks and university name details.",
        documents: ["Degree Marksheets"],
        note: "Verification is based on final year or cumulative graduation marks."
      },
      {
        id: 4,
        title: "Merit Evaluation",
        action: "Department evaluates applicant eligibility and prepares postgraduate merit list.",
        documents: ["Verified Graduate Database"],
        note: "Merit ranks are generated per university guidelines."
      },
      {
        id: 5,
        title: "Selection Status",
        action: "Check merit standing and eligibility notification on the portal.",
        documents: ["Merit Rank Card"],
        note: "Eligible candidates proceed to seat availability scrutiny."
      },
      {
        id: 6,
        title: "Seat Availability",
        action: "Monitor available seat matrix for M.Sc. Computer Science program.",
        documents: ["Seat Matrix Status"],
        note: "Seats are filled via merit order and subsequent dynamic first-come-first-serve allocation for remaining slots."
      },
      {
        id: 7,
        title: "First Come First Serve",
        action: "For remaining/spot admission rounds, eligible candidates reporting first with complete documents secure admission.",
        documents: ["All Original Marksheets", "Leaving Certificate"],
        note: "Strictly time-sensitive spot round protocol."
      },
      {
        id: 8,
        title: "Document Verification",
        action: "Submit original graduation degree certificates and marksheets for verification.",
        documents: ["B.Sc/BCA Marksheets", "Passing Certificate", "Transfer & Migration"],
        note: "Verification conducted by PG admission committee."
      },
      {
        id: 9,
        title: "Fee Payment",
        action: "Pay postgraduate tuition and university registration fees.",
        documents: ["Fee Receipt"],
        note: "Confirms PG seat allotment."
      },
      {
        id: 10,
        title: "Admission Confirmation",
        action: "Receive final postgraduate admission confirmation and batch assignment.",
        documents: ["Fee Receipt", "ID Card Slip"],
        note: "Welcome to M.Sc. Computer Science Department!"
      }
    ],
    documents: [
      { name: "Graduation Marksheets (Sem 1-6)", type: "Mandatory", desc: "All semester marksheets" },
      { name: "Degree / Passing Certificate", type: "Mandatory", desc: "Original degree certificate" },
      { name: "Transfer / Leaving Certificate", type: "Mandatory", desc: "Original TC" },
      { name: "Migration Certificate", type: "Conditional", desc: "Required for non-BAMU graduates" },
      { name: "Gap Certificate", type: "Conditional", desc: "If there is a study gap" },
      { name: "Caste & Validity", type: "Conditional", desc: "For reserved category admissions" },
      { name: "Passport Photographs", type: "Mandatory", desc: "4 copies" }
    ],
    faqs: [
      {
        q: "Is M.Sc CS admission merit-based?",
        a: "Yes, initial admissions are conducted via a merit list based on graduation marks in Computer Science, BCA, or allied disciplines."
      },
      {
        q: "What does 'First Come, First Serve' mean in M.Sc CS?",
        a: "For spot rounds or remaining vacant seats after merit counseling, eligible candidates who report physically to the department first are allotted seats."
      },
      {
        q: "What graduation degree is required?",
        a: "Candidates holding B.Sc. (Computer Science), BCA, B.Sc. (IT), or equivalent computing degrees from a recognized university are eligible."
      },
      {
        q: "What happens if seats become full?",
        a: "Once sanctioned intake capacity is reached, subsequent applicants are placed on a waiting list and notified if vacancies arise."
      }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let currentProgramKey = "bca";

  const bodyEl = document.body;
  const programCards = document.querySelectorAll(".program-card");
  const activeModeTitle = document.getElementById("active-mode-title");
  const modeFlowStrip = document.getElementById("mode-flow-strip");
  const routeCanvasContainer = document.getElementById("journey-panel");
  
  const detailStageNum = document.getElementById("detail-stage-num");
  const detailStageTitle = document.getElementById("detail-stage-title");
  const detailStageAction = document.getElementById("detail-stage-action");
  const detailStageDocs = document.getElementById("detail-stage-docs");
  const detailStageNote = document.getElementById("detail-stage-note");

  const currProgName = document.getElementById("curr-prog-name");
  const currStatusText = document.getElementById("curr-status-text");

  const documentsGridContainer = document.getElementById("documents-grid-container");
  const portalButtonsContainer = document.getElementById("portal-buttons-container");
  const faqAccordionContainer = document.getElementById("faq-accordion-container");

  const checklistModal = document.getElementById("checklist-modal");
  const openChecklistModalBtn = document.getElementById("open-checklist-modal-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const closeModalFooterBtn = document.getElementById("close-modal-footer-btn");
  const printChecklistBtn = document.getElementById("print-checklist-btn");
  const modalCourseTag = document.getElementById("modal-course-tag");
  const modalChecklistItems = document.getElementById("modal-checklist-items");

  function renderProgram(programKey) {
    const progData = admissionPrograms[programKey];
    if (!progData) return;

    currentProgramKey = programKey;
    bodyEl.setAttribute("data-theme", progData.theme);

    programCards.forEach(card => {
      if (card.getAttribute("data-program") === programKey) {
        card.classList.add("active");
        card.setAttribute("aria-selected", "true");
      } else {
        card.classList.remove("active");
        card.setAttribute("aria-selected", "false");
      }
    });

    currProgName.textContent = progData.shortName;
    currStatusText.textContent = `${progData.mode} — Applications Open`;

    activeModeTitle.textContent = progData.modeFull;
    modeFlowStrip.innerHTML = "";
    progData.flow.forEach((stepName, idx) => {
      const stepEl = document.createElement("div");
      stepEl.className = `flow-step-item ${idx === 0 || idx === progData.flow.length - 1 ? 'highlight' : ''}`;
      stepEl.textContent = stepName;
      modeFlowStrip.appendChild(stepEl);

      if (idx < progData.flow.length - 1) {
        const arrowEl = document.createElement("span");
        arrowEl.className = "flow-arrow";
        arrowEl.textContent = "›";
        modeFlowStrip.appendChild(arrowEl);
      }
    });

    // Render Alternating Timeline Infographic Route Map
    routeCanvasContainer.innerHTML = "";
    const containerDiv = document.createElement("div");
    containerDiv.className = "timeline-track-inner";

    const baseline = document.createElement("div");
    baseline.className = "timeline-baseline";
    containerDiv.appendChild(baseline);

    progData.stages.forEach((stage, idx) => {
      const isTop = idx % 2 === 0; // Alternating positions (even = top content, odd = bottom content)
      const groupEl = document.createElement("div");
      groupEl.className = `timeline-node-group ${isTop ? 'top-node' : 'bottom-node'} ${idx === 0 ? 'active-stage' : ''}`;
      groupEl.setAttribute("data-stage-id", stage.id);
      groupEl.setAttribute("tabindex", "0");
      groupEl.setAttribute("role", "button");

      groupEl.innerHTML = `
        <div class="timeline-content-box">
          <div class="timeline-step-badge">Stage ${stage.id < 10 ? '0' + stage.id : stage.id}</div>
          <div class="timeline-title">${stage.title}</div>
        </div>
        <div class="connector-stem"></div>
        <div class="timeline-marker-circle">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
      `;

      groupEl.addEventListener("click", () => {
        document.querySelectorAll(".timeline-node-group").forEach(n => n.classList.remove("active-stage"));
        groupEl.classList.add("active-stage");
        populateStageDetails(stage);
      });

      containerDiv.appendChild(groupEl);
    });

    routeCanvasContainer.appendChild(containerDiv);

    if (progData.stages.length > 0) {
      populateStageDetails(progData.stages[0]);
    }

    documentsGridContainer.innerHTML = "";
    progData.documents.forEach(doc => {
      const docCard = document.createElement("div");
      docCard.className = "doc-card";
      docCard.innerHTML = `
        <div class="doc-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <div class="doc-content">
          <h4>${doc.name}</h4>
          <p>${doc.desc}</p>
          <span class="doc-badge ${doc.type.toLowerCase() === 'mandatory' ? 'mandatory' : 'conditional'}">${doc.type}</span>
        </div>
      `;
      documentsGridContainer.appendChild(docCard);
    });

    portalButtonsContainer.innerHTML = "";
    if (progData.officialLinks.cetPortal !== "#") {
      portalButtonsContainer.innerHTML += `
        <a href="${progData.officialLinks.cetPortal}" class="portal-link-btn" target="_blank" rel="noopener">
          <span>State CET Admission Portal</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      `;
    }
    portalButtonsContainer.innerHTML += `
      <a href="${progData.officialLinks.collegeAdmission}" class="portal-link-btn" target="_blank" rel="noopener">
        <span>College Admission Portal</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
      <a href="${progData.officialLinks.collegeWebsite}" class="portal-link-btn" target="_blank" rel="noopener">
        <span>Shri Shivaji College Official Website</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
    `;

    faqAccordionContainer.innerHTML = "";
    progData.faqs.forEach((faq, idx) => {
      const faqItem = document.createElement("div");
      faqItem.className = `faq-item ${idx === 0 ? 'active' : ''}`;
      faqItem.innerHTML = `
        <button class="faq-question" aria-expanded="${idx === 0 ? 'true' : 'false'}">
          <span>${faq.q}</span>
          <span class="faq-icon-toggle">+</span>
        </button>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      `;

      const qBtn = faqItem.querySelector(".faq-question");
      qBtn.addEventListener("click", () => {
        const isActive = faqItem.classList.contains("active");
        document.querySelectorAll(".faq-item").forEach(item => {
          item.classList.remove("active");
          item.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        });
        if (!isActive) {
          faqItem.classList.add("active");
          qBtn.setAttribute("aria-expanded", "true");
        }
      });

      faqAccordionContainer.appendChild(faqItem);
    });
  }

  function populateStageDetails(stage) {
    detailStageNum.textContent = `Stage ${stage.id < 10 ? '0' + stage.id : stage.id}`;
    detailStageTitle.textContent = stage.title;
    detailStageAction.textContent = stage.action;
    
    detailStageDocs.innerHTML = "";
    stage.documents.forEach(docText => {
      const li = document.createElement("li");
      li.textContent = docText;
      detailStageDocs.appendChild(li);
    });

    detailStageNote.textContent = stage.note;
  }

  programCards.forEach(card => {
    card.addEventListener("click", () => {
      const pKey = card.getAttribute("data-program");
      renderProgram(pKey);
    });
  });

  openChecklistModalBtn.addEventListener("click", () => {
    const progData = admissionPrograms[currentProgramKey];
    modalCourseTag.textContent = `${progData.shortName} Program Checklist`;
    
    modalChecklistItems.innerHTML = "";
    progData.documents.forEach((doc, idx) => {
      const label = document.createElement("label");
      label.className = "modal-check-item";
      label.innerHTML = `
        <input type="checkbox" id="modal-chk-${idx}">
        <span>${doc.name} (${doc.type}) — ${doc.desc}</span>
      `;
      modalChecklistItems.appendChild(label);
    });

    checklistModal.removeAttribute("hidden");
  });

  function closeModal() {
    checklistModal.setAttribute("hidden", "true");
  }

  closeModalBtn.addEventListener("click", closeModal);
  closeModalFooterBtn.addEventListener("click", closeModal);
  checklistModal.addEventListener("click", (e) => {
    if (e.target === checklistModal) closeModal();
  });

  printChecklistBtn.addEventListener("click", () => {
    window.print();
  });

  renderProgram("bca");
});