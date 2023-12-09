import {
  faChevronDown,
  faChevronUp,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteFormItem, setIsExpanded } from "../redux/resumeSlice";
import Textarea from "./Textarea";
import Input from "./Input";

const FormItems = ({ subItems, type }) => {
  const dispatch = useDispatch();

  return (
    <Droppable droppableId={type} type={`droppableSubItem-${type}`}>
      {(provided) => (
        <div className="items" ref={provided.innerRef}>
          {subItems.map((item, index) => (
            <Draggable
              key={item.id}
              draggableId={item.id.toString()}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  className="items-wrapper"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid rgb(243, 244, 255)",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="item"
                    style={{
                      background: snapshot.isDragging ? "#b19cd9" : "#f3f4ff",
                      ...provided.draggableProps.style,
                    }}
                  >
                    <span className="drag-dots">
                      <img
                        {...provided.dragHandleProps}
                        src="https://www.iconbolt.com/iconsets/radix-icons/drag-handle-dots-2.svg"
                        alt=""
                      />
                    </span>
                    <FontAwesomeIcon
                      className="trash-can"
                      icon={faTrashCan}
                      onClick={() => dispatch(deleteFormItem([type, item.id]))}
                    />

                    <span className="item-name">{item.content}</span>
                    <FontAwesomeIcon
                      className="chevron"
                      onClick={() => dispatch(setIsExpanded([type, item.id]))}
                      icon={item.isExpanded ? faChevronDown : faChevronUp}
                    />
                  </div>

                  {provided.placeholder}
                  {item.isExpanded && (
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
                        // value={
                        // isEditing
                        //   ? savedForm.education.school
                        // : formValues.education.school
                        // }
                        // onInput={handleInputChange}
                      />

                      <Input
                        type="email"
                        title="Degree"
                        name="degree"
                        placeholder="Enter degree/ field of study"
                        // value={
                        //   isEditing
                        //     ? savedForm.education.degree
                        //     : formValues.education.degree
                        // }
                        // onInput={handleInputChange}
                      />
                      <div className="flex-wrap">
                        <Input
                          title="Start Date"
                          name="start"
                          placeholder="Enter start date"
                          // value={
                          //   isEditing
                          //     ? savedForm.education.start
                          //     : formValues.education.start
                          // }
                          // onInput={handleInputChange}
                        />
                        <Input
                          title="End Date"
                          name="end"
                          placeholder="Enter end date"
                          // value={
                          //   isEditing ? savedForm.education.end : formValues.education.end
                          // }
                          // onInput={handleInputChange}
                        />
                      </div>

                      <Textarea
                        // value={
                        //   isEditing
                        //     ? savedForm.education.description
                        //     : formValues.education.description
                        // }
                        // onInput={handleInputChange}
                        title="Description"
                        name="description"
                        addonTag="optional"
                        placeholder="Enter description"
                      />
                    </form>
                  )}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default FormItems;

FormItems.propTypes = {
  type: PropTypes.string,
  subItems: PropTypes.array,
};
