import { Navigate, Route, Router, Routes } from "react-router-dom"
import { useAuthContext } from "./context/authContext.jsx"
import { Toaster } from "react-hot-toast"

import LoginPage from "./pages/auth/login/LoginPage.jsx"
import SignUpPage from "./pages/auth/signup/SignUpPage.jsx"
import ProfilePage from "./pages/profile/ProfilePage.jsx"
import Settings from "./pages/settings/Settings.jsx"
import HomePage from "./pages/home/HomePage.jsx"

import styles from "./styles/Profile.module.css"
import LeftSideBar from "./components/common/LeftSideBar.jsx"

function App() {

  const { authUser } = useAuthContext();

  return (
    <>
      <div className={`${styles.myBg} min-h-screen ${authUser && "flex flex-col"}  overflow-hidden scrollbar-hide`}>
        {/* Header */}
        {authUser && (
          <header className="w-full bg-white shadow-sm sticky top-0">
            <div className={`${styles.contaier} py-2 px-4 sticky top-0`}>
              <img src="/logo.png" alt="Company Logo" className={`${styles.logoLogin} h-16`} onError={(e) => { e.target.onerror = null; e.target.src="/bg_login.jpg"; }}/>
            </div>
          </header>
        )}
        {/* Main content */}
        <div className={`${authUser && "flex flex-grow w-full flex-col md:flex-row"}`}>
          {authUser && <LeftSideBar />}
          <Routes>
            <Route path="/" element={authUser ? <HomePage /> : <Navigate to={"/login"} />} />
            <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
            <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
            <Route path="/profile/:id" element={authUser ? <ProfilePage /> : <Navigate to={"/login"} />} />
            <Route path="/settings" element={authUser ? <Settings /> : <Navigate to={"/login"} />} />
          </Routes>
          <Toaster />
        </div>
      </div>
    </>
  )
}

export default App
