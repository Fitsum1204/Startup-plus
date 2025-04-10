import { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      image: string;
    };
    expires: string;
    id: string; // Add the id field to match your session
  }
}