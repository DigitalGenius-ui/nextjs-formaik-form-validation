"use client";

import Login from "@/components/Login/Login";
import SignUp from "@/components/SignUp/SignUp";
import { useState } from "react";

export default function Home() {
  const [log, setLog] = useState(false);
  return <>{log ? <Login setLog={setLog} /> : <SignUp setLog={setLog} />}</>;
}
