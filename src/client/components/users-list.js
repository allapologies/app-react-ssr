import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UsersList extends Component {
    componentDidMount () {
        this.props.fetchUsers()
    }

    renderUsers () {
        return this.props.users.map((user) => {
            return <li key={user.id}>{user.name}</li>
        })
    };

    render () {
        return (
            <div>
                List of users:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => ({ users });

export const loadData = (store) => {
    return store.dispatch(fetchUsers());
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);

