import TODO from "./TODO";
function All({ todoItems }) {
  console.log(todoItems)
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TODO todoname={item.name} tododate={item.duedate}></TODO>
        ))}
      </div>
    </>
  );
   
}
export default All;