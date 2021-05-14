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
        predicting_date: "Loading...",
      },
      weekly: {
        start_date: "Loading...",
        end_date: "Loading...",
        prediction: "Loading...",
        trend: "Loading...",
        action: "Loading...",
        color: "",
        predicting_date: "Loading...",
      },
    };
  }

  componentDidMount() {
    this.retrieveDailyPrediction();
    this.retrieveWeeklyPrediction();
  }

  retrieveDailyPrediction() {
    ForexDataService.getEurUsd("daily")
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
    ForexDataService.getEurUsd("weekly")
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
    const { daily, weekly } = this.state;

    return (
      <div>
        <br />
        <center>
          <Container>
            <Row>
              <Col class="col-sm">
                <Card style={{ width: "20rem", "border-color": daily.color }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                  <Card.Body>
                    <Card.Title>Daily - EUR/USD</Card.Title>
                    <Card.Text>
                      Predict Close Price on <br /> {daily.predicting_date}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Prediction: {daily.prediction}
                    </ListGroupItem>
                    <ListGroupItem>Trend: {daily.trend}</ListGroupItem>
                    <ListGroupItem style={{ color: daily.color }}>
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
                <Card style={{ width: "20rem", "border-color": daily.color }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                  <Card.Body>
                    <Card.Title>Weekly - EUR/USD</Card.Title>
                    <Card.Text>
                      Predicting Close Price on <br /> {weekly.predicting_date}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Prediction: {weekly.prediction}
                    </ListGroupItem>
                    <ListGroupItem>Trend: {weekly.trend}</ListGroupItem>
                    <ListGroupItem style={{ color: daily.color }}>
                      Action: {weekly.action}
                    </ListGroupItem>
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
        <br />
      </div>
    );
  }
}
