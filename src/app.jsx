import React, { useEffect, useState } from 'react';

function App() {
  const [showModal, setshowModal] = useState(false)
  let showHideClass = null;

  lifecycles();

  function clidkedHandler() {
    setshowModal(!showModal);
    console.log("clicked parent!!!");
    const iframeEle = document.getElementsByClassName("iframe-content")[0];
    // debugger;
    iframeEle.contentWindow.postMessage("hi from parent!", '*');
  };

  function closePopUp(){
    setshowModal(!showModal);
  }

  if(showModal) {
    showHideClass = "modal";
  } else {
    showHideClass = "hide modal";
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={clidkedHandler}>click me</button>
      </div>
      {/* <div>
        <iframe src='http://quickbuy-browser.robox.trade/app/investor/quickbuy/login'
                className={"iframe-content"}>
        </iframe>
      </div> */}
      <div id="react-app" className={showHideClass}>
        <div className="modal-content">
          <div>
            <span className="close" onClick={closePopUp} id="close-robox">&times;</span>
          </div>
          <div id="robox_react">
            <iframe src="http://quickbuy-browser.robox.trade/app/investor/quickbuy/login" className={"iframe-content"}></iframe>
          </div>
        </div>
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
        localStorage.setItem('parent-data', e.data);

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
