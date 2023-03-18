import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

   return <h1>CORRUPT A MAN'S HEART WITH A GIFT, THATS HOW YOU KNOW WHO YOU DEALING WITH</h1>;
}

export default App;


   

