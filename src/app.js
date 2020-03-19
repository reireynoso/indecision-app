import validator from 'validator';
import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

const Layout = (props) => {
    return(
        <div>
        <p>Header</p>
        {props.children}
        <p>Footer</p>
        </div>
    )
}

ReactDOM.render(
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
        </div>
    </Layout>, 
    document.getElementById("app"))
// ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))

// const template = <p>This JSX webpack</p>
// ReactDOM.render(template, document.getElementById('app'))

// import './utils';
// import subtract, {square, add} from './utils'
// console.log("new app!!")
// console.log(square(4))
// console.log(add(2,3))
// console.log(subtract(3,2))

// import isSenior, {isAdult, canDrink} from './person'

// console.log(isAdult(14))
// console.log(canDrink(21))
// console.log(isSenior(64));

// Importing NPM modules
// Install -> import -> use
// npm install validator