import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BookDetailPage from "../pages/BookDetailPage";
import BooksPage from "../pages/BooksPage";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedLayout from "../layouts/ProtectedLayout";
import NotFoundPage from "../pages/NotFoundPage";
import ScrollToTop from "../components/organisms/Reusable/ScrollToTop";

const AppRouter = () => {
    return (
        <Router
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}
        >
            <ScrollToTop />
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/book/:id" element={<BookDetailPage />} />
                <Route element={<ProtectedLayout />}>
                    <Route path="/profile/:uuid" element={<UserPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
