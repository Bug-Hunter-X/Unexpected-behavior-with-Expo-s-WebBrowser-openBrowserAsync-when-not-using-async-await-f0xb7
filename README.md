# Expo WebBrowser.openBrowserAsync Bug

This repository demonstrates a common error when using Expo's `WebBrowser.openBrowserAsync` function. The issue arises from incorrectly handling the promise returned by the function.

## Bug
The `bug.js` file shows the incorrect usage of `openBrowserAsync`. It uses `.then()` to handle the promise, which leads to unexpected behavior. The promise might resolve before the console.log statement is executed or before the main thread finishes running, which causes unexpected results.

## Solution
The `bugSolution.js` file provides the correct way to use `openBrowserAsync`. By using `async/await`, we ensure that the promise is awaited before proceeding with further logic. This ensures that the result of `openBrowserAsync` is correctly handled and prevents unexpected behavior. 

## How to Reproduce
1. Clone the repository
2. Run `npm install`
3. Run `expo start`
4. Observe the difference in behavior between `bug.js` and `bugSolution.js`