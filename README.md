# Bookr

## Background

## Functionality & MVP

- User authentication
- Allow user to select ride type
- Get quotes from Uber & Lyft
- Present cheapest ride to user
- Be able to book and cancel fares

## Wireframes

## Technologies & Technical Challenges

Bookr will be a desktop app implemented using Electron.js with JavaScript, HTML, and CSS.

We will likely include the following:
- `webpack.config.js` to bundle everything together
- `package.json` for storing dependencies
- `main.js` functions as a browser window that runs in your desktop environment
- `index.html` will serve the content from `main.js`
- The React/Redux cycle will be used to manage and present data to the user

The primary technical challenges will be:
- Learning to use Electron
- Learning Uber and Lyft APIs
- Integrating Redux with Electron

## Group Members & Work Breakdown

Our group consists of three members; Carson Judge, Peter Schrock, and Vinit Parikh

Carson's primary responsibilities will be:
- Set up webpack config file and package json files
- Set up react/redux boilerplate, including store, root reducer, etc.
- Create en route component
- Polish, style, test

Peter's primary responsibilities will be:
- Learn to bridge gap between web apps and desktop apps by learning Electron basics
- Learn Uber API
- Create auth form component
- Polish, style, test

Vinit's primary responsibilities will be:
- Learn to bridge gap between web apps and desktop apps by learning Electron basics
- Learn Lyft API
- Create ride search component
- Polish, style, test

## Implementation Timeline

Day 1:
- Set up `webpack.config.js` and `package.json` (Carson)
- Figure out how to render content to screen using Electron (Peter, Vinit)

Day 2:
- Establish API calls to Uber (Peter)
- Establish API calls to Lyft (Vinit)
- Set up Redux state and routes (Carson)

Day 3-4:
- Create authentication form component (Peter)
- Create ride search component (Vinit)
- Create en route component (Carson)

Day 5:
- Add additional styling (Peter)
- Polish and test (Carson)
- Think about how to integrate future APIs (Vinit)

## Bonus Features

- Make React Native version for mobile
- Integrate more APIs (AirBnB, flights, Postmates, Instacart, etc)
