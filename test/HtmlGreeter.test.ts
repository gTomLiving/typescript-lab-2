import { HtmlGreeter } from "../src/HtmlGreeter";


describe("HTMLGreeter", function() {


    const hTMLGreetOne: HtmlGreeter = new HtmlGreeter('Hello','p');

    const hTMLGreetTwo: HtmlGreeter = new HtmlGreeter('Hey','h1');

    const hTMLGreetThree: HtmlGreeter = new HtmlGreeter('hi');


    test("testing hTMLGreetOne with Hello and p", function() {
        expect(hTMLGreetOne.greet('greg')).toBe('<p>Hello, greg</p>');
    })
    test("testing hTMLGreetOne with Hello and p", function() {
        expect(hTMLGreetOne.greet('don')).toBe('<p>Hello, don</p>');
    })
    test("testing the tagName p", function () {
        expect(hTMLGreetOne.tagName).toBe('p')
    })

    test("testing hTMLGreetTwo <h1>Hello, greg</h1>", () => {
        expect(hTMLGreetTwo.greet('greg')).toBe('<h1>Hey, greg</h1>')
    })
    test("testing hTMLGreetTwo <h1>Hello, tom</h1>", () => {
        expect(hTMLGreetTwo.greet('tom')).toBe('<h1>Hey, tom</h1>')
    })
    test("testing the tagName h1", function () {
        expect(hTMLGreetTwo.tagName).toBe('h1')
    })


    //testing the default h1

    test('testing the h1 default', function() {
        expect(hTMLGreetThree.tagName).toBe('h1');
    })





})