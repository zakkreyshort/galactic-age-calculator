  
import { Human } from '../src/age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



// front end
$(document).ready(function(){
	$("form#galacticAgeForm").submit(function(event){
		event.preventDefault();
		// output earth age 
		let ogAge = parseInt($("input#galacticAgeInput").val());
		$("#earthAgeOutput").text(ogAge);
		let human = new Human(ogAge);

		let mercuryAge = human.calculateMercuryYears(ogAge);
		$("#mercuryAgeOutput").text(mercuryAge);
	});
})