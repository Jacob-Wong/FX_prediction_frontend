import http from "../http-common";

class ForexDataService {
  getEurUsd(timeFrame) {
    return http.get(`/eurusd/${timeFrame}`);
  }

  getUsdJpy(timeFrame) {
    return http.get(`usdjpy/${timeFrame}`);
  }
}

export default new ForexDataService();
