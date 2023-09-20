import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit"

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'



export const addContact = createAsyncThunk(
    'contacts/add',
    async (contact, thukAPI) => {
        try {

            const responce = await axios.post('contacts', contact)
            return responce.data

        } catch (error) {
            return thukAPI.rejectWithValue(error.message)
        }
    }
)
export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async (_, thukAPI) => {
        try {

            const responce = await axios.get('contacts')
            return responce.data

        } catch (error) {
            return thukAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thukAPI) => {
        try {

            const responce = await axios.delete(`contacts/${id}`)
            return responce.data
        } catch (error) {
            return thukAPI.rejectWithValue(error.message)
        }
    }
)