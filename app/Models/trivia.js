import { triviaController } from "../Controllers/triviaController.js"



export class triviaQuestion{
constructor(data){
    this.question = data.question
    this.correctAnswers = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
    this.difficulty = data.difficulty
    this.choices = ([...data.incorrect_answers, data.correct_answer])
}

get CardTemplate(){
    return /*html*/ `
     <div class="elevation-5 rounded-top card m-4 p-3">
     <h4>🤘${this.difficulty}🤘</h4>
    <h1 class="card-title text-center p-3">${this.question} </h1>
  <div class="cardBody">
    <div class="d-flex flex-row justify-content-around p-3">
    </div>
    <div class="d-flex flex-row justify-content-around p-3">
    ${this.MultipleTemplate}
    </div>     
  </div>
</div>    
    `  
  }
  get MultipleTemplate(){
    this.choices.sort(() => Math.random() - 0.5)
    let template = ``
    this.foreach(a => {
      template +=   ` <button onClick="" class="fs-1 bg-secondary text-warning border border-3 rounded">${a}</button>
      `
    })
  }


}

