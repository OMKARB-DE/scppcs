// Complete Dataset including all courses provided from the dataset image
const coursesData = [
    { title: "Advanced Distributed Systems", discipline: "Computer Science", instructor: "Prof. Smruti R", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Delhi", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs169" },
    { title: "Algorithmic Game Theory", discipline: "Computer Science", instructor: "Prof. Palash D", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kanpur", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs164" },
    { title: "Applied Accelerated Artificial Intelligence", discipline: "Computer Science", instructor: "Prof. Palash D", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Guwahati", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs179" },
    { title: "Approximation Algorithm", discipline: "Computer Science", instructor: "Prof. Palash D", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kanpur", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs165" },
    { title: "Arithmetic Circuit Complexity", discipline: "Computer Science", instructor: "Prof. Nitin S", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kanpur", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs148" },
    { title: "Artificial Intelligence for Economics", discipline: "Computer Science", instructor: "Prof. Advay M", startDate: "20-07-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Guwahati", level: "PG", credit: "3", duration: "8", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs118" },
    { title: "Artificial Intelligence: Concepts and Techniques", discipline: "Computer Science", instructor: "Prof. V. Sushe", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Science, Bangalore", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs182" },
    { title: "Artificial Intelligence: Foundations and Algorithms", discipline: "Computer Science", instructor: "Prof. Mausam", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Delhi", level: "PG", credit: "4", duration: "12", language: "Gujarati, Hindi, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs129" },
    { title: "Artificial Intelligence: Search Methods For Problem solving", discipline: "Computer Science", instructor: "Prof. Deepak K", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Madras", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs132" },
    { title: "Big Data Computing", discipline: "Computer Science", instructor: "Prof. Rajib Mit", startDate: "17-08-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Patna", level: "PG", credit: "2", duration: "8", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs189" },
    { title: "C Programming and Assembly Language", discipline: "Computer Science", instructor: "Prof. Jimakaran", startDate: "20-07-2026", endDate: "14-08-2026", institute: "Indian Institute of Technology, Madras", level: "UG", credit: "2", duration: "4", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs106" },
    { title: "C-Based VLSI Design", discipline: "Computer Science", instructor: "Prof. Chandan", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Guwahati", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs175" },
    { title: "Cloud Computing", discipline: "Computer Science", instructor: "Prof. Soumya K", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "PG", credit: "4", duration: "12", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs150" },
    { title: "Computational Complexity", discipline: "Computer Science", instructor: "Prof. Subrahma", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Hyderabad", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs142" },
    { title: "Computational Number Theory and Algebra", discipline: "Computer Science", instructor: "Prof. Nitin Sax", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kanpur", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs149" },
    { title: "Computer Architecture", discipline: "Computer Science", instructor: "Prof. Sumit K.", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Delhi", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs168" },
    { title: "Computer Architecture and Organization", discipline: "Computer Science", instructor: "Prof. Indranil S", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs199" },
    { title: "Computer Graphics", discipline: "Computer Science", instructor: "Prof. Samit Bh", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Guwahati", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs178" },
    { title: "Computer Networks", discipline: "Computer Science", instructor: "Prof. Neminati", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Indore", level: "UG, PG", credit: "4", duration: "12", language: "Bengali, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs166" },
    { title: "Computer System Optimizations for ML", discipline: "Computer Science", instructor: "Prof. Sumit K.", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Delhi", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs96" },
    { title: "Computer Vision", discipline: "Computer Science", instructor: "Prof. Jayanta M", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "Gujarati, Hindi, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs158" },
    { title: "Cyber Security and Privacy", discipline: "Computer Science", instructor: "Prof. Saji K M", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Madras", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs144" },
    { title: "Data Base Management System", discipline: "Computer Science", instructor: "Prof. Partha Pr", startDate: "20-07-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "3", duration: "8", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs117" },
    { title: "Data Science for Engineers", discipline: "Computer Science", instructor: "Prof. Ragunath", startDate: "20-07-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Madras", level: "UG, PG", credit: "3", duration: "8", language: "Bengali, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs112" },
    { title: "Data Structure and Algorithms using Java", discipline: "Computer Science", instructor: "Prof. Debasis S", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs162" },
    { title: "Data Structures and Algorithms Design", discipline: "Computer Science", instructor: "Prof. Nitin S", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs146" },
    { title: "Deep Learning - IIT Ropar", discipline: "Computer Science", instructor: "Prof. Sudarshai", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Ropar", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs138" },
    { title: "Deep Learning for Computer Vision", discipline: "Computer Science", instructor: "Prof. Vineeth T", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Hyderabad", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs174" },
    { title: "Demystifying Networking", discipline: "Computer Science", instructor: "Prof. Sridhar Iy", startDate: "20-07-2026", endDate: "14-08-2026", institute: "Indian Institute of Technology, Bombay", level: "UG, PG", credit: "2", duration: "4", language: "Hindi, Marathi, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs105" },
    { title: "Design & Implementation of Human Computer Interfaces", discipline: "Computer Science", instructor: "Prof. Samit Bh", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs177" },
    { title: "Design and analysis of algorithms", discipline: "Computer Science", instructor: "Prof. Manish V", startDate: "20-07-2026", endDate: "11-Sep-2026", institute: "Chennai Mathematical Institute, Chennai", level: "UG", credit: "3", duration: "8", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs110" },
    { title: "Discrete Mathematics", discipline: "Computer Science", instructor: "Prof. Sudarshan", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Ropar", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs137" },
    { title: "Discrete Mathematics - IIITB", discipline: "Computer Science", instructor: "Prof. Ashish Ch", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "International Institute of Information Tech", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs125" },
    { title: "Distributed Systems", discipline: "Computer Science", instructor: "Prof. Rajiv Mit", startDate: "20-07-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Patna", level: "PG", credit: "3", duration: "8", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs115" },
    { title: "Ethical Hacking", discipline: "Computer Science", instructor: "Prof. Indranil S", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs122" },
    { title: "Formal Methods for System Verification", discipline: "Computer Science", instructor: "Prof. Chandan", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Guwahati", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs92" },
    { title: "Foundations and Applications of Machine Learning (Bengali)", discipline: "Computer Science", instructor: "Prof. Advay M", startDate: "20-07-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Kharagpur", level: "PG", credit: "3", duration: "8", language: "Bengali, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs116" },
    { title: "Foundations of Immersive Design for AR/VR", discipline: "Computer Science", instructor: "Prof. Amar Ku", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kanpur", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs103" },
    { title: "Foundations of Machine Learning", discipline: "Computer Science", instructor: "Prof. J. Saketha", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Hyderabad", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs102" },
    { title: "Functional Programming with OCaml", discipline: "Computer Science", instructor: "Prof. K C Sivar", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Madras", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs90" },
    { title: "Fundamentals of Generative AI and Large Language Models. Theory", discipline: "Computer Science", instructor: "Prof. Sriram G", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Science, Bangalore", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs95" },
    { title: "Generative AI for Computer Vision", discipline: "Computer Science", instructor: "Prof. Arijit Sur", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs104" },
    { title: "Getting Started with Competitive Programming", discipline: "Computer Science", instructor: "Prof. Needkhar", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Gandhin", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs139" },
    { title: "Hardware Modeling Using Verilog", discipline: "Computer Science", instructor: "Prof. Indranil S", startDate: "20-07-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Kharagpur", level: "PG", credit: "3", duration: "8", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs120" },
    { title: "Human Computer Interaction (In Hindi)", discipline: "Computer Science", instructor: "Prof. Rajiv Rat", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indraprastha Institute of Information Te", level: "UG, PG", credit: "4", duration: "12", language: "Hindi, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs173" },
    { title: "Intermediary Algorithm", discipline: "Computer Science", instructor: "Prof. C Punchi T", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs94" },
    { title: "Introduction to Algorithms and Analysis", discipline: "Computer Science", instructor: "Prof. Souvav M", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs163" },
    { title: "Introduction to Computer and Network Performance Analysis using", discipline: "Computer Science", instructor: "Prof. Varsha A", startDate: "17-08-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Bombay", level: "PG", credit: "2", duration: "4", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs184" },
    { title: "Introduction to Graph Algorithms", discipline: "Computer Science", instructor: "Prof. C Punchi T", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Science, Bangalore", level: "UG, PG", credit: "3", duration: "8", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs161" },
    { title: "Introduction to Industry 4.0 and Industrial Internet of Things", discipline: "Computer Science", instructor: "Prof. Sudip Mi", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs160" },
    { title: "Introduction to Internet of Things", discipline: "Computer Science", instructor: "Prof. Sudip Mi", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs101" },
    { title: "Introduction to Machine Learning", discipline: "Computer Science", instructor: "Prof. Balarama", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Madras", level: "UG, PG", credit: "4", duration: "12", language: "Gujarati, Kannada, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs133" },
    { title: "Introduction to Machine Learning - IITKGP", discipline: "Computer Science", instructor: "Prof. Sudeshna", startDate: "20-07-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Kharagpur", level: "PG", credit: "3", duration: "8", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs119" },
    { title: "Introduction to Machine Learning (Tamil)", discipline: "Computer Science", instructor: "Prof. Arun Raji", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Madras", level: "UG, PG", credit: "4", duration: "12", language: "Tamil, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs111" },
    { title: "Introduction to Operating Systems", discipline: "Computer Science", instructor: "Prof. Chester F", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Madras", level: "UG", credit: "3", duration: "12", language: "Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs123" },
    { title: "Introduction to programming in C", discipline: "Computer Science", instructor: "Prof. Debajyoti T", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "Bengali, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs113" },
    { title: "Linear Algebra Through Geometry", discipline: "Computer Science", instructor: "Prof. Ashok Ra", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Madras", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs127" },
    { title: "Linear programming and its applications to computer science", discipline: "Computer Science", instructor: "Prof. Rajat Mit", startDate: "17-08-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kanpur", level: "UG, PG", credit: "3", duration: "8", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs187" },
    { title: "Machine Learning for Earth System Sciences", discipline: "Computer Science", instructor: "Prof. Advay M", startDate: "20-07-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Kharagpur", level: "PG", credit: "3", duration: "8", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs121" },
    { title: "Mathematical Foundations for Machine Learning", discipline: "Computer Science", instructor: "Prof. Ashok Ra", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Science, Bangalore", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs186" },
    { title: "Mathematical Foundations of Generative AI", discipline: "Computer Science", instructor: "Prof. Prathosh", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Science, Bangalore", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs97" },
    { title: "Mobile Virtual Reality and Artificial Intelligence", discipline: "Computer Science", instructor: "Prof. Varun Da", startDate: "17-08-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Mandi", level: "UG, PG", credit: "2", duration: "4", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs188" },
    { title: "Multi-Core Computer Architecture", discipline: "Computer Science", instructor: "Prof. John Jose", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Guwahati", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs180" },
    { title: "Natural Language Processing", discipline: "Computer Science", instructor: "Prof. Pawan G", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "PG", credit: "4", duration: "12", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs176" },
    { title: "Operating System Fundamentals", discipline: "Computer Science", instructor: "Prof. Santanu G", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs156" },
    { title: "Parameterized Algorithms", discipline: "Computer Science", instructor: "Prof. Saket Sou", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Madras", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs172" },
    { title: "Privacy and Security in Online Social Media", discipline: "Computer Science", instructor: "Prof. Ponnuran", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "International Institute of Information Te", level: "UG, PG", credit: "4", duration: "12", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs141" },
    { title: "Privacy Enabling Techniques (PETS)", discipline: "Computer Science", instructor: "Prof. Debdeep", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs100" },
    { title: "Problem Solving through Programming in C", discipline: "Computer Science", instructor: "Prof. Anupam S", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs155" },
    { title: "Programming in Java", discipline: "Computer Science", instructor: "Prof. Debasis S", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs153" },
    { title: "Programming in Modern C++", discipline: "Computer Science", instructor: "Prof. Partha Pr", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs159" },
    { title: "Programming with Generative AI", discipline: "Computer Science", instructor: "Prof. Rajib Kur", startDate: "17-08-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "PG", credit: "3", duration: "8", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs188" },
    { title: "Programming, Data Structures and Algorithms Using Python", discipline: "Computer Science", instructor: "Prof. Madhavan", startDate: "20-07-2026", endDate: "11-Sep-2026", institute: "Chennai Mathematical Institute, Chennai", level: "UG", credit: "3", duration: "8", language: "Assamese, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs109" },
    { title: "Python for Data Science", discipline: "Computer Science", instructor: "Prof. Ragunath", startDate: "20-07-2026", endDate: "14-08-2026", institute: "Indian Institute of Technology, Madras", level: "UG, PG", credit: "2", duration: "4", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs107" },
    { title: "Real-Time Systems", discipline: "Computer Science", instructor: "Prof. Rajib Ma", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs167" },
    { title: "Reinforcement Learning", discipline: "Computer Science", instructor: "Prof. Balarama", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Madras", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs134" },
    { title: "Responsible & Safe AI Systems", discipline: "Computer Science", instructor: "Prof. Mausam", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Delhi", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs145" },
    { title: "Scalable Data Science", discipline: "Computer Science", instructor: "Prof. Anirban T", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs122" },
    { title: "Second Level Algorithms", discipline: "Computer Science", instructor: "Prof. Palash D", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs147" },
    { title: "Secure Computation: Part II", discipline: "Computer Science", instructor: "Prof. Ashish Ch", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "International Institute of Information Te", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs126" },
    { title: "Social Network Analysis", discipline: "Computer Science", instructor: "Prof. Tanmoy O", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Delhi", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs170" },
    { title: "Social Networks", discipline: "Computer Science", instructor: "Prof. Sudarshan", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Ropar", level: "UG, PG", credit: "4", duration: "12", language: "Hindi, Marathi, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs135" },
    { title: "Software Conceptual Design", discipline: "Computer Science", instructor: "Prof. Sridhar I", startDate: "17-08-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Bombay", level: "UG", credit: "2", duration: "4", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs185" },
    { title: "Software Engineering", discipline: "Computer Science", instructor: "Prof. Rajib Ma", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs151" },
    { title: "Software Project Management", discipline: "Computer Science", instructor: "Prof. Rajib Ma", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "4", duration: "12", language: "Bengali, Gujarati, English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs152" },
    { title: "Software Testing", discipline: "Computer Science", instructor: "Prof. Meenalisa", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "International Institute of Information Te", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs131" },
    { title: "Statistical Learning for Reliability Analysis", discipline: "Computer Science", instructor: "Prof. Monalisa", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Kharagpur", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs154" },
    { title: "Stochastic Approximation: Theory and Applications", discipline: "Computer Science", instructor: "Prof. Gugan C", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Science, Bangalore", level: "PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs124" },
    { title: "The Joy of Computing using Python", discipline: "Computer Science", instructor: "Prof. Sudarshan", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Ropar", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs101" },
    { title: "Theory and Practice of Modern Cryptography", discipline: "Computer Science", instructor: "Prof. Sudarshan", startDate: "20-07-2026", endDate: "09-Oct-2026", institute: "Indian Institute of Technology, Ropar", level: "UG, PG", credit: "4", duration: "12", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs136" },
    { title: "Theory of Computation", discipline: "Computer Science", instructor: "Prof. Somenath", startDate: "20-07-2026", endDate: "11-Sep-2026", institute: "Indian Institute of Technology, Kharagpur", level: "UG, PG", credit: "3", duration: "8", language: "English", previewUrl: "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs114" }
];

// DOM Elements
const courseContainer = document.getElementById('courseContainer');
const searchInput = document.getElementById('searchInput');
const instituteFilter = document.getElementById('instituteFilter');
const levelFilter = document.getElementById('levelFilter');
const weekFilter = document.getElementById('weekFilter');
const resetFiltersBtn = document.getElementById('resetFilters');
const courseCount = document.getElementById('courseCount');
const viewBtns = document.querySelectorAll('.view-btn');

const courseModal = document.getElementById('courseModal');
const closeModal = document.getElementById('closeModal');

let currentView = 'grid';

// Populate Unique Institute Dropdown
function populateInstitutes() {
    const institutes = [...new Set(coursesData.map(c => c.institute))].sort();
    institutes.forEach(inst => {
        const option = document.createElement('option');
        option.value = inst;
        option.textContent = inst;
        instituteFilter.appendChild(option);
    });
}

// Render Courses based on View Mode
function renderCourses(data) {
    courseContainer.innerHTML = '';
    courseCount.textContent = data.length;

    if (data.length === 0) {
        courseContainer.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-secondary);">No matching courses found.</div>`;
        return;
    }

    data.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';

        if (currentView === 'list') {
            card.innerHTML = `
                <div class="card-main-content">
                    <h3 class="course-title">${course.title}</h3>
                    <div class="course-inst"><i class="fa-solid fa-chalkboard-user"></i> ${course.instructor}</div>
                    <div class="course-inst"><i class="fa-solid fa-university"></i> ${course.institute}</div>
                </div>
                <div class="card-footer">
                    <div class="card-top" style="margin-bottom:0; gap:10px;">
                        <span class="badge-level">${course.level}</span>
                        <span class="badge-duration">${course.duration} Wks</span>
                    </div>
                    <button class="btn-details" onclick='openModal(${JSON.stringify(course)})'>Details</button>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div>
                    <div class="card-top">
                        <span class="badge-level">${course.level}</span>
                        <span class="badge-duration"><i class="fa-regular fa-clock"></i> ${course.duration} Weeks</span>
                    </div>
                    <h3 class="course-title">${course.title}</h3>
                    <div class="course-inst"><i class="fa-solid fa-chalkboard-user"></i> ${course.instructor}</div>
                    <div class="course-inst" style="margin-bottom: 5px;"><i class="fa-solid fa-university"></i> ${course.institute}</div>
                </div>
                <div class="card-footer">
                    <span class="course-dates"><i class="fa-regular fa-calendar"></i> ${course.startDate}</span>
                    <button class="btn-details" onclick='openModal(${JSON.stringify(course)})'>Details</button>
                </div>
            `;
        }
        courseContainer.appendChild(card);
    });
}

// Filter Logic
function filterCourses() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedInstitute = instituteFilter.value;
    const selectedLevel = levelFilter.value;
    const selectedWeek = weekFilter.value;

    const filtered = coursesData.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm) ||
                              course.instructor.toLowerCase().includes(searchTerm) ||
                              course.institute.toLowerCase().includes(searchTerm);
        
        const matchesInstitute = selectedInstitute === "" || course.institute === selectedInstitute;
        const matchesLevel = selectedLevel === "" || course.level === selectedLevel;
        const matchesWeek = selectedWeek === "" || course.duration === selectedWeek;

        return matchesSearch && matchesInstitute && matchesLevel && matchesWeek;
    });

    renderCourses(filtered);
}

// Switch Views (Grid, Tile, List)
viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentView = btn.getAttribute('data-view');
        
        courseContainer.className = `course-container ${currentView}-view`;
        filterCourses();
    });
});

// Modal Logic
window.openModal = function(course) {
    document.getElementById('modalTitle').textContent = course.title;
    document.getElementById('modalInstructor').textContent = course.instructor;
    document.getElementById('modalInstitute').textContent = course.institute;
    document.getElementById('modalDiscipline').textContent = course.discipline;
    document.getElementById('modalLevel').textContent = course.level;
    document.getElementById('modalStart').textContent = course.startDate;
    document.getElementById('modalEnd').textContent = course.endDate;
    document.getElementById('modalDuration').textContent = course.duration + " Weeks";
    document.getElementById('modalCredit').textContent = course.credit;
    document.getElementById('modalLanguage').textContent = course.language;
    document.getElementById('modalPreviewBtn').href = course.previewUrl;

    courseModal.classList.add('active');
}

closeModal.addEventListener('click', () => {
    courseModal.classList.remove('active');
});

courseModal.addEventListener('click', (e) => {
    if (e.target === courseModal) {
        courseModal.classList.remove('active');
    }
});

// Event Listeners
searchInput.addEventListener('input', filterCourses);
instituteFilter.addEventListener('change', filterCourses);
levelFilter.addEventListener('change', filterCourses);
weekFilter.addEventListener('change', filterCourses);

resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    instituteFilter.value = '';
    levelFilter.value = '';
    weekFilter.value = '';
    filterCourses();
});

// Initialize Application
populateInstitutes();
renderCourses(coursesData);