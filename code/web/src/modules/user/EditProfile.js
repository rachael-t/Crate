// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'
import ImageTile from '../../ui/image/Tile'
import { level1 } from '../../ui/common/shadows'

// App Imports
import userRoutes from '../../setup/routes/user'
import { APP_URL } from '../../setup/config/env'

//Instead of importing Logout, we are going to import our action creator for updating user profile
import { logout } from './api/actions'

// Component
class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      description: '',
      email: '',
      address: ''
    }
  }

  render() {
    return(
      <div>
        {/* SEO */}
        <Helmet>
          <title>Edit Profile </title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Edit my profile</H3>
          </GridCell>
        </Grid>

        <Grid>
          <GridCell justifyCenter={true} style={{ padding: '2em', textAlign: 'center'}}>

            <ImageTile width={300} height={530} shadow={level1} image={`${ APP_URL }/images/stock/men/1.jpg`} />
            <form>
              <input type="file"></input>
              <Button theme="secondary" style={{ marginBottom: '4em', marginTop: '4em' }}>Upload Profile Image</Button>
            </form>

            <H4 style={{ marginBottom: '0.5em' }}>{this.props.user.details.name}</H4>

            <form>
              <input value={this.props.user.details.email}></input>
            </form>

            <Link to={userRoutes.profile.path}>
              <Button theme="primary" style={{ marginLeft: '1em' }}>Save</Button>
            </Link>

          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
// EditProfile.propTypes = {
//   user: PropTypes.object.isRequired,
//   logout: PropTypes.func.isRequired
// }

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(EditProfile)
