
export class Human {
    constructor(age){
        this.age = age;
        this.ourAgeNow = [];
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

}