import { triviaController } from "../Controllers/triviaController.js"



export class triviaQuestion{
constructor(data){
    this.question = data.question
    this.correctAnswers = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
    this.difficulty = data.difficulty
}

get CardTemplate(){
    return /*html*/`
     <div class="elevation-5 rounded-top card m-4 p-3">
     <h4>${this.difficulty}</h4>
    <h1 class="card-title text-center p-3">${this.question} </h1>
  <div class="cardBody">
    <div class="d-flex flex-row justify-content-around p-3">
      <button onClick="appState.triviaController.gameRules()" class="fs-1 bg-secondary text-warning border border-3 rounded">${this.correctAnswers}</button>
      <button onClick="appState.triviaController.gameRules()" class="fs-1 bg-secondary text-warning border border-3 rounded">${this.incorrectAnswers[0]}</button>
    </div>
    <div class="d-flex flex-row justify-content-around p-3">
      <button onClick="appState.triviaController.gameRules()" class="fs-1 bg-secondary text-warning border border-3 rounded">${this.incorrectAnswers[1]}</button>
      <button onClick="appState.triviaController.gameRules()" class="fs-1 bg-secondary text-warning border border-3 rounded">${this.incorrectAnswers[2]}</button>
    </div>     
  </div>
</div>    
    `  
  }


}

