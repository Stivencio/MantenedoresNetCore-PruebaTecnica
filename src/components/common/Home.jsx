import React from "react";

const Home = () => {
  const images = [
    "https://c.tenor.com/-PWk6jvmwcAAAAAj/capoo-bugcat.gif",
    "https://media.tenor.com/images/e22582001254703ec6e247e7fb12b98c/tenor.gif",
    "https://c.tenor.com/IlCvc8FeFKYAAAAj/capoo-bugcat.gif",
    "https://media.tenor.com/images/8539c3faf37ba3f3e17c6005c6d8e8f2/tenor.gif",
    "https://media.tenor.com/images/c9b9a5fc77bfa772beef88627540df57/tenor.gif",
    "http://pa1.narvii.com/6531/e89475cd08d1c3ef75597ef1c17d7e1f761199ad_00.gif",
    "https://i.imgur.com/TMIKSD0.gif",
    "https://c.tenor.com/cC7_rNf-BrQAAAAj/capoo-bugcat.gif",
    "https://media3.giphy.com/media/KZwaIIz48b8w9Az3L5/giphy.gif?cid=790b7611c10a930419ac6c22b3c25f1942f6f57b9b830c3e&rid=giphy.gif&ct=s",
  ];
  const imagenRandom = images[Math.floor(Math.random() * images.length)];
  return (
    <div className="text-center mt-5">
      <h1>Home</h1>
      <h2>Estamos trabajando en el login 😓</h2>
      <div className="row g-5 align center-form mt-5">
        <div className="col-md-6 col-lg-6">
          <img src={imagenRandom} alt="" width="400" height="300" />
        </div>
      </div>
    </div>
  );
};

export default Home;
