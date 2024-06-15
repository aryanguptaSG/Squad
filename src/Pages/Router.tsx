import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import AnnouncementPage from "./AnnouncementPage";
import InvitePage from "./InvitePage";
import NotesPage from "./NotesPage";
import QuestionBank from "./QuestionBankPage";
import ClassRoom from "./ClassRoom";
import Feespage from "./FeesPage";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/announcement" element={<AnnouncementPage />} />
      <Route path="/invite/" element={<InvitePage />} />
      <Route path="/notes/" element={<NotesPage />} />
      <Route path="/question-bank/" element={<QuestionBank />} />
      <Route path="/classroom/" element={<ClassRoom />} />
      <Route path="/fees/" element={<Feespage />} />
      <Route
        path="/*"
        element={
          <div className="h-screen flex justify-center items-center bg-Gray-bgLight text-black dark:bg-black dark:text-white">
            404 | No Page Found
          </div>
        }
      />
    </Routes>
  );
}

export default Router;
