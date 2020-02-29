function delay(t, val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(val);
        }, t);
    });
  }

const getNativeHelloWorld = async () => {
  const hello = ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "! in native"];
  await delay(800, null);
  return {value: hello.join('')};
};

export default getNativeHelloWorld;