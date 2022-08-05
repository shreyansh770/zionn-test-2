import React from "react";
import "./sidebar.css";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import Button from "./Button";
import TitleButton from "./TitleButton";
import ola from "../assets/ola.png";
import Button2 from "./Button2";
import logo from "../assets/Vector.svg";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Delayed from './Delayed';
import Footer from './Footer'

const Home = () => {
    const items = [
        <SidebarItem>
            <div className="">
                <div>
                    <img className="logo-size" src={logo} />
                </div>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-top">
                <Button widthv={120} name="sell/buy" />
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-mid-top">
                <Button widthv={120} name="calculator" />
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-mid-top">
                <Button widthv={120} name="scoops" />
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-mid-top">
                <Button widthv={120} name="Learn Centre" />
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="last-but mar-mid-top">
                <Button2 name="refer to get $" />
            </div>
        </SidebarItem>,
    ];
    return (
        <div>
            <Sidebar
                className="side-bar"
                content={items}
                width={200}
                background={"#FFF"}
                toggleIconColor={"#7B61FF"}
                color={"#000000"}
                activeHightlight={"#FFF"}
                hoverHighlight={"#FFF"}
                textAlign={"center"}
            >
                <div className="fix-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <TitleButton name="search pricing, analyst updates, etc ( cmd + K)" />
                            </div>
                            <div className="col-1"></div>
                            <div className="col-2 logo-top">
                                <img className="logo-top-size" src={ola} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container con-abs">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <Delayed waitBeforeShow={500}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-4 ml-2 mt-5 ">
                                                    <Card imgl={ola} name="Ola Cabs" ev="$5B" in="Sequoia, Tiger" />
                                                </div>
                                                <div className="col-4 ml-5 mt-5">
                                                    <Card imgl={ola} name="Ola Cabs" ev="$5B" in="Sequoia, Tiger" />
                                                </div>
                                                <div className="col-4 ml-5 mt-5">
                                                    <Card imgl={ola} name="Ola Cabs" ev="$5B" in="Sequoia, Tiger" />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-4 ml-5 mt-5">
                                                    <Card imgl={ola} name="Ola Cabs" ev="$5B" in="Sequoia, Tiger" />
                                                </div>
                                                <div className="col-4 ml-5 mt-5">
                                                    <Card imgl={ola} name="Ola Cabs" ev="$5B" in="Sequoia, Tiger" />
                                                </div>
                                                <div className="col-4 ml-5 mt-5">
                                                    <Card imgl={ola} name="Ola Cabs" ev="$5B" in="Sequoia, Tiger" />
                                                </div>
                                            </div>
                                        </div>
                                    </Delayed>

                                </div>
                                <div className="col-1"></div>
                            </div>

                        </div>
                    </div>
                    <NavLink to="/signup">
                        <Button name="Button to signup page"></Button>
                    </NavLink>
                    <NavLink to="/company">
                        <Button name="Button to company page"></Button>
                    </NavLink>
                    <NavLink to="/signin">
                        <Button name="Button to signin page"></Button>
                    </NavLink>
                    <NavLink to="/onboarding">
                        <Button name="Button to onboarding page"></Button>
                    </NavLink>
                    <div className="home-footer-css">
                        <Footer />
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default Home;
