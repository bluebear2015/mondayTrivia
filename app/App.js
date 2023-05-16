import { ValuesController } from "./Controllers/ValuesController.js";
import { triviaController } from "./Controllers/triviaController.js";
triviaController
class App {
  // valuesController = new ValuesController();
  triviaController = new triviaController()
}

window["app"] = new App();
