import React, { Component } from "react";
import "./css/style.css";

var op = []; // array for storing number
var decimal = true; // to access decimal dot

class Nums extends Component {
  constructor(props) {
    super(props);
    this.pusher = this.pusher.bind(this);
    this.pusher2 = this.pusher2.bind(this);
    this.pusher3 = this.pusher3.bind(this);
    this.pusher4 = this.pusher4.bind(this);
    this.reset = this.reset.bind(this);
    this.delete = this.delete.bind(this);
  }

  // it will add button value to op
  pusher = (event) => {
    event.preventDefault();
    var num = event.target.value;
    console.log(num);
    if (op.length <= 23) {
      op += num;
      this.props.setResult({ display: op });
    } else {
      this.props.setResult({ display: "# of max character reached" });
    }
  };

  // to only have one operation chained + * /
  pusher2 = (event) => {
      event.preventDefault();
      var num = event.target.value;
      var last = op.charAt(op.length-1);
      if(op.length <= 23) {
          if((last === "+") || (last === "*") || (last === "/") || (last === ".")) {
              
          }
          else {
            op += num;
            decimal = true;
            this.props.setResult({display: op});
          }
      }
      else {
        this.props.setResult({display: "# of max chars reached"});
    }
  };

  pusher3 = (event) => {
      event.preventDefault();
      var num = event.target.value;
        if(op.length <= 23) {
            if(decimal) {
                op += num;
                op = op.replace(/\-+/g,'-');
                decimal = true;
                this.props.setResult({display: op});
            }
        }else {
            this.props.setResult({display: "# of max chars reached"});
        }
  };  

  // function for the . decimal
  pusher4 = (event) => {
      event.preventDefault();
      var num = event.target.value;
        if(op.length <= 23) {
            if(decimal) {
                op += num;
                this.props.setResult({display: op});
                decimal = false;
            }
        }
        else {
            this.props.setResult({display: "# of max chars reached"});
        }
  };

  // will execute operation inside the op
  result = (event) => {
      event.preventDefault();
      var result = eval(op).toFixed(2);
      var ind = result.indexOf(".");
        if(String(result).length <= 11) {
            this.props.setResult({ result: result.slice(0,ind), decimal: result.slice(ind)});
        }
        else {
            this.props.setResult({result: "errors", decimal: " "});
        }
  };

  reset = (event) => {
    event.preventDefault();
    op = [];
    decimal = true;
    this.props.setResult({ display: 0, result: 0, decimal: ".00" });
    console.log("reset function called");
  };

  delete = (event) => {
    event.preventDefault();
    var test = false; //test if i am next to delete a "."
    op = op.slice(0, -1);
    this.props.setResult({ display: op });
    console.log(op.indexOf(op.length));
    try {
        if(op.charAt(op.length - 1) === ".") {
            // to check character is "."
            test = true;
          }
    }
    catch(err) {
        console.log("You cannot delete beyond this point. It is throwing error: ", err.message);
    }
    if(test && (op.charAt(op.length - 2) !== ".")) {
      // Activate decimal when delete a '.' character
      decimal = true;
      test = false;
      console.log(test);
    }
  };

  render() {
    return (
      <div className="pad">
        <div className="afterPad">
          <div className="filter">
            <form className="calc">
              <div>
                <button onClick={this.reset} value={0}>
                  C
                </button>
                <button onClick={this.delete}>Del</button>
              </div>
              <div>
                <button onClick={this.pusher} value={1}>
                  1
                </button>
                <button onClick={this.pusher} value={2}>
                  2
                </button>
                <button onClick={this.pusher} value={3}>
                  3
                </button>
                <button onClick={this.pusher2} value="+">
                  +
                </button>
              </div>
              <div>
                <button onClick={this.pusher} value={4}>
                  4
                </button>
                <button onClick={this.pusher} value={5}>
                  5
                </button>
                <button onClick={this.pusher} value={6}>
                  6
                </button>
                <button onClick={this.pusher3} value="-">
                  -
                </button>
              </div>
              <div>
                <button onClick={this.pusher} value={7}>
                  7
                </button>
                <button onClick={this.pusher} value={8}>
                  8
                </button>
                <button onClick={this.pusher} value={9}>
                  9
                </button>
                <button onClick={this.pusher2} value="*">
                  *
                </button>
              </div>
              <div className="lastRow">
                <button onClick={this.pusher} value={0}>
                  0
                </button>
                <button onClick={this.pusher4} value=".">
                  .
                </button>
                <button onClick={this.pusher2} value="/">
                  /
                </button>
              </div>
            </form>
          </div>
        </div>
        <button className="return" onClick={this.result}>
          =
        </button>
      </div>
    );
  }
}

export default Nums;
