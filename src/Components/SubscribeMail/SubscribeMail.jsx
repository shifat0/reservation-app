import "./SubscribeMail.css";

const SubscribeMail = () => {
  return (
    <div className="sm">
      <div className="smContainer">
        <h4>Save Time, Save Money!</h4>
        <span>Sign up and we'll send the best deals to you</span>
        <div className="smSubscribe">
          <input
            type="text"
            name="subscribe"
            placeholder="Enter your email address"
          />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeMail;
