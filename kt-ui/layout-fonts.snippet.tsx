// ---- KT UI fonts: merge into your app/layout.tsx ----
import { IBM_Plex_Sans_Thai, Inter, Source_Code_Pro } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider" // skip if you already have one

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-thai",
})
const sourceCode = Source_Code_Pro({ subsets: ["latin"], variable: "--font-source-code" })

// <html lang="th" suppressHydrationWarning
//       className={`${inter.variable} ${plexThai.variable} ${sourceCode.variable}`}>
//   <body>
//     <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//       {children}
//     </ThemeProvider>
//   </body>
// </html>
