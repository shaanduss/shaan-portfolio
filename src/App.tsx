import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import WelcomeDialog from "./components/WelcomeDialog";
import { HomeView } from "./views/HomeView";
import { ThemeProvider } from "./components/theme-provider";
import { ProjectView } from "@/views/project/[projectID]/ProjectView";
import { AllProjectsView } from "@/views/project/AllProjectsView";
import { ResumeView } from "@/views/ResumeView";
import { ContactView } from "@/views/ContactView";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <WelcomeDialog />
        <div className="min-h-screen flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/projects/:projectID/*" element={<ProjectView />} />
            <Route path="/projects/" element={<AllProjectsView />} />
            <Route path="/resume/" element={<ResumeView />} />
            <Route path="/contact/" element={<ContactView />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
