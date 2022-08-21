import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const FormLogin = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Group className="login_form_group" widths='equal'>
        <Form.Input fluid label='User name:' placeholder='login' />
        <Form.Input fluid type="password" label='Password:' placeholder='password' />
        <Button type='submit'>Login</Button>
      </Form.Group>
      </Form>
  </Segment>
)
export default FormLogin
