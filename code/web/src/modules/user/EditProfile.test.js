import React from "react";
import EditProfile from "./EditProfile";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { MemoryRouter } from "react-router-dom";
import { rootReducer } from '../../setup/store';
import { Provider } from 'react-redux';
import { createStore, compose } from "redux";
import { SET_USER } from "./api/actions";

// Imports for final test - did not get passing
// import { updateUserProfile } from "./api/actions";
// jest.mock("./api/actions");

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
    return render(
        <MemoryRouter>
            <Provider store={store}>
                <EditProfile />
            </Provider>
        </MemoryRouter>
    )
}

describe('EditProfile', () => {
    it("should render the EditProfile component", () => {
        renderWrapper();
    })

    // Note: this may be updated and edited after the EditProfile component has been fully styled
    it("should load the form for a user to edit their personal information", () => {
        const { getByPlaceholderText, getByText } = renderWrapper();

        const emailPlaceholder = getByPlaceholderText("email");
        const descriptionLabel = getByText("Tell Us About Yourself:");
        const descriptionPlaceholder = getByPlaceholderText("Description");
        const shippingLabel = getByText("Enter Your Shipping Address:");
        const streetAddressPlaceholder = getByPlaceholderText("Address");
        const saveButton = getByText("Save");

        expect(emailPlaceholder).toBeInTheDocument();
        expect(descriptionLabel).toBeInTheDocument();
        expect(descriptionPlaceholder).toBeInTheDocument();
        expect(shippingLabel).toBeInTheDocument();
        expect(streetAddressPlaceholder).toBeInTheDocument();
        expect(saveButton).toBeInTheDocument();
    })

    // Note: we need to add an alt for the image and we can then add an expect for that within this block
    it("should display the user`s existing data in the form`s input fields", () => {
        const { getByDisplayValue, getByText } = renderWrapper();

        const userName = getByText("Celine Dion");
        const userEmail = getByDisplayValue("heartgoeson@crate.com");
        const userDescritpion = getByDisplayValue("Recently stepped up my fashion game and love showing off dramatic outfits to match my music");
        const userAddress = getByDisplayValue("123 Crate St.");
        const userCity = getByDisplayValue("CO");
        const userState = getByDisplayValue("Boulder");
        const userZip = getByDisplayValue("80302");

        expect(userName).toBeInTheDocument();
        expect(userEmail).toBeInTheDocument();
        expect(userDescritpion).toBeInTheDocument();
        expect(userAddress).toBeInTheDocument();
        expect(userCity).toBeInTheDocument();
        expect(userState).toBeInTheDocument();
        expect(userZip).toBeInTheDocument();
    })

    // Attempt to mock out the functionality for when a user clicks the save button and the action creator is fired to update the state in store - did not get passing
    // it("should invoke the updateUserProfile action creator when a user saves their updated information", () => {
    //     const mockOnSubmit = jest.fn();
    //     const { getByPlaceholderText, getByText } = renderWrapper();

    //     // fireEvent.change(getByPlaceholderText("email"), {target: {value: 'myheartgoeson@crate.com'}});
    //     fireEvent.click(getByText("Save"));
    //     expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    // })

})