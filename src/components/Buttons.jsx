
  
  const Buttons = () => {
    // const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    //   e.preventDefault();
    //   setForm(false);
    //   resetFormValues();
    //   deleteElement();
    // };
    // const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    //   e.preventDefault();
    //   resetFormValues();
    //   setForm(false);
    // };
    // const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    //   e.preventDefault();
    //   displayElement();
    //   resetFormValues();
    //   setForm(false);
    // };
  
    return (
      <div className="buttons">
        <button className="white" >
          <p>Delete</p>
        </button>
        <div className="flex-wrap">
          <button className="white" >
            Cancel
          </button>
          <button className="blue" >
            Save
          </button>
        </div>
      </div>
    );
  };
  
  export default Buttons;
  