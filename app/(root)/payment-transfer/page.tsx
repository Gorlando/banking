// Import components and functions (like importing pandas and helper functions)
import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
// These are like database queries, similar to:
// pd.read_sql('SELECT * FROM accounts')
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

// Create main function for transfers
// Similar to creating a function to process payments in pandas:
// def process_bank_transfer():
const Transfer = async () => {
 // Get user data (like reading user info from Excel)
 const loggedIn = await getLoggedInUser();
 // Get account data (like reading bank accounts from Excel:
 // accounts_df = pd.read_excel('accounts.xlsx')
 const accounts = await getAccounts({ 
   userId: loggedIn.$id 
 })

 // Check if accounts exist (like checking if DataFrame is empty)
 // if accounts_df.empty: return
 if(!accounts) return;
 
 // Prepare account data (like cleaning data in pandas)
 const accountsData = accounts?.data;

 return (
   // Main container (like your main Excel worksheet)
   <section className="payment-transfer">
     {/* HeaderBox is like a title row in Excel */}
     <HeaderBox 
       title="Payment Transfer"
       subtext="Please provide any specific details or notes related to the payment transfer"
     />

     {/* Form section (like a data entry section in Excel) */}
     <section className="size-full pt-5">
       {/* Transfer form component (like an Excel form for entering payment details) */}
       <PaymentTransferForm accounts={accountsData} />
     </section>
   </section>
 )
}

// Make this component available to other files
// Like saving your Python function to use later
export default Transfer