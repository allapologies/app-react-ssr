import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UsersList extends Component {
    componentDidMount () {
        // this.props.fetchUsers()
    }

    renderUsers () {
        this.props.users.map((user) => <li key={user.id}>{user.name}</li>)
    }

    render () {
        return (
            <div>
                List of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = (dispatch) => ({ fetchUsers: dispatch(fetchUsers) });

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
