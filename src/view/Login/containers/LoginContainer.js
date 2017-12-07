import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Login from '../components/Login';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const LoginWithForm = reduxForm({
  form: 'LoginForm'
})(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithForm);
