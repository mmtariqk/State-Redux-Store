# Shop-Shop-Redux-Store

Refractor e-commerce platform from using global state React's Context API to Redux.

## Description
This is an E-commerce website where a user can shop for goods and purchase them using stripe. Stripe Payments is a payment processing platform. It allows you to transfer money from a customer's bank account into your business's account by way of a credit or debit card transaction. Please note this application is mainly for educational purposes no goods are actually for sale. This application was built mainly to learn redux and state management. App allows user to login and buy items, also see their order history.

## Technologies and tools used
Node.js
apollo server
apollo server express
graphQl
JWT (JSON Web Token)
bcrypt
mongoose
express
sequelize
stripe
redux
JSX
JavaScript
CSS
REACT bootsrap
Heroku
REACT

## Screenshot
<img width="1383" alt="Screen Shot 2021-07-07 at 3 14 13 PM" src="https://user-images.githubusercontent.com/77028806/124835402-1f392980-df36-11eb-92c8-4b1a6acdd80d.png">

## Tasks List

- [x] Use the Redux to implement a Redux store.

- [x] Write Redux actions and reducers with the necessary tests in place.

- [x] Use global state across multiple React components.

- [x] Use IndexedDB within a React component.

- [x] Cach server-side data using IndexedDB.

- [x] Generate product, price, and checkout session IDs by using the Stripe API.

- [x] Capture a completed order by saving IndexedDB data in MongoDB database.

- [x] Use the useLazyQuery Hook to delay executing a GraphQL query.

## Acceptance Criteria

* When I review the app’s store, then I find that the app uses a Redux store to manage global state.
* When I review the way the React front end accesses the store, then I find that the app uses a Redux provider.
* When I review the way the app determines changes to its global state, then I find that the app passes reducers to a Redux store.
* When I review the way the app extracts state data from the store, then I find that the app uses Redux.
* When I review the way the app dispatches actions, then I find that the app uses Redux.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Deployed Application

Please use the following link to view the deployed application on Heroku:

