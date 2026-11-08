import type { Locale } from "./i18n";
export type { Locale };

/**
 * Field-level translation overlay for the portfolio data.
 *
 * Keys are JSON-pointer-style paths into `portfolioData` / project details,
 * e.g. "personal.title", "experience.0.role", "projects.0.description".
 *
 * The `en` map is empty because `lib/data.ts` is already the English source.
 * The `th` map contains Thai translations. The `my` map contains Burmese
 * translations with English technical terms retained where appropriate.
 */
export const DATA_TRANSLATIONS: Record<Locale, Record<string, string>> = {
  en: {},
  th: {
    // --- personal ---
    "personal.title": "วิศวกรซอฟต์แวร์ระดับจูเนียร์",
    "personal.tagline":
      "บัณฑิตจบใหม่ด้านวิศวกรรมซอฟต์แวร์ ที่มีประสบการณ์ฝึกงานองค์กร 8 เดือน — สร้างระบบแบ็กเอนด์ที่ปรับขนาดได้และแอปพลิเคชันเต็มรูปแบบทันสมัย",
    "personal.location": "กรุงเทพฯ ประเทศไทย",
    "personal.bio":
      "วิศวกรซอฟต์แวร์ระดับจูเนียร์ที่มีประสบการณ์จริงจากการฝึกงาน 8 เดือนที่ Datasabai ประเทศไทย ผมชอบสร้างบริการแบ็กเอนด์ที่ปรับขนาดได้และแอปพลิเคชันเต็มรูปแบบทันสมัยที่แก้ปัญหาในโลกความจริง",
    // --- experience ---
    "experience.0.role": "วิศวกรซอฟต์แวร์ฝึกงาน",
    "experience.0.company": "Datasabai Thailand",
    "experience.0.type": "การฝึกงาน · 8 เดือน",
    "experience.0.location": "ประเทศไทย · ผสม",
    "experience.0.description":
      "ทำงานกับทีม R&D ของผลิตภัณฑ์การบูรณาการระดับองค์กร — เว็บไซต์การตลาด, SDK ภายในพร้อมเครื่องมือสำหรับนักพัฒนา, และบริการแบ็กเอนด์ใน Java/Quarkus ทำงานร่วมกับ PM, นักออกแบบ UX/UI และวิศวกรอาวุโสทุกวันโดยใช้ Azure DevOps",
    "experience.0.date.start": "2025",
    "experience.0.date.end": "2026",
    // experience highlights (0-6)
    "experience.0.highlights.0":
      "สร้าง UI ส่วนใหญ่ของเว็บไซต์การตลาด (datasabai.com/en) ด้วย Next.js และ SEO ที่แข็งแกร่ง ทำงานร่วมกับ PM และนักออกแบบ UX/UI อย่างใกล้ชิด",
    "experience.0.highlights.1":
      "เชื่อมต่อ Payload CMS เพื่อให้ทีมการตลาดมีเวิร์กโฟลว์คอนเทนต์แบบบริการตนเอง",
    "experience.0.highlights.2":
      "แก้ไขและปรับปรุง UI ของปลั๊กอิน VS Code ของบริษัทสำหรับการบูรณาการ Hubsabai SDK",
    "experience.0.highlights.3":
      "สร้างและปรับปรุงโมดูล SDK สองตัวด้วยตนเอง: ตัวดึงข้อมูลสเปก EDI (EDIFACT/X12/VDA) และบริการพาร์เซอร์ SAP IDoc",
    "experience.0.highlights.4":
      "เริ่มต้นใช้งานไปป์ไลน์ CI/CD ของ Azure สำหรับโปรเจกต์ปลั๊กอิน VS Code",
    "experience.0.highlights.5":
      "ทำงานจริงกับ Azure DevOps: บอร์ด, รายการงาน, คลังรหัส และไปป์ไลน์",
    "experience.0.highlights.6":
      "มีประสบการณ์จริงในการผลิตกับ Java, Quarkus, Maven และเวิร์กโฟลว์การบูรณาการระดับองค์กร",
    // experience technologies
    "experience.0.technologies.0": "Java 21/25",
    "experience.0.technologies.1": "Quarkus",
    "experience.0.technologies.2": "Maven",
    "experience.0.technologies.3": "Next.js",
    "experience.0.technologies.4": "TypeScript",
    "experience.0.technologies.5": "React",
    "experience.0.technologies.6": "Payload CMS",
    "experience.0.technologies.7": "Azure DevOps",
    "experience.0.technologies.8": "Azure Pipelines",
    "experience.0.technologies.9": "Docker",
    // --- skills ---
    "skills.allSkills.0": "Java",
    "skills.allSkills.1": "Quarkus",
    "skills.allSkills.2": "Spring Boot",
    "skills.allSkills.3": "Maven",
    "skills.allSkills.4": "Node.js",
    "skills.allSkills.5": "Express.js",
    "skills.allSkills.6": "React",
    "skills.allSkills.7": "Next.js",
    "skills.allSkills.8": "TypeScript",
    "skills.allSkills.9": "REST APIs",
    "skills.allSkills.10": "PostgreSQL",
    "skills.allSkills.11": "MongoDB",
    "skills.allSkills.12": "Prisma",
    "skills.allSkills.13": "Drizzle ORM",
    "skills.allSkills.14": "Redis",
    "skills.allSkills.15": "Apache Kafka",
    "skills.allSkills.16": "Payload CMS",
    "skills.allSkills.17": "Docker",
    "skills.allSkills.18": "GitHub Actions",
    "skills.allSkills.19": "Azure DevOps",
    "skills.allSkills.20": "Azure Pipelines",
    "skills.allSkills.21": "Tailwind CSS",
    "skills.allSkills.22": "GraphQL",
    "skills.allSkills.23": "Git",
    "skills.allSkills.24": "Jest",
    // --- projects (by id) ---
    "projects.10.title": "Energy Tracker – ติดตามพลังงานที่บ้าน",
    "projects.10.description":
      "แพลตฟอร์มติดตามพลังงานที่บ้านที่สร้างขึ้นเพื่อตอบคำถามง่าย ๆ หนึ่งข้อ: ไฟฟ้าของคุณหมดไปที่ไหน? รวบรวมค่าอ่านจากอุปกรณ์ของคุณ, คงมุมมองสดของทั้งบ้าน, แจ้งเตือนคุณในทันทีเมื่ออุปกรณ์ข้ามขีดจำกัดที่คุณตั้งไว้, และใช้ AI เพื่อเปลี่ยนประวัติการใช้งานของคุณเองให้เป็นเคล็ดลับการประหยัด. มาพร้อมบ้านตัวอย่างที่เต็มไปด้วยข้อมูลที่สมจริง ดังนั้นคุณสามารถสำรวจทุกอย่างได้ทันที",
    "projects.1.title": "Changelog Composer",
    "projects.1.description":
      "เครื่องมือสร้างบันทึกการเปลี่ยนแปลงที่ขับเคลื่อนด้วย AI ซึ่งเปลี่ยนกิจกรรมการปล่อย GitHub ดิบให้เป็นบันทึกการเปลี่ยนแปลงที่ปรับให้เหมาะสมกับผู้ชมสำหรับนักพัฒนา, QA, และผู้มีส่วนได้ส่วนเสียทางธุรกิจ. ผู้ให้บริการ AI หลายราย (NVIDIA NIM, OpenRouter, Groq, Z.AI) พร้อมการตรวจสอบสุขภาพแคตตาล็อกโมเดลสด. เซสชัน OAuth GitHub ต่อผู้ใช้, มุมมองตามบทบาท, การสตรีมการสร้างด้วย SSE, และประวัติการแก้ไขเต็มรูปแบบ. รันไปป์ไลน์การผลิตเต็มรูปแบบ: GitHub Actions สร้างอิมเมจ Docker ที่ไม่เปลี่ยนแปลง, ส่งเสริมไปยัง Azure VM ผ่าน SSH, และเสิร์ฟทุกอย่างหลังจากพร็อกซี TLS ของ Caddy",
    "projects.2.title": "J Track – แพลตฟอร์มติดตามงาน",
    "projects.2.description":
      "แพลตฟอร์มติดตามใบสมัครงานเต็มรูปแบบ: เฟรนด์เอนด์ Next.js ตลาดซื้อขายรวมถึงแบ็กเอนด์ไมโครเซอร์วิสโมโนเรโปกับการตรวจสอบสิทธิ์ JWT, การวิเคราะห์เรซูเม่/อาชีพด้วย AI, ไปป์ไลน์เหตุการณ์ Kafka, การแคช Redis, และ CI/CD เต็มรูปแบบด้วยอิมเมจ Docker ที่ติดตั้งสดบน Azure VM",
    "projects.3.title": "EduPro – แพลตฟอร์มการเรียนรู้ออนไลน์",
    "projects.3.description":
      "EduPro เป็นแพลตฟอร์มอี-เลิร์นนิงแบบมัลติเทแนนต์ตลาดซื้อขายที่สร้างด้วย Next.js. ผู้สอนเผยแพร่คอร์สผ่านเวิร์กโฟลว์การประพันธ์เต็มรูปแบบ (โมดูล, บทเรียน, แบบทดสอบ, และการสอบขั้นสุดท้าย) ที่ผ่านไปป์ไลน์การอนุมัติก่อนจะเผยแพร่. ผู้เรียนเรียกดูแคตตาล็อกสาธารณะ, สมัครเรียนผ่านการชำระเงินฟรีหรือ Stripe, เรียนผ่านเครื่องเล่นบทเรียน/แบบทดสอบ/การสอบ, และรับใบรับรอง PDF ที่ตรวจสอบได้. นอกจากนี้ยังรวมเครื่องสร้างแผนการเรียนด้วย AI ที่เปลี่ยนเป้าหมายของผู้เรียนให้เป็นแผนรายสัปดาห์เป็นขั้นตอนที่จับคู่กับคอร์สบนแพลตฟอร์มจริง",
    "projects.4.title": "SAP IDoc Parser",
    "projects.4.description":
      "บริการพาร์เซอร์ Java/Quarkus ที่ผมสร้างขึ้นอย่างอิสระในฐานะส่วนหนึ่งของ SDK การบูรณาการภายใน — แปลงไฟล์ SAP IDoc เป็นข้อมูลเมตาสคีมาและกลุ่มฟิลด์ที่มีโครงสร้าง, พร้อมการตรวจสอบการฉาย XSD และการรายงานข้อผิดพลาดที่เปิดเผยผ่าน REST API",
    "projects.5.title": "EDI Spec Scrapper",
    "projects.5.description":
      "บริการ Quarkus ที่แยกออกมาจากงาน SDK การฝึกงานของผม — ดึงข้อมูลและจัดโครงสร้างสเปก EDI (EDIFACT/X12/VDA) เป็น JSON Schema และคำจำกัดความการแมป BeanIO, พร้อม UI การดึงข้อมูลสด SSE และเวิร์กโฟลว์การเผยแพร่. โมดูลนี้เป็นงานของผมเองทั้งหมด",
    "projects.6.title": "Workflow MCP · Flowagent.ai",
    "projects.6.description":
      "เครื่องสร้างเวิร์กโฟลว์ AI แบบภาพเปิดเผยซอร์ซ — แคนバスลากและวางสำหรับประกอบเวิร์กโฟลว์เอเจนต์หลายขั้นตอน (เอเจนต์ AI, การแยกทาง, การเรียก HTTP) แทนการเขียนรหัสโซ่. รองรับโหนดเอเจนต์หลายโมเดล, การทดแทนตัวแปร, และตัวทริกเกอร์เวิร์กโฟลว์พื้นหลังผ่าน Upstash QStash",
    "projects.7.title": "AI Powered Interview Preparation",
    "projects.7.description":
      "แอปพลิเคชันนี้ช่วยให้ผู้ใช้เตรียมตัวสำหรับการสัมภาษณ์โดยสร้างคำถามและคำตอบที่ปรับให้เหมาะสมกับบทบาทงานและประสบการณ์ของตน. ผู้ใช้สามารถจดบันทึก, ทบทวนหัวข้อ, และสำรวจคำอธิบายที่สร้างด้วย AI เพื่อความเข้าใจที่ดีขึ้น",
    "projects.8.title": "Task Management",
    "projects.8.description":
      "แพลตฟอร์มจัดการงานทีมเต็มรูปแบบที่มีประสบการณ์ Admin และ Member แยกจากกัน สร้างขึ้นด้วย Next.js App Router ทั้งหมด. Admins จัดการภาระงานของทั้งทีมด้วยแดชบอร์ดการวิเคราะห์, การจัดการผู้ใช้, และการส่งออกรายงาน Excel, ในขณะที่ members ได้รับเครื่องมือวางแผนงานด้วย AI (Google Gemini) ที่เปลี่ยนงานที่มอบหมายให้เป็นแผนการดำเนินการที่มีลำดับความสำคัญทีละขั้นตอน",
    "projects.9.title": "NextFurniture – แพลตฟอร์มช้อปปิ้งและบล็อก",
    "projects.9.description":
      "โปรเจกต์ฝึกฝนที่แสดงเทคนิคการพัฒนาเต็มรูปแบบทันสมัย, รวมแพลตฟอร์มอีคอมเมิร์ซเฟอร์นิเจอร์กับส่วนบล็อก. ผู้ใช้สามารถเรียกดูและกรองสินค้าตามหมวดหมู่, อ่านบทความเกี่ยวกับเฟอร์นิเจอร์, และจัดการตะกร้าสินค้าของตน. สร้างขึ้นเพื่อทดลองกับการจัดการสเตตัสเฟรนด์เอนด์ขั้นสูง, คิวแบ็กเอนด์, การแคช, การเพิ่มประสิทธิภาพภาพ, และการรองรับหลายภาษา",
  },
  my: {
    // BURMESE TRANSLATIONS NEEDED: Replace all English values below with accurate မြန်မာ script.
    // Keep technical terms, company names, URLs, email addresses, phone numbers, and programming language names in English.
    // Keys must not be changed.
    "personal.title": "Junior Software Engineer",
    "personal.tagline": "Fresh Software Engineering graduate with 8 months of enterprise internship experience.",
    "personal.location": "Bangkok, Thailand",
    "personal.bio": "Junior Software Engineer with hands on enterprise experience from an 8 month internship at Datasabai Thailand.",
    "experience.0.role": "Software Engineer Intern",
    "experience.0.company": "Datasabai Thailand",
    "experience.0.type": "Internship · 8 months",
    "experience.0.location": "Thailand · Hybrid",
    "experience.0.description": "Worked with the R&D team on enterprise integration products.",
    "experience.0.date.start": "2025",
    "experience.0.date.end": "2026",
    "experience.0.highlights.0": "Built most of the marketing website UI (datasabai.com/en) with Next.js and strong SEO, collaborating closely with the PM and UI/UX designer.",
    "experience.0.highlights.1": "Integrated Payload CMS to give the marketing team a self serve content workflow.",
    "experience.0.highlights.2": "Fixed and enhanced the UI of the company's VS Code extension for the Hubsabai integration SDK.",
    "experience.0.highlights.3": "Independently built and enhanced two SDK modules: an EDI spec scrapper (EDIFACT/X12/VDA) and a SAP IDoc parser service.",
    "experience.0.highlights.4": "Started implementing the Azure Pipeline CI/CD for the VS Code extension project.",
    "experience.0.highlights.5": "Worked hands on with Azure DevOps: Boards, work items, repos, and Pipelines.",
    "experience.0.highlights.6": "Gained production experience with Java, Quarkus, Maven and enterprise integration workflows.",
    "experience.0.technologies.0": "Java 21/25",
    "experience.0.technologies.1": "Quarkus",
    "experience.0.technologies.2": "Maven",
    "experience.0.technologies.3": "Next.js",
    "experience.0.technologies.4": "TypeScript",
    "experience.0.technologies.5": "React",
    "experience.0.technologies.6": "Payload CMS",
    "experience.0.technologies.7": "Azure DevOps",
    "experience.0.technologies.8": "Azure Pipelines",
    "experience.0.technologies.9": "Docker",
    "skills.allSkills.0": "Java",
    "skills.allSkills.1": "Quarkus",
    "skills.allSkills.2": "Spring Boot",
    "skills.allSkills.3": "Maven",
    "skills.allSkills.4": "Node.js",
    "skills.allSkills.5": "Express.js",
    "skills.allSkills.6": "React",
    "skills.allSkills.7": "Next.js",
    "skills.allSkills.8": "TypeScript",
    "skills.allSkills.9": "REST APIs",
    "skills.allSkills.10": "PostgreSQL",
    "skills.allSkills.11": "MongoDB",
    "skills.allSkills.12": "Prisma",
    "skills.allSkills.13": "Drizzle ORM",
    "skills.allSkills.14": "Redis",
    "skills.allSkills.15": "Apache Kafka",
    "skills.allSkills.16": "Payload CMS",
    "skills.allSkills.17": "Docker",
    "skills.allSkills.18": "GitHub Actions",
    "skills.allSkills.19": "Azure DevOps",
    "skills.allSkills.20": "Azure Pipelines",
    "skills.allSkills.21": "Tailwind CSS",
    "skills.allSkills.22": "GraphQL",
    "skills.allSkills.23": "Git",
    "skills.allSkills.24": "Jest",
    "projects.10.title": "Energy Tracker – Home Energy Monitoring",
    "projects.10.description": "Home energy monitoring platform built to answer one simple question: where does your electricity go? It collects readings from your devices, keeps a live view of the whole house, warns you the moment a device crosses the limit you set, and uses AI to turn your own history into saving tips. Comes with a demo home full of realistic data so you can explore everything right away.",
    "projects.1.title": "Changelog Composer",
    "projects.1.description": "AI assisted changelog generator that turns raw GitHub release activity into audience-specific changelogs for Developers, QA, and Business stakeholders. Multi-provider AI (NVIDIA NIM, OpenRouter, Groq, Z.AI) with live model catalog health probing. Per-user GitHub OAuth sessions, role-scoped views, SSE-streamed generation, and full revision history. Runs a full production pipeline: GitHub Actions builds immutable Docker images, promotes them to an Azure VM over SSH, and serves everything behind a Caddy TLS proxy.",
    "projects.2.title": "J Track – Job Tracking Platform",
    "projects.2.description": "Full stack job application tracking platform: a Next.js frontend marketplace plus a microservices backend monorepo with JWT auth, AI resume/career analysis, Kafka event pipelines, Redis caching, and full CI/CD with Docker images deployed live to an Azure VM.",
    "projects.3.title": "EduPro – E-Learning Platform",
    "projects.3.description": "EduPro is a multi-tenant, marketplace-style e-learning platform built with Next.js. Instructors publish courses through a full authoring workflow (modules, lessons, quizzes, and final exams) that goes through an approval pipeline before going live. Learners browse a public catalog, enroll via free checkout or Stripe payments, learn through a lesson/quizzes/exam player, and earn verifiable PDF certificates. It also includes an AI-powered roadmap generator that turns a learner's goal into a staged weekly plan matched to real platform courses.",
    "projects.4.title": "SAP IDoc Parser",
    "projects.4.description": "A Java/Quarkus parser service I built independently as part of the internal integration SDK — parses SAP IDoc files into structured schema metadata and field groups, with XSD projection validation and error reporting exposed through a REST API.",
    "projects.5.title": "EDI Spec Scrapper",
    "projects.5.description": "A Quarkus service extracted from my internship SDK work — scrapes and structures EDI specifications (EDIFACT/X12/VDA) into JSON Schemas and BeanIO mapping definitions, with a live SSE scraping UI and publish workflow. This module is entirely my own work.",
    "projects.6.title": "Workflow MCP · Flowagent.ai",
    "projects.6.description": "An open source visual AI workflow builder — drag and drop canvas for composing multi-step agent workflows (AI agents, branching, HTTP calls) instead of writing chain code. Supports multi model agent nodes, variable templating, and background workflow triggers via Upstash QStash.",
    "projects.7.title": "AI Powered Interview Preparation",
    "projects.7.description": "This application helps users prepare for interviews by generating personalized questions and answers based on their job role and experience. Users can take notes, review topics, and explore AI-generated explanations for better understanding.",
    "projects.8.title": "Task Management",
    "projects.8.description": "A full-stack team task management platform with separate Admin and Member experiences, built entirely with Next.js App Router. Admins manage the whole team's workload with analytics dashboards, user management, and Excel report exports, while members get an AI-powered task planner (Google Gemini) that turns their assigned tasks into a prioritized, step-by-step execution plan.",
    "projects.9.title": "NextFurniture – Shopping & Blog Platform",
    "projects.9.description": "A practice project showcasing modern full-stack development techniques, combining a furniture e-commerce platform with a blog section. Users can browse and filter products by categories, read blog articles about furniture, and manage their cart. Built to experiment with advanced frontend state management, backend queues, caching, image optimization, and multi-language support.",
  },
  zh: {
    // Chinese (Simplified) translations for portfolio data.
    // Technical terms, company names, URLs, email addresses, phone numbers, and programming language names remain in English.
    // Keys must not be changed.
    "personal.title": "初级软件工程师",
    "personal.tagline": "软件工程专业应届毕业生，拥有 8 个月企业实习经验。",
    "personal.location": "Bangkok, Thailand",
    "personal.bio": "初级软件工程师，拥有在 Datasabai Thailand 为期 8 个月的企业实习经验。",
    "experience.0.role": "软件工程师实习生",
    "experience.0.company": "Datasabai Thailand",
    "experience.0.type": "实习 · 8 个月",
    "experience.0.location": "Thailand · 混合办公",
    "experience.0.description": "与研发团队合作开展企业级集成产品。",
    "experience.0.date.start": "2025",
    "experience.0.date.end": "2026",
    "experience.0.highlights.0": "使用 Next.js 和强大的 SEO 构建了营销网站的大部分 UI (datasabai.com/en)，与产品经理和 UI/UX 设计师紧密合作。",
    "experience.0.highlights.1": "集成 Payload CMS，为营销团队提供自助式内容工作流程。",
    "experience.0.highlights.2": "修复并增强了公司 VS Code 扩展的 UI，用于 Hubsabai 集成 SDK。",
    "experience.0.highlights.3": "独立构建并增强了两个 SDK 模块：EDI 规范抓取器 (EDIFACT/X12/VDA) 和 SAP IDoc 解析器服务。",
    "experience.0.highlights.4": "为 VS Code 扩展项目开始实施 Azure Pipeline CI/CD。",
    "experience.0.highlights.5": "直接使用 Azure DevOps：看板、工作项、仓库和流水线。",
    "experience.0.highlights.6": "在 Java、Quarkus、Maven 和企业级集成工作流方面获得生产环境经验。",
    "experience.0.technologies.0": "Java 21/25",
    "experience.0.technologies.1": "Quarkus",
    "experience.0.technologies.2": "Maven",
    "experience.0.technologies.3": "Next.js",
    "experience.0.technologies.4": "TypeScript",
    "experience.0.technologies.5": "React",
    "experience.0.technologies.6": "Payload CMS",
    "experience.0.technologies.7": "Azure DevOps",
    "experience.0.technologies.8": "Azure Pipelines",
    "experience.0.technologies.9": "Docker",
    "skills.allSkills.0": "Java",
    "skills.allSkills.1": "Quarkus",
    "skills.allSkills.2": "Spring Boot",
    "skills.allSkills.3": "Maven",
    "skills.allSkills.4": "Node.js",
    "skills.allSkills.5": "Express.js",
    "skills.allSkills.6": "React",
    "skills.allSkills.7": "Next.js",
    "skills.allSkills.8": "TypeScript",
    "skills.allSkills.9": "REST APIs",
    "skills.allSkills.10": "PostgreSQL",
    "skills.allSkills.11": "MongoDB",
    "skills.allSkills.12": "Prisma",
    "skills.allSkills.13": "Drizzle ORM",
    "skills.allSkills.14": "Redis",
    "skills.allSkills.15": "Apache Kafka",
    "skills.allSkills.16": "Payload CMS",
    "skills.allSkills.17": "Docker",
    "skills.allSkills.18": "GitHub Actions",
    "skills.allSkills.19": "Azure DevOps",
    "skills.allSkills.20": "Azure Pipelines",
    "skills.allSkills.21": "Tailwind CSS",
    "skills.allSkills.22": "GraphQL",
    "skills.allSkills.23": "Git",
    "skills.allSkills.24": "Jest",
    "projects.10.title": "Energy Tracker – 家庭能源监控",
    "projects.10.description": "家庭能源监控平台，旨在回答一个简单问题：您的电力去哪里了？它会从您的设备收集读数，保持对整个房屋的实时视图，在设备超过您设定的限制时立即警告您，并利用 AI 将您的使用历史转化为节省提示。附带一个充满真实数据的演示房屋，让您立即探索一切。",
    "projects.1.title": "Changelog Composer",
    "projects.1.description": "AI 辅助变更日志生成器，将原始 GitHub 发布活动转换为面向开发者、QA 和业务利益相关者的受众特定变更日志。多提供商 AI (NVIDIA NIM, OpenRouter, Groq, Z.AI)，带有实时模型目录健康探测。每用户 GitHub OAuth 会话，角色限定视图，SSE 流式生成，以及完整的修订历史。运行完整生产流水线：GitHub Actions 构建不可变 Docker 镜像，通过 SSH 将其提升到 Azure VM，并使用 Caddy TLS 代理提供所有内容。",
    "projects.2.title": "J Track – 求职追踪平台",
    "projects.2.description": "全栈求职申请追踪平台：Next.js 前端市场加微服务后端单体仓库，具有 JWT 身份验证、AI 简历/职业分析、Kafka 事件流水线、Redis 缓存，以及带有 Docker 镜像的完整 CI/CD，部署到 Azure VM 上线运行。",
    "projects.3.title": "EduPro – 电子学习平台",
    "projects.3.description": "EduPro 是一个基于 Next.js 构建的多租户、市场式电子学习平台。讲师通过完整的创作工作流程（模块、课程、测验和最终考试）发布课程，上线前需经过审批流程。学习者浏览公开目录，通过免费结账或 Stripe 支付注册，通过课程/测验/考试播放器学习，并获得可验证的 PDF 证书。它还包括一个 AI 驱动的路线图生成器，将学习者的目标转化为与平台真实课程相匹配的分阶段周计划。",
    "projects.4.title": "SAP IDoc 解析器",
    "projects.4.description": "我独立构建的 Java/Quarkus 解析器服务，作为内部集成 SDK 的一部分 — 将 SAP IDoc 文件解析为结构化架构元数据和字段组，通过 REST API 公开 XSD 投影验证和错误报告。",
    "projects.5.title": "EDI 规范抓取器",
    "projects.5.description": "从我的实习 SDK 工作中提取的 Quarkus 服务 — 将 EDI 规范 (EDIFACT/X12/VDA) 抓取并结构化为 JSON 架构和 BeanIO 映射定义，带有实时 SSE 抓取 UI 和发布工作流程。此模块完全是我自己的工作。",
    "projects.6.title": "Workflow MCP · Flowagent.ai",
    "projects.6.description": "开源可视化 AI 工作流构建器 — 拖放式画布，用于编排多步骤 AI 工作流（AI 代理、分支、HTTP 调用），而不是编写链式代码。支持多模型代理节点、变量模板，以及通过 Upstash QStash 的后台工作流触发器。",
    "projects.7.title": "AI 驱动面试准备",
    "projects.7.description": "此应用程序帮助用户根据其职位和经验生成个性化的问题和答案，准备面试。用户可以做笔记、复习主题，并探索 AI 生成的解释以获得更好的理解。",
    "projects.8.title": "任务管理",
    "projects.8.description": "具有独立管理员和成员体验的全栈团队任务管理平台，完全使用 Next.js App Router 构建。管理员通过分析仪表板、用户管理和 Excel 报告导出管理整个团队的工作量，而成员则获得 AI 驱动的任务规划器 (Google Gemini)，将分配给他们的任务转化为优先级分步执行计划。",
    "projects.9.title": "NextFurniture – 购物与博客平台",
    "projects.9.description": "一个练习项目，展示现代全栈开发技术，结合家具电子商务平台与博客部分。用户可以按类别浏览和筛选产品，阅读关于家具的博客文章，并管理购物车。旨在尝试高级前端状态管理、后端队列、缓存、图像优化和多语言支持。",
  },
};

