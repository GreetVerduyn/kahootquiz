import React, {useEffect, useState} from "react";
import QuestionComponent from "./QuestionComponent";
import AnswerComponent from "./AnswerComponent";

//import TextFieldComponent from "./TextFieldComponent";
//import AnswerComponent from "./AnswerComponent";

const QuizComponent = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswer] = useState(0);

    useEffect(() => {
        const url = "https://opentdb.com/api.php?amount=10"
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.results);
                setQuestions(json.results);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();

    }, []);


    return questions.length > 0 ? (
        <div>
            <QuestionComponent
                question={questions[currentQuestion].question}
            />
            <AnswerComponent/>
            answer={questions[answers].correct_answer}

        </div>

    ) : (<div></div>)


    // return (
    //     <div>
    //         <QuestionComponent/>
    //         <AnswerComponent/>
    //         <AnswerComponent/>
    //         <AnswerComponent/>
    //         <AnswerComponent/>
    //
    //         <button>Sign in</button>
    //     </div>
    // );
}

export default QuizComponent