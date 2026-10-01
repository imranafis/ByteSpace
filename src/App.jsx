import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Search from './pages/Search.jsx';
import CourseLayout from './pages/CourseLayout.jsx';
import CourseAbout from './pages/CourseAbout.jsx';
import CourseLessons from './pages/CourseLessons.jsx';
import CourseReviews from './pages/CourseReviews.jsx';
import CreatorProfile from './pages/CreatorProfile.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/course/:id" element={<CourseLayout />}>
          <Route index element={<CourseAbout />} />
          <Route path="lessons" element={<CourseLessons />} />
          <Route path="reviews" element={<CourseReviews />} />
        </Route>
        <Route path="/creator" element={<CreatorProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