/**
 * Resolve a dot-separated path against an object, returning undefined if missing.
 */
function resolvePath(obj: unknown, path: string): unknown {
  return path.split(".").reduce((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

/**
 * Return the translated value for a data path if a translation exists,
 * otherwise resolve the path against the source object (English fallback).
 */
export function getLocalized<T>(
  source: T,
  path: string,
  locale: Locale,
): string {
  const trans = DATA_TRANSLATIONS[locale]?.[path];
  if (typeof trans === "string" && trans.length > 0) return trans;
  const resolved = resolvePath(source, path);
  return resolved != null ? String(resolved) : path;
}

/**
 * Deep-clone `value`, replacing every string leaf with its translation for
 * `locale` when one exists in DATA_TRANSLATIONS (otherwise keeping the
 * original English string). Paths are tracked so overlay keys like
 * "projects.0.title" match.
 */
export function localizeDeep(
  value: unknown,
  locale: Locale,
  path = "",
): unknown {
  if (typeof value === "string") {
    const trans = DATA_TRANSLATIONS[locale]?.[path];
    if (typeof trans === "string" && trans.length > 0) return trans;
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item, idx) => localizeDeep(item, locale, `${path}.${idx}`));
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = localizeDeep(v, locale, path ? `${path}.${k}` : k);
    }
    return out;
  }
  return value;
}
