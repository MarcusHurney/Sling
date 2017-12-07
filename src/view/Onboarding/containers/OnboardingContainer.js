import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Onboarding from '../components/Onboarding';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const OnboardingWithForm = reduxForm({
  form: 'OnboardingForm'
})(Onboarding);

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingWithForm);
