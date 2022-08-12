import React, {useEffect, useState} from "react"

//function
 const QuestionComponent =() => {
   const [questions, setQuestions] = useState([]);
   const [currentQuestion, setCurrentQuestion] = useState(0);


    useEffect(()=>{
        const url= "https://opentdb.com/api.php?amount=10"
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

    },[]);

     const handleClick = () => {
         // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
         this.setState({
             currentQuestion: 1,
         });
     };

    return questions.length > 0 ? (
        <div >
           {questions[currentQuestion].question}
            {/*{questions.map(question =>{    //loop
                return (
                    <div>
                        {question.question}
                    </div>
                )
            })}*/}
        </div>
    ) : (<div></div>)


 }

export default QuestionComponent;
