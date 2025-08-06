import {Bai_Jamjuree} from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
    variable: "--font-bai-jamjuree",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata = {
    title: "Aleksandar Kuzmanovic - Official Portfolio",
    description: "Aleksandar Kuzmanovic's official portfolio showcasing skills, projects, and contact information.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${baiJamjuree.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
