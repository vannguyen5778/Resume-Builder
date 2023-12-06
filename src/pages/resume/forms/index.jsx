import { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Form from "../../../components/Form";

const static_items = [
  {
    id: 1,
    content: "Education",
    subItems: [
      {
        id: 10,
        content: "Standford University",
      },
      {
        id: 11,
        content: "Hardvard University",
      },
    ],
  },
  {
    id: 2,
    content: "Experience",
    subItems: [
      {
        id: 20,
        content: "Google ",
      },
      {
        id: 21,
        content: "Meta",
      },
    ],
  },
];

const Forms = () => {
  const [items, setItems] = useState(static_items);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

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
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" type="droppableItem">
          {(provided) => (
            <div ref={provided.innerRef} className="forms">
              {items.map((item, index) => (
                <Form
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                  formTitle={item.content}
                  subItems={item.subItems}
                  subItemsType={item.id.toString()}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Forms;
