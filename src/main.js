  
import { Human } from '../src/age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// front end
$(document).ready(function(){
	$("#galacticAgeForm").submit(function(event){
		event.preventDefault();
		let ogAge = parseInt($("input#galacticAgeInput").val());
		$("#earthAgeOutput").text(ogAge);
	});
})