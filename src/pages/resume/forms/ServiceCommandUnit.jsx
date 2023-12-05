import { Droppable, Draggable } from "@hello-pangea/dnd";
import PropTypes from "prop-types";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  margin: `0 10px 10px 0`,
  display: "inline-flex",
  width: "120px",
  padding: "10px",
  background: isDragging ? "lightgreen" : "grey",
  border: "1px solid grey",
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  margin: "10px 0",
});

const ServiceCommandUnit = ({ type, subItems }) => {
  return (
    <Droppable droppableId={type} type={`droppableSubItem-${type}`}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
          {subItems.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
              {(provided, snapshot) => (
                <div style={{ display: "flex" }}>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {item.content}
                    <span
                      {...provided.dragHandleProps}
                      style={{
                        display: "block",
                        margin: "0 10px",
                        border: "1px solid #000",
                      }}
                    >
                      Drag
                    </span>
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

ServiceCommandUnit.propTypes = {
  type: PropTypes.string,
  subItems: PropTypes.array,
}
export default ServiceCommandUnit;