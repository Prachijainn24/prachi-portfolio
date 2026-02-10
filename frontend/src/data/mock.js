export const personalInfo = {
  name: "Prachi Jain",
  title: "BCA Student",
  subtitle: "Web Developer & Cloud Enthusiast",
  description: "Passionate and curious Computer Science student with hands-on experience in web development (HTML, CSS, JavaScript) and backend frameworks. I have expertise in AWS services and love building interactive and responsive projects. I enjoy solving problems using data structures and algorithms and I'm eager to contribute my skills, learn from real-world challenges, and grow as a developer.",
  location: "Newai, Rajasthan",
  email: "prachi2409jain@gmail.com",
  phone: "8824474568",
  profileImage: "https://customer-assets.emergentagent.com/job_prachi-cloud-coder/artifacts/yn3fpf75_image.png",
  resumeUrl: "https://customer-assets.emergentagent.com/job_3bc1cd5d-47f8-4472-ada0-4266da8d7960/artifacts/c9y2jed3_prachi_resume202611.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/prachi-jain-tech",
    github: "https://github.com/prachijainn24",
    instagram: "#"
  }
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Banasthali Vidyapith",
    year: "2023 - 2026",
    cgpa: "8.09",
    status: "Pursuing"
  },
  {
    id: 2,
    degree: "Senior Secondary (12th)",
    institution: "Banasthali Vidyapith",
    year: "2022 - 2023",
    percentage: "81%"
  },
  {
    id: 3,
    degree: "Secondary (10th)",
    institution: "Dr. K.N. Modi Global School, Newai",
    year: "2020 - 2021",
    percentage: "79%"
  }
];

export const skills = {
  languages: ["Python", "C", "C++", "PHP"],
  web: ["HTML", "CSS", "JavaScript", "WebSocket API"],
  cloud: ["AWS IAM", "AWS S3", "AWS EC2", "AWS Lambda", "AWS RDS", "AWS DynamoDB", "AWS API Gateway"],
  tools: ["Git", "GitHub", "Linux", "Microsoft Excel"],
  concepts: ["Object-Oriented Programming", "Problem Solving", "Data Structures & Algorithms"]
};

export const experience = [
  {
    id: 1,
    company: "REGEX Software Services",
    role: "Cloud Computing (AWS) Trainee",
    location: "Jaipur, Rajasthan",
    duration: "May 2025 - Jul 2025",
    type: "Internship",
    responsibilities: [
      "Worked with AWS services: IAM, S3, EC2, Lambda, RDS, DynamoDB, API Gateway",
      "Built an AWS-based Face Recognition system using S3, Lambda, and AWS Rekognition",
      "Developed a real-time chat application using WebSocket API and AWS services",
      "Implemented IAM roles, policies, and cloud security best practices",
      "Used Python, Linux, and GitHub for backend development and version control"
    ]
  },
  {
    id: 2,
    company: "Elite Coders Winter of Code (ECWoC'26)",
    role: "Open Source Contributor",
    location: "Remote",
    duration: "Jan 2026",
    type: "Open Source",
    responsibilities: [
      "Selected as an official contributor for ECWoC'26",
      "Contributed to code, documentation, and issue resolution using GitHub workflows",
      "Collaborated with developers worldwide on open source projects"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "AWS-Based Face Recognition System",
    category: "Serverless Application",
    description: "Designed a serverless image-processing pipeline using AWS Rekognition, S3, Lambda, and DynamoDB. Improved scalability and reduced infrastructure management overhead.",
    technologies: ["AWS S3", "AWS Lambda", "AWS Rekognition", "DynamoDB", "Python"],
    highlights: [
      "Serverless architecture for automatic scaling",
      "Real-time face detection and recognition",
      "Integrated with AWS Rekognition for ML-powered analysis"
    ]
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    category: "WebSocket-Based System",
    description: "Designed and implemented a real-time chat application focusing on low-latency communication and backend logic using WebSocket API and AWS services.",
    technologies: ["WebSocket API", "Python", "AWS Lambda", "AWS API Gateway", "DynamoDB"],
    highlights: [
      "Real-time bidirectional communication",
      "Low-latency message delivery",
      "Scalable serverless architecture"
    ]
  },
  {
    id: 3,
    title: "TheThreadTales",
    category: "Full-Stack Website",
    description: "Built a responsive crochet website with dynamic backend content, featuring product showcase, user interactions, and database management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    highlights: [
      "Responsive design for all devices",
      "Dynamic content management",
      "Database-driven product catalog"
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: "Internet and Web Development Certification",
    description: "Hands-on training in web technologies and fundamentals"
  },
  {
    id: 2,
    title: "School Prefect (Class 10)",
    description: "Leadership & responsibility in school management"
  },
  {
    id: 3,
    title: "Diploma in Kathak Dance",
    description: "Classical Indian dance form certification"
  },
  {
    id: 4,
    title: "Cultural Dance Performer",
    description: "Performed at Mayukh TechFest 2024"
  }
];

// Mock function for contact form - replaced with real API call
export const sendContactMessage = async (formData) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const response = await fetch(`${BACKEND_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || 'Failed to send message');
  }
  
  return await response.json();
};