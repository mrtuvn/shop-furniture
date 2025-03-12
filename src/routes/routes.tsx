import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PATH, USER_ROLE } from "@/settings/constants";

// layout
import HomeLayout1 from "@/layouts/home1/layout";
// import { Template2 } from '../layouts/template2';

// routes
//import AuthRoute from "@/routes/auth-route";
import GuestRoute from "@/routes/guest-route";
import Spinner from "@/components/spinner";
import RoleRoute from "@/routes/role-route";

// page
const Homepage = React.lazy(() => import("../pages/homepage/homepage"));
// const Login = React.lazy(() =>
//   import("../pages/login").then((module) => ({ default: module.Login }))
// );
// const Register = React.lazy(() =>
//   import("../pages/register").then((module) => ({ default: module.Register }))
// );
// const UserCreate = React.lazy(() =>
//   import("../pages/user").then((module) => ({ default: module.Create }))
// );
// const UserList = React.lazy(() =>
//   import("../pages/user").then((module) => ({ default: module.List }))
// );
// const UserShow = React.lazy(() =>
//   import("../pages/user").then((module) => ({ default: module.Show }))
// );
// const UserEdit = React.lazy(() =>
//   import("../pages/user").then((module) => ({ default: module.Edit }))
// );
// const Error403 = React.lazy(() =>
//   import("../pages/error/Error403").then((module) => ({
//     default: module.default,
//   }))
// );

const routesConfig = [
  {
    path: PATH.ROOT,
    component: Homepage,
    layout: HomeLayout1,
    guard: GuestRoute,
    roles: [USER_ROLE.ADMIN, USER_ROLE.MANAGER, USER_ROLE.OPERATOR],
  },
  //   {
  //     path: PATH.LOGIN,
  //     component: Login,
  //     guard: GuestRoute,
  //   },
  //   {
  //     path: PATH.REGISTER,
  //     component: Register,
  //     guard: GuestRoute,
  //   },
  //   {
  //     path: PATH.USER_LIST,
  //     component: UserList,
  //     layout: Template1,
  //     guard: AuthRoute,
  //     roles: [USER_ROLE.ADMIN, USER_ROLE.MANAGER, USER_ROLE.OPERATOR],
  //   },
  //   {
  //     path: PATH.USER_CREATE,
  //     component: UserCreate,
  //     layout: Template1,
  //     guard: AuthRoute,
  //     roles: [USER_ROLE.ADMIN, USER_ROLE.MANAGER, USER_ROLE.OPERATOR],
  //   },
  //   {
  //     path: PATH.USER_SHOW,
  //     component: UserShow,
  //     layout: Template1,
  //     guard: AuthRoute,
  //     roles: [
  //       USER_ROLE.ADMIN,
  //       USER_ROLE.MANAGER,
  //       USER_ROLE.OPERATOR,
  //       USER_ROLE.MEMBER,
  //     ],
  //   },
  //   {
  //     path: PATH.USER_EDIT,
  //     component: UserEdit,
  //     layout: Template1,
  //     guard: AuthRoute,
  //     roles: [USER_ROLE.ADMIN],
  //   },
  //   {
  //     path: PATH.ERROR_403,
  //     component: Error403,
  //     layout: Template1,
  //     guard: AuthRoute,
  //   },
];

function renderRoutes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {routesConfig.map((route, index) => {
          const Component: React.FC<React.PropsWithChildren> =
            route.component || Fragment;
          const Layout: React.FC<React.PropsWithChildren> =
            route.layout || Fragment;
          const Authenticate: React.FC<React.PropsWithChildren> =
            route.guard || Fragment;
          const roles = route.roles;

          return (
            <Route
              key={`routes-${index}`}
              path={route.path}
              element={
                <Authenticate>
                  <Layout>
                    <RoleRoute roles={roles}>
                      <Component />
                    </RoleRoute>
                  </Layout>
                </Authenticate>
              }
            />
          );
        })}
        <Route path="*" element={<>page not found</>} />
      </Routes>
    </Suspense>
  );
}

export const RoutesMain = () => {
  return renderRoutes();
};
