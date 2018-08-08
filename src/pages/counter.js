import React from "react";
import Link from "gatsby-link";


class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      background: '#fefefe'};
  }

  render() {

    if (this.state.count === 0) {
      this.state.counterText = 'You are at zero. Try clicking the numbers';
      this.state.background = '#ECFFDE';
    } else if (this.state.count > 0) {
      this.state.counterText = 'Nice, you are at <strong>' + this.state.count + '</strong> which is larger than zero';
      this.state.background = '#FFE4DE';
    } else {
      this.state.counterText = 'Your number <strong>' + this.state.count + '</strong> is rather negative';
      this.state.background = '#DEEFFF';
    }

    return (
      <div style={{ background: this.state.background }}>
        <h1>Hello counter</h1>
        <p dangerouslySetInnerHTML={{ __html: this.state.counterText }}/>
        <p><button
          onClick={() =>
            this.setState(prevState => ({
              count: prevState.count + 1,
            }))
          }
        >Add one</button>
          <button
            onClick={() =>
              this.setState(prevState => ({
                count: prevState.count + 5,
              }))
            }
          >Add five</button>
        </p>

        <p>
          <button
            onClick={() =>
              this.setState(prevState => ({
                  count:prevState.count - 1,
                }
              ))}
          >Substract by one</button>
          <button
            onClick={() =>
              this.setState(prevState => ({
                  count:prevState.count - 5,
                }
              ))}
          >Substract by five</button>
        </p>

        <p>
          <button
            onClick={() =>
              this.setState(prevState => ({
                  count:prevState.count = 0,
                }
              ))}
          >Reset</button>
        </p>
        <p><Link to="/">Back to home</Link></p>

      </div>
    );
  }
}

export default Counter;