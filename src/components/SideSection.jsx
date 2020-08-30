import React from "react";

const SideSection = () => {
  return (
    <div className="Menu">
      <div className="Sessao">
        <div className="Sobre">
          <h4 className="light-font">Sobre</h4>
          <img src={require("../images/avatar.png")} className="avatar"></img>
          <p className="muted-text italic">
            {" "}
            Ola! Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, it to make a type specimen book.{" "}
          </p>
        </div>
      </div>

      <div className="Sessao">
        <h4 className="light-font">Categorias</h4>
        <ul>
          <li> Saude</li>
          <li> Alimentacao</li>
          <li> Receitas</li>
          <li> Rotina</li>
        </ul>
      </div>

      <div className="Populares">
        <h4 className="light-font">Mais populares</h4>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <div className="flex align-center">
              <img
                src={require("../images/post1.png")}
                className="rounded-circle"
              ></img>
            </div>
            <div>
              <p className="title text-green">Lorem ipsum dolor sit amet.</p>
              <p className="muted-text">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
            </div>
          </li>
          <li className="nav-menu-item">
            <div className="flex align-center">
              <img
                src={require("../images/post.png")}
                className="rounded-circle"
              ></img>
            </div>
            <div>
              <p className="title text-green">Lorem ipsum dolor sit amet.</p>
              <p className="muted-text">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideSection;
