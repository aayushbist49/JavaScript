#creating number list
givenNumbers = [74, 19, 105, 20, -2, 67, 77, 124, -45, 38]

#creating empty list
validNumbers = []

#Adding loop 
for num in givenNumbers:
    if num>=0 and num<=100:
        validNumbers.append(num)


#calculation
total = sum(validNumbers)
avg= total/ len(validNumbers)

#Printing the results
print("The valid numbers between 0 and 100 are ", validNumbers)
print("The sum of all valid numbers is ", total)
print("The average of valid numbers is ", avg)