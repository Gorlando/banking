// Import components and functions (like importing pandas and helper functions)
import HeaderBox from '@/components/HeaderBox'
import { Pagination } from '@/components/Pagination';
import TransactionsTable from '@/components/TransactionsTable';
// These are like database queries, similar to:
// pd.read_sql('SELECT * FROM transactions')
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
// Like a pandas helper function to format currency
import { formatAmount } from '@/lib/utils';
import React from 'react'

// Main function for transaction history
// Similar to analyzing transaction data in pandas:
// def analyze_transactions(page_number, account_id):
const TransactionHistory = async ({ searchParams: { id, page }}:SearchParamProps) => {
 // Set up pagination (like using df.iloc[] in pandas)
 const currentPage = Number(page as string) || 1;
 // Get user and account data (like reading from Excel)
 const loggedIn = await getLoggedInUser();
 const accounts = await getAccounts({ 
   userId: loggedIn.$id 
 })

 if(!accounts) return;
 
 // Prepare account data (like cleaning data in pandas)
 const accountsData = accounts?.data;
 const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

 // Get specific account (like filtering DataFrame:
 // account_df = df[df['id'] == account_id])
 const account = await getAccount({ appwriteItemId })

 // Pagination logic (like using df.head(10) in pandas)
 const rowsPerPage = 10;
 const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);
 
 // Calculate which transactions to show (like DataFrame slicing:
 // df.iloc[start:end])
 const indexOfLastTransaction = currentPage * rowsPerPage;
 const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;
 
 const currentTransactions = account?.transactions.slice(
   indexOfFirstTransaction, indexOfLastTransaction
 )

 return (
   // Main container (like your main Excel worksheet)
   <div className="transactions">
     {/* Header section (like Excel title area) */}
     <div className="transactions-header">
       <HeaderBox 
         title="Transaction History"
         subtext="See your bank details and transactions."
       />
     </div>

     <div className="space-y-6">
       {/* Account info (like account summary in Excel) */}
       <div className="transactions-account">
         <div className="flex flex-col gap-2">
           <h2 className="text-18 font-bold text-white">{account?.data.name}</h2>
           <p className="text-14 text-blue-25">
             {account?.data.officialName}
           </p>
           <p className="text-14 font-semibold tracking-[1.1px] text-white">
             ●●●● ●●●● ●●●● {account?.data.mask}
           </p>
         </div>
         
         {/* Balance display (like total balance cell in Excel) */}
         <div className='transactions-account-balance'>
           <p className="text-14">Current balance</p>
           <p className="text-24 text-center font-bold">{formatAmount(account?.data.currentBalance)}</p>
         </div>
       </div>

       {/* Transactions section (like main data table in Excel) */}
       <section className="flex w-full flex-col gap-6">
         {/* Transaction table (like Excel data grid) */}
         <TransactionsTable 
           transactions={currentTransactions}
         />
         {/* Pagination (like Excel sheet navigation) */}
         {totalPages > 1 && (
           <div className="my-4 w-full">
             <Pagination totalPages={totalPages} page={currentPage} />
           </div>
         )}
       </section>
     </div>
   </div>
 )
}

// Make component available to other files
export default TransactionHistory