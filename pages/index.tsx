import HelloWorldWidget from "../components/HelloWorldWidget";
import {ProviderType} from "../providers/ProviderResolver";
const Index = () => {
  return (
    <div>
      <h1>The most USELESS program in existence</h1>
      <section id="theImportantStuff">
        <HelloWorldWidget type={ProviderType.SERVERLESS}/>
      </section>
      <style jsx>
        {`
          * {
            font-family: Lato, Arial, sans-serif;
          }
          h1 {
          }
        `}
      </style>
    </div>
  );
};

export default Index;
