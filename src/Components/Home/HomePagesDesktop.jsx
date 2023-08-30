import React from 'react';
import '../../Scss/Pages/Home/HomeDesktop.scss';
// import Logo from '../img/TextImg2.png';
const HomePagesDesktop = () => {
  return (
    <>
      <div className="HomeDesktop">
        <div className="content">
          <a
            href="https://chrome.google.com/webstore/detail/cryptoextension/fobclgcmkebeadojpnjgkphdgmagfbee?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="littleB">L&#39;extension </span>
          </a>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            doloribus quos nesciunt aperiam nemo, laudantium odio fugit at alias
            tempore commodi ea. Quod suscipit illo dolor autem adipisci
            architecto iste.
          </p>
          <a
            className="a"
            href="https://cryptoextension.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            CryptoExtension
          </a>
          <a
            className="a"
            href="https://cryptoextension.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactez Moi
          </a>
        </div>
        {/* <div className="img">
          <img src={Logo} alt="" />
        </div> */}
      </div>
    </>
  );
};

export default HomePagesDesktop;
