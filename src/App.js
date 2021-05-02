import data from './data.json'
import UserList from './components/UserList'

const App = () => {
	return (
		<>
			<UserList data={data} />
			<button>Download</button>
		</>
	)
}

export default App
