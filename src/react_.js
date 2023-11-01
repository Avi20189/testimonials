//What is React js?
// React is a javascript library to create Ui. Particularly single page applications.App

// //Key feature of react js?
// some key features of react js:-
// Component based architecture- React uses a component based architecture where uis are broken down into reusable components .

// virtual DOM- React uses a virtual DOM to improve performance. 
// Instead of updating the real dom directly, react creates a virtual representation of the ui in memory, 
// and updates only the part of the actual dom that needs to Change . 
// This minimizes DOM manipulation and improves application performance. 

// jsx-it is a syntax extension for javascript recommended by react. 
// It makes code more readable. it allows us to write HTML elements in javascript 

// unidirectional data flow- React has a unidirectional data flow. top to bottom

// State and props - React component can hold and manage their own state and 
// they can recieve data from their parent via props. 

// //React hooks - 
// Hooks are functions that let developers hook into react state and lifecycle feature from function components
// they allow us to use  state and other react features without writing a class

// //lifecycle methods- 
// in class componetns react provide lifecycle methods like componentDidMount, componentDidUpdate,
// and componentwillMount. allowing developers to run code at specific points in a component's lifecycle.

// // What are components in react?
// components are reusable bits of code. it is like javascript functions. There are two types of components:-
// 1. Functional component  2. Class Components 3. Functional components with hooks 

// //Explain the difference between state and props:-
// Both state and props are used to control and manipulate data.

// state:- 
// local to componenet- State is internal to component. It can't be accessed or modified from outside the component.
// Each component maintains its own state. 

// Mutable:- State can be changed using the setState method.
//  it causes re rendering the component to reflect the updated state.

//  Initialization:- state is typically initialized in the constructor of a class componenet or by using the 
//  useState hook in a functional component

//  props:- 
//  External inputs- props are external inputs to a components. 
//  they are passed to a component by its parent and are immutable within the component.
//  immutable- components cannot modify their props directly. props are read-only . 
//  any changes in props triggers a re render of the components with the new props.
 
//  // How do you manage state in a class component

//  In react class component state is managed using the setState() method.

//  in functional components hooks are functions that let developers hook into react state and lifecycle features from
//  function components.

//  //What are controlled components
//  A controlled component is a component that renders a form element(i.e. input, textarea) and controls what happens 
//  to that element on user input through its own state. 

//  //How does the useEffect hook work in functional components?
//  useEffect is a hook in react that allows functional components to perform side effects in the form of data fetching 
//  subscriptions or manually changing the DOM in a declarative Way . 

//  //REACT ROUTER what is react router and why is it used?
//  it is a popular javascript library for handling routing in React application. Routing is a process of determining the 
//  appropriate view to display when when a user click on a link or enter a url into the browser. React router enables to
//  create SPA by allowing to define multiple routes in their React Applications. 
//  declarative routing
//  dynamic routing 
//  nested routing 
//  history management
//  code splitting
//  server side rendering and static site generation

//  //How do you handle route parameters in React router.
//  In react router route parameters are used to capture vlaues from the URL and pass them as props to the rendered component.
//  we can define route parameters in our route paths using the : paramName syntax.

//  we Can access route parameters inside our components using useParams hook or the withRouter(HOC) provided by reactRouter. 

//  //Explain the concept of nested router.

//  It is a concept where routers are defined within the scope of other routers.

//  //State management
//  // what is redux and why might you use it?
// Redux is a javascript library for managing application state. it provides a predictable stable container which means 
// it helps us manage the state of our application in a predictable way. 

// Predictable state management:-
// It enables to manage the state of application in a predictable manner.The state of the entire application is Stored 
// in a single immutable object tree within a single store.

// centralized state - with Redux all applications state is stored in one central location. this makes it easier to understand
// how data changes and used across application. 

// time-travel debugging - Redux stores the state changes over time, which allows to implement powerful debugging technique
// such as time travel debugging. It can we can move back and forth through the state of application. it makes easier
// to trace bugs and undestand the flow of application.

// Middleware support - Redux supports middleware. which provides a third party extensions. middleware allows to customize
// the redux behaviour in a clean and composable way. 

// Facilitates state persistance - with the centralized state it becomes easier to implement features like state persistance
// where the state of the application can be saved and restored, providing a better user experience. 

// //How does Redux work with react?
// Redux is a state management library for js apps. 
// 1. store - In redux the state of the entire application is stored in a single javascript object called the store . 
// we can create a store using the createStore function provided by Redux. 

// 2. Actions:- Actions are plain javascript objects thta describes what happened in application. They are dispatched to the store. 

// 3. Reducers:- reducers specify how the application's state changes in response to actions sent tot the store.
// it is a pure function that takes the previous state and an action, and returns the next state. 
// Reducers are combines into a single root reducer using combineReducer 

// 4.Dispatching Actions in React Component: - We can connect to the redux store and dispatch actions using the connect functions
// from react-redux library or using react hook like useDispatch . 

// //Explain the flux design pattern 

// flux is not a framework or a library. it is a pattern that defines how data flows through an application.
// at its core flux enforces a unidirectional data flow
// I has several key components  ACTIONS -> DISPATCHER -> STORES -> VIEWS

// //TESTING IN REACT 

// // what libraries and tools can we use for testing in react?
// jest - it is a popular javascript testing framework developed by fb . it is widely used for testing react application 
// due to its simplicity and powerful features. it comes with built in support for test runners, assertion libraries.A 

// React testing library enzyme cypress, testing library dom testing library , react test renderer 

// //What is jest and how do we use it for testing React applications?
// it is commonly used for testnig react applications although it can be used for testing any js application. 
// it provides a rich set of features for writing tests, including a test runner, assertion utilities, mocking MediaCapabilities
// and code coverage reporting . 

// it's process is : - installation 2. running test 

// //ADVANCE REACT CONCEPTS

// // what are higher order components(HOCs) and how are they used? 
// Higher order function is a pattern used in react .
// hocs are functios tht take a component and return a new component with additional props and behavior. 

// usage of hoc - 
// We can use a HOC by wrapping a component within it. This enhances our component with the additional props or behavior 
// defined in the HOC . 

// common use cases: - 
// Reusing component logic:- 
// If you find yourself writing teh same logic in multiple components, we can extract that logic into a HOC and reuse it
// across application . 
// Adding additional data
// Authentication 
// Logging and analytics 
// conditionally rendering components 

// //What are render props in react? 

// render props refer to a technique for sharing code between React components using a prop whose value is a function. 
// this technique allows components to share functionality with other components by passing a function as a prop.  
// this pattern is often used in libraries an frameworks to create highly customisable and reusable components . 