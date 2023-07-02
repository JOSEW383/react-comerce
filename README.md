[![Playwright Tests](https://github.com/JOSEW383/react-comerce/actions/workflows/playwright.yml/badge.svg)](https://github.com/JOSEW383/react-comerce/actions/workflows/playwright.yml)
# 🎥 React Comerce App

This React application allows users to buy mock products from a catalog.

![](https://github.com/JOSEW383/react-comerce/blob/main/public/ReactComerceDemo.gif)

## 🎯 Features

- Add products to the cart.
- remove products from the cart.
- Filter products by category.
- Filter products by price.
- See the total price of the products in the cart.
- See the total number of products in the cart.
- Save the cart in the local storage.
- Responsive design.

## 🔧 Installation & 🚀 Run

To run this project, you need to have Node.js and npm installed on your computer. Then follow these steps:

1. Clone the repository into your local machine.
2. Create .env file with ENV variables (see .env.example).
3. Install dependencies: `npm install`
4. Run the application: `npm run dev`

## 🧪 Testing

This app was tested using [playwright](https://playwright.dev/), to run the test set follow these steps:

1. Run tests: `npx playwright test`
2. View results: `npx playwright show-report`

## 🔗 APIs used

- [DummyJSON](https://dummyjson.com/)

## 🤖 Technologies used

- [React](https://reactjs.org/)
  - **Hooks**: [UseState](https://react.dev/reference/react/useState), [UseEffect](https://react.dev/reference/react/useEffect), [UseRef](https://react.dev/reference/react/useState), [useId](https://react.dev/reference/react/useId), [useContext](https://react.dev/docs/hooks-reference.html#usecontext), [useReducer](https://react.dev/docs/hooks-reference.html#usereducer), [CustomHooks](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component)
- [Bootstrap](https://getbootstrap.com/)
- [Vite](https://vitejs.dev/)
- [Playwright](https://playwright.dev/)
- [Github Actions](https://docs.github.com/en/actions)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
