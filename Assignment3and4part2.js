function BMI_calc(){
	
	//initializing all the variables
	var poundsVal = document.getElementById("poundsVal").value;
	document.getElementById("poundsVal").value = poundsVal;
	var poundsErr = false;
		
	var inchesVal = document.getElementById("inchesVal").value;
	document.getElementById("inchesVal").value = inchesVal;
	var inchesErr = false;
	
	var feetVal = document.getElementById("feetVal").value;
	document.getElementById("feetVal").value = feetVal;
	var feetErr = false;
	
	var category = document.getElementById("Category").value;
			
	//verify input and define error messages
	if ((/^[1-9][0-9]+$/.test(poundsVal)) == true || (/^[1-9]+$/.test(inchesVal) == true)){
		document.getElementById("poundsErr").innerHTML = "";
		poundsErr = "";
	}
	else{
		document.getElementById("poundsErr").innerHTML = "* You must supply a valid integer.";	
		poundsErr = "* You must supply a valid integer.";
	}
		
	if ((/^[1-9][0-9]+$/.test(inchesVal)) == true || (/^[1-9]+$/.test(inchesVal) == true)){
		document.getElementById("inchesErr").innerHTML = "";
		inchesErr = "";
	}
	else{
		document.getElementById("inchesErr").innerHTML = "* You must supply a valid integer";
		inchesErr = "*You must supply a valid integer.";
	}
	
	if ((/^[1-9]+$/.test(feetVal)) == true){
		document.getElementById("feetErr").innerHTML = "";
	}
	else{
		document.getElementById("feetErr").innerHTML = "* You must supply a valid integer";
	}
		
	//make all calculations
	if (poundsErr == "" && inchesErr == "" && feetErr == "")
	{
		var mCF_one = Number(poundsVal) * 0.45;
		var convertedInches = Number(feetVal) * 12;
		var inchesFormeasurement = convertedInches + Number(inchesVal);
		var mCF_two = inchesFormeasurement * 0.025;
		var mCF_twoSquared = mCF_two * mCF_two;
		var BMI = mCF_one / mCF_twoSquared;
		
		BMI = parseFloat(BMI).toFixed(3);
		
		if(BMI < 18.5)
		{
			document.getElementById("Category").innerHTML = "underweight";
		}
		else if(BMI >= 18.5 && BMI <= 24.9)
		{
			document.getElementById("Category").innerHTML = "normal weight";
		}
		else if(BMI >= 25 && BMI <= 29.9)
		{
			document.getElementById("Category").innerHTML = "overweight";
		}
		else{
			document.getElementById("Category").innerHTML = "obese";
		}
		
     	document.getElementById("BMI").innerHTML = BMI;
	}
	else{
		document.getElementById("BMI").innerHTML = "None";
	}
	
}

function Retirement_calc(){
	
	//initialize the variables
	var ageVal = document.getElementById("ageVal").value;
	document.getElementById("ageVal").value = ageVal;
	var ageErr = document.getElementById("ageErr").value;
	document.getElementById("ageErr").value = ageErr;
	
	var annualSalaryVal = document.getElementById("annualSalaryVal").value;
	document.getElementById("annualSalaryVal").value = annualSalaryVal;
	var annualSalaryErr = document.getElementById("annualSalaryErr").value;
	document.getElementById("annualSalaryErr").value = annualSalaryErr;
		
	var savedPercentageVal = document.getElementById("savedPercentageVal").value;
	document.getElementById("savedPercentageVal").value = savedPercentageVal;
	var savedPercentageErr = document.getElementById("savedPercentageErr").value;
	document.getElementById ("savedPercentageErr").value = savedPercentageErr;
	
	var savingsGoalVal = document.getElementById("savingsGoalVal").value;
	document.getElementById("savingsGoalVal").value = savingsGoalVal;
	var savingsGoalErr = document.getElementById("savingsGoalErr").value;
	document.getElementById("savingsGoalErr").value = savingsGoalErr;

	// verify input and define error messages
	if((/^[1-9][0-9]+$/.test(ageVal)) == true)
	{
		ageErr = "";
	}
	else{
		
		ageErr = "* You must supply a valid integer";
	}
	
	if((/^[1-9][0-9]+$/.test(annualSalaryVal)) == true)
	{
		annualSalaryErr = "";
	}
	else{
		annualSalaryErr = "* You must supply a valid integer";
	}
	if((/^[1-9][0-9]+$/.test(savedPercentageVal)) == true)
	{
		savedPercentageErr = "";
	}
	else{
		savedPercentageErr = "* You must supply a valid integer";
	}
	
	if((/^[1-9][0-9]+$/.test(savingsGoalVal)) == true)
	{
		savingsGoalErr = "";
	}
	else{
		savingsGoalErr = "* You must supply a valid integer";
	}
	if((ageVal <= 80) && (ageVal >= 16)){
		document.getElementById("ageErr").innerHTML = "";
	}
	else{
		document.getElementById("ageErr").innerHTML = "* You cannot retire.";
	}	
	
	//convert each value to a float
	annualSalaryVal = parseFloat(annualSalaryVal);
	savedPercentageVal = parseFloat(savedPercentageVal / 100.0);
	savingsGoalVal = parseFloat(savingsGoalVal);
	
	//make all calculations
	if(ageErr == "" && annualSalaryErr == "" && savedPercentageErr == "" && savingsGoalErr == "")
	{
		var savedCalculation = savedPercentageVal * annualSalaryVal;
		var matchedPercentage = savedCalculation * 0.35;
		var yearsTilRetirement = savingsGoalVal / matchedPercentage;
		var retirementAge = yearsTilRetirement + Number(ageVal);
		
		if (retirementAge > 80){
			document.getElementById("retirementAge").innerHTML = "You cannot retire.";
		}
		else{
			retirementAge = parseInt(retirementAge);
			document.getElementById("retirementAge").innerHTML = retirementAge;
		}
	
	}
	else{
		document.getElementById("retirementAge").innerHTML = "None";
	}
}