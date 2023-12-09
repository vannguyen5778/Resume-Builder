import { Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types";
import FormItems from "./FormItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import Textarea from "./Textarea";
import Buttons from "./Buttons";
import { useState } from "react";

const Form = ({
  key,
  draggableId,
  index,
  formTitle,
  subItems,
  subItemsType,
}) => {


  return (
    
    <>
      <Draggable key={key} draggableId={draggableId} index={index}>
        {(provided, snapshot) => (
          <div>
            <div
              className="form"
              ref={provided.innerRef}
              {...provided.draggableProps}
              style={{
                boxShadow: snapshot.isDragging
                  ? "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                  : "none",
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
              <div className="header">
                <h3 className="title">{formTitle}</h3>
                <FontAwesomeIcon className="add-item" icon={faCirclePlus} />
              </div>
              <FormItems subItems={subItems} type={subItemsType} />
            </div>

            {provided.placeholder}
          </div>
        )}
      </Draggable>
      <form
        id="education"
        className="education ctn"
        target="_blank"
        // onSubmit={onSubmit}
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

        {/* <Buttons /> */}
      </form>
    </>
  );
};

export default Form;

Form.propTypes = {
  key: PropTypes.number,
  draggableId: PropTypes.string,
  index: PropTypes.number,
  formTitle: PropTypes.string,
  subItems: PropTypes.array,
  subItemsType: PropTypes.string,
};
