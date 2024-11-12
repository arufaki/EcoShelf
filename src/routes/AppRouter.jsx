import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BookDetailPage from "../pages/BookDetailPage";
import BooksPage from "../pages/BooksPage";
import UserPage from "../pages/UserPage";

const AppRouter = () => {
    return (
        <Router
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}
        >
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/book/:id" element={<BookDetailPage />} />
                <Route path="/profile" element={<UserPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
