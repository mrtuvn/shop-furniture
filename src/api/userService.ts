import { del, get, post, put } from "./api";

// Define your data types
export interface User {
  id: number;
  name: string;
  email: string;
  // other properties
}

// GET all users
export const getUsers = () => {
  return get<User[]>("/users");
};

// GET single user
export const getUserById = (id: number) => {
  return get<User>(`/users/${id}`);
};

// POST create user
export const createUser = (userData: Omit<User, "id">) => {
  return post<User>("/users", userData);
};

// PUT update user
export const updateUser = (id: number, userData: Partial<User>) => {
  return put<User>(`/users/${id}`, userData);
};

// DELETE user
export const deleteUser = (id: number) => {
  return del<{ success: boolean }>(`/users/${id}`);
};
