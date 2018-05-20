
$(document).ready(function(){
		let leftNumber= "";
		let rightNumber = "";
		let hadOperator = false;
		let operator ="";
		let result = ""; 
		let totaldiv = $("#total");
    	totaldiv.text("0");


		$("#numbers a").not("#all, #clearall").click(function(){
			if (hadOperator ==false){
				leftNumber += $(this).data('value');
				totaldiv.text(leftNumber);
				console.log(`leftNumber is ${leftNumber}`);
			} else {
				rightNumber += $(this).data('value');
				totaldiv.text(rightNumber);
				console.log(`rightNumber is ${rightNumber}`);
				calculate ();
			}
		})

		$("#operators a").not("#equals").click(function(){
			hadOperator = true;
			operator = $(this).data('value');
			updateOperatorsColour ($(this));

			if (leftNumber !== "" && rightNumber !== ""){
				totaldiv.text(result);
				leftNumber = result;
				rightNumber ="";
				console.log(`result is ${leftNumber}`);
			} 
		})

		$("#clearall").click(function(){
			leftnumber = "";
			rightNumber= "";
			result="";
			operator ="";
			hadOperator = false;
			totaldiv.text("0");		
	    });

	    $("#equals").click(function(){
	    	updateOperatorsColour ($(this));
	    	calculate();
	    	totaldiv.text(result);
	    });

	    function calculate (){
	    	result = eval(leftNumber + operator + rightNumber);
	    }

	    function updateOperatorsColour (item){
	    	if ($("#operators a").hasClass("selected-operator")){
	    		$("#operators a").removeClass("selected-operator");
	    	};
	    	item.addClass("selected-operator");
	    	
	    }

})

