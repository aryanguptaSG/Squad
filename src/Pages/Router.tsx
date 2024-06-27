import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import AnnouncementPage from "./AnnouncementPage";
import InvitePage from "./InvitePage";
import NotesPage from "./NotesPage";
import QuestionBank from "./QuestionBankPage";
import ClassRoom from "./ClassRoom";
import Feespage from "./FeesPage";
import Workspace from "./Workspace";
import { useEffect } from "react";
import apiCall from "@/api/apiCall";
import {
  GET_GROUP,
  GET_PEOPLE,
  GET_WORKSPACE,
  VERIFY_TOKEN,
} from "@/api/Endpoints";
import {
  allWorkspaces,
  peopleInWorkspace,
  workSpace,
  workSpaceId,
  classRooms,
} from "@/Context/Signals";
import ProfilePage from "./Profile";
import { useAuth } from "@/Context/AuthProvider";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-Gray-bgLight text-black dark:bg-Gray-dark-gray dark:text-white">
      404 | No Page Found
    </div>
  );
};

function Router() {
  const { setAuth } = useAuth();
  const setUp = async () => {
    try {
      await apiCall(VERIFY_TOKEN, "POST", {});

      const res: any = await apiCall(GET_WORKSPACE, "GET", {});
      allWorkspaces.value = res;
      let workspaceId: any = localStorage.getItem("workSpaceId");
      workspaceId =
        workspaceId !== "null"
          ? workspaceId == "GLOBAL"
            ? -1
            : parseInt(workspaceId)
          : 1;
      const filteredList = res.filter(
        (item: any) => item.workspaceId == workspaceId
      );
      if (workspaceId == -1) {
        workSpace.value = null;
        workSpaceId.value = "GLOBAL";
      } else if (filteredList.length > 0) {
        workSpace.value = filteredList[0];
        workSpaceId.value = workspaceId;
      } else if (res.length > 0) {
        const firstWorkSpace = res[0];
        workSpace.value = firstWorkSpace;
        workSpaceId.value = firstWorkSpace.workspaceId;
      } else {
        workSpace.value = null;
        workSpaceId.value = "GLOBAL";
      }

      const classRoomsList = await apiCall(GET_GROUP, "GET", {});
      classRooms.value = classRoomsList;
    } catch (error: any) {
      if (error.response) {
        if (error.response.status == 401) {
          setAuth(null);
        }
      }
    }
  };

  const getPeople = async () => {
    const res = await apiCall(
      `${GET_PEOPLE}/${workSpace.value ? workSpace.value.workspaceId : "1"}`,
      "GET",
      {}
    );
    peopleInWorkspace.value = res;
  };

  useEffect(() => {
    setUp();
  }, []);

  useEffect(() => {
    if (!workSpace.value) return;
    getPeople();
  }, [workSpace.value]);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/announcement"
        element={
          workSpaceId.value != "GLOBAL" ? (
            <AnnouncementPage />
          ) : (
            <NotFoundPage />
          )
        }
      />
      <Route
        path="/invite/"
        element={
          workSpaceId.value != "GLOBAL" ? <InvitePage /> : <NotFoundPage />
        }
      />
      <Route
        path="/notes/"
        element={
          workSpaceId.value != "GLOBAL" ? <NotesPage /> : <NotFoundPage />
        }
      />
      <Route
        path="/question-bank/"
        element={
          workSpaceId.value != "GLOBAL" ? <QuestionBank /> : <NotFoundPage />
        }
      />
      <Route
        path="/classroom/"
        element={
          workSpaceId.value != "GLOBAL" ? <ClassRoom /> : <NotFoundPage />
        }
      />
      <Route
        path="/fees/"
        element={
          workSpaceId.value != "GLOBAL" ? <Feespage /> : <NotFoundPage />
        }
      />
      <Route path="/workspaces" element={<Workspace />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
