import React from "react"


//function
const AnswerComponent =() => {
    fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    return <p>hey</p>
}

export default AnswerComponent;
