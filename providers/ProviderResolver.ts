import getServerlessHelloWorld from "./ServerlessHelloWorldProvider";

export enum ProviderType {
  SERVERLESS,
  JSON,
  NATIVE
}

const resolveProviderFunction = (providerType: ProviderType) => {
  switch (providerType) {
    case ProviderType.SERVERLESS:
      return getServerlessHelloWorld;
    default:
      return getServerlessHelloWorld;
  }
  return getServerlessHelloWorld;
};

export default resolveProviderFunction;
