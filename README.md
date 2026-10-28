# Browser Session Recovery System

A lightweight browser-style session manager built with HTML, CSS, and JavaScript. It demonstrates stack-like tab operations, browsing activity tracking, and client-side session persistence.

## Features

- Add a URL to the open-tabs list
- Close the most recently opened tab
- Recover the most recently closed tab
- View browsing history
- View basic open, closed, and recovered counts
- Save and restore the app's state using browser `localStorage`
- Responsive layout for smaller screens

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser Local Storage

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern web browser.
3. Add a URL and try opening, closing, and recovering entries.

No build step or package installation is required.

## How it works

The application maintains arrays for open tabs, recently closed tabs, and browsing history. Opening, closing, and recovering entries follow last-in-first-out (LIFO) behavior. The app saves its state in the browser's local storage so it can be restored on a later visit in the same browser profile.

## Scope and limitations

This is a learning/demo application. It manages URL entries inside its own interface; it does not open, inspect, or control actual browser tabs. Saved data remains in the local browser profile and is not synchronized across devices. Do not enter confidential URLs or sensitive information.

## Future improvements

- Add automated tests and stronger input validation
- Improve accessibility and keyboard navigation
- Add export/import and clearer save/load feedback
- Consider a browser-extension implementation if actual browser-tab integration is desired
