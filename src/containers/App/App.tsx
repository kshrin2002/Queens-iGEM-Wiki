import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar, NotFound } from "../../components";
import Loading from "../../components/Loading"; // Correct import for Loading component
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect, useState } from "react";

const App = () => {
  const pathMapping = getPathMapping();
  const location = useLocation(); // Detects current route
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  useEffect(() => {
    // Set loading to true when the route changes
    setIsLoading(true);

    // Simulate a loading delay or actual data fetching
    const loadTimer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after the delay
    }, 500); // Adjust time as needed

    // Cleanup timer on component unmount or route change
    return () => clearTimeout(loadTimer);
  }, [location.pathname]); // Trigger on route change

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Header and PageContent */}
      <Routes>
        {Object.entries(pathMapping).map(([path, { component: Component }]) => (
          <Route
            key={path}
            path={path}
            element={<Component />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      <Footer />
    </>
  );
};

import "./App.css";
export default App;
