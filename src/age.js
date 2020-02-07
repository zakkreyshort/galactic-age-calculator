
export class Human {
    constructor(age){
        this.age = age;
    }

    calculateEarthYears(){
        let ourAge = this.age;
        if (ourAge === isNumber){
            ourAgeNow.push(ourAge);
            console.log(ourAgeNow)
            return ourAge
        } else {
            return false
        }
    };

    calculateMercuryYears(){
        let age = this.age;
        let mercuryYears = ((age * .24));
        return mercuryYears;
    };

    calculateVenusYears(){
        let age = this.age;
        let venusYears = ((age * .62));
        return venusYears;
    };

    calculateMarsYears(){
        let age = this.age;
        let marsYears = ((age * 1.88));
        return marsYears;
    };

    calculateJupiterYears(){
        let age = this.age;
        let jupiterYears = ((age * 11.86));
        return jupiterYears;
    };

    // all life expectancy functions consider the earths LE age(72), then will multiply that by the "earth year" equivalent length for each planet

    calculateEarthLifeExp(){
        let age = this.age;
        const earthLE = 72;
        let yearsLeft = ((earthLE - age));
        let yearsPast = ((age - earthLE));
        if (age <= earthLE){
            return yearsLeft;
        } else {
            return yearsPast;
        }
    };

    calculateMercuryLifeExp(){
        let age = this.age;
        let mercuryYears = ((age * .24));
        const mercuryLE = 17.2;
        let yearsLeft = ((mercuryLE - mercuryYears));
        let yearsPast = ((mercuryYears - mercuryLE));
        if (mercuryYears <= mercuryLE){
            return yearsLeft;
        } else {
            return yearsPast;
        }
    };

    calculateVenusLifeExp(){
        let age = this.age;
        let venusYears = ((age * .62));
        const venusLE = 44.6;
        let yearsLeft = ((venusLE - venusYears));
        let yearsPast = ((venusYears - venusLE));
        if (venusYears <= venusLE){
            return yearsLeft;
        } else {
            return yearsPast;
        }
    };

    calculateMarsLifeExp(){
        let age = this.age;
        let marsYears = ((age * 1.88));
        const marsLE = 135.4;
        let yearsLeft = ((marsLE - marsYears));
        let yearsPast = ((marsYears - marsLE));
        if (marsYears <= marsLE){
            return yearsLeft;
        } else {
            return yearsPast;
        }
    };

    calculateJupiterLifeExp(){
        let age = this.age;
        let jupiterYears = ((age * 11.86));
        const jupiterLE = 853.9;
        let yearsLeft = ((jupiterLE - jupiterYears));
        let yearsPast = ((jupiterYears - jupiterLE));
        if (jupiterYears <= jupiterLE){
            return yearsLeft;
        } else {
            return yearsPast;
        }
    };
    
}