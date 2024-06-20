import Image from "next/image";
import { Inter } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log("User", user);
  
  
  return (
    <div>
      <h1>Welcome to the Next.js App</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <a href="/api/auth/logout">Logout</a>
        </div>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}
    </div>
  );
}
