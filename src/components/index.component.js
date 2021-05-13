import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class EURUSD extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Forex prediction site.</h1>
        <p>
          Click the tabs on navigation bar to browse the prediction results.
        </p>
        <br />
        <Card>
          <Card.Img
            variant="top"
            src="https://drive.google.com/uc?id=1qyrdNcwBXhzRChiZbG2PdEge-yKRGNy9"
          />
          <Card.Body>
            <Card.Title>EUR/USD Daily - Accuracy</Card.Title>
            <Card.Text>
              The prediction machine learning model was trained by the LSTM
              model.
              <br />
              The Adjusted R2 score of this model is: 0.839
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Img
            variant="top"
            src="https://drive.google.com/uc?id=1fhmSnz6I3CosEpqiSKJA5cP8mjHkUqfY"
          />
          <Card.Body>
            <Card.Title>EUR/USD Weekly - Accuracy</Card.Title>
            <Card.Text>
              The prediction machine learning model was trained by the LSTM
              model.
              <br />
              The Adjusted R2 score of this model is: 0.731
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Img
            variant="top"
            src="https://drive.google.com/uc?id=1KpdTmoydlCvjROD8Qxcd775RZ9v0w0A-"
          />
          <Card.Body>
            <Card.Title>USD/JPY Daily - Accuracy</Card.Title>
            <Card.Text>
              The prediction machine learning model was trained by the LSTM
              model.
              <br />
              The Adjusted R2 score of this model is: 0.775
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Img
            variant="top"
            src="https://drive.google.com/uc?id=1MsruEp1zj_Lcr4hdKpPAlOzGJI6lPYZR"
          />
          <Card.Body>
            <Card.Title>USD/JPY Weekly - Accuracy</Card.Title>
            <Card.Text>
              The prediction machine learning model was trained by the LSTM
              model.
              <br />
              The Adjusted R2 score of this model is: 0.681
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
