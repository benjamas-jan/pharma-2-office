import type { Metadata, Viewport } from "next";
import { IBM_Plex_Serif, IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

const ibmPlexThai = IBM_Plex_Sans_Thai_Looped({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wellness Plus — สั่งยาสำหรับสำนักงาน พร้อมใบกำกับภาษี",
  description:
    "บริษัท Wellness Plus จำกัด — สั่งยาเติมตู้ยาบริษัทผ่าน LINE OA @pharma มีเภสัชกรประจำให้คำปรึกษา ออกใบกำกับภาษีเต็มรูปทุก order",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${ibmPlexSerif.variable} ${ibmPlexThai.variable}`}>
      <body>{children}</body>
    </html>
  );
}
