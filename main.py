
import time

def welcome_note():
    message = "***Welcome to My SGPA Calculator!***"
    for i in range(len(message)):
        print(message[:i+1], end="\r")
        time.sleep(0.05)
    print()

# Call the function to display the welcome note
welcome_note()
def calculate_sgpa():
    # Dictionary to map grades to grade points
    grade_points = {
        'A': 10,
        'B': 9,
        'C': 8,
        'D': 7,
        'E': 6,
        'F': 5,
        'G': 0
    }

    # Input the number of subjects
    num_subjects = int(input("Enter the number of subjects: "))

    # Initialize variables
    total_credits = 0
    total_grade_points = 0
    subjects = []

    # Input details for each subject
    for i in range(num_subjects):
        print(f"\nSubject {i + 1}:")
        subject_name = input("Enter subject name: ")
        credits = int(input("Enter credits: "))
        grade = input("Enter grade (A, B, C, D, E, F, G): ").upper()

        # Validate grade input
        while grade not in grade_points:
            print("Invalid grade! Please enter a valid grade (A, B, C, D, E, F, G).")
            grade = input("Enter grade (A, B, C, D, E, F, G): ").upper()

        # Calculate grade points for the subject
        grade_point = grade_points[grade]
        subject_total = credits * grade_point

        # Add to totals
        total_credits += credits
        total_grade_points += subject_total

        # Store subject details
        subjects.append({
            'name': subject_name,
            'credits': credits,
            'grade': grade,
            'grade_point': grade_point,
            'total': subject_total
        })

    # Calculate SGPA
    sgpa = total_grade_points / total_credits

    # Display the result in a table
    print("\n\n+----------------------+---------+-------+--------------+-----------+")
    print("| Subject Name         | Credits | Grade | Grade Points | Total     |")
    print("+----------------------+---------+-------+--------------+-----------+")
    for subject in subjects:
        print(f"| {subject['name'].ljust(20)} | {subject['credits']:^7} | {subject['grade']:^5} | {subject['grade_point']:^12} | {subject['total']:^9} |")
    print("+----------------------+---------+-------+--------------+-----------+")
    print(f"| Total                | {total_credits:^7} |       |              | {total_grade_points:^9} |")
    print("+----------------------+---------+-------+--------------+-----------+")
    print(f"\nYour SGPA is: {sgpa:.2f}\n")


# Run the SGPA calculator
calculate_sgpa()