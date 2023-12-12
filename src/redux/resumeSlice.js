import { createSlice } from "@reduxjs/toolkit";

// const formsTitle = [
//   "Education",
//   "Experience",
//   "Projects",
//   "Skills",
//   "Certificates",
// ];
const defaultForm = [
  {
    id: 1,
    content: "Education",
    subItems: [
      {
        id: 10,
        content: "Northeastern University",
        start: "Sep. ’17",
        end: "Dec. ’21",
        degree:
          "Bachelor of Science in Computer Science, Minor in Professional Presentation",
        description:
          "GPA: 3.99 / 4.00. Dean’s scholarship\nCourses: Computer Systems, Networks, Prob. and Stat., Object Oriented Design, Algorithms, Artificial Intelligence\nTeaching Assistant: Discrete Structures (provided once hours, exam reviews, grading), Professional Development for Co-op (provided resume reviews, interview prep, mentorship)",
        isExpanded: false,
      },
    ],
  },
  {
    id: 2,
    content: "Experience",
    subItems: [
      {
        id: 20,
        content: "Facebook",
        position: "Software Engineering Intern",
        start: "Jan. ’21",
        end: "Apr. ’21",
        description:
          "Replaced script-based e-commerce order platform (that handles thousands of daily orders) with a state machine, leading to an 88% decrease in order processing time\nEnabled orders to automatically resolve from certain broken states which previously required manual resolution",
      },
      {
        id: 21,
        content: "Alignable",
        position: "Software Engineering Co-op",
        start: "May ’18",
        end: "Mar. ’20",
        description:
          "Increased forum email click-to-open rate from 22.2% to 65.3% by building aggregations into email infrastructure\nBuilt new comments section for the forum adding nested comments and pagination while supporting conditionally hiding posts for certain users (shadowbanning)",
      },
    ],
  },
  {
    id: 3,
    content: "Skills",
    subItems: [
      {
        id: 10,
        content:
          "Python, Java, C/C++ (familiar), Ruby on Rails, PHP/Hack, Javascript, React, Rust (familiar), Poker",
      },
    ],
  },
  {
    id: 4,
    content: "Projects",
    subItems: [
      {
        id: 1045,
        content: "Sudoku Solver",
        description:
          "Parallel, memoized, low allocation DFS solver beating sudoku puzzles in 3ms",
        tech: "Rust",
        start: "Jan. ’20",
        end: "Mar. ’20",
        link: "github.com/sudoku.34354",
      },
      {
        id: 1045454,
        content: "Ray Tracer",
        description:
          "Parallel ray tracer implementing anti-aliasing, diuse/metal/glass materials, and a movable camera",
        tech: "Rust",
        start: "Jun. ’20",
        end: "Nov. ’21",
        link: "github.com/ray.3t54",
      },
    ],
  },
  {
    id: 245345,
    content: "Personal Details",
    subItems: [
      {
        id: 20,
        email: "simon.wh@dev.com",
        phone: "508-505-6480",
        address: "NYC, US",
        fullName: "Simon White",
      },
    ],
  },
  {
    id: 934873294723,
    content: "Certificates",
    subItems: [
      {
        id: 3432432434,
        content: "IELTS",
        level: "8.0",
      },
    ],
  },
];

