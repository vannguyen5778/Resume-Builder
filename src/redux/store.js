import { configureStore } from '@reduxjs/toolkit'
import resumes  from './resumeSlice'
export const store = configureStore({
  reducer: {resumes},
})