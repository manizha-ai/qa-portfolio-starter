# UI Automation Sample

This folder contains a sample UI automation project built with Playwright and TypeScript. It is designed as a simple portfolio example to demonstrate readable UI tests, clear project structure, and basic end-to-end coverage for a public demo web application.

## Application Under Test

The tests use `https://www.saucedemo.com/`, a stable public demo site commonly used for UI test automation practice.

## Project Structure

- `package.json`
  Defines project metadata, dependencies, and scripts used to run the tests.
- `playwright.config.ts`
  Contains Playwright configuration such as browser settings, base URL, screenshots, and HTML reporting.
- `tsconfig.json`
  Defines TypeScript compiler settings for the project.
- `tests/login.spec.ts`
  Covers login-related scenarios, including successful and unsuccessful login attempts.
- `tests/inventory.spec.ts`
  Covers basic inventory page validation after login, including product visibility and add-to-cart behavior.

## How To Run

1. Open a terminal in `ui-automation-sample`
2. Install dependencies with `npm install`
3. Install Playwright browsers with `npx playwright install`
4. Run the tests with `npm test`

## Coverage Included

- Successful login flow
- Locked out user validation
- Inventory page visibility
- Add-to-cart behavior

## Purpose

This sample is intended to demonstrate a clean and practical approach to UI automation using Playwright with TypeScript in a way that is easy to review and understand.
