import { useDispatch } from "react-redux";
import { handleInputChange } from "../redux/resumeSlice";
import Input from "./Input";
import PropTypes from "prop-types";
import Textarea from "./Textarea";

export const FormField = ({ item, type, formTitle }) => {
  const dispatch = useDispatch();
  console.log(formTitle);
  switch (formTitle) {
    case "Experience":
      return (
        <form
          id="experience"
          className="experience ctn"
          target="_blank"
          method="POST"
        >
          <Input
            title="Company name"
            name="company"
            placeholder="Enter company name"
            value={item.content}
            onInput={(e) =>
              dispatch(
                handleInputChange([type, item.id, "content", e.target.value])
              )
            }
          />

          <Input
            title="Position title"
            name="position"
            placeholder="Enter position title"
            value={item.position}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />

          <div className="flex-wrap">
            <Input
              title="Start Date"
              name="start"
              placeholder="Enter start date"
              value={item.start}
              onInput={(e) =>
                dispatch(
                  handleInputChange([
                    type,
                    item.id,
                    e.target.name,
                    e.target.value,
                  ])
                )
              }
            />
            <Input
              title="End Date"
              name="end"
              placeholder="Enter end date"
              value={item.end}
              onInput={(e) =>
                dispatch(
                  handleInputChange([
                    type,
                    item.id,
                    e.target.name,
                    e.target.value,
                  ])
                )
              }
            />
          </div>
          <Textarea
            title="Description"
            name="description"
            addonTag="optional"
            placeholder="Enter description"
            value={item.description}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />
        </form>
      );

    case "Education":
      return (
        <form
          id="education"
          className="education ctn"
          target="_blank"
          method="POST"
        >
          <Input
            title="School"
            name="school"
            placeholder="Enter school/ university"
            value={item.content}
            onInput={(e) =>
              dispatch(
                handleInputChange([type, item.id, "content", e.target.value])
              )
            }
          />

          <Input
            type="email"
            title="Degree"
            name="degree"
            placeholder="Enter degree/ field of study"
            value={item.degree}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />
          <div className="flex-wrap">
            <Input
              title="Start Date"
              name="start"
              placeholder="Enter start date"
              value={item.start}
              onInput={(e) =>
                dispatch(
                  handleInputChange([
                    type,
                    item.id,
                    e.target.name,
                    e.target.value,
                  ])
                )
              }
            />
            <Input
              title="End Date"
              name="end"
              placeholder="Enter end date"
              value={item.end}
              onInput={(e) =>
                dispatch(
                  handleInputChange([
                    type,
                    item.id,
                    e.target.name,
                    e.target.value,
                  ])
                )
              }
            />
          </div>

          <Textarea
            title="Description"
            name="description"
            addonTag="optional"
            placeholder="Enter description"
            value={item.description}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />
        </form>
      );

    case "Projects":
      return (
        <form
          id="projects"
          className="projects ctn"
          target="_blank"
          method="POST"
        >
          <Input
            title="Project title"
            name="project"
            placeholder="Enter project title"
            value={item.content}
            onInput={(e) =>
              dispatch(
                handleInputChange([type, item.id, "content", e.target.value])
              )
            }
          />

          <Textarea
            title="Description"
            name="description"
            placeholder="Enter description"
            value={item.description}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />
          <Input
            title="Technologies"
            name="tech"
            placeholder="Enter technologies used"
            value={item.tech}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />
          <div className="flex-wrap">
            <Input
              title="Start date"
              name="start"
              placeholder="Enter start date"
              value={item.start}
              onInput={(e) =>
                dispatch(
                  handleInputChange([
                    type,
                    item.id,
                    e.target.name,
                    e.target.value,
                  ])
                )
              }
            />
            <Input
              title="End date"
              name="end"
              placeholder="Enter end date"
              value={item.end}
              onInput={(e) =>
                dispatch(
                  handleInputChange([
                    type,
                    item.id,
                    e.target.name,
                    e.target.value,
                  ])
                )
              }
            />
          </div>
          <Input
            title="Demo link"
            name="link"
            addonTag="optional"
            placeholder="Enter demo link"
            value={item.link}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />
        </form>
      );

    case "Skills":
      return (
        <form id="skills" className="skills ctn" target="_blank" method="POST">
          <Textarea
            placeholder="Enter skills"
            name="skills"
            rows={2}
            value={item.content}
            onInput={(e) =>
              dispatch(
                handleInputChange([type, item.id, "content", e.target.value])
              )
            }
          ></Textarea>
        </form>
      );

    case "Certificates":
      return (
        <form
          id="certificates"
          className="certificates ctn"
          target="_blank"
          method="POST"
        >
          <Input
            title="Certificate title"
            name="certificate"
            placeholder="Enter title of the certificate"
            value={item.content}
            onInput={(e) =>
              dispatch(
                handleInputChange([type, item.id, "content", e.target.value])
              )
            }
          />
          <Input
            title="Level"
            name="level"
            placeholder="Enter level of the certificate"
            value={item.level}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />
        </form>
      );

    case "PersonalInfo":
      return (
        <form
          id="personaldetails"
          className="personal-details ctn"
          target="_blank"
          method="POST"
        >
          <Input
            title="Full name"
            name="fullName"
            id="fullName"
            placeholder="Enter first and last name"
            value={item.fullName}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />

          <Input
            type="email"
            title="Email"
            name="email"
            addonTag="recommended"
            placeholder="Enter email"
            value={item.email}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />
          <Input
            type="tel"
            title="Phone number"
            name="phone"
            addonTag="recommended"
            placeholder="Enter phone number"
            value={item.phone}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />
          <Input
            title="Address"
            name="address"
            addonTag="recommended"
            placeholder="City, Country"
            value={item.address}
            onInput={(e) =>
              dispatch(
                handleInputChange([
                  type,
                  item.id,
                  e.target.name,
                  e.target.value,
                ])
              )
            }
          />
        </form>
      );
  }
};

FormField.propTypes = {
  item: PropTypes.object,
  formTitle: PropTypes.string,
  type: PropTypes.string,
};
