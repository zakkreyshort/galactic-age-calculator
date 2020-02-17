
export class Human {
	constructor(age){
			this.age = age;
			this.earthLE = 72;
	}

    // not currently testing this, will check for NaN
    // calculateEarthYears(){
    //     let ourAge = this.age;
    //     if (ourAge === isNumber){
    //         ourAgeNow.push(ourAge);
    //         return ourAge
    //     } else {
    //         return false
    //     }
    // };

	calculateMercuryYears(){
			let mercuryYears = ((this.age / .24));
			return mercuryYears;
	};

	calculateVenusYears(){
			let venusYears = ((this.age / .62));
			return venusYears;
	};

	calculateMarsYears(){
			let marsYears = ((this.age / 1.88));
			return marsYears;
	};

	calculateJupiterYears(){
			let jupiterYears = ((this.age / 11.86));
			return jupiterYears;
	};

    // all life expectancy functions consider the earths LE age(72), then will multiply that by the "earth year" equivalent length for each planet

    // all return both years till life expectancy, or years past life expectancy

	calculateEarthLifeExp(){
			let yearsLeft = ((this.earthLE - this.age));
			let yearsPast = ((this.age - this.earthLE));
			if (this.age <= this.earthLE){
					return yearsLeft;
			} else {
					return "-" + yearsPast;
			}
	};

	calculateMercuryLifeExp(){
			let mercuryYears = ((this.age / .24));
			const mercuryLE = 300;
			let yearsLeft = ((mercuryLE - mercuryYears));
			let yearsPast = ((mercuryYears - mercuryLE));
			if (mercuryYears <= mercuryLE){
					return yearsLeft;
			} else {
					return "-" + yearsPast;
			}
	};

	calculateVenusLifeExp(){
			let venusYears = ((this.age / .62));
			const venusLE = 116.1;
			let yearsLeft = ((venusLE - venusYears));
			let yearsPast = ((venusYears - venusLE));
			if (venusYears <= venusLE){
					return yearsLeft;
			} else {
					return "-" + yearsPast;
			}
	};

	calculateMarsLifeExp(){
			let marsYears = ((this.age / 1.88));
			const marsLE = 38.3;
			let yearsLeft = ((marsLE - marsYears));
			let yearsPast = ((marsYears - marsLE));
			if (marsYears <= marsLE){
					return yearsLeft;
			} else {
					return "-" + yearsPast;
			}
	};

	calculateJupiterLifeExp(){
			let jupiterYears = ((this.age / 11.86));
			const jupiterLE = 6.1;
			let yearsLeft = ((jupiterLE - jupiterYears));
			let yearsPast = ((jupiterYears - jupiterLE));
			if (jupiterYears <= jupiterLE){
					return yearsLeft;
			} else {
					return "-" + yearsPast;
			}
	};
}

