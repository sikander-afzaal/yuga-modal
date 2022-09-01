import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import img from "./img.png";
import logo from "./logo.png";
function App() {
  return (
    <div className="App">
      <div className="modal">
        <h1>Ready to launch your own NFT project for just $500</h1>
        <h2>Then this is for you if</h2>
        <p>If you have a million dollar idea and you cant wait to launch</p>
        <p>
          You know you can do way better than other NFT projects. <br />
          You may have an edge over others to be next BAYC <br />
          You are ready to be a metaprenuer
        </p>
        <div className="row">
          <a href="#" className="col">
            <h3 style={{ color: "#229ED9" }}>
              <FontAwesomeIcon icon={faTelegram} />
              Telegram
            </h3>
            <div className="box">
              <img src={logo} alt="" />
              <div className="right-box">
                <h4>Wagmi Lab</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, similique!
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="col">
            <h3 style={{ color: " #7289DA" }}>
              <FontAwesomeIcon icon={faDiscord} />
              Discord
            </h3>
            <div className="box">
              <img src={logo} alt="" />
              <div className="right-box">
                <h4>Join the Wagmi Lab discord server</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, similique!
                </p>
              </div>
            </div>
          </a>
        </div>
        <h2>JOIN EITHER LINK ABOVE</h2>
        <p>To launch your own NFT project or to see more infor</p>
        <p>
          What will you get? <br />
          2500 NFT art of your choice <br />
          Website <br />
          Mint button <br />
          Smart contract <br />
          1 year assistance <br />
          A community of investors <br />
          And much much more
        </p>
        <div className="foot">
          <img src={img} alt="" />
          <div className="text">
            <h5>Wagmi Labz</h5>
            <h6>www.wagmilabz.com</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
