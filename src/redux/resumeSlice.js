import { createSlice } from "@reduxjs/toolkit";

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
        { id: 0, content: "Education", subItems: [{ time: "24 dec" }] },
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
          isExpanded: false,
        },
        {
          id: 11,
          content: "Hardvard University",
          isExpanded: false,

        },
        {
          id: 12,
          content: "Bashkir University",
          time: "17.5",
          isExpanded: false,

        },
        { id: new Date().getTime(), content: "Not specified" },
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
  // const [formValues, setFormValues] = useState<FormValues>({
  //   personalInfo: {
  //     fullName: "",
  //     email: "",
  //     phone: undefined,
  //     address: "",
  //   },

  //   education: {
  //     school: "",
  //     degree: "",
  //     start: "",
  //     end: "",
  //     description: "",
  //   },
  //   experience: {
  //     company: "",
  //     position: "",
  //     start: "",
  //     end: "",
  //     description: "",
  //   },
  //   projects: {
  //     project: "",
  //     description: "",
  //     tech: "",
  //     start: "",
  //     end: "",
  //     link: "",
  //   },
  //   skills: {
  //     skills: "",
  //   },
  //   certificates: {
  //     certificate: "",
  //     level: "",
  //   },
  // });
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
      state.resumes.push({ id: new Date().getTime(), data: state.resume });
    },
    setForms(state, action) {
      state.forms = action.payload;
    },
    deleteFormItem(state, action) {
      const [formId, subItemId] = action.payload;
      state.forms = state.forms.map((form) => {
        if (Number(formId) === form.id) {
          form.subItems = form.subItems.filter(
            (subItem) => subItem.id !== Number(subItemId)
          );
        }
        return form;
      });
    },
    addFormItem(state, action) {
      const formId = action.payload;
      state.forms = state.forms.map((form) => {
        if (formId === form.id) {
          form.subItems = form.subItems.map((subItem) => ({
            ...subItem,
            isExpanded: false,
          }));
          form.subItems.push({id: new Date().getTime(), content: "Not specified", isExpanded: true});
        }
        return form;
      });
    },
   
    setIsExpanded(state, action) {
      const [formId, subItemId] = action.payload;
      state.forms = state.forms.map((form) => {
        if (Number(formId) === form.id) {
          form.subItems = form.subItems.map((subItem) => {
            if (subItem.id === Number(subItemId)) {
              return { ...subItem, isExpanded: !subItem.isExpanded };
            } else {
              return { ...subItem, isExpanded: false };
            }
          });
        }
        return form;
      });
    }
  },
});

export const {
  setResumes,
  removeResume,
  clearResumes,
  addResume,
  setForms,
  deleteFormItem,
  addFormItem,
  setIsExpanded
} = resumes.actions;

export default resumes.reducer;
