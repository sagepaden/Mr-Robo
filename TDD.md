'''
Describe: mrRobo()

Test: "It should console log up to the inputted number"
Code: mrRobo(5);
Expected Output: "1, 2, 3, 4, 5"

Test: "It should push all results into a new array and return the string 'Won't you be my neighbor?' when a number contains a 3 while counting up"
Code: mrRobo(5)
Epected Output: '1, 2, "Won't you be my neighbor?", 4, 5'

Test: "It should return the string 'Boop!' when a number contains a 2 but should return the string attached to 3 if it contains both numbers"

Code: mrRobo(24)
Epected Output: '1, "Boop!", ..., 19, "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop" '

Test: "It should return the string "Beep!" when a the number being counted contains a 1, but not if it contains either a 2 or 3"

Code: mrRobo(14)
Epected Output: "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!" '
'''