import { Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types";
import FormItems from "./FormItems";

const Form = ({
  key,
  draggableId,
  index,
  formTitle,
  subItems,
  subItemsType,
}) => {
  return (
    <Draggable key={key} draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <div>
          <div
            className="form"
            ref={provided.innerRef}
            {...provided.draggableProps}
            style={{
              boxShadow: snapshot.isDragging ? "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" : "none",
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

            <h3 className="title">{formTitle}</h3>
            <FormItems subItems={subItems} type={subItemsType} />
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
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
