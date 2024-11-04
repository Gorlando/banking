// Import components and functions (like importing pandas and helper functions)
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
// Like checking user login status in a database
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
// Like redirecting to another Excel sheet
import { redirect } from "next/navigation";

// Main layout function (like setting up main Excel workbook structure)
// Similar to:
// def setup_main_dashboard(content):
export default async function RootLayout({
 children,  // Like data to display in main area
}: Readonly<{
 children: React.ReactNode;
}>) {
 // Check if user is logged in (like checking user permissions in Excel)
 const loggedIn = await getLoggedInUser();

 // If not logged in, go to sign-in page
 // Like: if not authorized: open('login.xlsx')
 if(!loggedIn) redirect('/sign-in')

 return (
   // Main container (like main Excel workbook)
   <main className="flex h-screen w-full font-inter">
     {/* Sidebar (like Excel's sidebar with navigation) */}
     <Sidebar user={loggedIn} />

     {/* Main content area (like main Excel worksheet) */}
     <div className="flex size-full flex-col">
       {/* Header area (like Excel header row) */}
       <div className="root-layout">
         {/* Logo (like company logo in Excel report) */}
         <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
         {/* Mobile navigation (like Excel mobile view menu) */}
         <div>
           <MobileNav user={loggedIn} />
         </div>
       </div>
       {/* Main content (like main data area in Excel) */}
       {children}
     </div>
   </main>
 );
}