import fetch from "isomorphic-unfetch";
import resolveProviderFunction from "./ProviderResolver";

type ServerlessDataType = {
  type: "fast" | "slow" | "404";
};

const fetcher = async (url: string): Promise<{ value: string }> => {
  const value = await fetch(url);
  console.log(value);
  return value.json();
};

const urls = {
  serverless: "/api/serverless-hello",
};

const getServerlessHelloWorld = async (): Promise<{ value: string }> => {
  const type = "fast";
  const fetchUrl = urls.serverless;
  const result = await fetcher(fetchUrl);
  console.log(`results ${result}`);
  return result;
};

export default getServerlessHelloWorld;
