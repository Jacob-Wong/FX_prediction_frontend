import React, { Component } from "react";
import ForexDataService from "../services/forex.service";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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
      },
      weekly: {
        start_date: "Loading...",
        end_date: "Loading...",
        prediction: "Loading...",
        trend: "Loading...",
        action: "Loading...",
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
    const { daily, weekly } = this.state;

    return (
      <div>
        <center>
          <TableContainer component={Paper}>
            <Table className="usdjpy.table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>USDJPY</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Last Date</b>
                  </TableCell>
                  {/* <TableCell align="right">
                  <b>Last Price</b>
                </TableCell> */}
                  <TableCell align="right">
                    <b>Predict</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Trend</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Action</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="daily">
                  <TableCell component="th" scope="row">
                    <b>Daily</b>
                  </TableCell>
                  <TableCell align="right">{daily.end_date}</TableCell>
                  {/* <TableCell align="right">{daily.last_price}</TableCell> */}
                  <TableCell align="right">{daily.prediction}</TableCell>
                  <TableCell align="right">{daily.trend}</TableCell>
                  <TableCell align="right">{daily.action}</TableCell>
                </TableRow>
                <TableRow key="weekly">
                  <TableCell component="th" scope="row">
                    <b>Weekly</b>
                  </TableCell>
                  <TableCell align="right">{weekly.end_date}</TableCell>
                  {/* <TableCell align="right">{weekly.last_price}</TableCell> */}
                  <TableCell align="right">{weekly.prediction}</TableCell>
                  <TableCell align="right">{weekly.trend}</TableCell>
                  <TableCell align="right">{weekly.action}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br />

          <Container>
            <Row>
              <Col class="col-sm">
                <Card style={{ width: "18rem" }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                  <Card.Body>
                    <Card.Title>Daily</Card.Title>
                    <Card.Text>Prediction of EUR/USD Daily.</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Prediction: {daily.prediction}
                    </ListGroupItem>
                    <ListGroupItem>Trend: {daily.trend}</ListGroupItem>
                    <ListGroupItem>Action: {daily.action}</ListGroupItem>
                  </ListGroup>
                  <Card.Footer>
                    <small className="text-muted">
                      Last Time Frame Date: {daily.end_date}
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col class="col-sm">
                <Card style={{ width: "18rem" }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                  <Card.Body>
                    <Card.Title>Weekly</Card.Title>
                    <Card.Text>Prediction of EUR/USD Weekly.</Card.Text>
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
