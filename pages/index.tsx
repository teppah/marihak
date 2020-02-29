import HelloWorldWidget from "../components/HelloWorldWidget";
import { ProviderType } from "../providers/ProviderResolver";
const Index = () => {
  return (
    <div className="container">
      <p className="title">
        The most <strong>USELESS</strong> program in existence
      </p>
      <section id="theImportantStuff">
        <HelloWorldWidget type={ProviderType.SERVERLESS} />
      </section>
      <style jsx>
        {`
          * {
            font-family: Lato, Arial, sans-serif;
          }
          h1 {
          }
          .title {
            font-family: monospace;
            font-size: 3em;
            color: white;
            background: #415865;
            padding: 30px; 
            border: 2px dotted #f9f8eb;
            border-radius: 25px;
          }
          .title strong {
            color: #fc5185;
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
          }
        `}
      </style>
    </div>
  );
};

export default Index;
