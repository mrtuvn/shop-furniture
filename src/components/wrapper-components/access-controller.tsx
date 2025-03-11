import React from "react";
import { USER_ROLE } from "@/settings/constants";
import { useSelector } from "react-redux";

interface AccessControlerProps extends React.PropsWithChildren {
  resource?: string;
}

/*
CRUD: create, read, update, delete

Ex: access level = 7 (READ | CREATE) -> 00 00 01 11
CAN_READ
00 00 00 01
    &
00 00 01 11
--------------
00 00 00 01

CAN_READ
00 00 00 10
    &
00 00 01 11
--------------
00 00 00 10

00 00 00 01
    & 
00 00 00 01
-----------
00 00 00 01
*/

const CAN_READ = 1; // 00 00 00 01
const CAN_CREATE = 2; // 00 00 00 10
const CAN_UPDATE = 4; // 00 00 01 00
const CAN_DELETE = 8; // 00 00 10 00

const permissions = {
  "/user/list": CAN_READ,
  "/user/list/create": CAN_CREATE,
  "/user/list/delete": CAN_DELETE,
  "/user/show": CAN_UPDATE,
};

export const roleUser = {
  [USER_ROLE.ADMIN]: CAN_READ | CAN_CREATE | CAN_DELETE | CAN_UPDATE,
  [USER_ROLE.OPERATOR]: CAN_READ | CAN_CREATE | CAN_UPDATE,
  [USER_ROLE.MANAGER]: CAN_READ | CAN_CREATE | CAN_UPDATE,
  [USER_ROLE.MEMBER]: CAN_READ,
};

function AccessControler({ resource = "", children }: AccessControlerProps) {
  const role = useSelector((state: any) => state.app.user?.role);
  console.log("role: ", role);
  // const role = 'admin';
  // 2 & 2
  if (!((permissions as any)[resource] & roleUser[role])) return null;

  return <>{children}</>;
}

export default AccessControler;
