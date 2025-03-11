import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { PATH } from "@/settings/constants";
import { request } from "@/services/request";
import { setUser } from "@/redux/app.slice";

function AuthRoute({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const access_token = window.localStorage.getItem("access_token");

  React.useEffect(() => {
    if (!access_token) return;

    async function checkAuthenticated() {
      try {
        const response: any = await request("/api/auth", {
          method: "POST",
          headers: {
            "x-auth-token": access_token,
          },
        });
        setIsAuthenticated(true);
        dispatch(setUser(response.user.user));
      } catch (error) {
        window.localStorage.clear();
        navigate(PATH.LOGIN);
      }
    }
    checkAuthenticated();
  }, [access_token]);

  if (!access_token) {
    return <Navigate to={PATH.LOGIN} />;
  }

  if (!isAuthenticated) return null;

  return <>{children}</>;
}

export default AuthRoute;
