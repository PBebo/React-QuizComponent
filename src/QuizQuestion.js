import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class QuizQuestion extends React.Component {
  render(){
    return (
      <main>
        <section>
          <p>// instruction text goes here</p>
        </section>
        <section className="buttons">
          <ul>
            //quiz question button logic goes here
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion
