import "./App.css";
import frame from "./assets/Frame 2147225822.svg";
import market from "./assets/Vector.svg";
import qrCode from "./assets/Frame 2147225932 (1).svg";
import button from "./assets/Button.svg";
import arrow from "./assets/arrow.svg";
import profilePic from "./assets/profile.svg";
import rectangle from "./assets/Rectangle.svg";
function App() {
  return (
    <div className="page">
      <div className="card">
        <img className="card-rectangle" src={rectangle} alt="" />
        <div className="card-header">
          <span className="brand">Trade. Predict. Win. All on Market</span>
          <img className="market-image" src={market} alt="Market" />
          <img className="star" src={frame} alt="Market card" />
        </div>

        <div className="card-body">
          <img className="qr-code" src={qrCode} alt="QR Code" />
          <img className="profile-pic" src={profilePic} alt="Profile" />

          <div className="delivery-info">
  <span className="delivery-text">@DdeliveryGuy</span>
</div>
<div className="date-info">
  <span>DATE</span>
  <strong>31st May 2025. 10:24 a.m.</strong>
</div>

          <p className="label">Potential Payout</p>
          <h1>12,450.00</h1>

          <div className="odds-stake">
            <div className="odds">
              <div className="odds-icon">
                <img className="arrow" src={arrow} alt="arrow" />
              </div>

              <div className="odds-text">
                <span>Odds</span>
                <strong>4149.60x</strong>
              </div>
            </div>

            <div className="stake">
              <div className="stake-icon">
               <img className="stake-arrow" src={arrow} alt="arrow" />
              </div>
            

              <div className="stake-text">
                <span>Stake</span>
                <strong>$1.00</strong>
              </div>
            </div>
          </div>

          <div className="question-box">
            <p>
              <span>Elon vs puting who is winning the</span>
              <span>presidential election?</span>
            </p>
          </div>
        </div>
        <img className="shine-button" src={button} alt="shine your win" />
      </div>
    </div>
    
  );
}

export default App;
