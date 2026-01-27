import Navbar from "../components/Navbar";
import SignIn from "./SignInPage";
import SignUp from "./SignUpPage";

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <SignIn/>
        <SignUp/>
    </div>
  )
}

export default HomePage;