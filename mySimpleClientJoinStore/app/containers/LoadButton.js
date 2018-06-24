import { connect } from 'react-redux'
import { get_data_products } from '../actions'
import LoadButton from '../components/LoadButton'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  get_data_products: () => dispatch(get_data_products())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadButton);
