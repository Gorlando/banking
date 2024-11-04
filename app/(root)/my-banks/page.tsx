// Import components and functions (like importing pandas and other Python libraries)
import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
// These are like database query functions, similar to:
// pd.read_sql('SELECT * FROM accounts')
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

// Create main function for the banks page
// Similar to creating a function to process bank data in pandas:
// def process_bank_accounts():
const MyBanks = async () => {
 // Get user data (like reading user info from Excel/database)
 const loggedIn = await getLoggedInUser();
 // Get account data (like getting bank data from Excel:
 // accounts_df = pd.read_excel('bank_accounts.xlsx')
 const accounts = await getAccounts({ 
   userId: loggedIn.$id 
 })

 return (
   // Main container (like your main Excel worksheet)
   <section className='flex'>
     <div className="my-banks">
       {/* HeaderBox is like creating a title section in Excel */}
       <HeaderBox 
         title="My Bank Accounts"
         subtext="Effortlessly manage your banking activites."
       />

       <div className="space-y-4">
         {/* Like a section header in Excel */}
         <h2 className="header-2">
           Your cards
         </h2>
         {/* Container for bank cards */}
         <div className="flex flex-wrap gap-6">
           {/* 
           This is like looping through rows in a pandas DataFrame:
           for index, row in accounts_df.iterrows():
               print(row['account_info'])
           */}
           {accounts && accounts.data.map((a: Account) => (
             <BankCard 
               key={accounts.id}
               account={a}
               userName={loggedIn?.firstName}
             />
           ))}
         </div>
       </div>
     </div>
   </section>
 )
}

// Make this component available to other files
// Like saving your Python function so you can import it later
export default MyBanks