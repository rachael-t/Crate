// Imports
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey } from '../../ui/common/colors'
import ImageTile from '../../ui/image/Tile'
import { level1 } from '../../ui/common/shadows'
import { Input, Textarea, Select } from '../../ui/input'

// App Imports
import userRoutes from '../../setup/routes/user'
import { routeImage } from '../../setup/routes'
import { upload, messageShow, messageHide } from '../common/api/actions.js'
import { updateUserProfile } from './api/actions'
import { slug } from '../../setup/helpers'

// Component
class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: this.props.user.name,
        image: this.props.user.details.image,
        description: this.props.user.details.description,
        email: this.props.user.details.email,
        address: this.props.user.details.address,
        city: this.props.user.details.city,
        state: this.props.user.details.state,
        zip: this.props.user.details.zip,
        id: this.props.user.details.id
      }
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.updateUserProfile(this.state.user)
    .then(response => console.log(response))

    this.props.history.push(userRoutes.profile.path)

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

  onChange = (e) => {
    let user = this.state.user
    user[e.target.name] = e.target.value

    this.setState({
      user
    })
  }

  onChange = (e) => {
    let user = this.state.user
    user[e.target.name] = e.target.value

    this.setState({
      user
    })
  }

  render() {

    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Edit Profile </title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: "2em", textAlign: "center" }}>
            <H3 font="secondary">Edit My Profile</H3>
          </GridCell>
        </Grid>

        <Grid>
          <GridCell
            justifyCenter={true}
            style={{ padding: "2em", textAlign: "center" }}
          >
            <ImageTile
              width={300}
              height={530}
              shadow={level1}
              image={routeImage + this.state.user.image}
            />

            <H4 style={{ marginBottom: "0.5em" }}>
              {this.props.user.details.name}
            </H4>

            <form>
              {/* Image Upload Input */}
              <input type="file" onChange={this.onUpload}></input>
              {/* User Email Input*/}
              <Input
                type="text"
                required="required"
                name="email"
                placeholder="email"
                autoComplete="off"
                value={this.state.user.email}
                onChange={this.onChange}
              />
              {/* User Description Input Area */}
              <label for="description">Tell Us About Yourself:</label>
              <Textarea
                placeholder="Description"
                required="required"
                name="description"
                value={this.state.user.description}
                onChange={this.onChange}
                style={{ marginTop: "1em" }}
              />
            {/* Shipping Address Input Fields */}
              <label for="shipping">Enter Your Shipping Address:</label>
              <Input
                type="text"
                required="required"
                name="address"
                placeholder="Address"
                autoComplete="off"
                value={this.state.user.address}
                onChange={this.onChange}
              />
              <Input
                type="text"
                required="required"
                name="city"
                placeholder="City"
                autoComplete="off"
                value={this.state.user.city}
                onChange={this.onChange}
              />
              <Input
                type="text"
                required="required"
                name="state"
                placeholder="State"
                autoComplete="off"
                value={this.state.user.state}
                onChange={this.onChange}
              />
              <Input
                type="text"
                required="required"
                name="zip"
                placeholder="Zip"
                autoComplete="off"
                value={this.state.user.zip}
                onChange={this.onChange}
              />
              <Button
                onClick={this.onSubmit}
                theme="primary"
                style={{ marginLeft: "1em" }}
              >
                Save
              </Button>
            </form>
          </GridCell>
        </Grid>
      </div>
    );
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
export default withRouter(connect(profileState, { upload, updateUserProfile })(EditProfile))
