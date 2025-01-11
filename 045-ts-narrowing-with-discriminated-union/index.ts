type DataResponse = {
  status: "ok";
  data: {
    id: string;
  };
};

type ErrorResponse = {
  status: "error";
  error: Error;
};

type ResponseProps = DataResponse | ErrorResponse;

const responseHandler = (response: ResponseProps) => {
  if (response.status === "ok") {
    return response.data;
  }

  return response.error;
};

