import { createContext, useContext, useState } from "react";

type Auth = any | string | undefined;

type AuthProviderProps = {
  children: React.ReactNode;
  defaultAuth?: Auth;
  storageKey?: string;
  fallBackComponent: React.ReactNode;
};

type AuthProviderState = {
  auth: Auth;
  setAuth: (auth: Auth) => void;
};

const initialState: AuthProviderState = {
  auth: "null",
  setAuth: () => null,
};

const AuthProviderContext = createContext<AuthProviderState>(initialState);

export function AuthProvider({
  children,
  defaultAuth = "null",
  storageKey = "vite-ui-auth",
  fallBackComponent,
  ...props
}: AuthProviderProps) {
  const [auth, setAuth] = useState<Auth>(
    () => (JSON.parse(localStorage.getItem(storageKey)!) as Auth) || defaultAuth
  );

  const value = {
    auth,
    setAuth: (auth: Auth) => {
      localStorage.setItem(storageKey, auth as string);
      setAuth(auth);
    },
  };

  return (
    <AuthProviderContext.Provider {...props} value={value}>
      {auth !== "null" ? children : fallBackComponent}
    </AuthProviderContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthProviderContext);

  if (context === undefined)
    throw new Error("useAuth must be used within a AuthProvider");

  return context;
};
