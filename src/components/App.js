import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const posts = [
    {
      id: 1,
      title: "First Post",
      date: "2022-02-20",
      preview: "This is the first post",
    },
    {
      id: 2,
      title: "Second Post",
      date: "2022-02-21",
      preview: "This is the second post",
    },
  ];

  return (
    <div className="App">
      <Header name="My Blog" />
      <About />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
