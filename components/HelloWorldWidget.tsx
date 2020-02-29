import resolveProviderFunction, {
  ProviderType
} from "../providers/ProviderResolver";
import { useState, useEffect } from "react";

type PropType = {
  type: ProviderType;
};

const HelloWorldWidget = (props: PropType) => {
  const {type} = props;
  const [helloValue, setHelloValue] = useState("loading...");

  useEffect(() => {
    (async function() {
      const finalProviderFunction = resolveProviderFunction(type) || (async () => Promise.resolve({value: "ERROR DURING INITIALIZATION"}));
      const finalHelloJson = await finalProviderFunction();
      setHelloValue(finalHelloJson.value);
    })();
  }, []);
  
  return (
    <div>
      <h1>The value is {helloValue}</h1>
    </div>
  );
};


export default HelloWorldWidget;
