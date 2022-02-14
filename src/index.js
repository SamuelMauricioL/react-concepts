import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

//setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/515mvgd0pXL._SX329_BO1,204,203,200_.jpg",
  title:
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  author: "James Clear",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg",
  title: "Reminders of Him: A Novel",
  author: "Colleen Hoover",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, child }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {child}
    </article>
  );
};

// const BookList = () =>
//   React.createElement("div", {}, React.createElement("h1", {}, "hello world"));

ReactDom.render(<BookList />, document.getElementById("root"));
