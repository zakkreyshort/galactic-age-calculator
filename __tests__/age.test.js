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
	

	// test successfully returns human year on Earth
	test ('should return number of human years', () => {
		expect(useHuman.age).toEqual(25);
	});

	// test successfully returns human age on Murcury
	test('should return age in murcury years', () =>{
		expect(useHuman.calculateMercuryYears()).toEqual(6);
	});

	// test successfully returns human age on Venus
	test('should return number of human years on Venus', () => {
		expect(useHuman.calculateVenusYears()).toEqual(15.5);
	});

	// test succesfully returns human age on Mars
	test('should return number of human years on Mars', () => {
		expect(useHuman.calculateMarsYears()).toEqual(47);
	});

	// test successfully returns human years on Jupiter
	test('should return number of human years on Jupiter', () => {
		expect(useHuman.calculateJupiterYears()).toEqual(296.5);
	});

	// test successfully returns human years left on Earth
	test('should return number of human years left on Earth', () => {
		expect(useHuman.calculateEarthLifeExp()).toEqual();
	});
})