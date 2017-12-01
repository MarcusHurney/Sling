import { connect } from 'react-redux';
import Common from '../components/Common';

const mapStateToProps = state => {
  return {
    common: state.common
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Common);
