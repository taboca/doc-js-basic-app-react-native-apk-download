import { connect } from 'react-redux'
import ListProducts from '../components/ListProducts'

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(ListProducts)
