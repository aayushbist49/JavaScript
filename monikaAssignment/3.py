#importing random module
import random

#creating an empty list to hold the lotteryNumbers
lotteryNumbers = []

#generating seven random numbers and adding them to the list
for i in range(7):
    randomNumber = random.randint(0, 9)
    lotteryNumbers.append(randomNumber)

#displaying the contents of the list
print("Lottery numbers:")
for num in lotteryNumbers:
    print(num, end = "")