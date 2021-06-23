import { JavaScriptGreeter } from "../src/JavaScriptGreeter";


describe("JSGreeter", function () {
    
    const jsGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hiiii");

    const jsGreeterTwo: JavaScriptGreeter = new JavaScriptGreeter("Hey");

    test('JSGreeter should display console.log(Hiiii, dave)', function () {
        expect(jsGreeter.greet('dave')).toBe("console.log('Hiiii, dave')");
    })
    test('JSGreeter should display console.log(Hiiii, tom)', function () {
        expect(jsGreeter.greet('tom')).toBe("console.log('Hiiii, tom')");
    })

    test ('Testing the .greeting shoulbe be Hiiii', function () {
        expect(jsGreeter.greeting).toBe('Hiiii');
    })

    //testing JS Greeter Two

    test('JSGreeter Two should display console.log(Hey, dave)', function () {
        expect(jsGreeterTwo.greet('dave')).toBe("console.log('Hey, dave')");
    })
    test('JSGreeter Two should display console.log(Hey, tom)', function () {
        expect(jsGreeterTwo.greet('tom')).toBe("console.log('Hey, tom')");
    })
    test ('Testing the .greeting shoulbe be Hey', function () {
        expect(jsGreeterTwo.greeting).toBe('Hey');
    })
    





})