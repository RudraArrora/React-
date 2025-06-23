function AppTodo(){
  return (
    <div class="container item-container">
      <div class="row myRow">
        <div class="col-6 col-md-4">
          <input type="text" placeholder="Enter The ToDo Work"></input>
        </div>
        <div class="col-6 col-md-4">
          <input type="date"></input>
        </div>
        <div class="col-4 col-md-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  ); 
}
export default AppTodo;