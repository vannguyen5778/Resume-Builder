import { createSlice } from "@reduxjs/toolkit";
import { convertUnixtoDate } from "../utils/convertUnixToDate";
import { emptyForm, defaultForm, emptyResume } from "./data";

const initialState = {
  resumes: [],
  forms: [],
};

export const resumes = createSlice({
  name: "resumes",
  initialState,
  reducers: {
    setResumes(state, action) {
      state.resumes = action.payload;
    },

    clearResumes(state) {
      state.resumes = [];
    },

    addResume(state, action) {
      const resumeId = action.payload;
      if (!state.resumes.some((resume) => resume.id === resumeId)) {
        const newResume = {
          id: resumeId,
          lastUpdate: convertUnixtoDate(Date.now()),
          data: defaultForm,
          imgUrl: "",
          title: "Untitled",
        };

        state.resumes.push(newResume);
        console.log(state.resumes.length);
        state.forms = newResume.data;
      }
    },

    setForms(state, action) {
      state.forms = action.payload;
    },

    loadExample(state) {
      state.forms = defaultForm;
    },

    clearResume(state) {
      state.forms = emptyForm;
    },
    removeResume(state, action) {
      state.resumes = state.resumes.filter(
        (obj) => obj.id !== action.payload.id
      );
    },

    setResume(state, action) {
      const resumeId = action.payload;
      const resume = state.resumes.find(
        (resume) => resume.id === Number(resumeId)
      );
      state.forms = resume.data;
    },

    saveResume(state, action) {
      const [resumeId, imgUrl] = action.payload;
      const resume = state.resumes.filter(
        (resume) => resume.id === Number(resumeId)
      );
      if (resume) {
        resume[0].data = state.forms;
        resume[0].imgUrl = imgUrl;
        resume[0].lastUpdate = convertUnixtoDate(Date.now());
        const uniqueArr = [...new Set(state.resumes)];
        state.resumes = uniqueArr;
      } else {
        console.log("no resume found");
      }
    },

    updateResumeTitle(state, action) {
      const [resumeId, value] = action.payload;
      const resume = state.resumes.find(
        (resume) => resume.id === Number(resumeId)
      );
      resume["title"] = value;
    },
    deleteFormItem(state, action) {
      const [formId, subItemId] = action.payload;
      state.forms.forEach((form) => {
        if (Number(formId) === form.id) {
          form.subItems = form.subItems.filter(
            (subItem) => subItem.id !== Number(subItemId)
          );
        }
      });
    },
    addFormItem(state, action) {
      const formId = action.payload;
      state.forms.forEach((form) => {
        if (Number(formId) === form.id) {
          form.subItems.forEach((subItem) => ({
            ...subItem,
            isExpanded: false,
          }));
          form.subItems.push({
            id: new Date().getTime(),
            content: "Not specified",
            isExpanded: true,
          });
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
        } else {
          form.subItems = form.subItems.map((subItem) => ({
            ...subItem,
            isExpanded: false,
          }));
        }
        return form;
      });
    },

    onDragExpand(state, action) {
      const [formId, subItemId, isExpandedState] = action.payload;
      const form = state.forms.find((form) => form.id === Number(formId));
      const subItem = form.subItems.find((subItem) => subItemId === subItem.id);
      subItem.isExpanded = isExpandedState;
    },

    handleInputChange(state, action) {
      const [formId, subItemId, name, value] = action.payload;
      const form = state.forms.find((form) => form.id === Number(formId));
      const subItem = form.subItems.find((subItem) => subItemId === subItem.id);
      subItem[name] = value;
    },

    handleKeyDown(state, action) {
      const [formId, subItemId, name] = action.payload;
      const form = state.forms.find((form) => form.id === Number(formId));
      const subItem = form.subItems.find((subItem) => subItemId === subItem.id);
      subItem[name].trim();

      if (subItem[name] !== "") {
        subItem[name] += "/n";
      }
    },
  },
});

export const {
  setResumes,
  removeResume,
  saveResume,
  clearResumes,
  addResume,
  setForms,
  deleteFormItem,
  addFormItem,
  setIsExpanded,
  handleInputChange,
  handleKeyDown,
  onDragExpand,
  loadExample,
  clearResume,
  setResume,
  updateResumeTitle,
} = resumes.actions;

export default resumes.reducer;
