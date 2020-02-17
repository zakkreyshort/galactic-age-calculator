import { Human } from '../src/age.js';


describe ('Human', () => {
	let useHuman;

	beforeEach(() => {
		useHuman = new Human(25)
	});

	// test for NaN not working 
	// test('should check if user entered in a number', () => {
  //       expect(humanAge).toEqual(true)
	//   });
	

	// test successfully returns human year on Earth
	test ('should return number of human years', () => {
		expect(useHuman.age).toEqual(25);
	});

	// test successfully returns human age on Mercury
	test('should return age in mercury years', () =>{
		expect(useHuman.calculateMercuryYears()).toEqual(104.16666666666667);
	});

	// test successfully returns human age on Venus
	test('should return number of human years on Venus', () => {
		expect(useHuman.calculateVenusYears()).toEqual(40.32258064516129);
	});

	// test succesfully returns human age on Mars
	test('should return number of human years on Mars', () => {
		expect(useHuman.calculateMarsYears()).toEqual(13.297872340425533);
	});

	// test successfully returns human years on Jupiter
	test('should return number of human years on Jupiter', () => {
		expect(useHuman.calculateJupiterYears()).toEqual(2.1079258010118043);
	});

	// test successfully returns human years left on Earth
	test('should return number of human years left on Earth', () => {
		expect(useHuman.calculateEarthLifeExp()).toEqual(47);
	});

	// test successfully returns human years left on Earth OR how many years ahead you are
	test('should return number of human years left OR past LE on Earth', () => {
		expect(useHuman.calculateEarthLifeExp()).toEqual(47);
	});

	// test successfully returns Mercury years left on Mercury OR how many years ahead you are
	test('should return number of human years left OR past LE on Mercury', () => {
		expect(useHuman.calculateMercuryLifeExp()).toEqual(195.83333333333331);
	});

	// test successfully returns Venus years left on Venus OR how many years ahead you are
	test('should return number of human years left OR past LE on Venus', () => {
		expect(useHuman.calculateVenusLifeExp()).toEqual(75.77741935483871);
	});

	// test successfully returns Mars years left on Mars OR how many years ahead you are
	test('should return number of human years left OR past LE on Mars', () => {
		expect(useHuman.calculateMarsLifeExp()).toEqual(25.002127659574462);
	});

	// test successfully returns Jupiter years left on Jupiter OR how many years ahead you are
	test('should return number of human years left OR past LE on Jupiter', () => {
		expect(useHuman.calculateJupiterLifeExp()).toEqual(3.9920741989881954);
	});


	// age has been set to 80 so that it is over the LE years
	// test successfully returns human years past earth expectancy
	test('should return number of human years past earth life expectancy', () => {
		const doodleHuman = new Human(80);
		expect(doodleHuman.calculateEarthLifeExp()).toEqual("-8")
	});

	// test successfully returns human years past mercury expectancy
	test('should return number of human years past mercury life expectancy', () => {
		const doodleHuman = new Human(80);
		expect(doodleHuman.calculateMercuryLifeExp()).toEqual("-33.33333333333337")
	});

	// test successfully returns human years past venus expectancy
	test('should return number of human years past venus life expectancy', () => {
		const doodleHuman = new Human(80);
		expect(doodleHuman.calculateVenusLifeExp()).toEqual("-12.932258064516134")
	});


});