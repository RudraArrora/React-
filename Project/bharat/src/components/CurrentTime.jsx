function CurrentTime() {
    let time = new Date();
  return <p>The Time Is : {time.toDateString()} ---{time.toTimeString()} </p>;
}

export default CurrentTime;
