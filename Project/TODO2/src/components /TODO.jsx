function TODO({todoname, tododate,seeting}) {
  return (
    <div className="container ">
      <div class="row myRow">
        <div class="col-6 col-md-4">{todoname}</div>
        <div class="col-6 col-md-4">{tododate}</div>
        <div class="col-4 col-md-2">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => seeting(todoname)}
          >
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default TODO;
