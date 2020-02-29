import getServerlessHelloWorld from "./ServerlessHelloWorldProvider";
import getNativeHelloWorld from "./NativeHelloWorldProvider";
import getLocalJsonHelloWorld from "./LocalJsonHelloWorldProvider";

export enum ProviderType {
  SERVERLESS,
  JSON,
  NATIVE
}

const resolveProviderFunction = (providerType: ProviderType) => {
  switch (providerType) {
    case ProviderType.SERVERLESS:
      return getServerlessHelloWorld;
    case ProviderType.NATIVE:
      return getNativeHelloWorld;
    case ProviderType.JSON:
      return getLocalJsonHelloWorld;
    default:
      return getServerlessHelloWorld;
  }
  return getServerlessHelloWorld;
};

export default resolveProviderFunction;
