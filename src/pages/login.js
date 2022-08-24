import React, { Component } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class FormExampleCaptureValues extends Component {
  state = { name: '', password: '', submittedName: '', submittedPassword: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, password } = this.state

    this.setState({ submittedName: name, submittedPassword: password })
  }

  render() {
    const { name, password, submittedName, submittedPassword } = this.state;
    if(submittedName === '123' && submittedPassword === '123') {
	window.location.replace("http://localhost:3000/contact"); };

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

export default FormExampleCaptureValues