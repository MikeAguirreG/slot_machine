# Slot Machine

## Specifications

This application has been deployed in Heroku under the following link:

https://slot-machine-app-test.herokuapp.com


### Interface 

1. reels
2. pay-table
3. balance indicator (text-box)
4. SPIN button. 
5. Debug area


### Reels

Slot machine has 3 reels, each having following 5 symbols in order: 3xBAR, BAR, 2xBAR, 7, CHERRY
Only part of the reel is visible to user. There are horizontal win-lines on visible part of reel: top, center, bottom.


### Pay Table

Table with combinations prizes, this table blinks and moves once on its corresponding value when the combination in one of the Reels has occured.


Prizes combinations:

     *  3 BAR symbols on any line 10
     *  Combination of any BAR symbols on any line 5
     *  3 2xBAR symbols on any line 20
     *  3 3xBAR symbols on any line 50
     *  3 7 symbols on any line 150
     *  3 CHERRY symbols on top line 2000
     *  3 CHERRY symbols on center line 1000
     *  3 CHERRY symbols on bottom line 4000
     *  Any combination of CHERRY and 7 on any line 75 


### Balance 

Text-box showing the coin balance, it can be modified for debugging purposes on a range from 1 to 5000.


### Sping Button

Press on SPIN button start spinning of all three reels. Each spin costs player 1 coin. 


### Debug Area

It is posible to run the application in mode random and fixed, with the sencond one it is possible to set up the desire values with a select element which defines the verticall position where the user would like to set a specific value, each select has its own slider with the values to be set.


Select: *  Top Line
        *  Center Line
        *  Bottom Line

Slider:  Bar - 2Bar - 3Bar - 7 - Cherry



## Dependencies

* Material UI - Components
* React Spring - Animations
* Tachyons - Styles


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

