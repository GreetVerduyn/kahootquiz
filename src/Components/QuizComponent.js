import React from "react";
import QuestionComponent from "./QuestionComponent";
import AnswerComponent from "./AnswerComponent";
import TextFieldComponent from "./TextFieldComponent";

const QuizComponent = () => {
    return (
        <div>
            <TextFieldComponent/>
            <TextFieldComponent/>
            <TextFieldComponent/>
            <TextFieldComponent/>
            <TextFieldComponent/>

            <button>Sign in</button>
        </div>
    );
}

export default QuizComponent