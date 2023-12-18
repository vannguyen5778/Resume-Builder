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
import { FormField } from "./InputFields";

const FormItems = ({ subItems, type, formTitle }) => {
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
                    <FormField item={item} type={type} formTitle={formTitle} />
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
  formTitle: PropTypes.string,
  subItems: PropTypes.array,
};
