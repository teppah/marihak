import getServerlessHelloWorld from "./ServerlessHelloWorldProvider";

enum ProviderType {
  SERVERLESS,
  JSON,
  NATIVE
}

const resolveProviderFunction = (providerType: ProviderType) => {
  switch (providerType) {
    case ProviderType.SERVERLESS:
      return getServerlessHelloWorld;
      
  }
};
