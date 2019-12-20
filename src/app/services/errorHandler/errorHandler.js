class ErrorHandler {
  /**
   * Attempts to get a common cause of problems from an api response.
   *
   * @param response The api response.
   */
  getGeneralApiError = response => {
    switch (response.problem) {
      case "CONNECTION_ERROR":
        return { message: "cannot-connect", temporary: true };
      case "NETWORK_ERROR":
        return { message: "network error", temporary: true };
      case "TIMEOUT_ERROR":
        return { message: "timeout", temporary: true };
      case "SERVER_ERROR":
        return { message: "server" };
      case "UNKNOWN_ERROR":
        return { message: "unknown", temporary: true };
      case "CLIENT_ERROR":
        switch (response.message) {
          case 401:
            return { message: "unauthorized" };
          case 403:
            return { message: "forbidden" };
          case 404:
            return { message: "not-found", data: response.data };
          default:
            return { message: "rejected", data: response.data };
        }
      case "CANCEL_ERROR":
        return null;
      default:
        return { message: "cannot-connect api error", temporary: true };
    }
  };
}

export default ErrorHandler;
