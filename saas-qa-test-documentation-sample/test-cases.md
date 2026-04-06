# Test Cases

## Test Case 1: Verify profile page loads successfully

- Preconditions: User is logged in
- Steps:
  - Navigate to the profile page
- Expected Result: Profile page loads and displays current user information

## Test Case 2: Verify user can update profile with valid data

- Preconditions: User is logged in and on the profile page
- Steps:
  - Update first name
  - Update last name
  - Click Save
- Expected Result: Changes are saved successfully and a confirmation message is shown

## Test Case 3: Verify required field validation for first name

- Preconditions: User is on the profile page
- Steps:
  - Clear the first name field
  - Click Save
- Expected Result: Validation message is displayed and the form is not saved

## Test Case 4: Verify invalid phone number is rejected

- Preconditions: User is on the profile page
- Steps:
  - Enter an invalid phone number format
  - Click Save
- Expected Result: Validation message is shown for the invalid phone number

## Test Case 5: Verify cancel button discards unsaved changes

- Preconditions: User is on the profile page
- Steps:
  - Modify profile fields
  - Click Cancel
- Expected Result: Changes are not saved and original values remain unchanged

## Test Case 6: Verify long input value handling in job title field

- Preconditions: User is on the profile page
- Steps:
  - Enter a very long value in the job title field
  - Click Save
- Expected Result: The system handles the input gracefully without breaking the UI

## Test Case 7: Verify error message displays when save request fails

- Preconditions: User is on the profile page and a backend failure is simulated
- Steps:
  - Update profile information
  - Click Save
- Expected Result: User sees a clear error message and data is not incorrectly saved

## Test Case 8: Verify profile changes persist after page refresh

- Preconditions: User has successfully saved updated profile data
- Steps:
  - Refresh the browser
  - Reopen the profile page
- Expected Result: Saved changes remain visible after refresh
