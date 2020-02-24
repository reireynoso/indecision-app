class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                Options go here
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return (
        <div>
            Add Option Here
        </div>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <Option />
    </div>
)

console.log(Options)

ReactDOM.render(jsx, document.getElementById("app"))