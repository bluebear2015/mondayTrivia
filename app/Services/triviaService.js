// import { appState } from "../AppState.js";
import { appState } from "../AppState.js";
import { triviaQuestion } from "../Models/trivia.js";
import { hpApi } from "./AxiosService.js";


class TriviaService{
    async GoGetTheTrivia(){ 
        const res = await hpApi.get('api.php?amount=1&category=12&difficulty=easy&type=multiple')
        console.log('Getting trivia', res.data.results);
        appState.triviaQuestion = res.data.results.map( t => new triviaQuestion(t))
        console.log(appState.triviaQuestion);
}

}

export const triviaService = new TriviaService