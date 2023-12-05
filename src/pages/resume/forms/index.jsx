import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import ServiceCommandUnit from "./ServiceCommandUnit";

const static_items = [
  {
    id: 1,
    content: "item 1 content",
    subItems: [
      {
        id: 10,
        content: "SubItem 10 content",
      },
      {
        id: 11,
        content: "SubItem 11 content",
      },
    ],
  },
  {
    id: 2,
    content: "item 2 content",
    subItems: [
      {
        id: 20,
        content: "SubItem 20 content",
      },
      {
        id: 21,
        content: "SubItem 21 content",
      },
    ],
  },
];

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 700,
});

const Forms = () => {
  const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
    
        return result;
      };
    
  const [items, setItems] = useState(static_items);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (result.type === "droppableItem") {
      const updatedItems = reorder(
                items,
                result.source.index,
                result.destination.index
              );
      setItems(updatedItems);
    } else if (result.type.includes("droppableSubItem")) {
      const parentId = parseInt(result.type.split("-")[1]);
      const itemSubItemMap = items.reduce((acc, item) => {
        acc[item.id] = item.subItems;
        return acc;
      }, {});
      
      const subItemsForCorrespondingParent = itemSubItemMap[parentId];
      const reorderedSubItems = Array.from(subItemsForCorrespondingParent);
      const [removed] = reorderedSubItems.splice(result.source.index, 1);
      reorderedSubItems.splice(result.destination.index, 0, removed);
      const newItems = items.map((item) => {
        if (item.id === parentId) {
          item.subItems = reorderedSubItems;
        }
        return item;
      });
      setItems(newItems);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" type="droppableItem">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                {(provided, snapshot) => (
                  <div>
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
                          display: "inline-block",
                          margin: "0 10px",
                          border: "1px solid #000",
                        }}
                      >
                        Drag
                      </span>
                      <ServiceCommandUnit
                        subItems={item.subItems}
                        type={item.id.toString()}
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
    </DragDropContext>
  );
};

export default Forms;



{
  /* <DragDropContext >
      <Droppable droppableId="section-ctn" direction="vertical">
        {(provided) => (

        <div className="forms" ref={provided.innerRef} {...provided.droppableProps}>

          <Form key="1" index="1" title="Education">
            <FormItem title="Stanford Univesity" />
          </Form>
          <Form key="2" index="2" title="Education">
            <FormItem title="Stanford Univesity" />
          </Form>
        
          {provided.placeholder}
        </div>
        )}
      </Droppable>
    </DragDropContext> */
}
