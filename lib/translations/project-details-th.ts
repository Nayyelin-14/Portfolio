/**
 * Thai translations for the project detail pages.
 * Paths are prefixed with `projectDetails.<slug>` at usage time.
 */
export const projectDetailsTh: Record<string, string> = {
  // --- Energy Tracker ---
  "projectDetails.energy-tracker.title":
    "Energy Tracker – การติดตามพลังงานในบ้าน",
  "projectDetails.energy-tracker.summary":
    "แพลตฟอร์มติดตามพลังงานภายในบ้านที่แสดงให้เห็นว่าไฟฟ้าของคุณถูกใช้ไปที่ไหน แจ้งเตือนทันทีเมื่ออุปกรณ์ใดใช้เกินขีดจำกัดที่คุณตั้งไว้ และเปลี่ยนประวัติการใช้งานของคุณให้เป็นคำแนะนำในการประหยัดพลังงานที่นำไปใช้ได้จริง สร้างมาเพื่อบ้านจริง: เปิดแดชบอร์ดแล้วทุกอย่างอธิบายด้วยตัวเลขที่เข้าใจง่าย",
  "projectDetails.energy-tracker.overview.title":
    "ดูการใช้งาน จับปัญหาที่เกิดขึ้น และลดค่าไฟ",
  "projectDetails.energy-tracker.overview.steps.0.title":
    "บันทึกทุกค่าที่อ่านได้",
  "projectDetails.energy-tracker.overview.steps.0.description":
    "อุปกรณ์และเซนเซอร์ของคุณส่งค่าการใช้พลังงานมายังแพลตฟอร์ม ซึ่งจะตรวจสอบและบันทึกทันที บ้านตัวอย่างถูกเติมข้อมูลจริงหนึ่งสัปดาห์ เพื่อให้คุณสำรวจแดชบอร์ดได้ทันทีที่เปิด",
  "projectDetails.energy-tracker.overview.steps.1.title":
    "เฝ้าดูขีดจำกัดให้คุณ",
  "projectDetails.energy-tracker.overview.steps.1.description":
    "อุปกรณ์แต่ละชิ้นมีขีดจำกัดที่คุณเลือก แพลตฟอร์มจะเปรียบเทียบการใช้งานปัจจุบันกับขีดจำกัดตลอดทั้งวัน และส่งอีเมลเพียงครั้งเดียวเมื่อคุณใช้เกิน แทนที่จะส่งซ้ำ ๆ ขณะที่การใช้งานยังสูงอยู่",
  "projectDetails.energy-tracker.overview.steps.2.title":
    "เปลี่ยนข้อมูลให้เป็นการตัดสินใจ",
  "projectDetails.energy-tracker.overview.steps.2.description":
    "แดชบอร์ดแสดงแนวโน้มรายชั่วโมงและรายวันสำหรับทั้งบ้านและแต่ละอุปกรณ์ และ AI จะอ่านประวัติของคุณเพื่อสตรีมคำแนะนำการประหยัดที่คุณนำไปใช้ได้ทันที",
  "projectDetails.energy-tracker.architecture.description":
    "งานถูกแบ่งออกเพื่อให้งานหนักไม่บล็อกการใช้งานประจำวัน: การอ่านค่า การแจ้งเตือน และ AI ทำงานแยกกัน สามารถขยายหรือรีสตาร์ทได้เอง โดยอยู่หลังประตูหน้าเดียว โปรไฟล์และอุปกรณ์ของคุณอยู่ในฐานข้อมูลเชิงสัมพันธ์ ค่าการอ่านอยู่ในที่เก็บอนุกรมเวลา และคำตอบที่สร้างขึ้นถูกแคชไว้เพื่อให้คำถามเดิมได้รับคำตอบทันทีในครั้งถัดไป",
  "projectDetails.energy-tracker.architecture.steps.0.title":
    "ประตูหน้าเดียว",
  "projectDetails.energy-tracker.architecture.steps.0.description":
    "ทุกคำขอเข้าผ่านเกตเวย์ ซึ่งคอยตรวจสอบบริการแบ็กเอนด์แต่ละตัว หากส่วนใดเริ่มล้มเหลว เกตเวย์จะตอบด้วย fallback ที่ชัดเจนแทนที่จะปล่อยให้แอปค้าง",
  "projectDetails.energy-tracker.architecture.steps.1.title":
    "ไปป์ไลน์ที่ไม่ทำข้อมูลของคุณหาย",
  "projectDetails.energy-tracker.architecture.steps.1.description":
    "ค่าการอ่านเดินทางจากการรับเข้าผ่านคิวไปยังที่จัดเก็บและต่อไปยังการแจ้งเตือน ดังนั้นปริมาณทราฟฟิกที่พุ่งสูงจะถูกดูดซับอย่างราบรื่นและทุกอย่างถูกประมวลผลตามลำดับ",
  "projectDetails.energy-tracker.architecture.steps.2.title":
    "AI ที่รวดเร็ว เป็นธรรม และประหยัด",
  "projectDetails.energy-tracker.architecture.steps.2.description":
    "คำตอบของคำถามเดิมมาจากแคช มีการสร้างคำตอบพร้อมกันเพียงไม่กี่รายการ และผู้ใช้ทุกคนได้รับโควตาที่เป็นธรรม จึงไม่มีใครใช้โควตาร่วมจนหมดได้",
  "projectDetails.energy-tracker.engineeringFocus.title":
    "สิ่งที่ผมอยากทำให้ถูกต้อง",
  "projectDetails.energy-tracker.engineeringFocus.items.0":
    "การแจ้งเตือนที่เคารพคุณ: แจ้งครั้งเดียวเมื่อการใช้งานเกินขีดจำกัด และเงียบขณะที่ยังคงอยู่เหนือขีดจำกัด",
  "projectDetails.energy-tracker.engineeringFocus.items.1":
    "จำกัดความเสียหาย: ส่วนที่กำลังมีปัญหาจะตอบด้วย fallback ที่ชัดเจน ขณะที่ส่วนอื่นของแอปยังทำงานต่อ",
  "projectDetails.energy-tracker.engineeringFocus.items.2":
    "AI ที่คุณมองเห็นได้: คำแนะนำการประหยัดไหลมาทีละคำ แทนที่จะให้คุณรอคำตอบก้อนใหญ่",
  "projectDetails.energy-tracker.engineeringFocus.items.3":
    "AI ที่ยังประหยัด: คำตอบแคช จำกัดการทำงานพร้อมกัน และโควตาที่เป็นธรรมสำหรับผู้ใช้ทุกคน",

  // --- Changelog Composer ---
  "projectDetails.changelog-composer.title": "Changelog Composer",
  "projectDetails.changelog-composer.summary":
    "เครื่องมือสร้างบันทึกการเปลี่ยนแปลงที่ช่วยโดย AI ซึ่งเปลี่ยนกิจกรรมการปล่อย GitHub ดิบให้เป็นบันทึกการเปลี่ยนแปลงเฉพาะกลุ่มสำหรับนักพัฒนา QA และผู้มีส่วนได้ส่วนเสียทางธุรกิจ",
  "projectDetails.changelog-composer.overview.title":
    "จากข้อมูลการปล่อยดิบสู่บันทึกการเปลี่ยนแปลงเฉพาะกลุ่มผู้อ่าน",
  "projectDetails.changelog-composer.overview.steps.0.title":
    "การรับข้อมูลจากไปป์ไลน์",
  "projectDetails.changelog-composer.overview.steps.0.description":
    "ปลายทางของไปป์ไลน์ CI จะรวบรวมข้อเท็จจริงดิบจากการปล่อยและ pull request จาก GitHub โดยไม่เรียก AI เลย ข้อมูลจะถูกจัดเก็บและสร้างดัชนีสำหรับการสร้างในภายหลัง",
  "projectDetails.changelog-composer.overview.steps.1.title":
    "การสร้างด้วยผู้ให้บริการหลายราย",
  "projectDetails.changelog-composer.overview.steps.1.description":
    "แดชบอร์ด React ตามบทบาทจะสร้าง แก้ไข และกู้คืนบันทึกการเปลี่ยนแปลงที่ปรับให้เหมาะกับแต่ละกลุ่มผู้อ่าน เลือกได้จาก NVIDIA NIM, OpenRouter, Groq หรือ Z.AI — แคตตาล็อกโมเดลถูกตรวจสอบสด เพื่อเสนอเฉพาะโมเดลที่พร้อมใช้งาน การสร้างสตรีมผ่าน SSE",
  "projectDetails.changelog-composer.overview.steps.2.title":
    "พุชไปยังรีโพซิทอรี",
  "projectDetails.changelog-composer.overview.steps.2.description":
    "บันทึกการเปลี่ยนแปลงสำหรับนักพัฒนาที่สร้างขึ้นจะถูกพุชไปยัง CHANGELOG.md ในรีโพซิทอรีต้นทางโดยตรง พร้อมขั้นตอนยืนยันและการติดตามเวอร์ชัน",
  "projectDetails.changelog-composer.architecture.description":
    "แบ็กเอนด์ Quarkus ให้บริการ API และรวมฟรอนต์เอนด์ React ไว้ด้วยกัน PostgreSQL จัดเก็บบันทึกการเปลี่ยนแปลง เวอร์ชัน การแก้ไข และข้อมูลการปล่อยดิบ การสร้างด้วย AI หลายผู้ให้บริการพร้อมการตรวจสอบสุขภาพแคตตาล็อกและลำดับโมเดลสำรอง",
  "projectDetails.changelog-composer.architecture.steps.0.title":
    "ตัวเชื่อมต่อแหล่ง GitHub",
  "projectDetails.changelog-composer.architecture.steps.0.description":
    "ตัวเชื่อมต่อ GitHub ดึง release, pull request และ commit ผ่าน REST API พร้อมเซสชัน OAuth ต่อผู้ใช้และ guard ที่ปฏิเสธโดยค่าเริ่มต้นในทุกเส้นทาง",
  "projectDetails.changelog-composer.architecture.steps.1.title":
    "ไปป์ไลน์การสร้างด้วย AI",
  "projectDetails.changelog-composer.architecture.steps.1.description":
    "บริการสร้างบันทึกการเปลี่ยนแปลงประมวลผลข้อมูลการปล่อยผ่านผู้ให้บริการที่เลือก (NVIDIA NIM, OpenRouter, Groq, Z.AI) พร้อมแคชตามอินพุต การตรวจสอบแคตตาล็อกสด และลำดับโมเดลสำรอง",
  "projectDetails.changelog-composer.architecture.steps.2.title":
    "การติดตั้งใช้งานจริง",
  "projectDetails.changelog-composer.architecture.steps.2.description":
    "GitHub Actions สร้างอิมเมจ Docker ที่ไม่เปลี่ยนแปลง ส่งเสริมไปยัง Azure VM ผ่าน SSH และให้บริการหลังพร็อกซี TLS ของ Caddy พร้อมการ deploy ที่ผ่านการตรวจสอบสุขภาพ",
  "projectDetails.changelog-composer.engineeringFocus.title":
    "AI หลายผู้ให้บริการพร้อมการติดตั้งระดับโปรดักชัน",
  "projectDetails.changelog-composer.engineeringFocus.items.0":
    "AI หลายผู้ให้บริการ — NVIDIA NIM, OpenRouter, Groq, Z.AI พร้อมการตรวจสอบสุขภาพแคตตาล็อกสดและลำดับสำรอง",
  "projectDetails.changelog-composer.engineeringFocus.items.1":
    "การสตรีม SSE — การสร้างสตรีมทีละโทเคนเข้าสู่แดชบอร์ด",
  "projectDetails.changelog-composer.engineeringFocus.items.2":
    "การแยกผู้ใช้ — เซสชัน GitHub OAuth, guard API แบบปฏิเสธโดยค่าเริ่มต้น, มุมมองตามบทบาท (Developer / QA / Business)",
  "projectDetails.changelog-composer.engineeringFocus.items.3":
    "ประวัติการแก้ไข — ทุกการเปลี่ยนแปลงข้อความเป็น revision ใหม่ และกู้คืนเวอร์ชันก่อนหน้าได้แบบ atomic",

  // --- J Track ---
  "projectDetails.j-track.title": "J Track – แพลตฟอร์มติดตามงาน",
  "projectDetails.j-track.summary":
    "ตลาดงานแบบฟูลสแต็กที่มีฟรอนต์เอนด์ Next.js และแบ็กเอนด์ไมโครเซอร์วิส พร้อมไปป์ไลน์เหตุการณ์ Kafka การวิเคราะห์ด้วย AI และการแคช Redis",
  "projectDetails.j-track.overview.title":
    "ตลาดงานระดับโปรดักชันด้วยสถาปัตยกรรมที่ขับเคลื่อนด้วยเหตุการณ์",
  "projectDetails.j-track.overview.steps.0.title": "แบ็กเอนด์ไมโครเซอร์วิส",
  "projectDetails.j-track.overview.steps.0.description":
    "บริการ Express สี่ตัว (Auth, User, Job, Utils) ใช้สคีมา Prisma ร่วมกันและสื่อสารผ่าน REST และ Kafka แต่ละบริการขยายและ deploy ได้อิสระ",
  "projectDetails.j-track.overview.steps.1.title":
    "ไปป์ไลน์ที่ขับเคลื่อนด้วยเหตุการณ์",
  "projectDetails.j-track.overview.steps.1.description":
    "รูปแบบ transactional outbox เผยแพร่เหตุการณ์ไปยัง Kafka สำหรับการแจ้งเตือนทางอีเมลและการวิเคราะห์ ผู้บริโภคเป็น idempotent พร้อมการลองใหม่ DLQ และการเล่นซ้ำ",
  "projectDetails.j-track.overview.steps.2.title":
    "การวิเคราะห์ด้วย AI",
  "projectDetails.j-track.overview.steps.2.description":
    "การวิเคราะห์ด้วย AI ที่สตรีมผ่าน SSE ใช้ Groq และ Gemini เพื่อให้คะแนนความเหมาะสมของงาน การวิเคราะห์เรซูเม่ และคำแนะนำด้านอาชีพแบบเรียลไทม์",
  "projectDetails.j-track.architecture.description":
    "ฟรอนต์เอนด์ Next.js ให้บริการผ่านพร็อกซีแบบย้อนกลับ nginx บริการแบ็กเอนด์สี่ตัวจัดการการยืนยันตัวตน โปรไฟล์ผู้ใช้ การดำเนินการเกี่ยวกับงาน และฟังก์ชันยูทิลิตี้ PostgreSQL สำหรับข้อมูล Redis สำหรับแคชและการจำกัดอัตรา Apache Kafka สำหรับการประมวลผลเหตุการณ์แบบอะซิงโครนัส",
  "projectDetails.j-track.architecture.steps.0.title":
    "การกำหนดเส้นทางคำขอ",
  "projectDetails.j-track.architecture.steps.0.description":
    "ทราฟฟิกทั้งหมดไหลผ่าน nginx ซึ่งกำหนดเส้นทางไปยังบริการแบ็กเอนด์ที่เหมาะสมตามคำนำหน้าเส้นทาง",
  "projectDetails.j-track.architecture.steps.1.title": "Transactional outbox",
  "projectDetails.j-track.architecture.steps.1.description":
    "การเขียนฐานข้อมูลและการเผยแพร่เหตุการณ์เป็นแบบ atomic ผ่านตาราง outbox ตัว poller จะเผยแพร่เหตุการณ์และทำเครื่องหมายว่าส่งแล้ว",
  "projectDetails.j-track.architecture.steps.2.title":
    "ผู้บริโภคแบบ idempotent",
  "projectDetails.j-track.architecture.steps.2.description":
    "ตาราง dedup ของผู้บริโภคช่วยให้การส่งแบบ at-least-once ปลอดภัย ข้อความที่ล้มเหลวจะลองใหม่ด้วย exponential backoff ก่อนย้ายไป DLQ",
  "projectDetails.j-track.engineeringFocus.title":
    "ความน่าเชื่อถือที่ขับเคลื่อนด้วยเหตุการณ์พร้อมการ deploy สู่โปรดักชัน",
  "projectDetails.j-track.engineeringFocus.items.0":
    "รูปแบบ transactional outbox — การเขียน DB และการเผยแพร่เหตุการณ์ Kafka แบบ atomic",
  "projectDetails.j-track.engineeringFocus.items.1":
    "ผู้บริโภคแบบ idempotent พร้อม DLQ replay — การส่งแบบ at-least-once ที่ปลอดภัย",
  "projectDetails.j-track.engineeringFocus.items.2":
    "การสตรีม SSE สำหรับ AI — ส่งคำตอบแบบทีละโทเคนแบบเรียลไทม์",

  // --- EduPro ---
  "projectDetails.edupro.title": "EduPro – แพลตฟอร์มการเรียนรู้ออนไลน์",
  "projectDetails.edupro.summary":
    "แพลตฟอร์มอีเลิร์นนิงแบบหลายผู้เช่าที่มีระบบสร้างคอร์ส การชำระเงิน Stripe แผนการเรียนรู้ด้วย AI และใบรับรอง PDF ที่ตรวจสอบได้",
  "projectDetails.edupro.overview.title":
    "วงจรการเรียนรู้ครบถ้วนตั้งแต่การลงทะเบียนจนถึงการรับใบรับรอง",
  "projectDetails.edupro.overview.steps.0.title":
    "สถาปัตยกรรมหลายผู้เช่า",
  "projectDetails.edupro.overview.steps.0.description":
    "นักเรียน ผู้สอน และผู้ดูแลระบบสูงสุดมีสิทธิ์ตามบทบาท โมเดลผู้เช่ารองรับหลายองค์กรอิสระด้วยโครงสร้างพื้นฐานร่วมกัน",
  "projectDetails.edupro.overview.steps.1.title":
    "การลงทะเบียนคอร์สและการชำระเงิน",
  "projectDetails.edupro.overview.steps.1.description":
    "นักเรียนเรียกดูแคตตาล็อกสาธารณะ ลงทะเบียนผ่านการชำระเงินฟรีหรือ Stripe พร้อม webhook ที่ลงนามเพื่อตรวจสอบ",
  "projectDetails.edupro.overview.steps.2.title":
    "การเรียนรู้และการรับใบรับรอง",
  "projectDetails.edupro.overview.steps.2.description":
    "เครื่องเล่นแบบอินเทอร์แอกทีฟส่งมอบบทเรียน แบบทดสอบ และการสอบปลายภาค เมื่อผ่านแล้ว นักเรียนสามารถขอใบรับรอง PDF ที่ตรวจสอบได้ซึ่งสร้างฝั่งเซิร์ฟเวอร์",
  "projectDetails.edupro.architecture.description":
    "Next.js App Router พร้อม API routes ฝั่งเซิร์ฟเวอร์ Prisma ORM เชื่อมต่อ PostgreSQL บน Neon Stripe จัดการการชำระเงิน Cloudinary จัดเก็บสื่อ Upstash QStash รันงานเบื้องหลัง และ NVIDIA NIM ขับเคลื่อนฟีเจอร์ AI",
  "projectDetails.edupro.architecture.steps.0.title": "ชั้นการอนุญาต",
  "projectDetails.edupro.architecture.steps.0.description":
    "สามชั้นป้องกัน: การตรวจสอบเซสชัน การแก้ไขบริบทผู้เช่า และการตรวจสอบความสามารถ (อ่านเทียบกับเขียน) การป้องกันความเป็นเจ้าของทรัพยากรเพิ่มชั้นที่สี่",
  "projectDetails.edupro.architecture.steps.1.title": "ขั้นตอนการชำระเงิน",
  "projectDetails.edupro.architecture.steps.1.description":
    "Stripe checkout สร้างเซสชัน webhook ที่ลงนามยืนยันการชำระเงิน และสถานะคำสั่งซื้อเปลี่ยนแบบ atomic ในฐานข้อมูล",
  "projectDetails.edupro.architecture.steps.2.title":
    "การสร้างแผนการเรียนรู้ด้วย AI",
  "projectDetails.edupro.architecture.steps.2.description":
    "AI สร้างแผนรายสัปดาห์เป็นขั้นตอนที่จับคู่กับคอร์สจริงบนแพลตฟอร์ม จัดเก็บพร้อมการติดตามการใช้โทเคนและเมตาดาต้าความมั่นใจ",
  "projectDetails.edupro.engineeringFocus.title":
    "ความปลอดภัย การชำระเงิน และการสร้างใบรับรอง",
  "projectDetails.edupro.engineeringFocus.items.0":
    "พบและแก้ไขช่องโหว่ข้ามผู้เช่า 17 รายการระหว่างการตรวจสอบความปลอดภัย",
  "projectDetails.edupro.engineeringFocus.items.1":
    "TOTP 2FA พร้อมความลับที่เข้ารหัสและการหมุนเวียน JWT refresh",
  "projectDetails.edupro.engineeringFocus.items.2":
    "การสร้างใบรับรอง PDF พร้อมหน้าตรวจสอบสาธารณะ",

  // --- SAP IDoc Parser ---
  "projectDetails.idoc-parser.title": "ตัวแยกวิเคราะห์ SAP IDoc",
  "projectDetails.idoc-parser.summary":
    "ตัวแยกวิเคราะห์ Java ที่แปลงคำจำกัดความ SAP IDoc (ไฟล์ส่งออก WE60) เป็นเอกสาร JSON Schema ที่มีโครงสร้าง",
  "projectDetails.idoc-parser.overview.title":
    "แปลงไฟล์ส่งออก SAP WE60 เป็น JSON Schema ที่เครื่องอ่านได้",
  "projectDetails.idoc-parser.overview.steps.0.title":
    "ตัวแยกวิเคราะห์แบบสเตตแมชชีน",
  "projectDetails.idoc-parser.overview.steps.0.description":
    "เอนจิน IDocParser ขนาด 700 บรรทัดประมวลผลไฟล์ข้อความ WE60 ทีละบรรทัด จัดการเซกเมนต์ ฟิลด์ กลุ่ม และระดับลำดับชั้นผ่านสเตตแมชชีน",
  "projectDetails.idoc-parser.overview.steps.1.title":
    "สถาปัตยกรรมหลายโมดูล",
  "projectDetails.idoc-parser.overview.steps.1.description":
    "โมดูลหลักเป็น Java บริสุทธิ์ที่ไม่ผูกกับเฟรมเวิร์กเพื่อใช้ซ้ำใน SDK โมดูล quarkus-app เพิ่ม REST API และเว็บ UI แบบอินเทอร์แอกทีฟ",
  "projectDetails.idoc-parser.overview.steps.2.title": "การสร้าง Schema",
  "projectDetails.idoc-parser.overview.steps.2.description":
    "คำจำกัดความ IDoc ที่แยกวิเคราะห์แล้วถูกแปลงเป็น JSON Schema draft-07 พร้อมลำดับชั้นเซกเมนต์ ประเภทฟิลด์ อาร์เรย์ที่จำเป็น และบันทึกควบคุม EDI_DC40 ที่แทรกอัตโนมัติ",
  "projectDetails.idoc-parser.architecture.description":
    "โปรเจกต์ Maven สองโมดูล โมดูล Core ให้ตรรกะการแยกวิเคราะห์ Java บริสุทธิ์โดยไม่ขึ้นกับเฟรมเวิร์ก โมดูล Quarkus-app เปิด REST endpoints และให้บริการ React UI ที่สร้างผ่าน CDN (ไม่มีขั้นตอน build ด้วย Node)",
  "projectDetails.idoc-parser.architecture.steps.0.title":
    "เอนจินการแยกวิเคราะห์หลัก",
  "projectDetails.idoc-parser.architecture.steps.0.description":
    "IDocParser.java ใช้สเตตแมชชีนแบบ ThreadLocal เพื่อประมวลผลเครื่องหมาย BEGIN_IDOC, BEGIN_SEGMENT, BEGIN_FIELDS และดึงลำดับชั้นเซกเมนต์กับคำจำกัดความฟิลด์",
  "projectDetails.idoc-parser.architecture.steps.1.title": "การแปลง Schema",
  "projectDetails.idoc-parser.architecture.steps.1.description":
    "เซกเมนต์ที่แยกวิเคราะห์แล้วแมปกับ JSON Schema $defs พร้อมการอ้างอิง $ref LOOPMAX > 1 สร้างชนิดอาร์เรย์ สถานะ MANDATORY เพิ่มฟิลด์ที่จำเป็น",
  "projectDetails.idoc-parser.architecture.steps.2.title": "เว็บ UI",
  "projectDetails.idoc-parser.architecture.steps.2.description":
    "React 18 ให้บริการผ่าน CDN ที่รูทของ Quarkus รองรับการวาง อัปโหลด และโหลดตัวอย่าง พร้อมการเปรียบเทียบก่อน/หลังแบบเคียงข้างกัน",
  "projectDetails.idoc-parser.engineeringFocus.title":
    "แกนกลางที่ไม่ผูกกับเฟรมเวิร์กพร้อมแพตเทิร์นการบูรณาการระดับองค์กร",
  "projectDetails.idoc-parser.engineeringFocus.items.0":
    "โมดูล core ที่ไม่ผูกกับเฟรมเวิร์ก — ใช้ซ้ำได้เป็น Java SDK แบบสแตนด์อโลน",
  "projectDetails.idoc-parser.engineeringFocus.items.1":
    "การแยกวิเคราะห์ที่ปลอดภัยต่อ thread ผ่าน ThreadLocal — ปลอดภัยสำหรับคำขอพร้อมกัน",
  "projectDetails.idoc-parser.engineeringFocus.items.2":
    "บันทึกควบคุม EDI_DC40 ที่แทรกอัตโนมัติ — มีอยู่ในสคีมาผลลัพธ์เสมอ",

  // --- EDI Spec Scrapper ---
  "projectDetails.edi-scrapper.title": "เครื่องมือดึงข้อมูลสเปก EDI",
  "projectDetails.edi-scrapper.summary":
    "บริการ Quarkus ที่ดึงสเปก EDI (EDIFACT/X12) จากเว็บไซต์สาธารณะและสร้าง JSON Schema กับ BeanIO mapping",
  "projectDetails.edi-scrapper.overview.title":
    "เปลี่ยนเว็บอ้างอิง EDI สาธารณะให้เป็นอาร์ติแฟกต์ที่เครื่องอ่านได้",
  "projectDetails.edi-scrapper.overview.steps.0.title":
    "การดึงข้อมูลสเปก",
  "projectDetails.edi-scrapper.overview.steps.0.description":
    "ดึงสเปก EDIFACT จาก edifactory.de และสเปก X12 จาก Stedi โดยแยกลำดับชั้นเซกเมนต์ คำจำกัดความองค์ประกอบ และโครงสร้างคอมโพสิต",
  "projectDetails.edi-scrapper.overview.steps.1.title":
    "การสร้างอาร์ติแฟกต์",
  "projectDetails.edi-scrapper.overview.steps.1.description":
    "สำหรับแต่ละประเภทข้อความ จะสร้างโมเดล JSON แบบมาตรฐาน JSON Schema (draft-07) และ BeanIO mapping XML สำหรับการแยกวิเคราะห์ไฟล์แบน",
  "projectDetails.edi-scrapper.overview.steps.2.title":
    "เวิร์กโฟลว์การเผยแพร่",
  "projectDetails.edi-scrapper.overview.steps.2.description":
    "อาร์ติแฟกต์ที่สร้างขึ้นสามารถเผยแพร่ไปยังรีโพซิทอรี Git ของ Azure DevOps สำหรับไปป์ไลน์การบูรณาการปลายทาง",
  "projectDetails.edi-scrapper.architecture.description":
    "โปรเจกต์ Java 25 / Quarkus หลายโมดูล โมดูล Core จัดการการดึงข้อมูล การแยกวิเคราะห์ และการแปลงโดยไม่ขึ้นกับเฟรมเวิร์ก โมดูล App ให้ REST API พร้อมการสตรีม SSE และ React CDN UI",
  "projectDetails.edi-scrapper.architecture.steps.0.title":
    "การดึงข้อมูลสองมาตรฐาน",
  "projectDetails.edi-scrapper.architecture.steps.0.description":
    "EdifactScraper และ X12Scraper จัดการโครงสร้าง HTML ของมาตรฐานตนเอง พร้อมแคช envelope สำหรับเซกเมนต์บริการที่ดึงเพียงครั้งเดียว",
  "projectDetails.edi-scrapper.architecture.steps.1.title":
    "การสตรีมความคืบหน้าแบบสด",
  "projectDetails.edi-scrapper.architecture.steps.1.description":
    "SSE endpoints สตรีมเหตุการณ์ความคืบหน้าการดึงข้อมูล (progress, done, error) เพื่อให้ UI แสดงสถานะแบบเรียลไทม์สำหรับการดึงข้อมูลที่ใช้เวลานาน",
  "projectDetails.edi-scrapper.architecture.steps.2.title":
    "ตัวเผยแพร่ Azure DevOps",
  "projectDetails.edi-scrapper.architecture.steps.2.description":
    "โคลนรีโพซิทอรี Git เป้าหมาย คัดลอกไฟล์อาร์ติแฟกต์ ล้างรายการเก่า และ commit โดยใช้โทเค็น Azure CLI",
  "projectDetails.edi-scrapper.engineeringFocus.title":
    "การดึงข้อมูลเว็บพร้อมฟีดแบ็กแบบสดและการบูรณาการปลายทาง",
  "projectDetails.edi-scrapper.engineeringFocus.items.0":
    "การแยกวิเคราะห์ HTML ด้วย jsoup พร้อมการดึงข้อมูล Next.js — รองรับเป้าหมายการดึงข้อมูลทั้งสองแบบ",
  "projectDetails.edi-scrapper.engineeringFocus.items.1":
    "แคช envelope — เซกเมนต์บริการดึงครั้งเดียวและใช้ซ้ำข้ามข้อความ",
  "projectDetails.edi-scrapper.engineeringFocus.items.2":
    "ตัวเผยแพร่ Git ของ Azure DevOps — ส่งมอบอาร์ติแฟกต์อัตโนมัติไปยังระบบปลายทาง",

  // --- Workflow MCP ---
  "projectDetails.workflow-mcp.title": "Workflow MCP · Flowagent.ai",
  "projectDetails.workflow-mcp.summary":
    "เครื่องมือสร้างเวิร์กโฟลว์ AI แบบภาพโอเพนซอร์ส พร้อมแคนวาสลากและวางสำหรับประกอบเวิร์กโฟลว์เอเจนต์หลายขั้นตอน",
  "projectDetails.workflow-mcp.overview.title":
    "ประกอบเวิร์กโฟลว์เอเจนต์ AI ด้วยภาพแทนการเขียนโค้ดเชน",
  "projectDetails.workflow-mcp.overview.steps.0.title": "แคนวาสแบบภาพ",
  "projectDetails.workflow-mcp.overview.steps.0.description":
    "แคนวาส React Flow ที่มีโหนด 6 ประเภท (Start, Agent, If/Else, HTTP, Comment, End) ให้ผู้ใช้ลาก เชื่อมต่อ และกำหนดค่าขั้นตอนเวิร์กโฟลว์ด้วยภาพ",
  "projectDetails.workflow-mcp.overview.steps.1.title":
    "เอเจนต์หลายโมเดล",
  "projectDetails.workflow-mcp.overview.steps.1.description":
    "โหนด Agent รองรับ Gemini, GPT และ Claude ผ่าน OpenRouter พร้อมสคีมาผลลัพธ์ JSON และเทมเพลต {{variable}} ระหว่างโหนด",
  "projectDetails.workflow-mcp.overview.steps.2.title":
    "การทำงานที่ทนทาน",
  "projectDetails.workflow-mcp.overview.steps.2.description":
    "เวิร์กโฟลว์ทำงานแบบอะซิงโครนัสผ่าน Upstash QStash พร้อมการสตรีม SSE สำหรับความคืบหน้าแบบเรียลไทม์ และแผงตัวอย่างแชทสำหรับทดสอบสด",
  "projectDetails.workflow-mcp.architecture.description":
    "Next.js 16 App Router พร้อมแคนวาส React Flow Vercel AI SDK จัดการการสตรีม LLM MongoDB จัดเก็บเวิร์กโฟลว์ผ่าน Prisma Upstash QStash ให้การทำงานแบบอะซิงโครนัสที่ทนทานพร้อมโหมดพัฒนาโลคอล",
  "projectDetails.workflow-mcp.architecture.steps.0.title":
    "การทำงานตามลำดับโทโพโลยี",
  "projectDetails.workflow-mcp.architecture.steps.0.description":
    "กราฟเวิร์กโฟลว์จะถูกเรียงลำดับโทโพโลยีก่อนดำเนินการ เพื่อให้โหนดทำงานตามลำดับการพึ่งพาที่ถูกต้อง",
  "projectDetails.workflow-mcp.architecture.steps.1.title": "ระบบตัวแปร",
  "projectDetails.workflow-mcp.architecture.steps.1.description":
    "โหนดปลายทางอ้างอิงผลลัพธ์ต้นทางผ่านไวยากรณ์ {{variable}} พร้อมการเติมอัตโนมัติจากโหนดต้นทางที่เชื่อมต่อเท่านั้น",
  "projectDetails.workflow-mcp.architecture.steps.2.title":
    "การบูรณาการ QStash",
  "projectDetails.workflow-mcp.architecture.steps.2.description":
    "การรันเวิร์กโฟลว์ถูกจัดคิวบน QStash ซึ่งจะเรียกกลับแบบอะซิงโครนัสเพื่อดำเนินการเวิร์กโฟลว์และสตรีมความคืบหน้าผ่าน Redis pub/sub",
  "projectDetails.workflow-mcp.engineeringFocus.title":
    "การประกอบด้วยภาพพร้อมการทำงานอะซิงโครนัสที่ทนทาน",
  "projectDetails.workflow-mcp.engineeringFocus.items.0":
    "เอนจินดำเนินการตามลำดับโทโพโลยี — ลำดับการพึ่งพาที่ถูกต้องสำหรับกราฟทุกรูปแบบ",
  "projectDetails.workflow-mcp.engineeringFocus.items.1":
    "เทมเพลต {{variable}} พร้อมการเติมอัตโนมัติ — แสดงเฉพาะเอาต์พุตต้นทางที่เชื่อมต่อ",
  "projectDetails.workflow-mcp.engineeringFocus.items.2":
    "การทำงานที่ทนทานของ QStash — การรันเวิร์กโฟลว์ที่กลับมาทำต่อได้พร้อมโหมดพัฒนาโลคอล",

  // --- Interview Prep ---
  "projectDetails.interview-prep.title": "การเตรียมสัมภาษณ์ด้วย AI",
  "projectDetails.interview-prep.summary":
    "แอปเตรียมสัมภาษณ์ที่ขับเคลื่อนด้วย AI ซึ่งสร้างคำถามและคำตอบเฉพาะบุคคลตามบทบาทงานและระดับประสบการณ์",
  "projectDetails.interview-prep.overview.title":
    "การเตรียมสัมภาษณ์เฉพาะบุคคลที่ขับเคลื่อนด้วย Gemini AI",
  "projectDetails.interview-prep.overview.steps.0.title":
    "การสร้างเซสชัน",
  "projectDetails.interview-prep.overview.steps.0.description":
    "ผู้ใช้สร้างเซสชันด้วยบทบาทเป้าหมาย ปีประสบการณ์ ระดับความยาก และหัวข้อโฟกัส Gemini จะสร้างคำถามและคำตอบโดยละเอียดที่ปรับให้เหมาะ",
  "projectDetails.interview-prep.overview.steps.1.title":
    "การเรียนรู้แบบอินเทอร์แอกทีฟ",
  "projectDetails.interview-prep.overview.steps.1.description":
    "คำถามแสดงในแอคคอร์เดียนที่ขยายได้พร้อมการเรนเดอร์ markdown และบล็อกโค้ดที่ไฮไลต์ไวยากรณ์ ผู้ใช้สามารถปักหมุดคำถามสำคัญและเพิ่มบันทึกส่วนตัว",
  "projectDetails.interview-prep.overview.steps.2.title":
    "คำอธิบายตามต้องการ",
  "projectDetails.interview-prep.overview.steps.2.description":
    "การคลิก Learn More จะเรียก Gemini แยกเพื่อสร้างคำอธิบายแนวคิดเชิงลึกสำหรับคำถามใด ๆ แสดงในแผงเลื่อนเข้า",
  "projectDetails.interview-prep.architecture.description":
    "ฟรอนต์เอนด์ React (Vite) เชื่อมต่อกับแบ็กเอนด์ Express MongoDB จัดเก็บผู้ใช้ เซสชัน และคำถาม Gemini AI สร้างคำถามและคำอธิบาย BullMQ + Redis จัดการการประมวลผลภาพเบื้องหลัง",
  "projectDetails.interview-prep.architecture.steps.0.title":
    "การบูรณาการ Gemini",
  "projectDetails.interview-prep.architecture.steps.0.description":
    "พรอมต์ที่เหมาะกับระดับจะสร้างคำถามพร้อมคำตอบโดยละเอียด ระดับ Basic จะเรียบง่าย ส่วน Advanced จะรวมกรณีขอบระดับระบบ",
  "projectDetails.interview-prep.architecture.steps.1.title":
    "การประมวลผลภาพเบื้องหลัง",
  "projectDetails.interview-prep.architecture.steps.1.description":
    "รูปโปรไฟล์จะผ่านคิว BullMQ ซึ่ง sharp จะปรับแต่งก่อนอัปโหลดไปยัง Cloudinary",
  "projectDetails.interview-prep.architecture.steps.2.title":
    "การเก็บรักษาเซสชัน",
  "projectDetails.interview-prep.architecture.steps.2.description":
    "เซสชันและคำถามถูกเก็บใน MongoDB รองรับ load-more เพื่อเพิ่มคำถามใหม่ให้เซสชันเดิม",
  "projectDetails.interview-prep.engineeringFocus.title":
    "วิศวกรรมพรอมต์ AI พร้อมการประมวลผลเบื้องหลัง",
  "projectDetails.interview-prep.engineeringFocus.items.0":
    "วิศวกรรมพรอมต์ที่เหมาะกับระดับ — ระดับความยาก Basic, Intermediate, Advanced",
  "projectDetails.interview-prep.engineeringFocus.items.1":
    "ไปป์ไลน์ภาพเบื้องหลัง BullMQ — ปรับแต่งด้วย sharp ก่อนอัปโหลด Cloudinary",
  "projectDetails.interview-prep.engineeringFocus.items.2":
    "รูปแบบ load-more — เพิ่มคำถามที่สร้างโดย AI ให้เซสชันเดิม",

  // --- Task Management ---
  "projectDetails.task-management.title": "การจัดการงาน",
  "projectDetails.task-management.summary":
    "แพลตฟอร์มจัดการงานทีมตามบทบาท พร้อมการวางแผนด้วย AI เช็กลิสต์อัจฉริยะ และแดชบอร์ดการวิเคราะห์",
  "projectDetails.task-management.overview.title":
    "การจัดการงานอัจฉริยะพร้อมการวางแผนการดำเนินการด้วย AI",
  "projectDetails.task-management.overview.steps.0.title":
    "การเข้าถึงตามบทบาท",
  "projectDetails.task-management.overview.steps.0.description":
    "ผู้ดูแลจัดการภาระงานทั้งทีมด้วย CRUD การมอบหมาย และการวิเคราะห์ สมาชิกดูงานที่ได้รับมอบหมายและอัปเดตสถานะผ่านเช็กลิสต์แบบอินเทอร์แอกทีฟ",
  "projectDetails.task-management.overview.steps.1.title":
    "เช็กลิสต์อัจฉริยะ",
  "projectDetails.task-management.overview.steps.1.description":
    "รายการสิ่งที่ต้องทำจะคำนวณเปอร์เซ็นต์ความสำเร็จอัตโนมัติและเปลี่ยนสถานะงานเป็นกำลังดำเนินการหรือเสร็จสมบูรณ์โดยไม่ต้องทำด้วยมือ",
  "projectDetails.task-management.overview.steps.2.title":
    "ตัววางแผนงานด้วย AI",
  "projectDetails.task-management.overview.steps.2.description":
    "Gemini สร้างแผนการดำเนินการที่มีโครงสร้างจากงานที่ได้รับมอบหมาย รวมถึงคำแนะนำต่องาน ขั้นตอนถัดไป และการประเมินความพยายาม",
  "projectDetails.task-management.architecture.description":
    "Next.js App Router พร้อม API Routes MongoDB ผ่าน Mongoose จัดเก็บผู้ใช้และงาน Gemini AI สร้างแผน Cloudinary จัดการการอัปโหลดภาพ Recharts ขับเคลื่อนกราฟการวิเคราะห์",
  "projectDetails.task-management.architecture.steps.0.title":
    "ความคืบหน้าที่คำนวณอัตโนมัติ",
  "projectDetails.task-management.architecture.steps.0.description":
    "endpoint เช็กลิสต์จะคำนวณเปอร์เซ็นต์ความคืบหน้าและสถานะใหม่ทุกครั้งที่สลับ เพื่อให้สถานะงานสอดคล้องเสมอ",
  "projectDetails.task-management.architecture.steps.1.title":
    "การสร้างแผนด้วย AI",
  "projectDetails.task-management.architecture.steps.1.description":
    "Gemini รับข้อมูลงานและส่งคืนแผนที่มีโครงสร้าง ซึ่งผ่านการตรวจสอบฝั่งเซิร์ฟเวอร์และรวมกับข้อมูล DB ที่เชื่อถือได้เพื่อป้องกันการ hallucination",
  "projectDetails.task-management.architecture.steps.2.title":
    "การส่งออกรายงาน Excel",
  "projectDetails.task-management.architecture.steps.2.description":
    "ผู้ดูแลสามารถส่งออกรายงานงานและภาระงานผู้ใช้เป็นไฟล์ Excel ผ่าน ExcelJS เพื่อการวิเคราะห์แบบออฟไลน์",
  "projectDetails.task-management.engineeringFocus.title":
    "การจัดการสถานะงานอัตโนมัติด้วยความช่วยเหลือจาก AI",
  "projectDetails.task-management.engineeringFocus.items.0":
    "ความคืบหน้างานที่คำนวณอัตโนมัติ — การสลับเช็กลิสต์คำนวณเปอร์เซ็นต์และสถานะใหม่",
  "projectDetails.task-management.engineeringFocus.items.1":
    "การตรวจสอบแผน AI — การรวมฝั่งเซิร์ฟเวอร์กับข้อมูล DB ป้องกัน hallucination",
  "projectDetails.task-management.engineeringFocus.items.2":
    "การเรียงลำดับงานที่แน่นอน — เกินกำหนดก่อน จากนั้นตามลำดับความสำคัญ แล้วจึงวันครบกำหนด",

  // --- NextFurniture ---
  "projectDetails.nextfurniture.title":
    "NextFurniture – แพลตฟอร์มช้อปปิ้งและบล็อก",
  "projectDetails.nextfurniture.summary":
    "แพลตฟอร์มอีคอมเมิร์ซเฟอร์นิเจอร์พร้อมส่วนบล็อก การแคช Redis การประมวลผลงานเบื้องหลัง และการรองรับหลายภาษา",
  "projectDetails.nextfurniture.overview.title":
    "สำรวจแพตเทิร์นฟูลสแต็กสมัยใหม่ด้วยแพลตฟอร์มอีคอมเมิร์ซเฟอร์นิเจอร์",
  "projectDetails.nextfurniture.overview.steps.0.title":
    "การเรียกดูสินค้าและตะกร้า",
  "projectDetails.nextfurniture.overview.steps.0.description":
    "ผู้ใช้เรียกดูสินค้าเฟอร์นิเจอร์พร้อมการกรองหมวดหมู่ขั้นสูง ดูคำอธิบายโดยละเอียด และจัดการตะกร้าสินค้าที่คงอยู่",
  "projectDetails.nextfurniture.overview.steps.1.title":
    "บล็อกและเนื้อหา",
  "projectDetails.nextfurniture.overview.steps.1.description":
    "ส่วนบล็อกที่มีบทความเกี่ยวกับเฟอร์นิเจอร์และการออกแบบบ้าน รองรับการแบ่งหน้าทั้งแบบ offset และ cursor",
  "projectDetails.nextfurniture.overview.steps.2.title":
    "การประมวลผลเบื้องหลัง",
  "projectDetails.nextfurniture.overview.steps.2.description":
    "การแคช Redis เร่งความเร็วคำค้นสินค้า BullMQ จัดการงานคิว และ Node Cron ตั้งเวลางานเบื้องหลัง Sharp ปรับแต่งภาพสินค้า",
  "projectDetails.nextfurniture.architecture.description":
    "ฟรอนต์เอนด์ React พร้อม TanStack Query เชื่อมต่อกับแบ็กเอนด์ Express Prisma ORM จัดการ MongoDB Redis ให้แคช BullMQ จัดการคิวงาน และ i18next รองรับเนื้อหาหลายภาษา",
  "projectDetails.nextfurniture.architecture.steps.0.title":
    "กลยุทธ์การแคช",
  "projectDetails.nextfurniture.architecture.steps.0.description":
    "Redis แคชคำค้นสินค้าเพื่อลดภาระฐานข้อมูล การล้างแคชเกิดขึ้นเมื่อมีการอัปเดตสินค้า",
  "projectDetails.nextfurniture.architecture.steps.1.title":
    "งานเบื้องหลัง",
  "projectDetails.nextfurniture.architecture.steps.1.description":
    "คิว BullMQ จัดการการประมวลผลภาพและงานอะซิงโครนัสอื่น ๆ Node Cron ตั้งเวลางานบำรุงรักษาเป็นระยะ",
  "projectDetails.nextfurniture.architecture.steps.2.title":
    "การรองรับหลายภาษา",
  "projectDetails.nextfurniture.architecture.steps.2.description":
    "i18next ให้การรองรับหลายภาษาทั้งฝั่งฟรอนต์เอนด์และแบ็กเอนด์สำหรับชื่อสินค้า คำอธิบาย และข้อความ UI",
  "projectDetails.nextfurniture.engineeringFocus.title":
    "การแคช คิว และการรองรับหลายภาษา",
  "projectDetails.nextfurniture.engineeringFocus.items.0":
    "การแคช Redis — แคชคำค้นสินค้าพร้อมการล้างแคชเมื่ออัปเดต",
  "projectDetails.nextfurniture.engineeringFocus.items.1":
    "BullMQ + Node Cron — การประมวลผลงานเบื้องหลังและงานที่ตั้งเวลาไว้",
  "projectDetails.nextfurniture.engineeringFocus.items.2":
    "i18next — การรองรับหลายภาษาทั่วทั้งสแต็ก",
};
