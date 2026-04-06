# Bug Reports

## Bug 1: Save button remains enabled after successful update

- Severity: Low
- Priority: Medium
- Environment: Chrome, test environment
- Steps to Reproduce:
  - Log in to the application
  - Open the profile page
  - Update the first name
  - Click Save
- Actual Result: Save button remains enabled even though the update is completed
- Expected Result: Save button should return to its default state after a successful save

## Bug 2: Invalid phone number accepted without validation

- Severity: Medium
- Priority: High
- Environment: Chrome, test environment
- Steps to Reproduce:
  - Open the profile page
  - Enter `abc123` in the phone number field
  - Click Save
- Actual Result: Form saves successfully with an invalid phone number
- Expected Result: System should reject the invalid phone format and show a validation message

## Bug 3: Cancel button saves edited values unintentionally

- Severity: High
- Priority: High
- Environment: Chrome, test environment
- Steps to Reproduce:
  - Open the profile page
  - Modify the last name
  - Click Cancel
  - Refresh the page
- Actual Result: Modified value is still saved after the cancel action
- Expected Result: Cancel action should discard unsaved changes
