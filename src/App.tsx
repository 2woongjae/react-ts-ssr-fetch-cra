import * as React from 'react';
import * as request from 'superagent';

interface AppProps {
  user?: string;
}

interface AppState {
  user: string;
}

class App extends React.Component<AppProps, AppState> {
  public static async getInitialState(): Promise<string> {
    const res = await request.get('https://api.github.com/users');
    // error 처리를 해서 props 를 넘길수도 있다.
    return res.body[0].login;
  }
  componentWillMount() {
    console.log('App componentWillMount');
    if (this.props.user) {
      this.setState({user: this.props.user});
    }
  }
  componentDidMount() {
    console.log('App componentDidMount');
    if (!this.props.user) {
      App.getInitialState().then(user => {
        this.setState({user: user});
      });
    }
  }
  componentWillUnmount() {
    console.log('App componentWillUnmount');
  }

  render() {
    console.log('App render');
  
    return (
      <div className="App">
        <div className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.user}
        </p>
      </div>
    );
  }
}

export default App;
