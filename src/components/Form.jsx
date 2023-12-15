import { Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types";
import FormItems from "./FormItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { addFormItem } from "../redux/resumeSlice";
import { useDispatch } from "react-redux";

const Form = ({
  key,
  draggableId,
  index,
  formTitle,
  subItems,
  subItemsType,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <Draggable draggableId={draggableId} index={index}>
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
                <FontAwesomeIcon
                  className="add-item"
                  icon={faCirclePlus}
                  onClick={() => dispatch(addFormItem(Number(draggableId)))}
                />
              </div>
              <FormItems
                subItems={subItems}
                type={subItemsType}
                formTitle={formTitle}
              />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
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
