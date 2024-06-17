import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AuthScreenNew } from "./Pages/LoginPage";
import Router from "./Pages/Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/Context/ThemeProvider";
import { AuthProvider } from "./Context/AuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GoogleOAuthProvider clientId="442084594356-0okngnlbvdi17u05b0f6thvidovmepmk.apps.googleusercontent.com">
        <AuthProvider fallBackComponent={<AuthScreenNew />}>
          <BrowserRouter>
            <div className="bg-white dark:bg-black">
              <Navbar />
              <div className="flex justify-start h-[calc(100vh-60px)] relative top-[60px]">
                <Sidebar />
                <div className=" w-full rounded-ss-2xl overflow-x-clip overflow-scroll hide-scrollbar">
                  <Router />
                </div>
              </div>
            </div>
          </BrowserRouter>
        </AuthProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
