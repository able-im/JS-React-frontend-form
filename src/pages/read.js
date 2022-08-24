import React, {
    Component
} from 'react';
class App extends React.Component {
        state = {
            isLoading: true,
            users: [],
            error: null
        };
        getFetchUsers() {
            this.setState({
                loading: true
            }, () => {
                fetch("http://localhost:8000/users").then(res => res.json()).then(result => this.setState({
                    loading: false,
                    users: result
                })).catch(console.log);
            });
        }
        componentDidMount() {
            this.getFetchUsers();
        }


        render() {
            const {
                users,
                error
            } = this.state;
            return (
              <React.Fragment>
              <h1>All Users</h1>
              {
                    error ? <p>
              {
                        error.message
                    } < /p> : null}  {
                        users.map(user => {
                            const {
                                name,
                                password
                            } = user;
                            return (
                            <div key={name}>
                                <p>Name: {name}</p>
                                <p>Password: {password}</p>
                                <hr />
                            </div>
                            );
                        })
                    } < /React.Fragment> );
            }
        }
export default App;