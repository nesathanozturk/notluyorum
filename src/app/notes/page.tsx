import NotePage from "@/containers/note-page";

import ProtectedRoute from "@/components/protected-route";

const NotesPage = () => {
  return (
    <ProtectedRoute>
      <main className="min-h-screen">
        <NotePage />
      </main>
    </ProtectedRoute>
  );
};

export default NotesPage;
