import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        error: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts = state.contacts.filter(
                    (contact) => contact.id !== action.payload.id
                );
            })
            .addCase(getContacts.fulfilled, (state, action) => {
                state.contacts = action.payload;
            });
    },
});

export default contactsSlice;