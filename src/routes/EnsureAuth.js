import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// import { getLoggedUser } from './utils/xhr';

class EnsureAuth extends Component {
  componentWillMount() {
    // getLoggedUser();
  }

  render() {
    const { component: Component, pending, logged, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => {
          if (pending) return <div>Loading...</div>;
          return logged ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth/login" />
          );
        }}
      />
    );
  }
}

// const mapStateToProps = ({ loggedUserState }) => ({
//   pending: loggedUserState.pending,
//   logged: loggedUserState.logged
// });

const mapStateToProps = state => ({
  pending: false,
  logged: false
});

export default connect(mapStateToProps)(EnsureAuth);
