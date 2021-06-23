import { Greeter } from "../src/greeter";

describe("Greeter", function () {
    
    const greeterOne: Greeter = new Greeter("Ello");

    test('greeting should display Ello, dave', function () {
        expect(greeterOne.greet('dave')).toBe('Ello, dave');
    })
    test('greeting should display Ello, tom', function () {
        expect(greeterOne.greet('tom')).toBe('Ello, tom');
    })





})