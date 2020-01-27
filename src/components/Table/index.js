import { connect } from 'react-redux';
import Table from './Table';
import { addListUser, deleteUser } from '../../store/actions';

function mapState2Props(state) {
  return {
    listUser: state.listUser,
  };
}

const mapDispatch2Props = {
  addListUser,
  deleteUser,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(Table);

export { Enhanced as Table };