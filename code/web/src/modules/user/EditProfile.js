// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        name: this.props.user.details.name,
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

          let user = {...this.state.user}
          user.image = `/images/uploads/${ response.data.file }`

          this.setState({
            user
          })
        } else {
        }
      })
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
            style={{ padding: "2em", textAlign: "center", display: "flex", justifyContent: "center"}}
          >
            <ImageTile
              width={300}
              height={530}
              image={routeImage + this.state.user.image}
              style={{backgroundRepeat:"no-repeat", display: "flex", alignSelf: "center"}}
            />


            <form style={{marginLeft: "3em", width: "50%"}}>
              {/* USER NAME DISPLAY */}
              <H4 style={{ marginBottom: ".5em" }}>
                {this.props.user.details.name}
              </H4>
              <hr style={{borderBottom: ".7px solid #ce9ffc"}}/>
              {/* Image Upload Input */}
              <label for="image">Upload Your Profile Photo:</label>
              <br/>
              <br/>
              <input name="image" type="file" onChange={this.onUpload}></input>
              <br/>
              <br/>
              <hr style={{borderBottom: ".7px solid #ce9ffc"}}/>
              {/* User Email Input*/}
              <label for="email">Update your Email Address:</label>
              <br/>
              <Input
                type="text"
                required="required"
                name="email"
                placeholder="email"
                autoComplete="off"
                value={this.state.user.email}
                onChange={this.onChange}
              />
              <br/>
              <hr style={{borderBottom: ".7px solid #ce9ffc"}}/>
              {/* User Description Input Area */}
              <div style={{ display: "flex", "flex-direction": "column", "justify-content": "center"}}>
                <label for="description">Tell Us About Yourself:</label>
                <br/>
                <Textarea
                  placeholder="Description"
                  required="required"
                  name="description"
                  value={this.state.user.description}
                  onChange={this.onChange}
                  style={{ marginTop: "1em", height: "6em", width: "80%" }}
                />
                <br/>
              </div>
              <hr style={{borderBottom: ".7px solid #ce9ffc"}}/>

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
              <br/>
              <hr style={{borderBottom: ".7px solid #ce9ffc"}}/>
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
EditProfile.propTypes = {
  user: PropTypes.object.isRequired,
  upload: PropTypes.func.isRequired,
  updateUserProfile: PropTypes.func.isRequired
}

// Component State
function editProfileState(state) {
  return {
    user: state.user
  }
}

export default withRouter(connect(editProfileState, { upload, updateUserProfile })(EditProfile))
