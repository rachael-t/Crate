import React from "react";
import Profile from "./Profile";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { MemoryRouter, Router } from "react-router-dom";
import { rootReducer } from '../../setup/store';
import { Provider } from 'react-redux';
import { createStore, compose } from "redux";
import { SET_USER } from "./api/actions";
import { createMemoryHistory } from "history";

const renderWrapper = () => {
    const store = createStore(rootReducer, compose());
    const user = {
        name: 'Celine Dion',
        email: 'heartgoeson@crate.com',
        description: 'Recently stepped up my fashion game and love showing off dramatic outfits to match my music',
        address: '123 Crate St.',
        state: 'CO',
        city: 'Boulder',
        zip: '80302',
        image: '/images/uploads/file-1594326938052.png'
    };
    store.dispatch({ type: SET_USER, user });
    const history = createMemoryHistory();
    return {...render(
        <Router history ={history}>
            <Provider store={store}>
                <Profile />
            </Provider>
        </Router>
    ), history }
}

describe("Profile", () => {
    it("should render the Profile component", () => {
        renderWrapper();
    })

    it("should display the user`s profile information", () => {
        const { getByText } = renderWrapper();

        const profileHeader = getByText("My profile");
        const userName = getByText("Celine Dion");
        const userDescription = getByText("Recently stepped up my fashion game and love showing off dramatic outfits to match my music");
        const userEmail = getByText("heartgoeson@crate.com");
        const userAddress = getByText("123 Crate St.", {exact: false});

        expect(profileHeader).toBeInTheDocument();
        expect(userName).toBeInTheDocument();
        expect(userDescription).toBeInTheDocument();
        expect(userEmail).toBeInTheDocument();
        expect(userAddress).toBeInTheDocument();
    })

    it("should display buttons for a user to navigate to other pages", () => {
        const { getByRole } = renderWrapper();

        const subscriptionsButton = getByRole("button", { name: "Subscriptions" });
        const editProfileButton = getByRole("button", { name: "Edit Profile" });
        const logoutButton = getByRole("button", { name: "Logout" });

        expect(subscriptionsButton).toBeInTheDocument();
        expect(editProfileButton).toBeInTheDocument();
        expect(logoutButton).toBeInTheDocument();
    })

    it("should route the user to the Subscriptions page when the corresponding button is clicked", () => {
        const { getByRole, history } = renderWrapper();

        const subscriptionsLink = getByRole("link", { name: "Subscriptions" });
        fireEvent.click(subscriptionsLink);
        expect(history.location.pathname).toBe("/user/subscriptions");
    })

    it("should route the user to the EditProfile page when the corresponding button is clicked", () => {
        const { getByRole, history } = renderWrapper();

        const editProfileLink = getByRole("link", { name: "Edit Profile" });
        fireEvent.click(editProfileLink);
        expect(history.location.pathname).toBe("/user/edit");
    })

    // Still needs testing
    // it("should logout a user when the logout button is clicked", () => {})

})
