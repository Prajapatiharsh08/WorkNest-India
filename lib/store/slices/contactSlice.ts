import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

interface ContactState {
  loading: boolean
  success: boolean
  error: string | null
  message: string | null
}

const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
  message: null,
}

// Async thunk for sending contact form
// export const sendContactForm = createAsyncThunk(
//   "contact/sendForm",
//   async (formData: ContactFormData, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         return rejectWithValue(data.message || "Failed to send message")
//       }

//       return data
//     } catch (error) {
//       return rejectWithValue("Network error. Please check your connection and try again.")
//     }
//   },
// )

export const sendContactForm = createAsyncThunk(
  "contact/sendForm",
  async (formData: ContactFormData, { rejectWithValue }) => {
    try {
      const response = await fetch("https://globuz.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "cors", // ye explicitly CORS request banata hai
        // credentials: "include", // uncomment karo agar cookies ya auth headers use ho rahe ho
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || "Failed to send message");
      }

      return data;
    } catch (error) {
      return rejectWithValue(
        "Network error. Please check your connection and try again."
      );
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactState: (state) => {
      state.loading = false
      state.success = false
      state.error = null
      state.message = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.loading = true
        state.success = false
        state.error = null
        state.message = null
      })
      .addCase(sendContactForm.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.message = action.payload.message
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.loading = false
        state.success = false
        state.error = action.payload as string
        state.message = null
      })
  },
})

export const { resetContactState } = contactSlice.actions
export default contactSlice.reducer
