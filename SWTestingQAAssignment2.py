#Name: JaDarius Flagg
#Netid: Jrf436
#Assignment 2
#Purpose: This program calculates the user's body mass index
#         and retirement funds

#-----------------------------------------------------------------
#create the bmi function
def bmi_calc(inches, feet, pounds):

    #calculate the BMI
    mCF_one = pounds * 0.45 #metric conversion factor 1
    
    #convert to inches
    convertedInches = feet*12
    inchesFormeasurement = convertedInches + inches

    #metric conversion factor 2
    mCF_two = inchesFormeasurement * 0.025

    #metric conversion factor 2 (squared)
    mCF_twoSquared = mCF_two * mCF_two

    #quotient of metric conversion factor 1 and the squared term
    BMI = mCF_one / mCF_twoSquared

    #round the BMI to the nearest 3 decimal places
    BMI = (f'{BMI:.6g}')
    BMI = float(BMI)
    
    return BMI

#create the retirement age calculation
def retirement_calc(age, annualSalary, savedPercentage, savingsGoal):

    #convert percentage to decimal
    if savedPercentage[-1] == "%":
        savedPercentage = float(savedPercentage[:-1]) / 100.0
    else:
        savedPercentage = float(savedPercentage)

    #calculate the saved percentage
    savedCalculation = float(savedPercentage * annualSalary)
    
    #calculate 35 percent of the saved percentage
    matchedPercentage = float(savedCalculation * 0.35)

    #calculate years until retirement
    yearsTilRetirement = int(savingsGoal//matchedPercentage)

    #retirement age calculation
    if age == 100:
        print("You cannot retire.")
    
    else:
        retirementAge = int(yearsTilRetirement + age)
        return retirementAge

#validate input for integers    
def readInt(prompt):
    while True:
        try:
            value = int(input(prompt))
            return value
        except ValueError:
            print("ERROR: Invalid input! Try again.")

#validate input for floats
def readFloat(prompt):
    while True:
        try:
            value = float(input(prompt))
            return value
        except ValueError:
            print("ERROR: Invalid input! Try again.")
#----------------------------------------------------------------------------

#main
#what does the user want to do?
print("1. Calculate Body Mass Index\n2. Calculate Retirement Age\n3. Exit")
choice = readInt("Pick an option by entering a number: ")
                 
while choice != 3:
    print("")
    if choice == 1:
        #prompt the user for height and weight
        feet = readInt("How many feet tall are you? ")
        inches = readInt("How many inches tall are you? ")
        pounds = readInt("How many pounds do you weigh? ")

        #call the function 
        results = bmi_calc(inches, feet, pounds)
        
        #determine the category
        if results < 18.5:
            category = "underweight,"
        elif results >= 18.5 and results <= 24.9:
            category = "normal weight,"
        elif results >= 25 and results <= 29.9:
            category = "overweight,"
        else:
            category = "obese,"

        #display the user's results and category
        print("Your category is", category, "and your body mass index is ", results, ".")
    elif choice == 2:
        #get user input
        age = readInt("Age: ")
        annualSalary = readFloat("Annual salary: ")
        savedPercentage = input("Percentage saved: ")
        savingsGoal = readFloat("Desired retirement savings goal: ")
    
        #call the retirement function
        results = retirement_calc(age, annualSalary, savedPercentage, savingsGoal)

        #display retirement age
        print("You should retire at age", results, ".")
    else:
        print("ERROR: Invalid input")
    #prompt the user again
    print("---------------------------------------------------------------------------")
    print("1. Calculate Body Mass Index\n2. Calculate Retirement Age\n3. Exit")
    choice = readInt("Pick an option by entering a number: ")
if choice == 3:
    print("You have exited the program successfully.")
print("---------------------------------------------------------------------------")



