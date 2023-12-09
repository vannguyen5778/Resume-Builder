import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Form from "../../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { setForms } from "../../../redux/resumeSlice";

const Forms = () => {
  const forms = useSelector((state) => state.resumes.forms);
  const dispatch = useDispatch();

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
        forms,
        result.source.index,
        result.destination.index
      );
      dispatch(setForms(updatedItems));
    } else if (result.type.includes("droppableSubItem")) {
      const parentId = parseInt(result.type.split("-")[1]);
      const itemSubItemMap = forms.reduce((acc, form) => {
        acc[form.id] = form.subItems;
        return acc;
      }, {});

      const subItemsForCorrespondingParent = itemSubItemMap[parentId];
      const reorderedSubItems = Array.from(subItemsForCorrespondingParent);
      const [removed] = reorderedSubItems.splice(result.source.index, 1);
      reorderedSubItems.splice(result.destination.index, 0, removed);
      const newItems = forms.map((form) => {
        if (form.id === parentId) {
          return { ...form, subItems: reorderedSubItems };
        }
        return form;
      });

      dispatch(setForms(newItems));
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" type="droppableItem">
          {(provided) => (
            <div ref={provided.innerRef} className="forms">
              {forms.map((form, index) => (
                <Form
                  key={form.id}
                  draggableId={form.id.toString()}
                  index={index}
                  formTitle={form.content}
                  subItems={form.subItems}
                  subItemsType={form.id.toString()}
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
