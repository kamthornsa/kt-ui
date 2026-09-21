# KT UI migration kit — ใส่ KT UI ในระบบ Next.js + Tailwind + shadcn ที่มีอยู่แล้ว

## ตัวอย่าง live
คลิกดูตัวอย่างได้ที่: [https://kamthornsa.github.io/kt-ui/](https://kamthornsa.github.io/kt-ui/)

**พาเลต:** `#01244C` กรมท่า (สีหลัก — ตัวอักษรหัวข้อ ปุ่มหลัก และพื้นหลังโหมดมืด) · `#00A6F7` ฟ้า (ลิงก์และการกระทำ) · `#38E0FB` ฟ้าสว่าง · `#B8F456` เขียวมะนาว (สองตัวหลังใช้ตกแต่ง gradient และกราฟ)

## วิธีเร็ว (vibe code)
1. `git commit -am "before KT UI"`  (มีจุดย้อนกลับเสมอ)
2. คัดลอกโฟลเดอร์ `kt-ui/` ไปไว้ที่ root ของโปรเจกต์ และเพิ่ม `"kt-ui"` ใน `exclude` ของ `tsconfig.json` (กัน build พังเพราะไฟล์ต้นแบบ)
3. `npm i next-themes lucide-react`  (ส่วนใหญ่มีอยู่แล้ว)
4. เปิด AI agent (Claude Code / Cursor) → วาง prompt ใน `PROMPT.md` → ให้ทำทีละ phase และดูผลทุก phase
5. เสร็จแล้วลบโฟลเดอร์ `kt-ui/` ได้ (กฎยังอยู่ใน CLAUDE.md/AGENTS.md)

## ไฟล์ในชุด
| ไฟล์ | ใช้ทำอะไร |
|---|---|
| `PROMPT.md` | prompt สำหรับ AI agent แบ่ง 6 phase |
| `kt-ui/kt-theme.v4.css` | ค่าตัวแปรธีม สำหรับ Tailwind v4 (**ไฟล์สำคัญที่สุด**) |
| `kt-ui/kt-theme.v3.css` + `kt-ui/tailwind.v3.extend.js` | ธีมเดียวกันในรูปแบบ HSL สำหรับ Tailwind v3 |
| `kt-ui/layout-fonts.snippet.tsx` | ฟอนต์ Inter + IBM Plex Sans Thai ผ่าน next/font |
| `kt-ui/components/ui/*.tsx` | button, card, input, label, badge, alert เวอร์ชัน KT UI (ต้นแบบให้ AI เทียบ) |
| `kt-ui/components/kt/*.tsx` | Hero, SiteHeader (ใช้หรือไม่ก็ได้) |
| `kt-ui/components/theme-provider.tsx`, `theme-toggle.tsx` | โหมดมืด/สว่าง |
| `kt-ui/KT-UI-RULES.md` | กฎออกแบบ ใส่ใน CLAUDE.md/AGENTS.md ให้ AI ทำตามตลอด |
| `kt-ui/example.html` | หน้าโชว์ทุก element (เปิดในเบราว์เซอร์ได้เลย ไม่ต้อง build) มีปุ่มสลับธีม |
| `kt-ui/demo-page.tsx` | หน้าตัวอย่าง วางเป็น `app/kt-demo/page.tsx` เพื่อตรวจผล |
| `kt-ui/preview/*.png` | ภาพหน้า demo ที่ควรได้ |

## ถ้าอยากทำเองโดยไม่ใช้ AI (ขั้นต่ำ)
แค่เอาค่าใน `:root` / `.dark` จาก `kt-theme.v4.css` ไปแทนใน `globals.css` เดิม → ทั้งแอปเปลี่ยนสีตาม KT UI ทันที
ส่วนปุ่มทรงแคปซูล, เงา และ variant ใหม่ ค่อยปรับใน `components/ui/*.tsx` ภายหลัง
