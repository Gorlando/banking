// Similar to Python import like:
// import pandas as pd
import AuthForm from '@/components/AuthForm'

// This is like creating a simple Python function
// Similar to:
// def process_data():
const SignIn = () => {
 // Like in Python when you return processed data
 // return df
 return (
   // This is a container, like a wrapper around your data
   <section 
     // These style classes are like formatting options in pandas
     // Similar to:
     // df.style.set_properties(**{'text-align': 'center'})
     className="flex-center size-full max-sm:px-6"
   >
     {/* 
     This is like using a pre-made pandas function
     The type="sign-in" is like passing parameters to a pandas function:
     df.to_excel(type='xlsx')
     */}
     <AuthForm type="sign-in" />
   </section>
 )
}

// This is like making your Python function available to use in other files:
// Similar to having your function in a separate .py file that you can import
export default SignIn