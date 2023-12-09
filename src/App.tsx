import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Router from "./Pages/Router"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@/components/ThemeProvider"


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
    <div className="bg-[#353535]">
      <Navbar/>
      <div className="flex justify-start h-[calc(100vh-60px)] relative top-[60px]">
        <Sidebar/>
        <div className="bg-white w-full rounded-ss-2xl overflow-x-clip overflow-scroll hide-scrollbar">
        <Router/>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
