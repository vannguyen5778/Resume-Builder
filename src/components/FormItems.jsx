import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types";

const FormItems = ({ subItems, type }) => {
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
                    {...provided.dragHandleProps}
                    className="item"
                    style={{
                      background: snapshot.isDragging ? "#b19cd9" : "#f3f4ff",
                      ...provided.draggableProps.style,
                    }}
                  >
                    <span className="item-name">{item.content}</span>
                    <FontAwesomeIcon className="chevron" icon={faChevronDown} />
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
