import Todos from '../../components/home/todos';
import Users from '../../components/home/users';
import Posts from '../../components/home/posts';
import React, {Component} from 'react';

const TAB_IDS = {
	TODOS: 1,
	USERS: 2,
	POSTS: 3
};

class Home extends Component {

	state = {
		selectedTabId: TAB_IDS.TODOS
	}

	changeTab = (tabId) => {
		const {selectedTabId} = this.state;

		if (selectedTabId !== tabId) {
			this.setState({
				selectedTabId: tabId
			});
		}
	}

	getSelectedTab = () => {
		const {selectedTabId} = this.state;

		switch (selectedTabId) {
			case TAB_IDS.TODOS: {
				return <Todos/>;
			}
			case TAB_IDS.USERS: {
				return <Users/>;
			}
			case TAB_IDS.POSTS: {
				return <Posts/>;
			}
			default: {
				return null;
			}
		}
	};

	render() {
		return (
			<div>
				<ul>
					<li onClick={() => this.changeTab(TAB_IDS.TODOS)}>Todos</li>
					<li onClick={() => this.changeTab(TAB_IDS.USERS)}>Users</li>
					<li onClick={() => this.changeTab(TAB_IDS.POSTS)}>Posts</li>
				</ul>

				{this.getSelectedTab()}
			</div>
		);
	}
}

export default Home;
