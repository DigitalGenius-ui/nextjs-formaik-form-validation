"use client";

import Login from "./(Form)/(Login)/Login";
import { useState } from "react";
import SignUp from "./(Form)/(SignUp)/SignUp";

export default function Home() {
  const [log, setLog] = useState(false);
  return <>{log ? <Login setLog={setLog} /> : <SignUp setLog={setLog} />}</>;
}
