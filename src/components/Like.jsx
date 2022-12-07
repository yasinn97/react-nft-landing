import React from "react";
import Logo from "../assets/logo.ico";
import eth2 from "../assets/eth2.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={Logo} alt="eth1" />
          </div>
          <h2 className="title">Midland Distributors LTD</h2>
          <p className="description">
            Established for over 13 years, our family business provides a
            specialist 'one stop shop' service to the licensed and catering
            trade. Midland Distributors is based in Leicester and is open to the
            trade 6 days a week. We also offer a delivery service to most
            locations on a specific minimum order amount specialising in
            delivering to Leicester and Leicestershire.
          </p>
          <p className="description">
            We supply restaurants, supermarkets, convenience stores, take-away’s
            and all types of catering outlets. We are able to supply all your
            licensed and catering requirements on the same delivery.
          </p>
        </div>
        {/* <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22. Don't miss out on the
            release of our new NFT.
          </p>
        </div> */}
      </div>
    </div>
  );
}
