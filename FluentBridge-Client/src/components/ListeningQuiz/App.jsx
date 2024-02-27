import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "?",
      answers: [
        {
          text: "Great",
          correct: false,
        },
        {
          text: "Okay",
          correct: true,
        },
        {
          text: "Fantastic",
          correct: false,
        },
        {
          text: "Wonderful",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the main reason for William's discomfort?",
      answers: [
        {
          text: "Back pain",
          correct: true,
        },
        {
          text: "Stomachache",
          correct: false,
        },
        {
          text: "Headache",
          correct: false,
        },
        {
          text: "Hip pain",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Why does William have back pain?",
      answers: [
        {
          text: "Unknown cause",
          correct: false,
        },
        {
          text: "Running injury",
          correct: false,
        },
        {
          text: " Car accident",
          correct: false,
        },
        {
          text: "Bike accident",
          correct: true,
        },
      ],
    },
        {
          id: 4,
          question: "Where specifically does William feel the pain in his back?",
          answers: [
            {
              text: "Upper back",
              correct: false,
            },
            {
              text: "Middle back",
              correct: false,
            },
            {
              text: "Lower back",
              correct: true,
            },
            {
              text: "Entire back",
              correct: false,
            },
          ],
        },
            {
              id: 5,
              question: "Where specifically does William feel the pain in his back?",
              answers: [
                {
                  text: "Upper back",
                  correct: false,
                },
                {
                  text: "Middle back",
                  correct: false,
                },
                {
                  text: "Lower back",
                  correct: true,
                },
                {
                  text: "Entire back",
                  correct: false,
                },
              ],
            },
            {
              id: 6,
              question: "Where specifically does William feel the pain in his back?",
              answers: [
                {
                  text: "Upper back",
                  correct: false,
                },
                {
                  text: "Middle back",
                  correct: false,
                },
                {
                  text: "Lower back",
                  correct: true,
                },
                {
                  text: "Entire back",
                  correct: false,
                },
              ],
            },
            {
              id: 7,
              question: "Where specifically does William feel the pain in his back?",
              answers: [
                {
                  text: "Upper back",
                  correct: false,
                },
                {
                  text: "Middle back",
                  correct: false,
                },
                {
                  text: "Lower back",
                  correct: true,
                },
                {
                  text: "Entire back",
                  correct: false,
                },
              ],
            },
                {
                  id: 8,
                  question: "Where specifically does William feel the pain in his back?",
                  answers: [
                    {
                      text: "Upper back",
                      correct: false,
                    },
                    {
                      text: "Middle back",
                      correct: false,
                    },
                    {
                      text: "Lower back",
                      correct: true,
                    },
                    {
                      text: "Entire back",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 9,
                  question: "Where specifically does William feel the pain in his back?",
                  answers: [
                    {
                      text: "Upper back",
                      correct: false,
                    },
                    {
                      text: "Middle back",
                      correct: false,
                    },
                    {
                      text: "Lower back",
                      correct: true,
                    },
                    {
                      text: "Entire back",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 10,
                  question: "Where specifically does William feel the pain in his back?",
                  answers: [
                    {
                      text: "Upper back",
                      correct: false,
                    },
                    {
                      text: "Middle back",
                      correct: false,
                    },
                    {
                      text: "Lower back",
                      correct: true,
                    },
                    {
                      text: "Entire back",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 11,
                  question: "Where specifically does William feel the pain in his back?",
                  answers: [
                    {
                      text: "Upper back",
                      correct: false,
                    },
                    {
                      text: "Middle back",
                      correct: false,
                    },
                    {
                      text: "Lower back",
                      correct: true,
                    },
                    {
                      text: "Entire back",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 12,
                  question: "Where specifically does William feel the pain in his back?",
                  answers: [
                    {
                      text: "Upper back",
                      correct: false,
                    },
                    {
                      text: "Middle back",
                      correct: false,
                    },
                    {
                      text: "Lower back",
                      correct: true,
                    },
                    {
                      text: "Entire back",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 13,
                  question: "Where specifically does William feel the pain in his back?",
                  answers: [
                    {
                      text: "Upper back",
                      correct: false,
                    },
                    {
                      text: "Middle back",
                      correct: false,
                    },
                    {
                      text: "Lower back",
                      correct: true,
                    },
                    {
                      text: "Entire back",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 14,
                  question: "Where specifically does William feel the pain in his back?",
                  answers: [
                    {
                      text: "Upper back",
                      correct: false,
                    },
                    {
                      text: "Middle back",
                      correct: false,
                    },
                    {
                      text: "Lower back",
                      correct: true,
                    },
                    {
                      text: "Entire back",
                      correct: false,
                    },
                  ],
                },
                {
                  id: 15,
                  question: "Where specifically does William feel the pain in his back?",
                  answers: [
                    {
                      text: "Upper back",
                      correct: false,
                    },
                    {
                      text: "Middle back",
                      correct: false,
                    },
                    {
                      text: "Lower back",
                      correct: true,
                    },
                    {
                      text: "Entire back",
                      correct: false,
                    },
                  ],
                },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;