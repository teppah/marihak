import HelloWorldWidget from "../components/HelloWorldWidget";
import { ProviderType } from "../providers/ProviderResolver";
const Index = () => {
  const arr: ProviderType[] = Object.keys(ProviderType).map(k => ProviderType[k]);
  const randomProvider: ProviderType = arr[Math.floor(Math.random() * arr.length)];
  return (
    <div className="container">
      <p className="title">
        The most <strong>USELESS</strong> program in existence
      </p>
      <p className="providerType">This time, the provider is {randomProvider.toString()}</p>
      <section id="theImportantStuff">
        <HelloWorldWidget type={randomProvider} />
      </section>
      <style jsx>
        {`
          * {
            font-family: Lato, Arial, sans-serif;
          }
          .title {
            font-family: monospace;
            font-size: 2em;
            color: white;
            background: #415865;
            padding: 30px; 
            border: 2px dotted #f9f8eb;
            border-radius: 25px;
          }
          .title strong {
            color: #fc5185;
          }
          @media screen and (min-width: 1200px) {
            .title {
              font-size: 3em;
            }
          }

          .providerType {
            font-family: monospace; 
            font-size: 1.3em;
          }
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 30vh;
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            background: #7a9eb1;
            padding: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