const emptyForm = [
  {
    id: 1,
    content: "Education",
    subItems: [
      {
        id: 10,
        content: "",
        start: "",
        end: "",
        degree:
          "",
        description: "",
        isExpanded: false,
      },
    ],
  },
  {
    id: 2,
    content: "Experience",
    subItems: [
      {
        id: 20,
        content: "",
        position: "",
        start: "",
        end: "",
        description:
          "",
      },
    
    ],
  },
  {
    id: 3,
    content: "Skills",
    subItems: [
      {
        id: 10,
        content:""
      },
    ],
  },
  {
    id: 4,
    content: "Projects",
    subItems: [
      {
        id: 1045,
        content: "",
        description:
          "",
        tech: "",
        start: "",
        end: "",
        link: "",
      },
    
    ],
  },
  {
    id: 245345,
    content: "Personal Details",
    subItems: [
      {
        id: 20,
        email: "",
        phone: "",
        address: "",
        fullName: "",
      },
    ],
  },
  {
    id: 934873294723,
    content: "Certificates",
    subItems: [
      {
        id: 3432432434,
        content: "",
        level: "",
      },
    ],
  },
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
  resume: [],

  forms: [
    {
      id: 1,
      content: "Education",
      subItems: [
        {
          id: 10,
          content: "Northeastern University",
          start: "Sep. ’17",
          end: "Dec. ’21",
          degree:
            "Bachelor of Science in Computer Science, Minor in Professional Presentation",
          description:
            "GPA: 3.99 / 4.00. Dean’s scholarship\nCourses: Computer Systems, Networks, Prob. and Stat., Object Oriented Design, Algorithms, Artificial Intelligence\nTeaching Assistant: Discrete Structures (provided once hours, exam reviews, grading), Professional Development for Co-op (provided resume reviews, interview prep, mentorship)",
          isExpanded: false,
        },
      ],
    },
    {
      id: 2,
      content: "Experience",
      subItems: [
        {
          id: 20,
          content: "Facebook",
          position: "Software Engineering Intern",
          start: "Jan. ’21",
          end: "Apr. ’21",
          description:
            "Replaced script-based e-commerce order platform (that handles thousands of daily orders) with a state machine, leading to an 88% decrease in order processing time\nEnabled orders to automatically resolve from certain broken states which previously required manual resolution",
        },
        {
          id: 21,
          content: "Alignable",
          position: "Software Engineering Co-op",
          start: "May ’18",
          end: "Mar. ’20",
          description:
            "Increased forum email click-to-open rate from 22.2% to 65.3% by building aggregations into email infrastructure\nBuilt new comments section for the forum adding nested comments and pagination while supporting conditionally hiding posts for certain users (shadowbanning)",
        },
      ],
    },
    {
      id: 3,
      content: "Skills",
      subItems: [
        {
          id: 10,
          content:
            "Python, Java, C/C++ (familiar), Ruby on Rails, PHP/Hack, Javascript, React, Rust (familiar), Poker",
        },
      ],
    },
    {
      id: 4,
      content: "Projects",
      subItems: [
        {
          id: 1045,
          content: "Sudoku Solver",
          description:
            "Parallel, memoized, low allocation DFS solver beating sudoku puzzles in 3ms",
          tech: "Rust",
          start: "Jan. ’20",
          end: "Mar. ’20",
          link: "github.com/sudoku.34354",
        },
        {
          id: 1045454,
          content: "Ray Tracer",
          description:
            "Parallel ray tracer implementing anti-aliasing, diuse/metal/glass materials, and a movable camera",
          tech: "Rust",
          start: "Jun. ’20",
          end: "Nov. ’21",
          link: "github.com/ray.3t54",
        },
      ],
    },
    {
      id: 245345,
      content: "Personal Details",
      subItems: [
        {
          id: 20,
          email: "simon.wh@dev.com",
          phone: "508-505-6480",
          address: "NYC, US",
          fullName: "Simon White",
        },
      ],
    },
    {
      id: 934873294723,
      content: "Certificates",
      subItems: [
        {
          id: 3432432434,
          content: "IELTS",
          level: "8.0",
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
      state.resumes.push({ id: new Date().getTime(), data: state.resume });
    },
    setForms(state, action) {
      state.forms = action.payload;
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
      console.log(subItem.isExpanded);
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

    loadExample(state) {
      state.forms = defaultForm;
    },

    clearResume(state) {
      state.forms = emptyForm;
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
  setIsExpanded,
  handleInputChange,
  handleKeyDown,
  onDragExpand,
  loadExample,
  clearResume,
} = resumes.actions;

export default resumes.reducer;
