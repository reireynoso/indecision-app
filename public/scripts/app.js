"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const obj = {
//     name: "Hey",
//     getName(){
//         return this.name
//     }
// }

// const getName = obj.getName.bind(obj)

// console.log(getName())

// const funct = function(){
//     console.log(this)
// }

// funct()

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: []
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleDeleteSpecificOption = _this.handleDeleteSpecificOption.bind(_this);
        return _this;
    }

    // handleDeleteOptions(){
    //     this.setState(() => {
    //         return {
    //             options: []
    //         }
    //     })
    // }


    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // console.log("fetching data")
            try {
                var json = localStorage.getItem("options");
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return {
                            options: options
                        };
                    });
                }
            } catch (e) {
                // Do nothing at all
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                console.log("saving data");
                var json = JSON.stringify(this.state.options);
                localStorage.setItem("options", json);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("Unmount");
        }
    }, {
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handleDeleteSpecificOption",
        value: function handleDeleteSpecificOption(optionClicked) {
            // console.log(option)
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option !== optionClicked;
                    })
                };
            });
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return "Enter valid value to add item";
            } else if (this.state.options.indexOf(option) > -1) {
                return "This option exists";
            }

            // this.setState((prevState) => {
            //     return {
            //         // options: [...prevState.options, option] 
            //         options: prevState.options.concat(option)
            //     }
            // })
            this.setState(function (prevState) {
                return {
                    // options: [...prevState.options, option] 
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var random = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[random];
            alert(option);
        }
    }, {
        key: "render",
        value: function render() {
            var subtitle = "Put your life in the hands of a computer!";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteSpecificOption: this.handleDeleteSpecificOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// IndecisionApp.defaultProps = {
//     options: []
// }

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision"

    // class Action extends React.Component {
    //     render(){
    //         return (
    //         <div>
    //             <button 
    //                 onClick={this.props.handlePick}
    //                 disabled={!this.props.hasOptions}
    //             >What Should I do?</button>
    //         </div>
    //         )
    //     }
    // }

};var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            "What Should I do?"
        )
    );
};

// class Options extends React.Component {

//     render(){
//         return (
//         <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All Button</button>
//             {
//                 this.props.options.map(option =>  <Option key={option} option={option} />)
//             }
//         </div>
//         )
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove All Button"
        ),
        props.options.length === 0 && React.createElement(
            "p",
            null,
            "Add some options"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                handleDeleteSpecificOption: props.handleDeleteSpecificOption,
                option: option
            });
        })
    );
};

// class Option extends React.Component {
//     render(){
//         return(
//             <div>
//                 {this.props.option}
//             </div>
//         )
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.option,
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    return props.handleDeleteSpecificOption(props.option);
                } },
            "Remove"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAdd = _this2.handleAdd.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAdd",
        value: function handleAdd(e) {
            e.preventDefault();
            var option = e.target.option.value.trim();

            var error = this.props.handleAddOption(option);
            // this.setState(() => {
            //     return {
            //         error
            //     }
            // })
            this.setState(function () {
                return {
                    error: error
                };
            });

            if (!error) {
                e.target.option.value = "";
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error ? React.createElement(
                    "p",
                    { style: { color: "red" } },
                    this.state.error
                ) : null,
                React.createElement(
                    "form",
                    { onSubmit: this.handleAdd },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement("input", { type: "submit" })
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// const User = () => {
//     return (
//         <div>
//             <p>Name: </p>
//             <p>Age: </p>
//         </div>
//     )
// }


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
