import React from "react";

const HomeContent = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="page-content">
          <div className="row header">
            <div className="col-xs-12">
              <div className="user pull-right">
                <div className="item dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <img src="https://rdash.github.io/img/avatar.jpg" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li className="link">
                      {" "}
                      <a href="#">username</a>
                    </li>
                    <li className="divider"></li>
                    <li className="link">
                      {" "}
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="meta">
                <div className="page">
                  Dashboard
                  <div className="breadcrumb-links">Home / Dashboard</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h4>contents goes here</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
