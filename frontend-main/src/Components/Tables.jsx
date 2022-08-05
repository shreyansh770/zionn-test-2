import React from "react";
import "../Components/Tables.css";
import Row from "./Row";

const Tables = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="container">
              <div className="row">
                <div className="bor-table">
                  <div className="">
                    <div className="container-sm  main-con">
                      <div className="row">
                        <div className="col-4">
                          <div className="cell-wide cell purple-b">
                            <strong>factor</strong>
                          </div>
                        </div>
                        <div className="col">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 19</strong>
                          </div>
                        </div>
                        <div className="col">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 20</strong>
                          </div>
                        </div>
                        <div className="col">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 21</strong>
                          </div>
                        </div>
                        <div className="col">
                          <div className="cell-last cell purple-b">
                            <strong>analyst rating</strong>
                          </div>
                        </div>
                      </div>
                      <Row
                        a="revenue &#40;in Cr&#41;"
                        b="300000"
                        c="3000"
                        d="3000"
                        e="POSITIVE"
                        f="true"
                      />
                      <Row
                        a="revenue growth"
                        b="35%"
                        c="35%"
                        d="35%"
                        e="POSITIVE"
                        f="true"
                      />
                      <Row
                        a="EBITDA margin"
                        b="25%"
                        c="25%"
                        d="25%"
                        e="POSITIVE"
                        f="true"
                      />
                      <Row
                        a="net margin"
                        b="-200"
                        c="-200"
                        d="-200"
                        e="POSITIVE"
                        f="true"
                      />
                      <Row
                        a="return on equity"
                        b="350%"
                        c="350%"
                        d="350%"
                        e="POSITIVE"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          '<div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
