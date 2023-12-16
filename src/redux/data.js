export const defaultForm = [
    {
      id: 4534546,
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
      id: 65734543,
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
      id: 45346463,
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
      id: 7684835,
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
  
export const emptyForm = [
    {
      id: 574537,
      content: "Education",
      subItems: [
        {
          id: 10,
          content: "",
          start: "",
          end: "",
          degree: "",
          description: "",
          isExpanded: false,
        },
      ],
    },
    {
      id: 242345,
      content: "Experience",
      subItems: [
        {
          id: 20,
          content: "",
          position: "",
          start: "",
          end: "",
          description: "",
        },
      ],
    },
    {
      id: 546365,
      content: "Skills",
      subItems: [
        {
          id: 10,
          content: "",
        },
      ],
    },
    {
      id: 89798,
      content: "Projects",
      subItems: [
        {
          id: 1045,
          content: "",
          description: "",
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

export const emptyResume = {
  id: null,
  title: "",
  imgUrl: "",
  lastUpdate: "",
  data: emptyForm,
}