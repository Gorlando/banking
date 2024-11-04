// Similar to Python import like:
// import pandas as pd
import Image from "next/image";

// This is like creating a Python function that accepts data
// Similar to:
// def process_excel_sheet(data):
export default function RootLayout({
 children,
}: Readonly<{
 // children is like data you pass to a pandas function
 // Similar to: df in pd.DataFrame(df)
 children: React.ReactNode;
}>) {
 // Like returning processed data in Python
 return (
   // This is like a main container for your data
   // Similar to how Excel has a main worksheet
   <main className="flex min-h-screen w-full justify-between font-inter">
     {/* 
     children is like your Excel data that gets processed
     Similar to when you process data in pandas:
     processed_data = your_function(df)
     */}
     {children}

     {/* 
     This is like adding an image to your Excel worksheet
     */}
     <div className="auth-asset">
       <div>
         {/* 
         Image component is like inserting an image in Excel
         with specific settings for size and position
         */}
         <Image 
           // File path, like when you read an Excel file:
           // pd.read_excel('path/to/file.xlsx')
           src="/icons/auth-image.svg"
           // Description of the image
           alt="Auth image"
           // Size settings, like column width/height in Excel
           width={500}
           height={500}
           // Styling, like Excel cell formatting
           className="rounded-l-xl object-contain"
         />
       </div>
     </div>
   </main>
 );
}