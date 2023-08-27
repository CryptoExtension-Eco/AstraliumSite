import React from 'react';
import '../Scss/Pages/HomePages.scss';
import TextImg from './img/TextImg3.png';
const HomePage = () => {
  return (
    <>
      <div className="home">
        <div className="right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. A
            condimentum vitae sapien pellentesque habitant morbi tristique
            senectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames. Hendrerit dolor magna eget est lorem ipsum dolor.
            Tincidunt arcu non sodales neque sodales.
          </p>
        </div>
        <div className="left">
          <img src={TextImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
