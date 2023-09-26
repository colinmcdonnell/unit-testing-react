import MainLayout from './components/MainLayout/MainLayout'
// import LoginForm from './components/LoginForm/LoginForm'
import { GlobalStyles } from './Globals.styled'
import ChangePasswordForm from './components/ChangePassword/ChangePassword'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <MainLayout>
        <h1 style={{ textAlign: 'center' }}>Unit Testing React</h1>

        {/* replace login form with change password form for exercise */}
        {/* <LoginForm /> */}
        <ChangePasswordForm />
      </MainLayout>
    </div>
  )
}

export default App
