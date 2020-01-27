import { connect } from 'react-redux';
import Form from './Form';
import { addListUser } from '../../store/actions';

function mapState2Props(state) {
  return {
    listUser: state.listUser,
  };
}

const mapDispatch2Props = {
  addListUser,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(Form);

export { Enhanced as Form };