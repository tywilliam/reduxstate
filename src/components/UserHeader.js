import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }
    render() {
        // /const user = this.props.users.find((user) => user.id === this.props.userId );
        const { user } = this.props;
        if(!user) {
            return null;
        }
        return <div className="header">
            {user.name}
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    /**
     * Instead of passing a ton of data to this component
     * and having the component do the figuring out
     * how to find the user logic. Instead we can
     * map it to mapStateToProps
     */
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);