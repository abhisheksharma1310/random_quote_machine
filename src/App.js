import "./styles.css";
import React, { useState } from "react";
import data from "./data";

export default function App() {
  const [quote, setQuote] = useState(Math.floor(Math.random() * data.length));

  const newQuote = () => {
    setQuote((p) => (p < data.length - 1 ? (p = p + 1) : 0));
  };

  const bg = { "background-color": data[quote].background };

  const twitterQuote = `https://twitter.com/intent/tweet?hashtags=quotes&related=${
    data[quote].author
  }&text= 
  ${encodeURIComponent(`"${data[quote].quote}" - ${data[quote].author}`)}`;

  const tumblerQuote = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes, ${data[quote].author}&caption=' +
  encodeURIComponent(${data[quote].author}) +
  '&content=' +
  encodeURIComponent(${data[quote].quote}) +
  '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

  return (
    <div className="App" style={bg}>
      <div id="quote-box">
        <div className="quote-text">
          <p>
            <i class="fa fa-quote-left"> </i>
            <span id="text"> {data[quote].quote}</span>
          </p>
        </div>
        <div className="quote-author">
          <p>
            - <span id="author">{data[quote].author}</span>
          </p>
        </div>
        <div className="button-group">
          <div className="share-button">
            <a
              href={twitterQuote}
              className="button"
              id="tweet-quote"
              style={bg}
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              className="button"
              id="tumbler-quote"
              style={bg}
              href={tumblerQuote}
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa fa-tumblr"></i>
            </a>
          </div>
          <button
            className="button"
            id="new-quote"
            type="button"
            style={bg}
            onClick={newQuote}
          >
            New Quote
          </button>
        </div>
      </div>
      <div id="wrapper">
        <div className="footer">
          by{" "}
          <a href="https://bit.ly/abhpf" target="_blank" rel="noreferrer">
            Abhishek
          </a>
        </div>
      </div>
    </div>
  );
}
