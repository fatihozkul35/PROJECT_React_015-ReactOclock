import { Container, Row } from "react-bootstrap";
import "./Oclock.css";
import { useEffect, useState } from "react";
const Oclock = () => {
  const [oclock, setOclock] = useState("");
  function formatTime(val) {
    if (val < 10) {
      return 0;
    } else {
      return "";
    }
  }

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);

    //cleanup
    return function cleanup() {
      clearInterval(timer);
    };
  });
  function tick() {
    const nowTime = new Date();
    const hour = nowTime.getHours();
    const minute = nowTime.getMinutes();
    const second = nowTime.getSeconds();

    return setOclock(
      formatTime(hour) +
        hour +
        ":" +
        formatTime(minute) +
        minute +
        ":" +
        formatTime(second) +
        second
    );
  }
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="title mt-5 mb-5">Oclock Project</h1>
      <Row className="mt-5">
        {!oclock ? "" : <div className="oclock">{oclock}</div>}
      </Row>
    </Container>
  );
};

export default Oclock;
