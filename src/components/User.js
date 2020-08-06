import React, {Component} from 'react';

import {connect} from 'react-redux';
import {fetchUser} from '../actions/users';

class UserHeader extends Component {

    componentDidMount = () => {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        if (!this.props.user) {
            return null;
        }
        return (
            <a href="aasd" className="card-link">{this.props.user.name}</a>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        user : state.users.find((user) => {
            return user.id === ownProps.userId;
        })
    }
}

export default connect(mapStateToProps, {fetchUser})(UserHeader)