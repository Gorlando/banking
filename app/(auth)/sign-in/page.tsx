// In Python, imports typically look like: from components.AuthForm import AuthForm
// The '@' symbol in '@/components/AuthForm' is a path alias, similar to modifying PYTHONPATH
// or using __init__.py to structure imports
import AuthForm from '@/components/AuthForm'

// In Python, this would be a function definition like:
// def sign_in():
//     return render_template(...) or return HTML component in frameworks like Django
const SignIn = () => {
  // The return statement in React/TypeScript JSX is similar to
  // returning HTML templates in Python web frameworks like Flask or Django
  return (
    // <section> is an HTML element. In Python web frameworks, this would be part of a 
    // template (e.g., Jinja2 template in Flask or Django template)
    <section 
      // className in React is equivalent to HTML class attribute
      // These are Tailwind CSS classes, similar to using Bootstrap in Python web frameworks:
      // - flex-center: centers content using flexbox
      // - size-full: takes full width and height
      // - max-sm:px-6: adds padding of 1.5rem (24px) on x-axis for small screens
      className="flex-center size-full max-sm:px-6"
    >
      {/* 
      In Python frameworks like Django, this would be similar to including a form component:
      {% include 'components/auth_form.html' with form_type='sign_in' %}
      
      AuthForm is a custom component that handles authentication
      The type="sign-in" prop is similar to passing kwargs in Python:
      auth_form(type='sign_in')
      */}
      <AuthForm type="sign-in" />
    </section>
  )
}

// In Python, this would be similar to:
// __all__ = ['SignIn']
// or in Flask: return SignIn
export default SignIn