import React, { Component } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class FormCaptureValues extends Component {
  state = { name: '', password: '', submittedName: '', submittedPassword: '', isLoading: true, users: [], error: null }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const { name, password } = this.state
    this.setState({ submittedName: name, submittedPassword: password })
  }

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
    const { users, error, name, password, submittedName, submittedPassword } = this.state;

    users.map(user => {
      const {
        name,
        password
      } = user;
      if (submittedName === name && submittedPassword === password) {
        window.location.replace("http://localhost:3000/contact");
      };
    })


    return (
      <div>
        <Segment inverted>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Group className="login_form_group" widths='equal'>
              <Form.Input fluid label='User name:'
                placeholder='Login'
                name='name'
                onChange={this.handleChange}
                value={name}
              />
              <Form.Input fluid label='Password:'
                type="password"
                placeholder='password'
                name='password'
                onChange={this.handleChange}
                value={password}
              />
              <Button content='Login' />
            </Form.Group>
          </Form>
        </Segment>
      </div>

    )
  }
}

export default FormCaptureValues