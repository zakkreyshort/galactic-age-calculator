  
import { Human } from '../src/age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// front end
$(document).ready(function(){
	$("form#galacticAgeForm").submit(function(event){
		event.preventDefault();
		$("#displayLE").show();
		$("#displayMessage").show();

		// just ages

		// output earth age 
		let ogAge = parseInt($("input#galacticAgeInput").val());
		$("#earthAgeOutput").text(ogAge);

		let human = new Human(ogAge);

		// output mercury age
		let mercuryAge = human.calculateMercuryYears(ogAge);
		$("#mercuryAgeOutput").text(mercuryAge);

		// output venus age
		let venusAge = human.calculateVenusYears(ogAge);
		$("#venusAgeOutput").text(venusAge);

		// output mars age
		let marsAge = human.calculateMarsYears(ogAge);
		$("#marsAgeOutput").text(marsAge);

		// output jupiter age
		let jupiterAge = human.calculateJupiterYears(ogAge);
		$("#jupiterAgeOutput").text(jupiterAge);


		// life expectancy 
		// earthLE
		let LEEarth = human.calculateEarthLifeExp(ogAge);
		$("#earthLEOutput").text(LEEarth);

		// mercuryLE
		let LEMercury = human.calculateMercuryLifeExp(ogAge);
		$("#mercuryLEOutput").text(LEMercury);

		// venusLE
		let LEVenus = human.calculateVenusLifeExp(ogAge);
		$("#venusLEOutput").text(LEVenus);

		// marsLE 
		let LEMars = human.calculateMarsLifeExp(ogAge);
		$("#marsLEOutput").text(LEMars);

		// jupiterLE
		let LEJupiter = human.calculateJupiterLifeExp(ogAge);
		$("#jupiterLEOutput").text(LEJupiter);
	});
})