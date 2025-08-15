import INT1 from "./PJimg/INT1.jpg";
import INT2 from "./PJimg/INT2.jpg";
import INT3 from "./PJimg/INT3.jpg";
import INT4 from "./PJimg/INT4.jpg";
import INT5 from "./PJimg/INT5.jpg";
import INT6 from "./PJimg/INT6.jpg";
import one from "./TaskImg/one.jpg";
import two from "./TaskImg/two.jpg";
import three from "./TaskImg/three.jpg";
import four from "./TaskImg/four.jpg";
import five from "./TaskImg/five.jpg";
import six from "./TaskImg/six.jpg";
import seven from "./TaskImg/seven.jpg";
import eight from "./TaskImg/eight.jpg";
import nine from "./TaskImg/nine.jpg";
import s1 from "./sport/s1.jpg";
import s2 from "./sport/s2.jpg";
import s3 from "./sport/s3.jpg";
import s4 from "./sport/s4.jpg";
import s5 from "./sport/s5.jpg";
import s6 from "./sport/s6.jpg";
import s7 from "./sport/s7.jpg";
import s8 from "./sport/s8.jpg";
import s9 from "./sport/s9.jpg";
import s10 from "./sport/s10.jpg";
import s11 from "./sport/s11.jpg";
import s12 from "./sport/s12.jpg";
import s13 from "./sport/s13.jpg";
import s14 from "./sport/s14.jpg";
import s15 from "./sport/s15.jpg";
import n1 from "./furniture/n1.jpg";
import n2 from "./furniture/n2.jpg";
import n3 from "./furniture/n3.jpg";
import n5 from "./furniture/n5.jpg";
import n4 from "./furniture/n4.jpg";
import n6 from "./furniture/n6.jpg";
import n7 from "./furniture/n7.jpg";
import n8 from "./furniture/n8.jpg";
import n9 from "./furniture/n9.jpg";
import n10 from "./furniture/n10.jpg";
import n11 from "./furniture/n11.jpg";
import d1 from "./doitung/d1.jpg";
import d2 from "./doitung/d2.jpg";
import d3 from "./doitung/d3.jpg";
import d4 from "./doitung/d4.jpg";
import d5 from "./doitung/d5.jpg";
import d6 from "./doitung/d6.jpg";
import d7 from "./doitung/d7.jpg";
import d8 from "./doitung/d8.jpg";
import d9 from "./doitung/d9.jpg";
import d10 from "./doitung/d10.jpg";
import d11 from "./doitung/d11.jpg";
import d12 from "./doitung/d12.jpg";
import d13 from "./doitung/d13.jpg";
import d14 from "./doitung/d14.jpg";
import d15 from "./doitung/d15.jpg";
import d16 from "./doitung/d16.jpg";
import d17 from "./doitung/d17.jpg";
import d18 from "./doitung/d18.jpg";
import d19 from "./doitung/d19.jpg";
import d20 from "./doitung/d20.jpg";
import d21 from "./doitung/d21.jpg";
import d22 from "./doitung/d22.jpg";
import d23 from "./doitung/d23.jpg";
import d24 from "./doitung/d24.jpg";
import d25 from "./doitung/d25.jpg";
import d26 from "./doitung/d26.jpg";

import d28 from "./doitung/d28.jpg";
import d29 from "./doitung/d29.jpg";
import d30 from "./doitung/d30.jpg";

