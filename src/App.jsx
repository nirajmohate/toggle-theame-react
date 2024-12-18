import { useState } from "react";
import "./App.css";

function App() {
  const [darkTheame, setDarkTheame] = useState(false);

  return (
    <>
      <div
        style={{
          background: darkTheame ? "#333" : "#fff",
          color: darkTheame ? "#fff" : "#000",
          height: "100vh",
        }}
      >
        <button onClick={() => setDarkTheame(!darkTheame)}>
          Toggle Theame
        </button>
      </div>
    </>
  );
}

export default App;
