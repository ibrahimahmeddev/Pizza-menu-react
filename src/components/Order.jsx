function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        {" "}
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or ordr
        online.{" "}
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

export default Order;
