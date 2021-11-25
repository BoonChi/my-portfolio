import Link from "next/link";
import React from "react";

const App: React.FC = () => {
  return (
    <main className="container">
      <div>
        <Link href={"/clock"}>Pomodoro clock with break and session</Link>
      </div>
      <div>
        <Link href={"/todo"}>Todo App</Link>
      </div>
    </main>
  );
};

export default App;
