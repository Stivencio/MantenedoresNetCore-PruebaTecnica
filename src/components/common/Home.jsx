import React from "react";

const Home = () => {
  const images = [
    "https://1.bp.blogspot.com/-2i0SMmbZWs4/WVqnia0C3hI/AAAAAAABico/U5nS-Fit3mEFv8H5WKo9Jc7T-PBlLyFtwCLcBGAs/s1600/working.gif",
    "https://media.tenor.com/images/41d2e8c3a93fbcfc541973417d045b58/tenor.gif",
    "https://acegif.com/wp-content/uploads/2021/4fh5wi/pepefrg-8.gif",
  ];
  const imagenRandom = images[Math.floor(Math.random() * images.length)];
  return (
    <div className="text-center mt-5">
      <h1>Home</h1>
      <h2>Estamos trabajando en el login 😓</h2>
      <div className="row g-5 align center-form mt-5">
        <div className="col-md-6 col-lg-6">
          <img src={imagenRandom} alt="" width="500" height="400" />
        </div>
      </div>
    </div>
  );
};

export default Home;
