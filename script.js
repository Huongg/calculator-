$(document).ready(function(){
		let number= "";
		let newNumber = "";
		let operator ="";
		let totaldiv = $("#total");
    	totaldiv.text("0");


		$("#numbers a").not("#all, #clearall").click(function(){
			number += $(this).text();
			totaldiv.text(number);
		})

		$("#operators a").not("#equals").click(function(){
			operator = $(this).text();
			$(this).css("color", "red");
			newNumber = number;
			number = "";

		})


})

