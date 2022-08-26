import { useState } from 'react'
import { Icon } from 'semantic-ui-react'

const data = [
	{
		employeeId: 1,
		name: 'John Doe',
		email: 'johndoe@email.com',
		position: 'Frontend Developer',
		phone: '773123456',
	},
	{
		employeeId: 2,
		name: 'Sara',
		email: 'sara@email.com',
		position: 'HR Executive',
		phone: '334123456',
	},
	{
		employeeId: 3,
		name: 'Mike',
		email: 'mike@email.com',
		position: 'Backend Developer',
		phone: '554123456',
	},
]


const EditableTable = () => {

	const [employeeData, setEmployeeData] = useState(data)

	const onChangeInput = (e, employeeId) => {
		const { name, value } = e.target

		const editData = employeeData.map((item) =>
			item.employeeId === employeeId && name ? { ...item, [name]: value } : item
		)
		setEmployeeData(editData)
	}

	const AddContact = (e) => {
		const newContact =
		{
			employeeId: employeeData.length + 1,
			name: '',
			email: '',
			position: '',
			phone: '',
		}
		employeeData.push(newContact)
		setEmployeeData([...employeeData])
		console.log(employeeData)
	}

	return (
		<div className="container">
			<h1 className="title">Contacts</h1>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Position</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
					{employeeData.map(({ employeeId, name, email, position, phone }) => (
						<tr key={employeeId}>
							<td>
								<input
									name="name"
									value={name}
									type="text"
									onChange={(e) => onChangeInput(e, employeeId)}
									placeholder="Type Name"
								/>
							</td>
							<td>
								<input
									name="email"
									value={email}
									type="text"
									onChange={(e) => onChangeInput(e, employeeId)}
									placeholder="Type Email"
								/>
							</td>
							<td>
								<input
									name="position"
									type="text"
									value={position}
									onChange={(e) => onChangeInput(e, employeeId)}
									placeholder="Type Position"
								/>
							</td>
							<td>
								<input
									name="phone"
									type="text"
									value={phone}
									onChange={(e) => onChangeInput(e, employeeId)}
									placeholder="Type Phone"
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div>
				<button className="add_button"
					floated='left'
					onClick={(e) => AddContact(e)}
					icon
					labelPosition='left'
					primary
					size='small'>
					<Icon name='user' />
					Add new
				</button>
			</div>
		</div >
	)
}

export default EditableTable