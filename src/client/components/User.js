import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchUsers } from '../actions';



class User extends Component {

    componentDidMount() {
        this.props.fetchUsers()

    }


    render() {
        console.log()
        return (
            <div>
                <h2>USer</h2>
                {this.props.user.data && <div>{this.props.user.data.title}</div>}
            </div>
        )

    }

}


function mapStateToProps(state) {
    return { user: state.user }
}

export default connect(mapStateToProps, { fetchUsers })(User)