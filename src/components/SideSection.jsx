import React from "react";

const SideSection = () => {
  return (
    <div>
      <div>
        <div className="shadow p-2 bg-white row mx-auto justify-content-center align-items-center">
          <h4 className="display-4 text-success order-lg-1 col-12 text-center">Sobre</h4>
          <img src={require("../images/avatar.png")} className="img-fluid order-lg-2" alt="avatar"></img>
          <p className="text-muted font-italic order-lg-3 text-center">
            {" "}
            Ola! Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, it to make a type specimen book.{" "}
          </p>
        </div>
      </div>
      <hr/>
      <div className="shadow p-2 bg-white">
        <h4 className="font-weight-light">Categorias</h4>
        <ul className="nav">
          <li className="nav-item col-lg-12 col-auto"><a href=""> Saude</a></li>
          <li className="nav-item col-lg-12 col-auto"><a href=""> Alimentacao</a></li>
          <li className="nav-item col-lg-12 col-auto"><a href=""> Receitas </a></li>
          <li className="nav-item col-lg-12 col-auto"><a href=""> Rotina </a></li>
        </ul>
      </div>
      <hr/>
      <div>
        <h4 className="font-weight-light">Mais populares</h4>
        <ul className="nav">
          <li className="nav-item d-flex flex-md-column border p-2 bg-white rounded shadow">
            <div className="col-md-auto col-4 d-flex align-items-center justify-content-center">
              <img
                src={require("../images/post1.png")}
                className="rounded-circle img-fluid"
                alt="side-section-pic-alt"
              ></img>
            </div>
            <div className="col-md col-8 mt-1">
              <p className="text-success mb-1">Lorem ipsum dolor sit amet.</p>
              <p className="text-muted small">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
            </div>
          </li>
          <li className="nav-item d-flex flex-md-column border p-2 bg-white rounded shadow mt-1">
            <div className="col-md-auto col-4 d-flex align-items-center justify-content-center">
              <img
                src={require("../images/post.png")}
                className="rounded-circle img-fluid"
                alt="side-section-pic-alt"
              ></img>
            </div>
            <div className="col-md col-8 mt-1">
              <p className="text-success mb-1">Lorem ipsum dolor sit amet.</p>
              <p className="text-muted small">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-2 bg-white shadow p-2">
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">En</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Port</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideSection;
