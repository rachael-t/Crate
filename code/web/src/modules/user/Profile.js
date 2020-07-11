// Imports
import React from 'react'
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
import { logout } from './api/actions'
import { routeImage } from "../../setup/routes"

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: "2em", textAlign: "center" }}>
        <H3 font="secondary">My profile</H3>
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
          image={routeImage + props.user.details.image}
          style={{backgroundRepeat:"no-repeat", display: "flex", alignSelf: "center"}}
        />

        <div style={{marginLeft: "3em", width: "50%"}}>
          <H4 style={{ marginBottom: "0.5em" }}>{props.user.details.name}</H4>
          <p style={{ color: "grey2", marginBottom: "2em" }}>
            {props.user.details.description}
          </p>

          <p style={{ color: grey2, marginBottom: "2em" }}>
            {props.user.details.email}
          </p>

          <p style={{ color: grey2, marginBottom: "2em" }}>
            Shipping Address:<br/>
            {`${props.user.details.address}`}<br/>{`${props.user.details.city}, ${props.user.details.state} ${props.user.details.zip}`}
          </p>


          <Link to={userRoutes.subscriptions.path}>
            <Button theme="primary">Subscriptions</Button>
          </Link>

          <Link to={userRoutes.edit.path}>
            <Button theme="primary" style={{ marginLeft: "1em" }}>
              Edit Profile
            </Button>
          </Link>

          <Button
            theme="secondary"
            onClick={props.logout}
            style={{ marginLeft: "1em" }}
          >
            Logout
          </Button>

          <Link to={userRoutes.products.path}>
            <Button
              theme="primary"
              style={{ marginLeft: "1em" }}
            >
            View my products
            </Button>
          </Link>
        </div>

        <div style={{backgroundColor: "green"}}>
          <H4 style={{ marginBottom: '1em', textAlign: 'center' }}>
            Next Delivery Scheduled:
          </H4>
        </div>

      </GridCell>
    </Grid>
  </div>
);

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
