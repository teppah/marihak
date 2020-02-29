import hello from "../resources/hello.json";

export default async () => {
  await delay(540, null);
  return hello;
};

function delay(t, val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(val);
    }, t);
  });
}
