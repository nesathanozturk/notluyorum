import NotePage from "@/containers/note-page";

import ProtectedRoute from "@/components/protected-route";

const NotesPage = () => {
  return (
    <ProtectedRoute>
      <NotePage />
    </ProtectedRoute>
  );
};

export default NotesPage;
