import { LoudGreeter } from "../src/LoudGreeter";


describe("LoudGreeter", function () {

    const loudGOne: LoudGreeter = new LoudGreeter("Aye");

    //testing volume up method

    const loudGTwo: LoudGreeter = new LoudGreeter("Goodaye")





    //method calls

    loudGTwo.addVolume();
    loudGTwo.addVolume();

    


    test("Testing Loud G to be Aye, dave!!", () => {
        expect(loudGOne.greet('dave')).toBe('Aye, dave!!')
    })
    test("Testing Loud G to be Aye, dave!!", () => {
        expect(loudGOne.greet('tom')).toBe('Aye, tom!!')
    })

    //testing volume add
    
    test("Testing AddVol to be Goodaye, dave!!!!", () => {
        expect(loudGTwo.greet('dave')).toBe('Goodaye, dave!!!!')
    })
    test("Testing AddVol to be Goodaye, tom!!!!", () => {
        expect(loudGTwo.greet('tom')).toBe('Goodaye, tom!!!!')
    })
    





})