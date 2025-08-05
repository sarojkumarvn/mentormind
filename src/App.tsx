import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Roadmaps from "./pages/dashboard/Roadmaps";
import MockTests from "./pages/dashboard/MockTests";
import AIInterview from "./pages/dashboard/AIInterview";
import Analytics from "./pages/dashboard/Analytics";
import Community from "./pages/dashboard/Community";
import Blog from "./pages/dashboard/Blog";
import StudyHub from "./pages/dashboard/StudyHub";
import Notes from "./pages/dashboard/Notes";
import Tasks from "./pages/dashboard/Tasks";
import Quizzes from "./pages/dashboard/Quizzes";
import Flashcards from "./pages/dashboard/Flashcards";
import MindMaps from "./pages/dashboard/MindMaps";
import JobsBoard from "./pages/dashboard/JobsBoard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignupPage />} />
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="roadmaps" element={<Roadmaps />} />
              <Route path="mock-tests" element={<MockTests />} />
              <Route path="ai-interview" element={<AIInterview />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="community" element={<Community />} />
              <Route path="blog" element={<Blog />} />
              <Route path="study-hub" element={<StudyHub />} />
              <Route path="notes" element={<Notes />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="quizzes" element={<Quizzes />} />
              <Route path="flashcards" element={<Flashcards />} />
              <Route path="mind-maps" element={<MindMaps />} />
              <Route path="jobs-board" element={<JobsBoard />} />
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
