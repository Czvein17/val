import { useState } from "react";

import "./App.css";

const phrase = [
  "No",
  "Are you sure",
  "Really sure?",
  "Pleasssseeee",
  "Don't do this to me",
  "I'm gonna cry",
  "You're breaking my heart ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 20;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrase[Math.min(noCount, phrase.length - 1)];
  }

  return (
    <div>
      <div className="valentine-Container">
        {yesPressed ? (
          <>
            <img
              alt="BearS"
              src="https://media.tenor.com/t4MA1N2YsxgAAAAi/tkthao219-bubududu.gif"
            />
            <div className="text">Yayy!!!</div>
          </>
        ) : (
          <>
            <img
              alt="Bear with hearts"
              src="https://media.tenor.com/-7SYtTcdBeYAAAAi/happy-love.gif"
            />
            <div>Will you be my valentines</div>

            <div className="buttonContainer">
              <button
                className="yesButton"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="noButton">
                {getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
