import { Draggable } from "@hello-pangea/dnd";
import GripDots from "./GripDots";
import PropTypes from "prop-types";

const Form = ({ title, children,  index }) => {
  return (
    <Draggable draggableId={title} index={index}>
        {(provided, snapshot) => (
    <div className="form" ref={provided.innerRef} {...provided.draggableProps}>
      <GripDots isDragging={snapshot.isDragging} />
      <h3 className="title"  {...provided.dragHandleProps}>{title}</h3>
      <div className="items">{children}</div>
    </div>

        )}
    </Draggable>
  );
};

export default Form;

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};
