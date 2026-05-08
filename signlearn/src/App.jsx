import { Routes, Route, Navigate } from 'react-router-dom'
import { useStore } from '@/lib/store'
import Layout from '@/components/Layout'
import AuthPage from '@/pages/AuthPage'
import HomePage from '@/pages/HomePage'
import LessonsPage from '@/pages/LessonsPage'
import LessonDetailPage from '@/pages/LessonDetailPage'
import PracticePage from '@/pages/PracticePage'
import PlansPage from '@/pages/PlansPage'
import ProfilePage from '@/pages/ProfilePage'

function PrivateRoute({ children }) {
  const isAuthenticated = useStore((s) => s.isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/auth" replace />
}

export default function App() {
  const isAuthenticated = useStore((s) => s.isAuthenticated)

  return (
    <Routes>
      <Route
        path="/auth"
        element={isAuthenticated ? <Navigate to="/" replace /> : <AuthPage />}
      />
      <Route
        path="/"
        element={<PrivateRoute><Layout /></PrivateRoute>}
      >
        <Route index element={<HomePage />} />
        <Route path="lessons" element={<LessonsPage />} />
        <Route path="lessons/:lessonId" element={<LessonDetailPage />} />
        <Route path="practice" element={<PracticePage />} />
        <Route path="plans" element={<PlansPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
