import resolveProviderFunction, {
  ProviderType
} from "../providers/ProviderResolver";
import { useState, useEffect } from "react";

type PropType = {
  type: ProviderType;
};

const HelloWorldWidget = (props: PropType) => {
  const { type } = props;
  const [helloValue, setHelloValue] = useState("loading...");
  const [c, setC] = useState("loading");


  useEffect(() => {
    (async function() {
      const finalProviderFunction =
        resolveProviderFunction(type) ||
        (async () => Promise.resolve({ value: "ERROR DURING INITIALIZATION" }));
      const finalHelloJson = await finalProviderFunction();
      setHelloValue(finalHelloJson.value);
      setC("loaded");
    })();
  }, []);

  return (
    <div>
      <h2>You have received the following greeting: <div className={c} id="helloValue">{helloValue}</div></h2>
      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css?family=Spartan:400,700&display=swap');
        h2 {
          color: #f4f49e;
          font-family: Spartan, sans-serif;
          font-weight: 400;
        }
        #helloValue {
          transition: all 0.2s;
          transition-timing-function: cubic-bezier(.07,.79,.83,.67);
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;
        }

        .loaded {
          font-family: Spartan;
          font-weight: 700;
          font-size: 3em;
          color: #815e94;
          text-decoration: underline;
        }
        .loading {
          font-family: Spartan;
          font-size: 1em;
          font-weight: 400;
          color: #f1d089;
          text-decoration: none;
        }
        `}
      </style>
    </div>
    
  );
};

export default HelloWorldWidget;
