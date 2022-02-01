import React, {useEffect} from 'react';

function App() {
  lifecycles();

  function clidkedHandler() {
    console.log("clicked parent!!!");
    const iframeEle = document.getElementsByClassName("iframe-content")[0];
    // debugger;
    iframeEle.contentWindow.postMessage("hi from parent!", '*');
  };

  return(
    <React.Fragment>
      <div>
        <button onClick={clidkedHandler}>click me</button>
      </div>
      <div>
        <iframe src='http://quickbuy-browser.robox.trade/app/investor/quickbuy/login'
                className={"iframe-content"}>
        </iframe>
      </div>
    </React.Fragment>
  );
};

export default App;

function lifecycles() {


  useEffect(() => {
    // const iframeEle = document.getElementsByClassName("iframe-content")[0];
    // // debugger;
    // iframeEle.contentWindow.postMessage("hi from parent!", '*');
  }, []);
};

// https://htmldom.dev/communication-between-an-iframe-and-its-parent-window/

/*
on the iframe side code
const Root = () => {
  useEffect(() => {
    window.addEventListener("message", function(e) {
      // Get the sent data
      // const { data } = e;
      if (e.origin === "http://localhost:8001") {
        console.log("data", e);
        console.log("data", e.data);

      }

      // If you encode the message in JSON before sending them,
      // then decode here
      // const decoded = JSON.parse(data);
    });
  }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
export default Root;
*/
