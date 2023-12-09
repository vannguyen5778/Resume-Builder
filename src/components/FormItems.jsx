import { faChevronDown, faChevronUp, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types";
import { useState } from "react";

const FormItems = ({ subItems, type }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  // const [isFormOpen, setFormOpen] = useState(false);

  const handleChevron = (e) => {
    e.stopPropagation();
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    console.log("hello");
  };

  // const handleDelete = (index) => {

  // }

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
                <div className="items-wrapper" style={{ display: "flex" }}>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    // {...provided.dragHandleProps}
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
              <FontAwesomeIcon className="trash-can" icon={faTrashCan} onClick={() => {handleDelete(index)}}/>

                    <span className="item-name">{item.content}</span>
                    <FontAwesomeIcon
                      className="chevron"
                      onclick={(e) => handleChevron(e)}
                      icon={isExpanded ? faChevronDown : faChevronUp}
                    />
                  </div>

                  {provided.placeholder}
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
