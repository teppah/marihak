import fetch from "isomorphic-unfetch";


type ServerlessDataType = {
    type: "fast" | "slow" | "404";
};

type ServerlessHelloResponse = {
    value: string;
};

const fetcher = async (url: string) => {
  return await fetch(url).then(response => response.json());
};

const urls = {
  serverless: "/api/serverless-hello"
};

const getServerlessHelloWorld = async (fetchDataType: ServerlessDataType) : Promise<ServerlessHelloResponse> => {
  const { type } = fetchDataType;
  const fetchUrl = urls.serverless + `type=${type}`;
  return await fetcher(fetchUrl);
};
