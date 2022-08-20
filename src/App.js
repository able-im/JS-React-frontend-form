import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const FormExample = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='User name:' placeholder='login' />
        <Form.Input fluid type="password" label='Password:' placeholder='password' />
      </Form.Group>
      <Button type='submit'>Login</Button>
    </Form>
  </Segment>
)
export default FormExample
