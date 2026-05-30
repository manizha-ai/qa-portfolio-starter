# Case Study: SaaS Profile Management QA Sample

## Overview

This case study is a portfolio sample for a SaaS user profile management feature. The goal was to show a clear manual QA process from test planning through defect reporting and test summary documentation.

The sample documentation is located in:

- `saas-qa-test-documentation-sample/test-plan.md`
- `saas-qa-test-documentation-sample/test-cases.md`
- `saas-qa-test-documentation-sample/bug-reports.md`
- `saas-qa-test-documentation-sample/test-summary-report.md`

## Feature Under Test

User Profile Management for a SaaS web application.

The feature allows a user to view and update profile information such as first name, last name, phone number, and job title.

## Testing Objective

The objective was to verify that users can update profile information successfully and that the system handles validation, cancel behavior, failed save scenarios, and saved data persistence correctly.

## Scope

Included:

- Profile page access
- Profile information updates
- Required field validation
- Phone number validation
- Save behavior
- Cancel behavior
- Failed save error messaging
- Persistence after refresh

Excluded:

- Password reset
- Role and permission testing
- Browser compatibility testing
- Mobile application testing

## Sample Test Coverage

| Test Area | Example Scenario | Expected Result |
| --- | --- | --- |
| Page access | User opens the profile page | Current profile information displays |
| Valid update | User edits first and last name, then saves | Confirmation message appears and changes persist |
| Required field | User clears first name and saves | Validation message appears and form is not saved |
| Invalid data | User enters an invalid phone number | System rejects the value and shows validation |
| Cancel behavior | User edits fields, then clicks Cancel | Unsaved changes are discarded |
| Long input | User enters a long job title | UI handles the value without breaking |
| Backend failure | Save request fails | Clear error message appears and data is not incorrectly saved |

## Defects Documented

The sample bug reports include:

- Save button remains enabled after a successful update
- Invalid phone number is accepted without validation
- Cancel button saves edited values unintentionally

Each bug report includes severity, priority, environment, steps to reproduce, actual result, and expected result.

## AI-Assisted QA Workflow

For a workflow like this, I may use AI to speed up:

- Drafting an initial test matrix after I understand the feature
- Checking whether common negative cases are missing
- Rewriting test cases so they are clearer and easier for the team to review
- Summarizing defects and open risks for a test summary report

AI does not replace the actual QA work. I still decide what to test, validate the behavior, investigate defects, and determine release risk.

## Skills Demonstrated

- Manual testing
- Test planning
- Test case design
- Functional testing
- Negative testing
- Regression testing
- Bug reporting
- SaaS workflow validation
- QA documentation
