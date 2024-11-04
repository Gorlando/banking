// Import a special Image component (like importing pandas)
import Image from "next/image";

// Create a main function that will handle the layout
// Similar to how you might create a function to process Excel sheets
export default function RootLayout({
 children,  // 'children' is like input data you want to process
}: Readonly<{
 children: React.ReactNode;  // This defines what type of data we accept
}>) {
 return (
   // 'main' is like your main Excel worksheet where everything goes
   <main className="flex min-h-screen w-full justify-between font-inter">
     {children}  // This is where your main content goes (like your data in Excel)
     
     {/* This div is like a separate section in your Excel sheet */}
     <div className="auth-asset">
       <div>
         {/* 
         Image is like inserting a picture in Excel
         - src: where to find the image (like file path in pd.read_excel())
         - alt: description of the image
         - width/height: size settings (like column width in Excel)
         - className: styling (like Excel cell formatting)
         */}
         <Image 
           src="/icons/auth-image.svg"
           alt="Auth image"
           width={500}
           height={500}
           className="rounded-l-xl object-contain"
         />
       </div>
     </div>
   </main>
 );
}