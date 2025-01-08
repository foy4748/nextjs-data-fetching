"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutButton() {
  return (
    <>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}
