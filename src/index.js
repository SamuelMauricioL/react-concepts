import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

//setup vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/515mvgd0pXL._SX329_BO1,204,203,200_.jpg",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg",
    title: "Reminders of Him: A Novel",
    author: "Colleen Hoover",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert(`${title} by ${author}`);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

// const BookList = () =>
//   React.createElement("div", {}, React.createElement("h1", {}, "hello world"));

ReactDom.render(<BookList />, document.getElementById("root"));
