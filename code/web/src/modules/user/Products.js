// Imports
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import { white, black, grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { getList as getProductList } from '../product/api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import { routeImage } from "../../setup/routes"

// Component
class Products extends Component {

    static fetchData({ store }) {
        return store.dispatch(getProductList())
      }
  
    componentDidMount() {
        this.props.getProductList()
      }
    
    // Method needing to be built out that will toggle the returned property of a product shipment item
    returnItem = () => {
        console.log('item has been returned')
    }  

    render() {

    const { isLoading, list } = this.props.products

    return (

    <div>
        {/* SEO */}
        <Helmet>
            <title>Products Previously Received</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Products Previously Received</H3>
            </GridCell>
        </Grid>

        {/* Page Content */}
        <div>

            {/* Product list */}
            <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell>
                <table className="striped">
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Delivery Date</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'center' }}>Actions</th>
                    </tr>
                </thead>

                <tbody>
                {
                    isLoading
                    ? <tr>
                        <td colSpan="6">
                            <Loading message="loading products..."/>
                        </td>
                        </tr>
                    : list.length > 0
                        ? list.map(({ id, image, name, description, createdAt, updatedAt }) => (
                            <tr key={id}>
                            <td>
                                <img src={routeImage + image} alt={name} style={{ width: 100 }}/>
                            </td>

                            <td>
                                { name }
                            </td>

                        {/* Update to Delivery Date: */}
                            <td>
                                { new Date(parseInt(createdAt)).toDateString() }
                            </td>

                        {/* Update to return status: */}
                            <td>
                                { new Date(parseInt(updatedAt)).toDateString() }
                            </td>

                        {/* Return button */}
                            <td style={{ textAlign: 'center' }}>
                                <Button 
                                    theme="secondary"
                                    onClick={this.returnItem}>
                                    Return Item
                                </Button>
                            </td>
                            </tr>
                        ))
                        : <tr>
                            <td colSpan="6">
                            <EmptyMessage message="No products to show."/>
                            </td>
                        </tr>
                }
                </tbody>
                </table>
            </GridCell>
            </Grid>
        </div>
    </div>
    )}
}

// Component Properties
// Product.propTypes = {
//   
// }

// Component State
// This function will need to be renamed
function userProductsState(state) {
  return {
    user: state.user,
    products: state.products
  }
}

// Update the function name and any action creators that are imported/used
export default connect(userProductsState, { getProductList })(Products)
