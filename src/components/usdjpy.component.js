import React, { Component } from "react";
import ForexDataService from "../services/forex.service";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem, Container, Col, Row } from "reactstrap";

export default class EURUSD extends Component {
  constructor(props) {
    super(props);
    this.retrieveDailyPrediction = this.retrieveDailyPrediction.bind(this);
    this.retrieveWeeklyPrediction = this.retrieveWeeklyPrediction.bind(this);

    this.state = {
      daily: {
        start_date: "Loading...",
        end_date: "Loading...",
        prediction: "Loading...",
        trend: "Loading...",
        action: "Loading...",
        color: "",
      },
      weekly: {
        start_date: "Loading...",
        end_date: "Loading...",
        prediction: "Loading...",
        trend: "Loading...",
        action: "Loading...",
        color: "",
      },
    };
  }

  componentDidMount() {
    this.retrieveDailyPrediction();
    this.retrieveWeeklyPrediction();
  }

  retrieveDailyPrediction() {
    ForexDataService.getUsdJpy("daily")
      .then((res) => {
        this.setState({
          daily: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  retrieveWeeklyPrediction() {
    ForexDataService.getUsdJpy("weekly")
      .then((res) => {
        this.setState({
          weekly: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { daily, weekly, color } = this.state;

    return (
      <div>
        <center>
          <Container>
            <Row>
              <Col class="col-sm">
                <Card style={{ width: "20rem", "border-color": color }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                  <Card.Body>
                    <Card.Title>Daily</Card.Title>
                    <Card.Text>Prediction of USD/JPY Daily.</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Prediction: {daily.prediction}
                    </ListGroupItem>
                    <ListGroupItem>Trend: {daily.trend}</ListGroupItem>
                    <ListGroupItem style={{ color: color }}>
                      Action: {daily.action}
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Footer>
                    <small className="text-muted">
                      Last Time Frame Date: {daily.end_date}
                    </small>
                  </Card.Footer>
                </Card>
                <br />
              </Col>
              <Col class="col-sm">
                <Card style={{ width: "20rem" }} bg={"primart"}>
                  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                  <Card.Body>
                    <Card.Title>Weekly</Card.Title>
                    <Card.Text>Prediction of USD/JPY Weekly.</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Prediction: {weekly.prediction}
                    </ListGroupItem>
                    <ListGroupItem>Trend: {weekly.trend}</ListGroupItem>
                    <ListGroupItem>Action: {weekly.action}</ListGroupItem>
                  </ListGroup>
                  <Card.Footer>
                    <small className="text-muted">
                      Last Time Frame Date: {weekly.end_date}
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        </center>
      </div>
    );
  }
}
