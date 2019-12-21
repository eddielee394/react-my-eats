class ErrorHandler {
  /**
   * Attempts to get a common cause of problems from an api response.
   *
   * @param response The api response.
   */
  getGeneralApiError = response => {
    switch (response.problem) {
      case "CONNECTION_ERROR":
        return {
          error: true,
          data: { message: "cannot-connect", temporary: true }
        };
      case "NETWORK_ERROR":
        return {
          error: true,
          data: { message: "network error", temporary: true }
        };
      case "TIMEOUT_ERROR":
        return { error: true, data: { message: "timeout", temporary: true } };
      case "SERVER_ERROR":
        return { error: true, data: { message: "server", temporary: true } };
      case "UNKNOWN_ERROR":
        return { error: true, data: { message: "unknown", temporary: true } };
      case "CLIENT_ERROR":
        switch (response.message) {
          case 401:
            return { data: { message: "unauthorized" } };
          case 403:
            return { data: { message: "forbidden" } };
          case 404:
            return { data: { message: "not-found", data: response.data } };
          default:
            return { data: { message: "rejected", data: response.data } };
        }
      case "CANCEL_ERROR":
        return null;
      default:
        return {
          error: true,
          message: "cannot-connect api error",
          temporary: true
        };
    }
  };
}

export default ErrorHandler;
