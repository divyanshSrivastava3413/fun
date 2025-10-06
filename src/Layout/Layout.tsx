import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return <Outlet />;
};

export default Layout;
