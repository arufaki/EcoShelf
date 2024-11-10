import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BookDetailPage from "../pages/BookDetailPage";
import BooksPage from "../pages/BooksPage";

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
                <Route path="/detail" element={<BookDetailPage />} />
                <Route path="/books" element={<BooksPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
