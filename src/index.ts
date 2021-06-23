import { Greeter } from './greeter';
import { JavaScriptGreeter } from './JavaScriptGreeter';

//greeter 

const greetMain: Greeter = new Greeter('Hello');
const javaScriptGreet: JavaScriptGreeter = new JavaScriptGreeter('ello');

 

console.log(greetMain.greet('Tom'));

console.log(javaScriptGreet.greet('Juliet'));








