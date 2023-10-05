import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState({
    title: "",
    photo: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const formData = new FormData();
    formData.append("photo", file.photo);
    const reponse = await axios.post(
      "https://backaws3.onrender.com/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(reponse);
  };
  return (
    <>
      <div className="flex flex-row justify-center gap-32">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
          <label 
          className="w-full"
          htmlFor="title">Titulo</label>
          <input
            className="w-full"
            id="title"
            name="title"
            onChange={(e) =>
              setFile({
                ...file,
                title: e.target.value,
              })
            }
            type="text"
          />

          <input
          className="w-full"
            name="photo"
            onChange={(e) =>
              setFile({
                ...file,
                photo: e.target.files[0],
              })
            } 
            type="file"
          />
          <button className="w-full"
          >
            Send
          </button>
        </form>
        <audio controls className="w-full">
          <source
            src="https://d2vp3r12siobk2.cloudfront.net/03 amor por siempre.mp3"
            type="audio/mpeg"
          />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>
    </>
  );
}

export default App;
