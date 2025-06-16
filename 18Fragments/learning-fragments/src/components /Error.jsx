function Error(props) {
  let emptymeaasge =
    props.itemsnew.length === 0 ? <h3>I am Still Hunagry</h3> : null;

  return <>{emptymeaasge}</>;
}

export default Error;
