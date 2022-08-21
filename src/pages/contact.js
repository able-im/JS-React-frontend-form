import React from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'

const TableExampleApprove = () => (
  <Table compact celled definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Birthday</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Co-worker</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>May 11, 2014</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
          <Button
            floated='left'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Add
          </Button>
          <Button size='small'>Edit</Button>
          <Button size='small'>Delete</Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default TableExampleApprove
