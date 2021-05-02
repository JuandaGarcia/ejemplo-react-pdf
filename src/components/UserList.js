import React from 'react'

const UserList = ({ data = [] }) => {
	return (
		<section>
			<div>
				<span>Photo</span>
				<span>Name</span>
				<span>Username</span>
				<span>Email</span>
			</div>
			<ul>
				{data.map(user => (
					<li key={user.id}>
						<img src={user.photo_url} alt={user.name} />
						<span>{user.name}</span>
						<span>{user.username}</span>
						<span>{user.email}</span>
					</li>
				))}
			</ul>
		</section>
	)
}

export default UserList
