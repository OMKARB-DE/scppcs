/* syllabus.js */

const syllabusData = [
    // --- BCA ---
 
    {
        "programme": "BCA",
        "semester": "Semester I",
        "pattern": "NEP 2020",
        "credits": "19",
        "courses": [
            { "code": "SBCACT1101", "name": "Mathematics Foundations to Computer Science -I", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCACT1102", "name": "Computer Architecture", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCACP1101", "name": "Lab-1 Computer Architecture", "type": "Core Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAST1101", "name": "Problem Solving Techniques", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCASP1101", "name": "Lab-1 Problem Solving Techniques", "type": "Core Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAE1101", "name": "General English – I OR suggested MOOC courses", "type": "Ability Enhancement", "credits": "2", "teaching": "1 L / 1 T / 0 P", "assessment": "UA (40) + CA (10)" },
            { "code": "SBCAMD1101", "name": "Indian Knowledge System", "type": "Multidisciplinary", "credits": "2", "teaching": "2 L / 0 T / 0 P", "assessment": "CA (50)" },
            { "code": "SBCAVA1101", "name": "Environmental Science and Sustainability", "type": "Value Added", "credits": "2", "teaching": "2 L / 0 T / 0 P", "assessment": "CA (50)" },
            { "code": "SBCAAE1102", "name": "Additional Course - Indian or Foreign Language", "type": "Ability Enhancement", "credits": "0*", "teaching": "1 L / 1 T / 0 P", "assessment": "CA (25)" }
        ]
    },
    {
        "programme": "BCA",
        "semester": "Semester II",
        "pattern": "NEP 2020",
        "credits": "21",
        "courses": [
            { "code": "SBCACT1151", "name": "Mathematics Foundations to Computer Science -II", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCACT1152", "name": "Data Structures", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCACT1153", "name": "Operating Systems", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCACP1151", "name": "Lab-2 Data Structures", "type": "Core Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCACP1152", "name": "Lab-3 Operating System", "type": "Core Practical", "credits": "1", "teaching": "0 L / 0 T / 2 P", "assessment": "UA (15) + CA (10)" },
            { "code": "SBCAST1151", "name": "Object Oriented Programming using Java", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCASP1151", "name": "Lab-2 Object Oriented Programming using Java", "type": "Core Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCASP1152", "name": "Lab-3 Web Technologies", "type": "Core Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAVA1151", "name": "Constitution of India", "type": "Value Added", "credits": "2", "teaching": "2 L / 0 T / 0 P", "assessment": "CA (50)" },
            { "code": "SBCAE1151", "name": "Additional Course - Indian or Foreign Language", "type": "Ability Enhancement", "credits": "0*", "teaching": "1 L / 1 T / 0 P", "assessment": "CA (25)" }
        ]
    },
    {
        "programme": "BCA",
        "semester": "Semester III",
        "pattern": "NEP 2020",
        "credits": "20",
        "courses": [
            { "code": "SBCACT1201", "name": "Probability and Statistics", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCACT1202", "name": "Data Base Management System", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCACP1201", "name": "Lab-1: Data Base Management System", "type": "Core Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAST1201", "name": "Python Programming", "type": "Core Theory", "credits": "2", "teaching": "2 L / 0 T / 0 P", "assessment": "UA (40) + CA (10)" },
            { "code": "SBCASP1201", "name": "Lab-1: Python Programming", "type": "Core Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCACT1203", "name": "Software Engineering", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCAET1201", "name": "Professional Elective - I (Choose any one: A. Data Science: Basics of Data Analytics using Spread Sheet / B. Artificial Intelligence and Machine Learning: Feature Engineering)", "type": "Professional Elective", "credits": "1", "teaching": "1 L / 0 T / 0 P", "assessment": "CA (25)" },
            { "code": "SBCAEP1201", "name": "Lab-1 Professional Elective - I (Any one related to above ET1201)", "type": "Professional Elective Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAVA1201", "name": "Yoga/Sports/NCC/NSS/Disaster Management", "type": "Value Added", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "CA (50)" }
        ]
    },
    {
        "programme": "BCA",
        "semester": "Semester IV",
        "pattern": "NEP 2020",
        "credits": "20",
        "courses": [
            { "code": "SBCACT1251", "name": "Entrepreneurship and Start-up Ecosystem", "type": "Core Theory", "credits": "2", "teaching": "1 L / 1 T / 0 P", "assessment": "UA (40) + CA (10)" },
            { "code": "SBCACT1252", "name": "Computer Networks", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCACP1251", "name": "Lab-2 Computer Networks", "type": "Core Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCACT1253", "name": "Design and Analysis of Algorithm", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCACT1254", "name": "Artificial Intelligence", "type": "Core Theory", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCACP1252", "name": "Lab-3 Artificial Intelligence", "type": "Core Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAET1251", "name": "Professional Elective - II (Choose any one: A. Data Science: Data Visualization / B. AI and Machine Learning: Introduction to ML)", "type": "Professional Elective", "credits": "1", "teaching": "1 L / 0 T / 0 P", "assessment": "CA (25)" },
            { "code": "SBCAEP1251", "name": "Lab-2 Professional Elective - II (Any one related to above ET1251)", "type": "Professional Elective Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAST1251", "name": "Design Thinking and Innovation", "type": "Skill Enhancement", "credits": "2", "teaching": "1 L / 1 T / 0 P", "assessment": "CA (50)" }
        ]
    },
    {
        "programme": "BCA",
        "semester": "Semester V",
        "pattern": "NEP 2020",
        "credits": "21",
        "courses": [
            { "code": "SBCAET1301", "name": "Professional Elective - III (Choose any one: A. Data Science: Introduction to Data Science / B. AI and Machine Learning: Neural Network)", "type": "Professional Elective", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCAEP1301", "name": "Lab-3: Professional Elective - III (Any one related to above ET1301)", "type": "Professional Elective Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAET1302", "name": "Professional Elective - IV (Choose any one: A. Data Science: Time Series Analysis / B. AI and Machine Learning: Digital Image Processing)", "type": "Professional Elective", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCAEP1302", "name": "Lab-4: Professional Elective - IV (Any one related to above ET1302)", "type": "Professional Elective Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAET1303", "name": "Professional Elective - V (Choose any one: A. Data Science: Machine Learning / B. AI and Machine Learning: Natural Language Processing)", "type": "Professional Elective", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCAEP1303", "name": "Lab 5: Professional Elective - V (Any one related to above ET1303)", "type": "Professional Elective Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAST1301", "name": "Quantitative Techniques", "type": "Skill Enhancement", "credits": "2", "teaching": "0 L / 2 T / 0 P", "assessment": "UA (40) + CA (10)" },
            { "code": "SBCASP1301", "name": "Internship/Capstone Project", "type": "Project", "credits": "4", "teaching": "0 L / 0 T / 8 P", "assessment": "UA (60) + CA (40)" }
        ]
    },
    {
        "programme": "BCA",
        "semester": "Semester VI",
        "pattern": "NEP 2020",
        "credits": "19",
        "courses": [
            { "code": "SBCACT1351", "name": "Generative AI", "type": "Core Theory", "credits": "2", "teaching": "2 L / 0 T / 0 P", "assessment": "UA (40) + CA (10)" },
            { "code": "SBCACP1351", "name": "Lab - Generative AI", "type": "Core Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAET1351", "name": "Professional Elective - VI (Choose any one: A. Data Science: Big Data Analytics / B. AI and Machine Learning: Deep Learning for Computer Vision)", "type": "Professional Elective", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCAEP1351", "name": "Lab 6: Professional Elective - VI (Any one related to above ET1351)", "type": "Professional Elective Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAET1352", "name": "Professional Elective - VII (Choose any one: A. Data Science: Exploratory Data Analysis / B. AI and Machine Learning: Predictive Analysis)", "type": "Professional Elective", "credits": "3", "teaching": "3 L / 0 T / 0 P", "assessment": "UA (60) + CA (15)" },
            { "code": "SBCAEP1352", "name": "Lab 7: Professional Elective - VII (Any one related to above ET1352)", "type": "Professional Elective Practical", "credits": "2", "teaching": "0 L / 0 T / 4 P", "assessment": "UA (30) + CA (20)" },
            { "code": "SBCAE1351", "name": "Soft Skills", "type": "Ability Enhancement", "credits": "1", "teaching": "0 L / 1 T / 0 P", "assessment": "CA (25)" },
            { "code": "SBCASP1351", "name": "Major Project", "type": "Project", "credits": "4", "teaching": "0 L / 0 T / 8 P", "assessment": "UA (60) + CA (40)" }
        ]
    },


    // --- B.Sc Computer Science ---
 {
        "programme": "B.Sc Computer Science",
        "semester": "Semester I",
        "pattern": "NEP 2020",
        "credits": "22",
        "courses": [
            { "code": "SCSCCT1101", "name": "Logic Building with C", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCCP1101", "name": "Logic Building with C (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCMT1101", "name": "Web Technology", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCMP1101", "name": "Web Technology (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCMT1102", "name": "Computer Network", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCMP1102", "name": "Computer Network (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCGE1101", "name": "Basics of Info. Tech. / Intellectual Property Rights", "type": "Generic Elective", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCSC1101", "name": "Office Automation", "type": "Skill Based Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "AECENG1101", "name": "L1 – Compulsory English", "type": "Ability Enhancement Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "IKSXXX1101", "name": "Indian Knowledge System", "type": "IKS", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "ACEMIL1101", "name": "Ability Enhancement Course (MIL)", "type": "Ability Enhancement", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" }
        ]
    },
    {
        "programme": "B.Sc Computer Science",
        "semester": "Semester II",
        "pattern": "NEP 2020",
        "credits": "22",
        "courses": [
            { "code": "SCSCCT1151", "name": "OOP's using C++", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCCP1151", "name": "OOP's using C++ (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCMT1151", "name": "Data Structure", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCMP1151", "name": "Data Structure (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCMT1152", "name": "RDBMS", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCMP1152", "name": "RDBMS (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCGE1151", "name": "Statistical Methods / Graphics Design and Content Management Tools", "type": "Generic Elective", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCSC1151", "name": "DTP and Multimedia", "type": "Skill Based Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "AECENG1151", "name": "L1 – Compulsory English", "type": "Ability Enhancement Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "VECCOI1151", "name": "Constitution of India", "type": "Value Education Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "ACEMIL1151", "name": "Ability Enhancement Course (MIL)", "type": "Ability Enhancement", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" }
        ]
    },
    {
        "programme": "B.Sc Computer Science",
        "semester": "Semester III",
        "pattern": "NEP 2020",
        "credits": "20",
        "courses": [
            { "code": "SCSCCT1201", "name": "Java Programming", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCCT1202", "name": "Programming with Python", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCCP1203", "name": "Java Programming (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCCP1204", "name": "Programming with Python (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCMT1201", "name": "Software Engineering", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCMP1201", "name": "Software Engineering (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCGE1201", "name": "Cyber Security", "type": "Generic Elective", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCSC1201", "name": "CSS and JavaScript (P)", "type": "Skill Based Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "AECENG1201", "name": "Ability Enhancement Course", "type": "AEC", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "AECMIL1201", "name": "Ability Enhancement Course", "type": "AEC", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCFP1201", "name": "Mini Project", "type": "Project", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "CCCXXX1201", "name": "Community Engagement Services (CES)", "type": "CES", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" }
        ]
    },
    {
        "programme": "B.Sc Computer Science",
        "semester": "Semester IV",
        "pattern": "NEP 2020",
        "credits": "20",
        "courses": [
            { "code": "SCSCCT1251", "name": "Web Development using J2EE", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCCT1252", "name": "Operating System", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCCP1253", "name": "Web Development using J2EE (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCCP1254", "name": "Operating System (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCMT1251", "name": "Software Testing", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCMP1251", "name": "Software Testing (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCGE1251", "name": "Web Designing", "type": "Generic Elective", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SCSCVC1251", "name": "PHP and MySQl (P)", "type": "Vocational Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "AECENG1251", "name": "Ability Enhancement Course", "type": "AEC", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "AECMIL1251", "name": "Ability Enhancement Course", "type": "AEC", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "VECEVS1251", "name": "Value Education Courses", "type": "VEC", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "CCCXXX1251", "name": "Community Engagement Services (CES)", "type": "CES", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" }
        ]
    },
    {
        "programme": "B.Sc Computer Science",
        "semester": "Semester V",
        "pattern": "NEP 2020",
        "credits": "22",
        "courses": [
            { "code": "SCSCCT1301", "name": "Windows Programming Using C#.NET", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SCSCCT1302", "name": "Python for Data Science", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SCSCIK1303", "name": "IKS in CS", "type": "IKS", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCCP1304", "name": "Windows Programming Using C#.NET (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCCP1305", "name": "Python for Data Science (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCET1301", "name": "Basics of Linux / Artificial Intelligence / Enterprise Infrastructure and Cloud Technologies - Part I", "type": "Optional Elective", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SCSCEP1301", "name": "Practical for Elective", "type": "Optional Practical", "credits": "1", "teaching": "1 Hour / Week", "assessment": "CA (10) + ESA (15)" },
            { "code": "SCSCVC1301", "name": "Data Analysis using Power BI", "type": "Vocational Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCFP1301", "name": "Project", "type": "Project", "credits": "4", "teaching": "4 Hours / Week", "assessment": "CA (40) + ESA (60)" }
        ]
    },
    {
        "programme": "B.Sc Computer Science",
        "semester": "Semester VI",
        "pattern": "NEP 2020",
        "credits": "20",
        "courses": [
            { "code": "SCSCCT1351", "name": "Mobile Application Development using Kotlin", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SCSCCT1352", "name": "Computer Vision and Image Analysis", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SCSCCT1353", "name": "Introduction to AIML", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCCP1354", "name": "Mobile Application Development using Kotlin (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCCP1355", "name": "Computer Vision and Image Analysis (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCET1351", "name": "Linux Administration / Cloud Computing / Enterprise Infrastructure and Cloud Technologies - Part II", "type": "Optional Elective", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SCSCEP1351", "name": "Practical for Elective", "type": "Optional Practical", "credits": "1", "teaching": "1 Hour / Week", "assessment": "CA (10) + ESA (15)" },
            { "code": "SCSCVC1351", "name": "NoSQL with MongoDB", "type": "Vocational Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SCSCOJ1351", "name": "On Job Training: (Internship/Apprenticeship)", "type": "Project", "credits": "4", "teaching": "4 Hours / Week", "assessment": "CA (40) + ESA (60)" }
        ]
    },

    // --- B.Sc Data Science ---
    {
        "programme": "B.Sc Data Science",
        "semester": "Semester I",
        "pattern": "NEP 2020",
        "credits": "22",
        "courses": [
            { "code": "SDTSCT1101", "name": "Data Analysis With Excel", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDTSCP1101", "name": "Data Analysis With Excel (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDTSMT1101", "name": "Web Technology", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDTSMP1101", "name": "Web Technology (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDTSMT1102", "name": "Programming with Python", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDTSMP1102", "name": "Programming with Python (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDTSGE1101", "name": "Basics of Mathematics / Intellectual Property Rights", "type": "Generic Elective", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDTSSC1101", "name": "Basics of Info. Tech.", "type": "Skill Based Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "AECENG1101", "name": "L1 – Compulsory English", "type": "Ability Enhancement Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "IKSXXX1101", "name": "Indian Knowledge System", "type": "IKS", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "ACEMIL1101", "name": "Ability Enhancement Course (MIL)", "type": "Ability Enhancement", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" }
        ]
    },
    {
        "programme": "B.Sc Data Science",
        "semester": "Semester II",
        "pattern": "NEP 2020",
        "credits": "22",
        "courses": [
            { "code": "SDTSCT1151", "name": "Data Analysis with Power BI-I", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDTSCP1151", "name": "Data Analysis with Power BI-I (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDTSMT1151", "name": "Introduction to RDBMS", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDTSMP1151", "name": "Introduction to RDBMS (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDTSMT1152", "name": "Operating System", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDTSMP1152", "name": "Operating System (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDTSGE1151", "name": "Computational Statistics / Digital Marketing", "type": "Generic Elective", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDTSSC1151", "name": "CSS", "type": "Skill Based Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "AECENG1151", "name": "L1 – Compulsory English", "type": "Ability Enhancement Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "VECCOI1151", "name": "Constitution of India", "type": "Value Education Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "ACEMIL1151", "name": "Ability Enhancement Course (MIL)", "type": "Ability Enhancement", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" }
        ]
    },
    {
        "programme": "B.Sc Data Science",
        "semester": "Semester III",
        "pattern": "NEP 2020",
        "credits": "20",
        "courses": [
            { "code": "SDSCCT1201", "name": "Statistical Methods for Data Science", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDSCCP1202", "name": "Data Analytics with Python Part I", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDSCCT1203", "name": "Statistical Methods for Data Science (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCCP1204", "name": "Data Analytics with Python Part I (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCMT1201", "name": "Analyzing Data with SQL", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDSCMP1201", "name": "Analyzing Data with SQL (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCGE1201", "name": "Cyber Security", "type": "Generic Elective", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDSCSC1201", "name": "AI Tool- ChatGPT", "type": "Skill Based Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "AECENG1201", "name": "Ability Enhancement Course", "type": "AEC", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "ACEMIL1201", "name": "Ability Enhancement Course", "type": "AEC", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "CCCXXX1201", "name": "Community Engagement Services (CC)", "type": "CES", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" }
        ]
    },
    {
        "programme": "B.Sc Data Science",
        "semester": "Semester IV",
        "pattern": "NEP 2020",
        "credits": "20",
        "courses": [
            { "code": "SDSCCT1251", "name": "Data Analytics with Python Part II", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDSCCP1252", "name": "Programming with R", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCCT1253", "name": "Data Analytics with Python Part II (P)", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDSCCP1254", "name": "Programming with R (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCMT1251", "name": "Mathematics for Data Science", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDSCMP1251", "name": "Mathematics for Data Science (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCGE1251", "name": "Web Designing", "type": "Generic Elective", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "SDSCVC1251", "name": "Data Visualization using Tableau", "type": "Vocational Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "AECENG1251", "name": "Ability Enhancement Course", "type": "AEC", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "AECMIL1251", "name": "Ability Enhancement Course", "type": "AEC", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "VECEVS1251", "name": "Value Education Courses", "type": "VEC", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (80)" },
            { "code": "CCCXXX1251", "name": "Community Engagement Services (CC)", "type": "CES", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" }
        ]
    },
    {
        "programme": "B.Sc Data Science",
        "semester": "Semester V",
        "pattern": "NEP 2020",
        "credits": "22",
        "courses": [
            { "code": "SDSCCT1301", "name": "Fundamental of ML", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SDSCCT1302", "name": "Natural Language Processing", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SDSCIK1303", "name": "Introduction to super computing", "type": "IKS", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCCP1304", "name": "Fundamental of ML (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCCP1305", "name": "Natural Language Processing (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCET1301", "name": "Fundamental of Cloud Computing", "type": "Optional Elective", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SDSCEP1301", "name": "Fundamental of Cloud Computing (P)", "type": "Optional Practical", "credits": "1", "teaching": "1 Hour / Week", "assessment": "CA (10) + ESA (15)" },
            { "code": "SDSCVC1301", "name": "Data Warehousing", "type": "Vocational Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCFP1301", "name": "Project", "type": "Project", "credits": "4", "teaching": "4 Hours / Week", "assessment": "CA (40) + ESA (60)" }
        ]
    },
    {
        "programme": "B.Sc Data Science",
        "semester": "Semester VI",
        "pattern": "NEP 2020",
        "credits": "20",
        "courses": [
            { "code": "SDSCCT1351", "name": "Computer Vision and Image Analytics", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SDSCCT1352", "name": "Deep Learning", "type": "Optional Theory", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SDSCCT1353", "name": "Time Series Analysis", "type": "Optional Theory", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCCP1354", "name": "Computer Vision and Image Analytics (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCCP1355", "name": "Deep Learning (P)", "type": "Optional Practical", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCET1351", "name": "Big Data Analytics", "type": "Optional Elective", "credits": "3", "teaching": "3 Hours / Week", "assessment": "CA (30) + ESA (45)" },
            { "code": "SDSCEP1351", "name": "Big Data Analytics (P)", "type": "Optional Practical", "credits": "1", "teaching": "1 Hour / Week", "assessment": "CA (10) + ESA (15)" },
            { "code": "SDSCVC1351", "name": "Generative AI", "type": "Vocational Course", "credits": "2", "teaching": "2 Hours / Week", "assessment": "CA (20) + ESA (30)" },
            { "code": "SDSCOJ1351", "name": "OJT", "type": "Project", "credits": "4", "teaching": "4 Hours / Week", "assessment": "CA (40) + ESA (60)" }
        ]
    },

    // --- M.Sc Computer Science ---
   
    {
        "programme": "M.Sc Computer Science",
        "semester": "Semester I",
        "pattern": "Choice Based Credit System",
        "credits": "22",
        "courses": [
            { "code": "SCMPSC-401", "name": "Computer Architecture and Microprocessor", "type": "Core Theory", "credits": "4", "remarks": "04" },
            { "code": "SCMPSC-402", "name": "Python Programming", "type": "Core Theory", "credits": "4", "remarks": "04" },
            { "code": "SCMPSC-403", "name": "Advanced Java", "type": "Core Theory", "credits": "4", "remarks": "04" },
            { "code": "SCMPSCP-401", "name": "Lab 1: Comp. Arch. and Microp. Lab", "type": "Core Practical", "credits": "1", "remarks": "01" },
            { "code": "SCMPSCP-402", "name": "Lab 2: Python Lab", "type": "Core Practical", "credits": "1", "remarks": "01" },
            { "code": "SCMPSCP-403", "name": "Lab 3: Java Lab", "type": "Core Practical", "credits": "1", "remarks": "01" },
            { 
                "code": "SCMPSE-401", 
                "name": "Chose any one: A. Data Analysis using Power B. Statistical Method C. Web Technology", 
                "type": "Elective", 
                "credits": "4", 
                "remarks": "03 Theory and 01 Lab" 
            },
            { "code": "SVECR-401", "name": "Research Methodology", "type": "Core", "credits": "3", "remarks": "03" }
        ]
    },
    {
        "programme": "M.Sc Computer Science",
        "semester": "Semester II",
        "pattern": "Choice Based Credit System",
        "credits": "22",
        "courses": [
            { "code": "SCMPSC-451", "name": "Mobile Application Development with Kotlin", "type": "Core Theory", "credits": "4", "remarks": "04" },
            { "code": "SCMPSC-452", "name": "Cloud Computing", "type": "Core Theory", "credits": "4", "remarks": "04" },
            { "code": "SCMPSC-453", "name": "NoSQL with MongoDB", "type": "Core Theory", "credits": "4", "remarks": "04" },
            { "code": "SCMPSCP-451", "name": "Lab 4: Kotlin Lab", "type": "Core Practical", "credits": "1", "remarks": "01" },
            { "code": "SCMPSCP-452", "name": "Lab 5: Cloud Computing Lab", "type": "Core Practical", "credits": "1", "remarks": "01" },
            { "code": "SCMPSCP-453", "name": "Lab 6: NoSQL Lab", "type": "Core Practical", "credits": "1", "remarks": "01" },
            { 
                "code": "SCMPSE-451", 
                "name": "Chose any one: A. Data Structure B. Software Testing C. PHP and MySQL", 
                "type": "Elective", 
                "credits": "4", 
                "remarks": "03 Theory and 01 Lab" 
            },
            { "code": "SCMPSOJ-451", "name": "On Job Training, Internship/ Apprenticeship or Field Project", "type": "Project", "credits": "3", "remarks": "03" }
        ]
    },
    {
        "programme": "M.Sc Computer Science",
        "semester": "Semester III",
        "pattern": "Choice Based Credit System",
        "credits": "22",
        "courses": [
            { "code": "SCMPSC-501", "name": "Image Processing using Python", "type": "Core Theory", "credits": "4", "remarks": "04" },
            { "code": "SCMPSC-502", "name": "Hibernate and Spring Framework", "type": "Core Theory", "credits": "4", "remarks": "04" },
            { "code": "SCMPSC-503", "name": "Block Chain Technology", "type": "Core Theory", "credits": "4", "remarks": "04" },
            { "code": "SCMPSCP-501", "name": "Lab 7: IP Using Python Lab", "type": "Core Practical", "credits": "1", "remarks": "01" },
            { "code": "SCMPSCP-502", "name": "Lab 8: Hibernate and Spring Lab", "type": "Core Practical", "credits": "1", "remarks": "01" },
            { 
                "code": "SCMPSE-501", 
                "name": "Chose any one: A. Data Science with Python B. Network and Linux Administration C. Advanced Computer Networks D. Internet of Things E. Subject relevant MOOC", 
                "type": "Elective", 
                "credits": "4", 
                "remarks": "03 Theory and 01 Lab" 
            },
            { "code": "SCMPSR-501", "name": "Research Project", "type": "Project", "credits": "4", "remarks": "04" }
        ]
    },
    {
        "programme": "M.Sc Computer Science",
        "semester": "Semester IV",
        "pattern": "Choice Based Credit System",
        "credits": "22",
        "courses": [
            { "code": "SCMPSC-551", "name": "Web Application with MVC Core", "type": "Core Theory", "credits": "4", "remarks": "04" },
            { "code": "SCMPSC-552", "name": "Introduction to AI and ML", "type": "Core Theory", "credits": "4", "remarks": "04" },
            { "code": "SCMPSCP-551", "name": "Lab 9: MVC Lab", "type": "Core Practical", "credits": "1", "remarks": "01" },
            { "code": "SCMPSCP-552", "name": "Lab 10: ML Lab", "type": "Core Practical", "credits": "1", "remarks": "01" },
            { 
                "code": "SCMPSE-551", 
                "name": "Chose any one: A. Database Administration B. Data Mining and Data Warehousing C. DevOps Fundamental", 
                "type": "Elective", 
                "credits": "4", 
                "remarks": "03 Theory and 01 Lab" 
            },
            { "code": "SVECP-551", "name": "Publication Ethics", "type": "Core", "credits": "2", "remarks": "02" },
            { "code": "SCMPSR-551", "name": "Research Project", "type": "Project", "credits": "6", "remarks": "06" }
        ]
    }

];

// Application State
let currentProgramme = "All";
let currentSemester = "All";
let currentSearchQuery = "";
let currentFilterProgramme = "";
let currentFilterSemester = "";
let currentFilterPattern = "";
let currentView = "grid";

// DOM Elements
const contentViewport = document.getElementById("contentViewport");
const searchInput = document.getElementById("searchInput");
const filterProgramme = document.getElementById("filterProgramme");
const filterSemester = document.getElementById("filterSemester");
const filterPattern = document.getElementById("filterPattern");
const btnReset = document.getElementById("btnReset");
const programmeTabsContainer = document.getElementById("programmeTabs");
const semesterTabsContainer = document.getElementById("semesterTabs");
const viewButtons = document.querySelectorAll(".view-btn");

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    renderSyllabus();
    setupEventListeners();
});

function setupEventListeners() {
    // Search input
    searchInput.addEventListener("input", (e) => {
        currentSearchQuery = e.target.value.toLowerCase().trim();
        renderSyllabus();
    });

    // Dropdown filters
    filterProgramme.addEventListener("change", (e) => {
        currentFilterProgramme = e.target.value;
        renderSyllabus();
    });

    filterSemester.addEventListener("change", (e) => {
        currentFilterSemester = e.target.value;
        renderSyllabus();
    });

    filterPattern.addEventListener("change", (e) => {
        currentFilterPattern = e.target.value;
        renderSyllabus();
    });

    // Reset button
    btnReset.addEventListener("click", () => {
        searchInput.value = "";
        filterProgramme.value = "";
        filterSemester.value = "";
        filterPattern.value = "";
        currentSearchQuery = "";
        currentFilterProgramme = "";
        currentFilterSemester = "";
        currentFilterPattern = "";
        currentProgramme = "All";
        currentSemester = "All";
        
        updateActivePillTabs();
        updateActiveSemTabs();
        renderSyllabus();
    });

    // Programme Pill Tabs
    programmeTabsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("pill-tab")) {
            currentProgramme = e.target.getAttribute("data-programme");
            filterProgramme.value = currentProgramme === "All" ? "" : currentProgramme;
            currentFilterProgramme = filterProgramme.value;
            updateActivePillTabs();
            renderSyllabus();
        }
    });

    // Semester Tabs
    semesterTabsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("sem-tab")) {
            currentSemester = e.target.getAttribute("data-sem");
            filterSemester.value = currentSemester === "All" ? "" : currentSemester;
            currentFilterSemester = filterSemester.value;
            updateActiveSemTabs();
            renderSyllabus();
        }
    });

    // View Switchers
    viewButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            viewButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentView = btn.getAttribute("data-view");
            
            contentViewport.className = `content-viewport ${currentView}-view`;
        });
    });

    // Action buttons simulation
    document.getElementById("btnDownloadPDF").addEventListener("click", () => {
        alert("Preparing Official University Syllabus PDF package for download...");
    });

    document.getElementById("btnPrint").addEventListener("click", () => {
        window.print();
    });

    document.getElementById("btnShare").addEventListener("click", () => {
        if (navigator.share) {
            navigator.share({
                title: 'Department of Computer Science - Syllabus Portal',
                url: window.location.href
            }).catch(() => {});
        } else {
            alert("Portal link copied to clipboard!");
        }
    });
}

function updateActivePillTabs() {
    const tabs = programmeTabsContainer.querySelectorAll(".pill-tab");
    tabs.forEach(tab => {
        if (tab.getAttribute("data-programme") === currentProgramme) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
}

function updateActiveSemTabs() {
    const tabs = semesterTabsContainer.querySelectorAll(".sem-tab");
    tabs.forEach(tab => {
        if (tab.getAttribute("data-sem") === currentSemester) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });
}

function renderSyllabus() {
    contentViewport.innerHTML = "";

    // Filter data
    const filteredData = syllabusData.filter(item => {
        // Programme check
        if (currentProgramme !== "All" && item.programme !== currentProgramme) return false;
        if (currentFilterProgramme && item.programme !== currentFilterProgramme) return false;

        // Semester check
        if (currentSemester !== "All" && item.semester !== currentSemester) return false;
        if (currentFilterSemester && item.semester !== currentFilterSemester) return false;

        // Pattern check
        if (currentFilterPattern && item.pattern !== currentFilterPattern) return false;

        // Search query check
        if (currentSearchQuery) {
            const matchProg = item.programme.toLowerCase().includes(currentSearchQuery);
            const matchSem = item.semester.toLowerCase().includes(currentSearchQuery);
            const matchPattern = item.pattern.toLowerCase().includes(currentSearchQuery);
            const matchCourse = item.courses.some(c => 
                c.code.toLowerCase().includes(currentSearchQuery) || 
                c.name.toLowerCase().includes(currentSearchQuery) ||
                c.type.toLowerCase().includes(currentSearchQuery)
            );
            if (!matchProg && !matchSem && !matchPattern && !matchCourse) return false;
        }

        return true;
    });

    if (filteredData.length === 0) {
        contentViewport.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <i class="fa-solid fa-folder-open" style="font-size: 48px; margin-bottom: 15px; color: #A5D6A7;"></i>
                <h3 style="font-size: 16px; font-weight: 600; color: var(--text-main);">No Syllabus Records Found</h3>
                <p style="font-size: 13px; margin-top: 5px;">Try adjusting your search query or filter parameters.</p>
            </div>
        `;
        return;
    }

    filteredData.forEach(item => {
        const semesterBlock = document.createElement("div");
        semesterBlock.className = "semester-block";

        // Info Card
        const infoCardHTML = `
            <div class="semester-info-card">
                <div class="info-item">
                    <span class="info-label">Programme</span>
                    <span class="info-value">${item.programme}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Semester</span>
                    <span class="info-value">${item.semester}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Academic Pattern</span>
                    <span class="info-value">${item.pattern}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Total Credits</span>
                    <span class="info-value">${item.credits}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Theory Credits</span>
                    <span class="info-value">${item.theory}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Practical Credits</span>
                    <span class="info-value">${item.practical}</span>
                </div>
            </div>
        `;

        // Table Rows
        let rowsHTML = "";
        item.courses.forEach(course => {
            rowsHTML += `
                <tr>
                    <td><strong>${course.code}</strong></td>
                    <td>${course.name}</td>
                    <td><span style="display:inline-block; padding:3px 8px; background:#E8F5E9; color:#2E7D32; border-radius:6px; font-size:11px; font-weight:600;">${course.type}</span></td>
                    <td>${course.credits}</td>
                    <td>${course.teaching}</td>
                    <td>${course.assessment}</td>
                </tr>
            `;
        });

        const tableHTML = `
            <div class="table-responsive-wrapper">
                <table class="syllabus-table">
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Title / Name</th>
                            <th>Course Type</th>
                            <th>Credits</th>
                            <th>Teaching Scheme</th>
                            <th>Assessment Scheme</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHTML}
                    </tbody>
                </table>
            </div>
        `;

        // Optional Subject Highlight Box
        const electiveHTML = item.electiveInfo ? `
            <div class="elective-highlight-box">
                <i class="fa-solid fa-circle-info"></i>
                <span><strong>Basket / Elective Rule:</strong> ${item.electiveInfo}</span>
            </div>
        ` : "";

        // University Notes Card
        const notesHTML = item.notes ? `
            <div class="university-notes-card">
                <h4><i class="fa-solid fa-triangle-exclamation"></i> University Notes & Guidelines</h4>
                <p>${item.notes}</p>
            </div>
        ` : "";

        semesterBlock.innerHTML = infoCardHTML + tableHTML + electiveHTML + notesHTML;
        contentViewport.appendChild(semesterBlock);
    });
}