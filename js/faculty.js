/**
 * Faculty Directory Application Script
 * Unique Prefix: csFaculty
 */

const csFacultyData = [
    {
        id: "hod-rajesh",
        isHOD: true,
        name: "Dr. Rajesh Kumar",
        designation: "Professor & Head",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Artificial Intelligence, IIT Bombay",
        specialization: "Artificial Intelligence, Machine Learning",
        experience: "22 Years",
        researchArea: "Deep Learning, Neural Networks",
        email: "rajesh.kumar@cs.university.edu",
        officialEmail: "hod.cs@university.edu",
        officeNumber: "Room 401, CS Block A",
        extension: "3401",
        employeeId: "CS-HOD-101",
        joiningDate: "15-07-2004",
        cabinNumber: "Cabin 4A",
        phone: "+91-11-2659-3401",
        googleScholar: "scholar.google.com/rajeshkumar",
        researchGate: "researchgate.net/profile/Rajesh-Kumar",
        orcid: "0000-0002-1825-009X",
        scopusId: "567890123",
        linkedIn: "linkedin.com/in/dr-rajesh-kumar",
        github: "github.com/rajeshkumar-cs",
        personalWebsite: "www.rajeshkumar.cs.edu",
        officeHours: "Mon, Wed: 3:00 PM - 5:00 PM",
        availableDays: "Monday to Friday",
        languagesKnown: "English, Hindi, German",
        researchGroup: "AI & Vision Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Rajesh Kumar serves as Professor and Head of the Department of Computer Science. He received his Ph.D. from IIT Bombay and completed his Post-Doctoral fellowship at Stanford University. His primary research focus is in Artificial Intelligence and Neural Networks, with over 60 publications in peer-reviewed journals. He has successfully guided 7 Ph.D. scholars and numerous Master's theses.",
        education: [
            { degree: "Ph.D. in Computer Science", university: "IIT Bombay", year: "2004", spec: "Artificial Intelligence", cgpa: "9.8 CGPA" },
            { degree: "M.Tech in Computer Science", university: "IIT Delhi", year: "2000", spec: "Software Systems", cgpa: "9.5 CGPA" },
            { degree: "B.Tech in Computer Science", university: "IISc Bangalore", year: "1998", spec: "Computer Science", cgpa: "9.2 CGPA" }
        ],
        experienceList: [
            { institution: "University Computer Science Dept", role: "Professor & Head", years: "2015 - Present", resp: "Department leadership, research administration, teaching." },
            { institution: "University Computer Science Dept", role: "Associate Professor", years: "2009 - 2015", resp: "Teaching core AI courses, guiding research." },
            { institution: "IIT Bombay", role: "Assistant Professor", years: "2004 - 2009", resp: "Lecturing and laboratory management." }
        ],
        teachingList: [
            { code: "CS701", name: "Advanced Artificial Intelligence", prog: "M.Tech / Ph.D.", sem: "Fall", credits: "4" },
            { code: "CS302", name: "Machine Learning Foundations", prog: "B.Tech", sem: "Spring", credits: "3" }
        ],
        publicationsList: [
            { title: "Deep Learning Paradigms in Autonomous Systems", journal: "IEEE Transactions on Pattern Analysis", conf: "-", publisher: "IEEE", year: "2024", doi: "10.1109/TPAMI.2024.12345", isbn: "-" },
            { title: "Neural Networks for Complex Predictive Modeling", journal: "-", conf: "NeurIPS 2023", publisher: "Curran Associates", year: "2023", doi: "10.5555/neurips.2023", isbn: "978-1-5108" }
        ],
        projectsList: [
            { title: "Autonomous Vision Systems for Rural Healthcare", funding: "Govt. of Science & Tech", budget: "₹1.5 Crores", duration: "3 Years", status: "Ongoing" },
            { title: "AI-driven Smart Grid Optimization", funding: "National Energy Board", budget: "₹80 Lakhs", duration: "2 Years", status: "Completed" }
        ],
        achievementsList: [
            "National Science Award 2022",
            "Best Paper Award at NeurIPS 2021",
            "Fellow, Indian National Academy of Engineering"
        ],
        downloadsList: [
            { title: "Curriculum Vitae (PDF)", link: "#" },
            { title: "Publication List (PDF)", link: "#" },
            { title: "Research Statement (PDF)", link: "#" }
        ],
        galleryList: [
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: "prof-ananya",
        isHOD: false,
        name: "Dr. Ananya Sharma",
        designation: "Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Cryptography, MIT",
        specialization: "Cyber Security, Blockchain",
        experience: "19 Years",
        researchArea: "Secure Multiparty Computation",
        email: "ananya.sharma@cs.university.edu",
        officialEmail: "ananya.sharma@cs.university.edu",
        officeNumber: "Room 405, CS Block A",
        extension: "3405",
        employeeId: "CS-PROF-102",
        joiningDate: "10-08-2007",
        cabinNumber: "Cabin 4B",
        phone: "+91-11-2659-3405",
        googleScholar: "scholar.google.com/ananyasharma",
        researchGate: "researchgate.net/profile/Ananya-Sharma",
        orcid: "0000-0003-2936-112X",
        scopusId: "456789123",
        linkedIn: "linkedin.com/in/dr-ananya-sharma",
        github: "github.com/ananyasharma-cs",
        personalWebsite: "www.ananyasharma.cs.edu",
        officeHours: "Tue, Thu: 2:00 PM - 4:00 PM",
        availableDays: "Tuesday, Thursday",
        languagesKnown: "English, Hindi, French",
        researchGroup: "Security & Crypto Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Ananya Sharma is a Professor specializing in Cyber Security and Cryptography. She earned her Ph.D. from MIT and has worked extensively on secure protocols and blockchain architectures.",
        education: [
            { degree: "Ph.D. in Computer Science", university: "MIT", year: "2007", spec: "Cryptography", cgpa: "4.0 GPA" }
        ],
        experienceList: [
            { institution: "University Computer Science Dept", role: "Professor", years: "2018 - Present", resp: "Research & Teaching" }
        ],
        teachingList: [
            { code: "CS801", name: "Advanced Cryptography", prog: "M.Tech", sem: "Fall", credits: "4" }
        ],
        publicationsList: [
            { title: "Provable Security in Decentralized Ledgers", journal: "IEEE Security & Privacy", conf: "-", publisher: "IEEE", year: "2023", doi: "10.1109/JSP.2023", isbn: "-" }
        ],
        projectsList: [
            { title: "Zero Knowledge Proof Frameworks", funding: "CyberSec Initiative", budget: "₹1 Crore", duration: "3 Years", status: "Ongoing" }
        ],
        achievementsList: ["ACM Distinguished Scientist 2021"],
        downloadsList: [{ title: "CV (PDF)", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "prof-vikram",
        isHOD: false,
        name: "Dr. Vikram Malhotra",
        designation: "Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Data Science, Stanford University",
        specialization: "Big Data Analytics, Data Mining",
        experience: "18 Years",
        researchArea: "Scalable Algorithms, Data Mining",
        email: "vikram.malhotra@cs.university.edu",
        officialEmail: "vikram.malhotra@cs.university.edu",
        officeNumber: "Room 410, CS Block A",
        extension: "3410",
        employeeId: "CS-PROF-103",
        joiningDate: "12-09-2008",
        cabinNumber: "Cabin 4C",
        phone: "+91-11-2659-3410",
        googleScholar: "scholar.google.com/vikrammalhotra",
        researchGate: "researchgate.net/profile/Vikram-Malhotra",
        orcid: "0000-0001-9876-5432",
        scopusId: "123456789",
        linkedIn: "linkedin.com/in/vikrammalhotra",
        github: "github.com/vikrammalhotra",
        personalWebsite: "www.vikrammalhotra.cs.edu",
        officeHours: "Mon, Fri: 10:00 AM - 12:00 PM",
        availableDays: "Monday, Friday",
        languagesKnown: "English, Hindi",
        researchGroup: "Data Science Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Vikram Malhotra specializes in Big Data Analytics and Data Mining. He completed his Ph.D. at Stanford University.",
        education: [{ degree: "Ph.D.", university: "Stanford University", year: "2008", spec: "Data Science", cgpa: "3.9 GPA" }],
        experienceList: [{ institution: "University", role: "Professor", years: "2019 - Present", resp: "Teaching & Research" }],
        teachingList: [{ code: "CS501", name: "Big Data Systems", prog: "B.Tech", sem: "Fall", credits: "4" }],
        publicationsList: [{ title: "Scalable Graph Mining", journal: "VLDB", conf: "-", publisher: "VLDB Endowment", year: "2023", doi: "10.14778/vldb", isbn: "-" }],
        projectsList: [{ title: "Real-time Stream Processing", funding: "DataCorp", budget: "₹50 Lakhs", duration: "2 Years", status: "Ongoing" }],
        achievementsList: ["Best Paper VLDB 2020"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "prof-priya",
        isHOD: false,
        name: "Dr. Priya Sundaram",
        designation: "Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Cloud Computing, IIT Madras",
        specialization: "Distributed Systems, Cloud Architecture",
        experience: "16 Years",
        researchArea: "Edge Computing, Cloud Systems",
        email: "priya.sundaram@cs.university.edu",
        officialEmail: "priya.sundaram@cs.university.edu",
        officeNumber: "Room 412, CS Block A",
        extension: "3412",
        employeeId: "CS-PROF-104",
        joiningDate: "01-07-2010",
        cabinNumber: "Cabin 4D",
        phone: "+91-11-2659-3412",
        googleScholar: "scholar.google.com/priyasundaram",
        researchGate: "researchgate.net/profile/Priya-Sundaram",
        orcid: "0000-0002-3344-5566",
        scopusId: "987654321",
        linkedIn: "linkedin.com/in/priyasundaram",
        github: "github.com/priyasundaram",
        personalWebsite: "www.priyasundaram.cs.edu",
        officeHours: "Wed: 1:00 PM - 3:00 PM",
        availableDays: "Wednesday",
        languagesKnown: "English, Tamil, Hindi",
        researchGroup: "Cloud Systems Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Priya Sundaram focuses on distributed computing and cloud architectures. She earned her Ph.D. from IIT Madras.",
        education: [{ degree: "Ph.D.", university: "IIT Madras", year: "2010", spec: "Cloud Computing", cgpa: "9.6 CGPA" }],
        experienceList: [{ institution: "University", role: "Professor", years: "2020 - Present", resp: "Teaching & Labs" }],
        teachingList: [{ code: "CS602", name: "Cloud Infrastructure", prog: "M.Tech", sem: "Spring", credits: "4" }],
        publicationsList: [{ title: "Fault Tolerance in Edge Networks", journal: "IEEE Cloud", conf: "-", publisher: "IEEE", year: "2022", doi: "10.1109/TCC.2022", isbn: "-" }],
        projectsList: [{ title: "Edge Orchestration Platform", funding: "MeitY", budget: "₹90 Lakhs", duration: "3 Years", status: "Ongoing" }],
        achievementsList: ["Outstanding Researcher Award 2021"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "prof-amit",
        isHOD: false,
        name: "Dr. Amit Banerjee",
        designation: "Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Computer Vision, IISc Bangalore",
        specialization: "Image Processing, Computer Vision",
        experience: "15 Years",
        researchArea: "Object Tracking, 3D Vision",
        email: "amit.banerjee@cs.university.edu",
        officialEmail: "amit.banerjee@cs.university.edu",
        officeNumber: "Room 415, CS Block A",
        extension: "3415",
        employeeId: "CS-PROF-105",
        joiningDate: "15-06-2011",
        cabinNumber: "Cabin 4E",
        phone: "+91-11-2659-3415",
        googleScholar: "scholar.google.com/amitbanerjee",
        researchGate: "researchgate.net/profile/Amit-Banerjee",
        orcid: "0000-0004-1122-3344",
        scopusId: "112233445",
        linkedIn: "linkedin.com/in/amitbanerjee",
        github: "github.com/amitbanerjee",
        personalWebsite: "www.amitbanerjee.cs.edu",
        officeHours: "Tue, Fri: 3:00 PM - 5:00 PM",
        availableDays: "Tuesday, Friday",
        languagesKnown: "English, Bengali, Hindi",
        researchGroup: "Vision Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Amit Banerjee specializes in computer vision and image processing algorithms.",
        education: [{ degree: "Ph.D.", university: "IISc Bangalore", year: "2011", spec: "Computer Vision", cgpa: "9.4 CGPA" }],
        experienceList: [{ institution: "University", role: "Professor", years: "2021 - Present", resp: "Teaching" }],
        teachingList: [{ code: "CS605", name: "Computer Vision", prog: "B.Tech/M.Tech", sem: "Fall", credits: "4" }],
        publicationsList: [{ title: "3D Reconstruction from Single Images", journal: "CVPR", conf: "CVPR", publisher: "IEEE", year: "2023", doi: "10.1109/CVPR.2023", isbn: "-" }],
        projectsList: [{ title: "Automated Surveillance Analytics", funding: "DST", budget: "₹60 Lakhs", duration: "2 Years", status: "Completed" }],
        achievementsList: ["CVPR Best Reviewer 2022"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "assoc-neha",
        isHOD: false,
        name: "Dr. Neha Gupta",
        designation: "Associate Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Software Engineering, IIIT Hyderabad",
        specialization: "Software Testing, Agile Systems",
        experience: "12 Years",
        researchArea: "Automated Program Repair",
        email: "neha.gupta@cs.university.edu",
        officialEmail: "neha.gupta@cs.university.edu",
        officeNumber: "Room 301, CS Block B",
        extension: "3301",
        employeeId: "CS-ASSOC-201",
        joiningDate: "10-07-2014",
        cabinNumber: "Cabin 3A",
        phone: "+91-11-2659-3301",
        googleScholar: "scholar.google.com/nehagupta",
        researchGate: "researchgate.net/profile/Neha-Gupta",
        orcid: "0000-0002-4455-6677",
        scopusId: "223344556",
        linkedIn: "linkedin.com/in/nehagupta",
        github: "github.com/nehagupta",
        personalWebsite: "www.nehagupta.cs.edu",
        officeHours: "Mon, Wed: 11:00 AM - 1:00 PM",
        availableDays: "Monday, Wednesday",
        languagesKnown: "English, Hindi",
        researchGroup: "Software Engineering Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Neha Gupta focuses on software engineering reliability and automated program repair methods.",
        education: [{ degree: "Ph.D.", university: "IIIT Hyderabad", year: "2014", spec: "Software Engineering", cgpa: "9.3 CGPA" }],
        experienceList: [{ institution: "University", role: "Associate Professor", years: "2019 - Present", resp: "Teaching & Research" }],
        teachingList: [{ code: "CS401", name: "Software Engineering", prog: "B.Tech", sem: "Fall", credits: "3" }],
        publicationsList: [{ title: "Automated Patch Generation for Java", journal: "TSE", conf: "ICSE", publisher: "IEEE", year: "2023", doi: "10.1109/TSE.2023", isbn: "-" }],
        projectsList: [{ title: "Smart Testing Tools for Web Apps", funding: "TCS", budget: "₹40 Lakhs", duration: "2 Years", status: "Ongoing" }],
        achievementsList: ["ICSE Distinguished Reviewer"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "assoc-karthik",
        isHOD: false,
        name: "Dr. Karthik Iyer",
        designation: "Associate Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Networks, IIT Delhi",
        specialization: "Wireless Networks, 5G/6G",
        experience: "11 Years",
        researchArea: "IoT, Vehicular Networks",
        email: "karthik.iyer@cs.university.edu",
        officialEmail: "karthik.iyer@cs.university.edu",
        officeNumber: "Room 305, CS Block B",
        extension: "3305",
        employeeId: "CS-ASSOC-202",
        joiningDate: "15-07-2015",
        cabinNumber: "Cabin 3B",
        phone: "+91-11-2659-3305",
        googleScholar: "scholar.google.com/karthikiyer",
        researchGate: "researchgate.net/profile/Karthik-Iyer",
        orcid: "0000-0003-5566-7788",
        scopusId: "334455667",
        linkedIn: "linkedin.com/in/karthikiyer",
        github: "github.com/karthikiyer",
        personalWebsite: "www.karthikiyer.cs.edu",
        officeHours: "Tue, Thu: 10:00 AM - 12:00 PM",
        availableDays: "Tuesday, Thursday",
        languagesKnown: "English, Tamil",
        researchGroup: "Networks Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Karthik Iyer specializes in next-generation wireless communications and IoT networking.",
        education: [{ degree: "Ph.D.", university: "IIT Delhi", year: "2015", spec: "Networks", cgpa: "9.5 CGPA" }],
        experienceList: [{ institution: "University", role: "Associate Professor", years: "2020 - Present", resp: "Teaching & Research" }],
        teachingList: [{ code: "CS504", name: "Computer Networks", prog: "B.Tech", sem: "Spring", credits: "4" }],
        publicationsList: [{ title: "Low Latency Routing in 6G", journal: "IEEE ComNet", conf: "INFOCOM", publisher: "IEEE", year: "2023", doi: "10.1109/TWC.2023", isbn: "-" }],
        projectsList: [{ title: "Smart City IoT Mesh", funding: "Smart Cities Mission", budget: "₹75 Lakhs", duration: "3 Years", status: "Ongoing" }],
        achievementsList: ["IEEE Senior Member"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "assoc-meera",
        isHOD: false,
        name: "Dr. Meera Nair",
        designation: "Associate Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in NLP, Oxford University",
        specialization: "Natural Language Processing, Computational Linguistics",
        experience: "10 Years",
        researchArea: "Multilingual LLMs, Sentiment Analysis",
        email: "meera.nair@cs.university.edu",
        officialEmail: "meera.nair@cs.university.edu",
        officeNumber: "Room 308, CS Block B",
        extension: "3308",
        employeeId: "CS-ASSOC-203",
        joiningDate: "01-08-2016",
        cabinNumber: "Cabin 3C",
        phone: "+91-11-2659-3308",
        googleScholar: "scholar.google.com/meeranair",
        researchGate: "researchgate.net/profile/Meera-Nair",
        orcid: "0000-0001-7788-9900",
        scopusId: "445566778",
        linkedIn: "linkedin.com/in/meeranair",
        github: "github.com/meeranair",
        personalWebsite: "www.meeranair.cs.edu",
        officeHours: "Wed, Fri: 2:00 PM - 4:00 PM",
        availableDays: "Wednesday, Friday",
        languagesKnown: "English, Malayalam, Hindi",
        researchGroup: "NLP Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Meera Nair focuses on Natural Language Processing and multilingual language models.",
        education: [{ degree: "Ph.D.", university: "Oxford University", year: "2016", spec: "NLP", cgpa: "Distinction" }],
        experienceList: [{ institution: "University", role: "Associate Professor", years: "2021 - Present", resp: "Teaching & Research" }],
        teachingList: [{ code: "CS702", name: "Natural Language Processing", prog: "M.Tech", sem: "Fall", credits: "4" }],
        publicationsList: [{ title: "Cross-lingual Transfer in Low-resource Languages", journal: "ACL", conf: "ACL", publisher: "Association for Computational Linguistics", year: "2023", doi: "10.18653/v1/ACL", isbn: "-" }],
        projectsList: [{ title: "Indic Language Translation Engine", funding: "MeitY", budget: "₹85 Lakhs", duration: "3 Years", status: "Ongoing" }],
        achievementsList: ["ACL Best Paper Nominee"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "assoc-rohit",
        isHOD: false,
        name: "Dr. Rohit Verma",
        designation: "Associate Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Operating Systems, Cambridge Faculty",
        specialization: "Operating Systems, Distributed Kernels",
        experience: "10 Years",
        researchArea: "Microkernels, System Security",
        email: "rohit.verma@cs.university.edu",
        officialEmail: "rohit.verma@cs.university.edu",
        officeNumber: "Room 310, CS Block B",
        extension: "3310",
        employeeId: "CS-ASSOC-204",
        joiningDate: "10-08-2016",
        cabinNumber: "Cabin 3D",
        phone: "+91-11-2659-3310",
        googleScholar: "scholar.google.com/rohitverma",
        researchGate: "researchgate.net/profile/Rohit-Verma",
        orcid: "0000-0002-8899-0011",
        scopusId: "556677889",
        linkedIn: "linkedin.com/in/rohitverma",
        github: "github.com/rohitverma",
        personalWebsite: "www.rohitverma.cs.edu",
        officeHours: "Mon, Thu: 1:00 PM - 3:00 PM",
        availableDays: "Monday, Thursday",
        languagesKnown: "English, Hindi",
        researchGroup: "Systems Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Rohit Verma researches operating systems design and high-performance kernel architectures.",
        education: [{ degree: "Ph.D.", university: "Cambridge Faculty", year: "2016", spec: "Operating Systems", cgpa: "First Class" }],
        experienceList: [{ institution: "University", role: "Associate Professor", years: "2021 - Present", resp: "Teaching" }],
        teachingList: [{ code: "CS303", name: "Operating Systems", prog: "B.Tech", sem: "Fall", credits: "4" }],
        publicationsList: [{ title: "Safe Concurrency in Microkernels", journal: "ACM TOCS", conf: "SOSP", publisher: "ACM", year: "2022", doi: "10.1145/TOCS.2022", isbn: "-" }],
        projectsList: [{ title: "Secure Kernel Development", funding: "DST", budget: "₹50 Lakhs", duration: "2 Years", status: "Completed" }],
        achievementsList: ["SOSP Best Artifact Award"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "asst-sneha",
        isHOD: false,
        name: "Dr. Sneha Patel",
        designation: "Assistant Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Database Systems, IIT Bombay",
        specialization: "NoSQL Databases, Distributed Storage",
        experience: "7 Years",
        researchArea: "Query Optimization, Graph Databases",
        email: "sneha.patel@cs.university.edu",
        officialEmail: "sneha.patel@cs.university.edu",
        officeNumber: "Room 201, CS Block C",
        extension: "3201",
        employeeId: "CS-ASST-301",
        joiningDate: "01-08-2019",
        cabinNumber: "Cabin 2A",
        phone: "+91-11-2659-3201",
        googleScholar: "scholar.google.com/snehapatel",
        researchGate: "researchgate.net/profile/Sneha-Patel",
        orcid: "0000-0001-1122-3344",
        scopusId: "667788990",
        linkedIn: "linkedin.com/in/snehapatel",
        github: "github.com/snehapatel",
        personalWebsite: "www.snehapatel.cs.edu",
        officeHours: "Mon, Wed: 10:00 AM - 12:00 PM",
        availableDays: "Monday, Wednesday",
        languagesKnown: "English, Gujarati, Hindi",
        researchGroup: "Database Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Sneha Patel focuses on database optimization and distributed storage engines.",
        education: [{ degree: "Ph.D.", university: "IIT Bombay", year: "2019", spec: "Database Systems", cgpa: "9.7 CGPA" }],
        experienceList: [{ institution: "University", role: "Assistant Professor", years: "2019 - Present", resp: "Teaching & Research" }],
        teachingList: [{ code: "CS402", name: "Database Management Systems", prog: "B.Tech", sem: "Spring", credits: "4" }],
        publicationsList: [{ title: "Indexing High Dimensional Graph Data", journal: "VLDB Journal", conf: "VLDB", publisher: "Springer", year: "2023", doi: "10.1007/VLDB.2023", isbn: "-" }],
        projectsList: [{ title: "Distributed Graph Indexing", funding: "University Grant", budget: "₹25 Lakhs", duration: "2 Years", status: "Ongoing" }],
        achievementsList: ["Early Career Research Award"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "asst-arjun",
        isHOD: false,
        name: "Dr. Arjun Kapoor",
        designation: "Assistant Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Human-Computer Interaction, IIT Delhi",
        specialization: "UI/UX, Accessibility, Assistive Tech",
        experience: "6 Years",
        researchArea: "Inclusive Design, Voice Interfaces",
        email: "arjun.kapoor@cs.university.edu",
        officialEmail: "arjun.kapoor@cs.university.edu",
        officeNumber: "Room 203, CS Block C",
        extension: "3203",
        employeeId: "CS-ASST-302",
        joiningDate: "10-07-2020",
        cabinNumber: "Cabin 2B",
        phone: "+91-11-2659-3203",
        googleScholar: "scholar.google.com/arjunkapoor",
        researchGate: "researchgate.net/profile/Arjun-Kapoor",
        orcid: "0000-0002-3344-5566",
        scopusId: "778899001",
        linkedIn: "linkedin.com/in/arjunkapoor",
        github: "github.com/arjunkapoor",
        personalWebsite: "www.arjunkapoor.cs.edu",
        officeHours: "Tue, Thu: 2:00 PM - 4:00 PM",
        availableDays: "Tuesday, Thursday",
        languagesKnown: "English, Hindi, Punjabi",
        researchGroup: "HCI Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Arjun Kapoor researches human-computer interaction and accessible technology frameworks.",
        education: [{ degree: "Ph.D.", university: "IIT Delhi", year: "2020", spec: "HCI", cgpa: "9.4 CGPA" }],
        experienceList: [{ institution: "University", role: "Assistant Professor", years: "2020 - Present", resp: "Teaching" }],
        teachingList: [{ code: "CS508", name: "Human-Computer Interaction", prog: "B.Tech", sem: "Fall", credits: "3" }],
        publicationsList: [{ title: "Voice Interfaces for Visually Impaired Users", journal: "ACM CHI", conf: "CHI", publisher: "ACM", year: "2023", doi: "10.1145/CHI.2023", isbn: "-" }],
        projectsList: [{ title: "Assistive Navigation App", funding: "Social Welfare Dept", budget: "₹30 Lakhs", duration: "2 Years", status: "Ongoing" }],
        achievementsList: ["CHI Honorable Mention 2022"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "asst-divya",
        isHOD: false,
        name: "Dr. Divya Rao",
        designation: "Assistant Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Theory of Computation, IISc Bangalore",
        specialization: "Algorithms, Complexity Theory",
        experience: "6 Years",
        researchArea: "Approximation Algorithms, Graph Theory",
        email: "divya.rao@cs.university.edu",
        officialEmail: "divya.rao@cs.university.edu",
        officeNumber: "Room 205, CS Block C",
        extension: "3205",
        employeeId: "CS-ASST-303",
        joiningDate: "15-07-2020",
        cabinNumber: "Cabin 2C",
        phone: "+91-11-2659-3205",
        googleScholar: "scholar.google.com/divyarao",
        researchGate: "researchgate.net/profile/Divya-Rao",
        orcid: "0000-0003-4455-6677",
        scopusId: "889900112",
        linkedIn: "linkedin.com/in/divyarao",
        github: "github.com/divyarao",
        personalWebsite: "www.divyarao.cs.edu",
        officeHours: "Wed, Fri: 11:00 AM - 1:00 PM",
        availableDays: "Wednesday, Friday",
        languagesKnown: "English, Kannada, Hindi",
        researchGroup: "Theory Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Divya Rao specializes in theoretical computer science and algorithmic graph theory.",
        education: [{ degree: "Ph.D.", university: "IISc Bangalore", year: "2020", spec: "Theoretical Computer Science", cgpa: "9.9 CGPA" }],
        experienceList: [{ institution: "University", role: "Assistant Professor", years: "2020 - Present", resp: "Teaching & Research" }],
        teachingList: [{ code: "CS201", name: "Data Structures and Algorithms", prog: "B.Tech", sem: "Fall", credits: "4" }],
        publicationsList: [{ title: "New Bounds for Metric TSP", journal: "SIAM J. Comput.", conf: "STOC", publisher: "SIAM", year: "2023", doi: "10.1137/SICOMP", isbn: "-" }],
        projectsList: [{ title: "Combinatorial Optimization Frameworks", funding: "SERB", budget: "₹35 Lakhs", duration: "3 Years", status: "Ongoing" }],
        achievementsList: ["SERB Young Scientist Fellowship"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "asst-manish",
        isHOD: false,
        name: "Dr. Manish Tiwari",
        designation: "Assistant Professor",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Computer Architecture, IIT Kanpur",
        specialization: "Processor Design, Quantum Computing",
        experience: "5 Years",
        researchArea: "Quantum Circuits, Low-power Architectures",
        email: "manish.tiwari@cs.university.edu",
        officialEmail: "manish.tiwari@cs.university.edu",
        officeNumber: "Room 208, CS Block C",
        extension: "3208",
        employeeId: "CS-ASST-304",
        joiningDate: "01-08-2021",
        cabinNumber: "Cabin 2D",
        phone: "+91-11-2659-3208",
        googleScholar: "scholar.google.com/manishtiwari",
        researchGate: "researchgate.net/profile/Manish-Tiwari",
        orcid: "0000-0004-5566-7788",
        scopusId: "990011223",
        linkedIn: "linkedin.com/in/manishtiwari",
        github: "github.com/manishtiwari",
        personalWebsite: "www.manishtiwari.cs.edu",
        officeHours: "Mon, Thu: 3:00 PM - 5:00 PM",
        availableDays: "Monday, Thursday",
        languagesKnown: "English, Hindi",
        researchGroup: "Quantum Systems Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Manish Tiwari explores next-generation computer architectures and quantum computing foundations.",
        education: [{ degree: "Ph.D.", university: "IIT Kanpur", year: "2021", spec: "Computer Architecture", cgpa: "9.5 CGPA" }],
        experienceList: [{ institution: "University", role: "Assistant Professor", years: "2021 - Present", resp: "Teaching" }],
        teachingList: [{ code: "CS304", name: "Computer Organization", prog: "B.Tech", sem: "Spring", credits: "4" }],
        publicationsList: [{ title: "Fault-tolerant Quantum Gate Arrays", journal: "IEEE TC", conf: "ISCA", publisher: "IEEE", year: "2023", doi: "10.1109/TC.2023", isbn: "-" }],
        projectsList: [{ title: "Quantum Simulation Engine", funding: "DST", budget: "₹45 Lakhs", duration: "2 Years", status: "Ongoing" }],
        achievementsList: ["ISCA Young Architect Award"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "visiting-elena",
        isHOD: false,
        name: "Dr. Elena Rostova",
        designation: "Visiting Faculty",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Robotics, ETH Zurich",
        specialization: "Autonomous Robotics, Swarm Intelligence",
        experience: "14 Years",
        researchArea: "Multi-robot Systems, Control",
        email: "elena.rostova@cs.university.edu",
        officialEmail: "elena.rostova@cs.university.edu",
        officeNumber: "Room 101, CS Block D",
        extension: "3101",
        employeeId: "CS-VIS-401",
        joiningDate: "01-01-2025",
        cabinNumber: "Cabin 1A",
        phone: "+91-11-2659-3101",
        googleScholar: "scholar.google.com/elenarostova",
        researchGate: "researchgate.net/profile/Elena-Rostova",
        orcid: "0000-0001-9988-7766",
        scopusId: "102938475",
        linkedIn: "linkedin.com/in/elenarostova",
        github: "github.com/elenarostova",
        personalWebsite: "www.elenarostova.cs.edu",
        officeHours: "Fri: 2:00 PM - 5:00 PM",
        availableDays: "Friday",
        languagesKnown: "English, Russian, German",
        researchGroup: "Robotics Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. Elena Rostova is a Visiting Professor from ETH Zurich, specializing in swarm robotics and autonomous systems.",
        education: [{ degree: "Ph.D.", university: "ETH Zurich", year: "2012", spec: "Robotics", cgpa: "Summa Cum Laude" }],
        experienceList: [{ institution: "ETH Zurich", role: "Senior Researcher", years: "2012 - 2024", resp: "Research" }],
        teachingList: [{ code: "CS805", name: "Advanced Robotics", prog: "M.Tech", sem: "Spring", credits: "4" }],
        publicationsList: [{ title: "Swarm Coordination in Cluttered Environments", journal: "IEEE TRO", conf: "ICRA", publisher: "IEEE", year: "2023", doi: "10.1109/TRO.2023", isbn: "-" }],
        projectsList: [{ title: "Autonomous Search & Rescue Drones", funding: "Global Tech", budget: "₹1.2 Crores", duration: "3 Years", status: "Ongoing" }],
        achievementsList: ["ETH Robotics Fellowship"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"]
    },
    {
        id: "visiting-john",
        isHOD: false,
        name: "Dr. John Williams",
        designation: "Visiting Faculty",
        department: "Department of Computer Science",
        qualification: "Ph.D. in Web Science, UC Berkeley",
        specialization: "Web Technologies, Distributed Social Networks",
        experience: "15 Years",
        researchArea: "Decentralized Web, Graph Analysis",
        email: "john.williams@cs.university.edu",
        officialEmail: "john.williams@cs.university.edu",
        officeNumber: "Room 103, CS Block D",
        extension: "3103",
        employeeId: "CS-VIS-402",
        joiningDate: "01-01-2025",
        cabinNumber: "Cabin 1B",
        phone: "+91-11-2659-3103",
        googleScholar: "scholar.google.com/johnwilliams",
        researchGate: "researchgate.net/profile/John-Williams",
        orcid: "0000-0002-1133-5577",
        scopusId: "564738291",
        linkedIn: "linkedin.com/in/johnwilliams",
        github: "github.com/johnwilliams",
        personalWebsite: "www.johnwilliams.cs.edu",
        officeHours: "Wed: 2:00 PM - 5:00 PM",
        availableDays: "Wednesday",
        languagesKnown: "English, Spanish",
        researchGroup: "Web Science Lab",
        status: "Active",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        biography: "Dr. John Williams is a Visiting Professor specializing in web science and decentralized internet architectures.",
        education: [{ degree: "Ph.D.", university: "UC Berkeley", year: "2011", spec: "Web Science", cgpa: "4.0 GPA" }],
        experienceList: [{ institution: "UC Berkeley", role: "Researcher", years: "2011 - 2024", resp: "Teaching" }],
        teachingList: [{ code: "CS510", name: "Web Scale Architecture", prog: "B.Tech/M.Tech", sem: "Spring", credits: "3" }],
        publicationsList: [{ title: "Decentralized Social Graph Topologies", journal: "ACM WWW", conf: "WWW", publisher: "ACM", year: "2023", doi: "10.1145/WWW.2023", isbn: "-" }],
        projectsList: [{ title: "Decentralized Web Protocols", funding: "Web Foundation", budget: "₹60 Lakhs", duration: "2 Years", status: "Ongoing" }],
        achievementsList: ["WWW Best Paper Award"],
        downloadsList: [{ title: "CV", link: "#" }],
        galleryList: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    csFacultyInit();
});

function csFacultyInit() {
    csFacultyRenderGrid(csFacultyData);
    csFacultySetupSearchAndFilter();
    csFacultySetupModal();
}

function csFacultyRenderGrid(data) {
    const grid = document.getElementById("csfaculty-grid");
    grid.innerHTML = "";

    // Sort: HOD first
    const sortedData = [...data].sort((a, b) => (b.isHOD ? 1 : 0) - (a.isHOD ? 1 : 0));

    sortedData.forEach(faculty => {
        const card = document.createElement("div");
        card.className = `csfaculty-card ${faculty.isHOD ? 'csfaculty-card-hod' : ''}`;

        let hodBadgeHTML = faculty.isHOD ? `<div class="csfaculty-hod-badge">HEAD OF DEPARTMENT</div>` : '';

        card.innerHTML = `
            <div>
                ${hodBadgeHTML}
                <div class="csfaculty-card-img-wrap">
                    <img src="${faculty.photo}" alt="${faculty.name}" class="csfaculty-card-img" loading="lazy">
                </div>
                <div class="csfaculty-card-content">
                    <h3>${faculty.name}</h3>
                    <div class="csfaculty-designation">${faculty.designation}</div>
                    <p><strong>Qualification:</strong> ${faculty.qualification}</p>
                    <p><strong>Specialization:</strong> ${faculty.specialization}</p>
                    <p><strong>Email:</strong> ${faculty.email}</p>
                    <p><strong>Office:</strong> ${faculty.officeNumber}</p>
                </div>
            </div>
            <div class="csfaculty-card-actions">
                ${faculty.isHOD ? `<button class="csfaculty-btn csfaculty-btn-secondary" onclick="csFacultyOpenModal('${faculty.id}', 'overview')">Message from HOD</button>` : ''}
                <button class="csfaculty-btn" onclick="csFacultyOpenModal('${faculty.id}', 'overview')">View Complete Profile</button>
            </div>
        `;
        grid.appendChild(card);
    });

    document.getElementById("csfaculty-total-count").textContent = data.length;
}

function csFacultySetupSearchAndFilter() {
    const searchInput = document.getElementById("csfaculty-search-input");
    const designationFilter = document.getElementById("csfaculty-filter-designation");

    function filterData() {
        const query = searchInput.value.toLowerCase();
        const designation = designationFilter.value;

        const filtered = csFacultyData.filter(faculty => {
            const matchesQuery = 
                faculty.name.toLowerCase().includes(query) ||
                faculty.qualification.toLowerCase().includes(query) ||
                faculty.researchArea.toLowerCase().includes(query) ||
                faculty.designation.toLowerCase().includes(query) ||
                faculty.experience.toLowerCase().includes(query) ||
                faculty.publicationsList.some(p => p.title.toLowerCase().includes(query));

            const matchesDesignation = designation === "" || faculty.designation.includes(designation);

            return matchesQuery && matchesDesignation;
        });

        csFacultyRenderGrid(filtered);
    }

    searchInput.addEventListener("input", filterData);
    designationFilter.addEventListener("change", filterData);
}

let csFacultyCurrentId = null;

function csFacultyOpenModal(id, tabName = 'overview') {
    csFacultyCurrentId = id;
    const faculty = csFacultyData.find(f => f.id === id);
    if (!faculty) return;

    // Populate Header
    const headerEl = document.getElementById("csfaculty-modal-header");
    let hodHeaderBadge = faculty.isHOD ? `<div class="csfaculty-hod-badge" style="margin-top:5px;">HEAD OF DEPARTMENT - Department of Computer Science</div>` : '';
    
    headerEl.innerHTML = `
        <img src="${faculty.photo}" alt="${faculty.name}" class="csfaculty-modal-photo">
        <div class="csfaculty-modal-info">
            <h2>${faculty.name}</h2>
            <p><strong>Designation:</strong> ${faculty.designation}</p>
            <p><strong>Department:</strong> ${faculty.department}</p>
            <p><strong>Qualification:</strong> ${faculty.qualification} | <strong>Emp ID:</strong> ${faculty.employeeId}</p>
            <p><strong>Office:</strong> ${faculty.officeNumber} | <strong>Ext:</strong> ${faculty.extension} | <strong>Email:</strong> ${faculty.email}</p>
            ${hodHeaderBadge}
        </div>
    `;

    // Render Tab Content
    csFacultySwitchTab(tabName);

    // Open Modal
    const modal = document.getElementById("csfaculty-modal");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function csFacultyCloseModal() {
    const modal = document.getElementById("csfaculty-modal");
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

function csFacultySwitchTab(tabName) {
    // Update Active Tab Button
    const buttons = document.querySelectorAll(".csfaculty-tab-btn");
    buttons.forEach(btn => {
        if (btn.getAttribute("data-tab") === tabName) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    const faculty = csFacultyData.find(f => f.id === csFacultyCurrentId);
    if (!faculty) return;

    const bodyEl = document.getElementById("csfaculty-modal-body");
    bodyEl.innerHTML = csFacultyGenerateTabContent(faculty, tabName);
}

function csFacultyGenerateTabContent(faculty, tabName) {
    switch (tabName) {
        case "overview":
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Professional Summary</h3>
                    <p class="csfaculty-text-block">${faculty.biography}</p>
                    
                    <div class="csfaculty-infobox-grid">
                        <div class="csfaculty-infobox-card"><span>Experience</span><span class="num">${faculty.experience}</span></div>
                        <div class="csfaculty-infobox-card"><span>Research Papers</span><span class="num">${faculty.publicationsList.length * 15}</span></div>
                        <div class="csfaculty-infobox-card"><span>Projects</span><span class="num">${faculty.projectsList.length}</span></div>
                        <div class="csfaculty-infobox-card"><span>Graduated Scholars</span><span class="num">7</span></div>
                    </div>

                    <h3 class="csfaculty-section-title">Research Interests</h3>
                    <p class="csfaculty-text-block">${faculty.researchArea}</p>

                    <h3 class="csfaculty-section-title">Current Responsibilities</h3>
                    <p class="csfaculty-text-block">Teaching undergraduate and postgraduate courses, supervising Ph.D. research scholars, and managing department research labs.</p>
                </div>
            `;
        case "biography":
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Detailed Biography</h3>
                    <p class="csfaculty-text-block">${faculty.biography}</p>
                    <h3 class="csfaculty-section-title">Academic Vision</h3>
                    <p class="csfaculty-text-block">Fostering high-impact research environments and translating academic innovations into real-world technological breakthroughs.</p>
                    <h3 class="csfaculty-section-title">Professional Journey</h3>
                    <p class="csfaculty-text-block">Associated with top-tier academic institutions and research cells globally for over two decades.</p>
                </div>
            `;
        case "education":
            let eduRows = faculty.education.map(e => `
                <tr>
                    <td>${e.degree}</td>
                    <td>${e.university}</td>
                    <td>${e.year}</td>
                    <td>${e.spec}</td>
                    <td>${e.cgpa || '-'}</td>
                </tr>
            `).join('');
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Education Timeline</h3>
                    <table class="csfaculty-table">
                        <thead>
                            <tr><th>Degree</th><th>University</th><th>Year</th><th>Specialization</th><th>CGPA/Result</th></tr>
                        </thead>
                        <tbody>${eduRows}</tbody>
                    </table>
                </div>
            `;
        case "experience":
            let expRows = faculty.experienceList.map(ex => `
                <tr>
                    <td>${ex.institution}</td>
                    <td>${ex.role}</td>
                    <td>${ex.years}</td>
                    <td>${ex.resp}</td>
                </tr>
            `).join('');
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Academic & Professional Experience</h3>
                    <table class="csfaculty-table">
                        <thead>
                            <tr><th>Institution</th><th>Designation</th><th>Duration</th><th>Responsibilities</th></tr>
                        </thead>
                        <tbody>${expRows}</tbody>
                    </table>
                </div>
            `;
        case "teaching":
            let teachRows = faculty.teachingList.map(t => `
                <tr>
                    <td>${t.code}</td>
                    <td>${t.name}</td>
                    <td>${t.prog}</td>
                    <td>${t.sem}</td>
                    <td>${t.credits}</td>
                </tr>
            `).join('');
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Courses Taught</h3>
                    <table class="csfaculty-table">
                        <thead>
                            <tr><th>Course Code</th><th>Course Name</th><th>Programme</th><th>Semester</th><th>Credits</th></tr>
                        </thead>
                        <tbody>${teachRows}</tbody>
                    </table>
                </div>
            `;
        case "research":
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Research Domains & Collaborations</h3>
                    <p class="csfaculty-text-block"><strong>Primary Research Areas:</strong> ${faculty.researchArea}</p>
                    <p class="csfaculty-text-block"><strong>Research Group:</strong> ${faculty.researchGroup}</p>
                    <p class="csfaculty-text-block">Active international research collaborations with leading universities across the US, Europe, and Asia.</p>
                </div>
            `;
        case "publications":
            let pubRows = faculty.publicationsList.map(p => `
                <tr>
                    <td>${p.title}</td>
                    <td>${p.journal}</td>
                    <td>${p.conf}</td>
                    <td>${p.publisher}</td>
                    <td>${p.year}</td>
                    <td>${p.doi}</td>
                    <td>${p.isbn}</td>
                </tr>
            `).join('');
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Selected Publications</h3>
                    <table class="csfaculty-table">
                        <thead>
                            <tr><th>Title</th><th>Journal</th><th>Conference</th><th>Publisher</th><th>Year</th><th>DOI</th><th>ISBN</th></tr>
                        </thead>
                        <tbody>${pubRows}</tbody>
                    </table>
                </div>
            `;
        case "projects":
            let projRows = faculty.projectsList.map(pr => `
                <tr>
                    <td>${pr.title}</td>
                    <td>${pr.funding}</td>
                    <td>${pr.budget}</td>
                    <td>${pr.duration}</td>
                    <td>${pr.status}</td>
                </tr>
            `).join('');
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Funded Research Projects</h3>
                    <table class="csfaculty-table">
                        <thead>
                            <tr><th>Project Title</th><th>Funding Agency</th><th>Budget</th><th>Duration</th><th>Status</th></tr>
                        </thead>
                        <tbody>${projRows}</tbody>
                    </table>
                </div>
            `;
        case "achievements":
            let achList = faculty.achievementsList.map(a => `<li>${a}</li>`).join('');
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Awards & Recognitions</h3>
                    <ul style="padding-left: 20px; line-height: 1.8;">${achList}</ul>
                </div>
            `;
        case "gallery":
            let galImages = faculty.galleryList.map(img => `
                <div class="csfaculty-gallery-item">
                    <img src="${img}" alt="Gallery Image" loading="lazy">
                </div>
            `).join('');
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Photo Gallery</h3>
                    <div class="csfaculty-gallery-grid">${galImages}</div>
                </div>
            `;
        case "downloads":
            let dlList = faculty.downloadsList.map(d => `<p style="margin-bottom:10px;"><a href="${d.link}" style="color:var(--csfaculty-accent); font-weight:600; text-decoration:underline;">${d.title}</a></p>`).join('');
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Downloads & Documents</h3>
                    ${dlList}
                </div>
            `;
        case "contact":
            return `
                <div class="csfaculty-tab-pane active">
                    <h3 class="csfaculty-section-title">Contact Information</h3>
                    <table class="csfaculty-table">
                        <tr><th>Office Address</th><td>${faculty.officeNumber}, Department of Computer Science</td></tr>
                        <tr><th>Office Hours</th><td>${faculty.officeHours}</td></tr>
                        <tr><th>Phone</th><td>${faculty.phone} (Ext: ${faculty.extension})</td></tr>
                        <tr><th>Official Email</th><td>${faculty.officialEmail}</td></tr>
                        <tr><th>Google Scholar</th><td><a href="https://${faculty.googleScholar}" target="_blank">${faculty.googleScholar}</a></td></tr>
                        <tr><th>ResearchGate</th><td><a href="https://${faculty.researchGate}" target="_blank">${faculty.researchGate}</a></td></tr>
                        <tr><th>ORCID</th><td>${faculty.orcid}</td></tr>
                        <tr><th>LinkedIn</th><td><a href="https://${faculty.linkedIn}" target="_blank">${faculty.linkedIn}</a></td></tr>
                        <tr><th>GitHub</th><td><a href="https://${faculty.github}" target="_blank">${faculty.github}</a></td></tr>
                    </table>
                </div>
            `;
        default:
            return `<div class="csfaculty-tab-pane active">Content not available.</div>`;
    }
}

function csFacultySetupModal() {
    const modal = document.getElementById("csfaculty-modal");
    const closeBtn = document.getElementById("csfaculty-modal-close");

    closeBtn.addEventListener("click", csFacultyCloseModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            csFacultyCloseModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            csFacultyCloseModal();
        }
    });

    // Tab button click listeners
    const tabsContainer = document.getElementById("csfaculty-modal-tabs");
    tabsContainer.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const tabName = e.target.getAttribute("data-tab");
            csFacultySwitchTab(tabName);
        }
    });

    // Action button handlers
    document.getElementById("csfaculty-btn-email").addEventListener("click", () => {
        const faculty = csFacultyData.find(f => f.id === csFacultyCurrentId);
        if (faculty) window.location.href = `mailto:${faculty.email}`;
    });

    document.getElementById("csfaculty-btn-appointment").addEventListener("click", () => {
        alert("Appointment request portal opened for faculty member.");
    });

    document.getElementById("csfaculty-btn-cv").addEventListener("click", () => {
        alert("Downloading Curriculum Vitae...");
    });

    document.getElementById("csfaculty-btn-print").addEventListener("click", () => {
        window.print();
    });

    document.getElementById("csfaculty-btn-share").addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Profile link copied to clipboard!");
    });

    document.getElementById("csfaculty-btn-copy").addEventListener("click", () => {
        const faculty = csFacultyData.find(f => f.id === csFacultyCurrentId);
        if (faculty) {
            navigator.clipboard.writeText(`${faculty.name}, ${faculty.designation}, Email: ${faculty.email}, Phone: ${faculty.phone}`);
            alert("Contact details copied to clipboard!");
        }
    });
}