// ... rest of your code
export const portfolioData = {
  personal: {
    name: "Nay Ye Lin",
    title: "Full-Stack Developer",
    tagline:
      "Crafting elegant solutions through clean code and innovative thinking",
    email: "nayyelin.dev@email.com",
    location: "Chiang Rai , Thailand",
    github: "https://github.com/Nayyelin-14",

    bio: "Passionate full-stack developer with 1+ year of experience building scalable web applications. I love turning complex problems into simple, elegant solutions and am always eager to learn new technologies.",
  },
  skills: {
    frontend: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 90 },

      { name: "Express.js", level: 88 },
    ],
    tools: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Docker", level: 75 },

      { name: "Git", level: 95 },
    ],
  },
  projects: [
    {
      id: 1,
      title: "AI-Powered Interview Preparation",
      description: `
    This application helps users prepare for interviews by generating personalized questions 
    and answers based on their job role and experience. Users can take notes, review topics, 
    and explore AI-generated explanations for better understanding.
  `,
      features: [
        "Secure User Authentication – Sign up and log in with robust JWT-based authentication.",
        "Smart Role-Based Sessions – Generate tailored interview questions based on job role and experience level.",
        "AI-Powered Q&A – Instantly create high-quality technical questions and answers using the Gemini API.",
        "Clean Learning Flow – Review Q&A in an interactive accordion interface for a distraction-free experience.",
        "On-Demand AI Explanations – Get instant, in-depth breakdowns of any concept.",
        "Question Pinning – Mark and save important questions for quick reference.",
        "Persistent Cloud Storage – Store sessions and questions securely in MongoDB for future access.",
        "Modern, Responsive UI – Sleek Tailwind-powered design for a smooth, mobile-friendly experience.",
      ],
      image: INT1,
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "GeminiAI",
        "Redis (Upstash)",
      ],
      liveUrl: "https://ecotracker-demo.com",
      githubUrl: "https://github.com/Nayyelin-14/InterviewPrepAI",
      featured: true,
      details: [INT1, INT2, INT3, INT4, INT5, INT6],
      status: "completed",
    },
    {
      id: 2,
      title: "Task Management",
      description: `
    A smart task management platform with dedicated Admin and User portals, 
    enabling efficient task assignment, progress tracking, and visual analytics. 
    The system streamlines project workflows by providing real-time status updates 
    and interactive charts for both administrators and team members.
  `,
      features: [
        "Role-Based Access – Separate dashboards for Admin and User with secure authentication.",
        "Admin Task Control – Create, assign, and manage tasks for any user.",
        "Admin Analytics – View interactive charts for task distribution and recent activity in the dashboard.",
        "User Task Overview – See all assigned tasks in a clean, organized interface.",
        "Status Tracking – Easily update tasks to Pending, In Progress, or Completed.",
        "User Progress Charts – Visualize personal task completion rates with an interactive circle chart.",
        "Real-Time Sync – Task updates instantly reflected across the system.",
        "Responsive Design – Mobile-friendly, modern UI built with Tailwind CSS.",
      ],
      image: one,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://taskflow-pro.com",
      githubUrl: "https://github.com/Nayyelin-14/Task-management",
      featured: true,
      status: "completed",
      details: [one, two, three, four, five, six, seven, eight, nine],
    },
    {
      id: 3,
      title: "Mae Fah Luang Sport Complex Booking",
      description: `
    A booking platform for the Mae Fah Luang University sport complex. 
    Users can reserve courts and trainers, view booking history, and manage their profile. 
    Admins manage users, bookings, trainers and can archive or remove problematic accounts/bookings.
  `,
      features: [
        // Admin features
        "Admin & User roles — separate admin dashboard and user dashboard.",
        "Admin: view all booking statuses and user statuses in real-time.",
        "Admin: temporarily restrict a user (suspend login) or permanently delete a user from the system.",
        "Admin: delete or modify bookings for valid reasons (cancellations, disputes, etc.).",
        // Booking rules
        "Booking types — users can book 5 types of sport (e.g., badminton, basketball, football, tennis, swimming).",
        "Fixed time slots — each booking slot is a 2-hour block (eg. 08:00–10:00, 10:00–12:00).",
        "Capacity tracking — users can see how many people already booked a specific slot (e.g., 3 people booked 14:00–16:00).",
        "Trainer bookings — option to book a trainer; each sport has two trainers and trainer availability is checked before booking.",
        "User booking flow — select sport -> pick 2-hour slot -> optionally add trainer -> confirm booking.",
        // User features
        "User profiles — update profile photo, email, phone number and password.",
        "Booking history — users can view full history of their bookings.",

        // Data & archiving rules
        "Auto-archive / cleanup — bookings are archived 24 hours after the booking end; archived records move to a separate archive DB collection for auditing.",
        "No UI removal of history — archived bookings are not shown in active UI but are retained in the archive DB.",
        // Misc
        "Role-based security — protected endpoints with JWT and role checks for admin vs user actions.",
      ],
      image: s1, // placeholder import/variable for main thumbnail
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT (auth)",
        "Tailwind CSS",
        "Cloudinary (profile images)",
        "Ant Design",
      ],
      liveUrl: "https://maefahluang-sports.example.com", // replace with real URL
      githubUrl: "https://github.com/Nayyelin-14/SportComplex",
      featured: true,
      details: [
        s1,
        s2,
        s3,
        s4,
        s5,
        s6,
        s7,
        s8,
        s9,
        s10,
        s11,
        s12,
        s13,
        s14,
        s15,
      ], // placeholders for gallery images
      status: "completed",
    },
    {
      id: 4,
      title: "NextFurniture – Shopping & Blog Platform",
      description: `
    A practice project showcasing modern full-stack development techniques, combining 
    a furniture e-commerce platform with a blog section. Users can browse and filter 
    products by categories, read blog articles about furniture, and manage their cart.
    Built to experiment with advanced frontend state management, backend queues, caching, 
    image optimization, and multi-language support.
  `,
      features: [
        // 🔐 Authentication & Security
        "Secure Authentication – Register and log in with JWT-based authentication.",
        "OTP Verification – Email or SMS-based one-time password for account verification.",
        "Password Reset – Secure 'forget password' flow with OTP verification.",
        "Password Change – Authenticated users can update their password directly.",
        "Logout – Proper session invalidation for enhanced security.",

        // 🛋️ E-commerce & Content
        "Product Browsing – View a catalog of furniture items with detailed descriptions.",
        "Advanced Filtering – Filter products by categories for a tailored shopping experience.",
        "Add to Cart – Seamlessly add products to a persistent shopping cart.",
        "Blog Section – Explore articles and tips about furniture and home design.",

        // 🎨 UI & Performance
        "ShadCN-Powered UI – Modern and accessible components with Radix UI and Tailwind.",
        "Image Optimization – Efficient image processing using Sharp for better performance.",
        "Responsive Design – Mobile-first layout with smooth interactions.",

        // ⚡ Performance & Infrastructure
        "Caching with Redis – Local Redis caching to speed up product queries.",
        "Pagination Options – Offset and cursor pagination for blogs and products.",
        "Internationalization – i18n integration on backend for multi-language support.",
        "Background Jobs – Task scheduling with Node Cron and BullMQ for queue work.",
      ],
      image: n1, // Replace with your main screenshot
      technologies: [
        "React",
        "TanStack Query",
        "Node.js",
        "Express.js",
        "Prisma",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Node Cron",
        "Sharp",
        "ShadCN UI",
        "Tailwind CSS",
        "i18next",
      ],
      liveUrl: "https://furniturehub-demo.com", // your link
      githubUrl: "https://github.com/Nayyelin-14/Furniture-Shop", // your repo
      featured: true,
      details: [n1, n2, n3, n4, n6, n5, n7, n8, n9, n10, n11], // replace with screenshots
      status: "completed", // or completed
    },
    {
      id: 5,
      title: "Doi Tung – E-learning Platform",
      description: `
The Doi Tung E-Learning Platform is a comprehensive full-stack web application designed to promote education, preserve local culture, and strengthen community engagement in the Doi Tung region. It enables learners to browse, enroll in, and complete courses, track their progress, and earn digital certificates upon completion. Courses feature multimedia-rich content, including videos, securely stored and delivered through Cloudinary.

The platform supports personalized user profiles and role-based dashboards tailored to learners, administrators, and super administrators. Administrators can manage courses, users, and multimedia content, while super administrators have extended capabilities, including creating admin and user accounts, monitoring platform analytics, and overseeing system-wide settings.

Accessibility and scalability are core design principles, ensuring the platform runs smoothly across devices and can grow with the community’s needs, while its cultural focus ensures it remains relevant and valuable to the Doi Tung community.
`,
      features: [
        // 🔐 Authentication & Security
        "Username/password login for users; email and token login for admin and superadmin.",
        "Users can update their username and password.",

        // 📚 Course & User Management
        "Search and filter courses by category, type, and keywords.",
        "Course overview available before enrollment.",
        "Enroll in courses and track learning progress.",
        "View certificates for completed courses.",
        "User profile with progress tracking and learning history.",

        // 🛠️ Admin & Super Admin Dashboard
        "Admin dashboard for managing users and courses.",
        "Both Admins and Super Admins can add, edit, and delete courses, including media management via Cloudinary.",

        "Super Admins can activate/deactivate users and monitor progress.",
        "Super Admins can create new admins and users.",
        "Super Admin dashboard includes analytics on enrollments, users, and courses.",

        // 🎥 Media Management
        "Cloudinary integration for storing and delivering videos, images, and profile pictures.",
      ],
      image: d23, // Replace with your main screenshot
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "MUI",
        "Redux",
        "Node.js",
        "Express.js",
        "MySQL",
        "Drizzle ORM",
        "JWT Authentication",
        "HTTPS",

        "Cloudinary",

        "ShadCN UI",
        "i18next",
      ],
      githubUrl: "https://github.com/Nayyelin-14/DoiTung", // your repo
      featured: true,
      details: [
        d23,
        d1,
        d2,
        d3,
        d4,
        d5,
        d6,
        d7,
        d8,
        d9,
        d10,
        d11,
        d12,
        d13,
        d14,
        d15,
        d16,
        d17,
        d18,
        d19,
        d20,
        d21,
        d22,

        d24,
        d25,
        d26,

        d28,
        d29,
        d30,
      ], // replace with screenshots
      status: "completed", // or completed
    },
  ],
};
