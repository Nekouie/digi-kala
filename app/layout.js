import { Vazirmatn , Geist_Mono } from "next/font/google";

import "./globals.css";

const vazirmatn = Vazirmatn({
    subsets: ["arabic"],
});



export const metadata = {
    title: "دیجی کالا",
    description: "digi app for resume",
};

export default function RootLayout({ children }) {
    return (
        <html dir="rtl" lang="arabic" >
        <body className={vazirmatn.className}
        >
            <div className="flex flex-col w-full relative top-0  justify-center items-center">
                {children}
            </div>
        </body>
        </html>
    );
}