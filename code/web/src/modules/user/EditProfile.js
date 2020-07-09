// Imports
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey } from '../../ui/common/colors'
import ImageTile from '../../ui/image/Tile'
import { level1 } from '../../ui/common/shadows'

// App Imports
import userRoutes from '../../setup/routes/user'
import { APP_URL } from '../../setup/config/env'
import { upload, messageShow, messageHide } from '../common/api/actions.js'
//Instead of importing Logout, we are going to import our action creator for updating user profile
import { logout } from './api/actions'

// Component
class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        image: '',
        description: '',
        email: '',
        address: ''
      }
    }
  }

  onUpload = (e) => {

    let data = new FormData()
    data.append('file', e.target.files[0])

    this.props.upload(data)
      .then(response => {
        if (response.status === 200) {
          // this.props.messageShow('File uploaded successfully.')

          let user = {...this.state.user}
          user.image = `/images/uploads/${ response.data.file }`

          this.setState({
            user
          })
        } else {
          // this.props.messageShow('Please try again.')
        }
      })
      // Need to add in messageShow for error once that's figured out
      .catch(error => console.log(error))
      
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
            {/* look at CreateOrEdit line 318 to update this image */}
            <ImageTile width={300} height={530} shadow={level1} image={`${ APP_URL }/images/stock/men/1.jpg`} />

            <H4 style={{ marginBottom: '0.5em' }}>{this.props.user.details.name}</H4>

            <form onSubmit={this.onSubmit}>
              <input type="file" onChange={this.onUpload}></input>

              <input value={this.props.user.details.email}></input>

              <Link to={userRoutes.profile.path}>
                <Button type="submit" theme="primary" style={{ marginLeft: '1em' }}>Save</Button>
              </Link>
            </form>

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
// This function will need to be renamed
function profileState(state) {
  return {
    user: state.user
  }
}

// Update the function name and any action creators that are imported/used
export default connect(profileState, { upload })(EditProfile)
