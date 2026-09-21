import { CircleCheck, Info, TriangleAlert } from "lucide-react"

import { Hero } from "@/components/kt/hero"
import { SiteHeader } from "@/components/kt/site-header"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardEyebrow,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero
        eyebrow="KT UI"
        title="โครงสร้างพื้นฐาน สำหรับงานของคุณ"
        lead="ชุดธีม KT UI บน Next.js, Tailwind และ shadcn/ui พร้อมใช้ทั้งโหมดสว่างและมืด"
        actions={
          <>
            <Button arrow>เริ่มต้น</Button>
            <Button variant="secondary" arrow>
              ดูตัวอย่าง
            </Button>
          </>
        }
      />

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          <Card elevated>
            <CardHeader>
              <CardEyebrow>Research</CardEyebrow>
              <CardTitle>งานวิจัย</CardTitle>
              <CardDescription>ติดตามบทความและสถานะการส่งวารสารในที่เดียว</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">Draft</Badge>
              <Badge variant="info">Under review</Badge>
              <Badge variant="success">Accepted</Badge>
              <Badge variant="warning">Revise</Badge>
              <Badge variant="destructive">Rejected</Badge>
            </CardContent>
            <CardFooter>
              <Button variant="link" arrow>
                ดูทั้งหมด
              </Button>
            </CardFooter>
          </Card>

          <Card elevated>
            <CardHeader>
              <CardEyebrow>Account</CardEyebrow>
              <CardTitle>เข้าสู่ระบบ</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="email">อีเมล</Label>
                <Input id="email" placeholder="you@ksu.ac.th" />
                <p className="text-[13px] text-muted-foreground">ใช้อีเมลมหาวิทยาลัย</p>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="sid">รหัสนักศึกษา</Label>
                <Input id="sid" defaultValue="6512" aria-invalid />
                <p className="text-[13px] text-destructive">ต้องมี 11 หลัก</p>
              </div>
            </CardContent>
            <CardFooter className="gap-3">
              <Button className="flex-1">เข้าสู่ระบบ</Button>
              <Button variant="outline">ยกเลิก</Button>
            </CardFooter>
          </Card>

          <div className="grid content-start gap-3">
            <Alert>
              <Info />
              <AlertTitle>ข้อมูล</AlertTitle>
              <AlertDescription>ระบบจะปิดปรับปรุงคืนวันเสาร์</AlertDescription>
            </Alert>
            <Alert variant="success">
              <CircleCheck />
              <AlertTitle>สำเร็จ</AlertTitle>
              <AlertDescription>บันทึกข้อมูลเรียบร้อย</AlertDescription>
            </Alert>
            <Alert variant="warning">
              <TriangleAlert />
              <AlertTitle>คำเตือน</AlertTitle>
              <AlertDescription>ใกล้ครบกำหนดส่ง</AlertDescription>
            </Alert>
            <Card>
              <CardContent className="flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button size="sm" variant="secondary">Secondary</Button>
                <Button size="sm" variant="ghost">Ghost</Button>
                <Button size="sm" variant="destructive">Delete</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
