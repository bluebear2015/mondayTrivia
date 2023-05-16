import { appState } from "../AppState.js";
import { triviaQuestion } from "../Models/trivia.js";
import { triviaService } from "../Services/triviaService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function DrawTriviaQuestions() {
    let template =''
    appState.triviaQuestion.forEach(t => template += t.CardTemplate)
    setHTML('question', template)
}




export class triviaController{

constructor(){ 
    this.GetQuestions()
    appState.on('triviaQuestion', DrawTriviaQuestions)
 appState.on('correctAnswer',this.gameRules)
    // appState.on("questions", this.gameRules)
    console.log('triviaController');
    DrawTriviaQuestions();
}
async GetQuestions(){
    try {
        await triviaService.GoGetTheTrivia()
    } catch (error) {
        console.error(error)
    }
    
}
    
}