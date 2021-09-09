import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face"
};
export default function App() {
  // var
  var [meaning, setMeaning] = useState("");
  var emojisWeKnow = Object.keys(emojiDictionary);
  // function
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database.";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <nav className="navigation">
        <h1>Emoji Dictionary</h1>
      </nav>
      <input
        style={{ padding: "1rem" }}
        placeholder="Enter your emoji here!!"
        onChange={emojiInputHandler}
      />
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.3rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <footer className="foot">
        <h2>About</h2>
        <p>Don't know meaning of emojis?? Don't worry, we got you.</p>
        <p>Just enter any emoji and know it's meaning!!</p>
        <p style={{ fontSize: "largest" }}>Made with ❤️ by : Ashutosh</p>
      </footer>
    </div>
  );
}
