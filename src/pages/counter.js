import React from "react";
import Link from "gatsby-link";
import Container from "../components/container";
import Label from "../components/label";


class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      background: '#fefefe'};
  }

  render() {

    if (this.state.count === 0) {
      this.state.counterText = '&nbsp;';
      this.state.background = '#ECFFDE';
    } else if (this.state.count > 0) {
      this.state.counterText = 'You have clicked to <strong>' + this.state.count + '</strong> and it is larger number than zero';
      this.state.background = '#FFE4DE';
    } else {
      this.state.counterText = 'you have clicked to <strong>' + this.state.count + '</strong> and it is a rather negative number';
      this.state.background = '#DEEFFF';
    }

    return (
      <div style={{ background: this.state.background }}>
      <Container>

        <h1>Hello counter</h1>
        <p dangerouslySetInnerHTML={{ __html: this.state.counterText }}/>
        <p><Label>Add:</Label><button
          onClick={() =>
            this.setState(prevState => ({
              count: prevState.count + 1,
            }))
          }
        >+1</button>
          <button
            onClick={() =>
              this.setState(prevState => ({
                count: prevState.count + 5,
              }))
            }
          >+5</button>
        </p>

        <p>
          <Label>Remove:</Label><button
            onClick={() =>
              this.setState(prevState => ({
                  count:prevState.count - 1,
                }
              ))}
          >-1</button>
          <button
            onClick={() =>
              this.setState(prevState => ({
                  count:prevState.count - 5,
                }
              ))}
          >-5</button>
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
      </Container>
      </div>
    );
  }
}

export default Counter;