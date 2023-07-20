// import React from "react";
// import blogData from "../data/blog";
// import Header from "./Header";
// import About from "./About";
// console.log(blogData);

// function App() {
//   const blogName= "Overrated"
//   const aboutText= " "
//   return (
//     <div className="App">
//       <Header blogName ={blogName} /> 
//       <About abouText ={aboutText} image={"https://via.placeholder.com/215"}/>                                   
//     </div>
//   );
// }

// export default App;

import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName="My Blog" />
      <About image="https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=3hNSNk_rbalqc_N2FH2MrtOgJaAOaoDebVnu7x5Qtd0=" />
      <ArticleList articles={blogData.articles} />
      
    </div>
  );
}

export default App;
