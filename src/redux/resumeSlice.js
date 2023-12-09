import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const formsTitle = [
  "Education",
  "Experience",
  "Projects",
  "Skills",
  "Certificates",
];
const initialState = {
  resumes: [
    {
      id: 1,
      name: "Front-end dev",
      resume: [
        { id: 0, content: "Education", subItems: [{ time: "24 dec",  }] },
        { id: 1, content: "Experience", subItems: [{ time: "24 dec" }] },
        { id: 2, content: "Education", subItems: [{ time: "24 dec" }] },
      ],
    },
  ],
  resume: formsTitle.map((title, index) => ({
    id: index,
    content: title,
    subItems: [],
  })),
  forms: [
    {
      id: 1,
      content: "Education",
      subItems: [
        {
          id: 10,
          content: "Standford University",
        },
        {
          id: 11,
          content: "Hardvard University",
        },
        {
          id: 12,
          content: "Bashkir University",
          time: '17.5'
        },
      ],
    },
    {
      id: 2,
      content: "Experience",
      subItems: [
        {
          id: 20,
          content: "Google ",
        },
        {
          id: 21,
          content: "Meta",
        },
      ],
    },
  ],
  
};

export const resumes = createSlice({
  name: "resumes",
  initialState,
  reducers: {
    setResumes(state, action) {
      state.resumes = action.payload;
    },

    removeResume(state, action) {
      state.resumes = state.resumes.filter(
        (obj) => obj.id !== action.payload.id
      );
    },
    clearResumes(state) {
      state.resumes = [];
    },

    addResume(state) {
      state.resumes.push({ id: uuidv4(), data: state.resume });
    },
    setForms(state, action) {
      state.forms = action.payload;
    },
    deleteFormItem(state, action) {
      const [formId, subItemId] = action.payload;
      state.forms = state.forms.map((form) => {
        if (Number(formId) === form.id) {
          form.subItems = form.subItems.filter(subItem => subItem.id !== Number(subItemId));
        }
        return form;
      });
    }
      // const updatedForms = state.forms.map((form) => {
      //   if (Number(formId) === form.id) {
      //     const updatedSubItems = form.subItems.filter(subItem => subItem.id !== Number(subItemId))
      //     return {...form, subItems: updatedSubItems }
      //   } return form;
      // })
      // setForms(updatedForms);

    // }
  },
});

export const { setResumes, removeResume, clearResumes, addResume, setForms, deleteFormItem } =
  resumes.actions;

export default resumes.reducer;
