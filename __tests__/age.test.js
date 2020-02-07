import { Human } from '../src/age.js';


describe ('Human', () => {
	let useHuman;

	beforeEach(() => {
		useHuman = new Human(25)
	})

	// test for nan not working 
	// test('should check if user entered in a number', () => {
  //   let humanAge = new Human(this.age)
  //       expect(humanAge).toEqual(true)
	//   });
	

	// test successfully returns human year
	test ('should return number of human years', () => {
		expect(useHuman.age).toEqual(25);
	});

	test('should return age in murcury years', () =>{
		expect(useHuman.calculateMercuryYears()).toEqual(6);
	})
})