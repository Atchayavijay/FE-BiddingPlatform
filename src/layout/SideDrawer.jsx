import React, { useState } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link } from "react-router-dom";

const SideDrawer = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="top-5 right-5 fixed lg:hidden bg-[#D6482B] hover:bg-[#b8381e] p-2 rounded-md text-3xl text-white"
      >
        <GiHamburgerMenu />
      </div>
      <div
        className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${
          show ? "left-0" : "left-[-100%]"
        } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}
      >
        <div className="relative">
          <Link to={"/"}>
            <h4 className="mb-4 font-semibold text-2xl">
              Auction<span className="text-[#D6482b]">Bid</span>
            </h4>
          </Link>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to={"/auctions"}
                className="flex items-center gap-2 font-semibold text-xl hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <RiAuctionFill /> Auctions
              </Link>
            </li>
            <li>
              <Link
                to={"/leaderboard"}
                className="flex items-center gap-2 font-semibold text-xl hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <MdLeaderboard /> Leaderboard
              </Link>
            </li>
            {isAuthenticated && user && user.role === "Auctioneer" && (
              <>
                <li>
                  <Link
                    to={"/submit-commission"}
                    className="flex items-center gap-2 font-semibold text-xl hover:text-[#D6482b] hover:transition-all hover:duration-150"
                  >
                    <FaFileInvoiceDollar /> Submit Commission
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/create-auction"}
                    className="flex items-center gap-2 font-semibold text-xl hover:text-[#D6482b] hover:transition-all hover:duration-150"
                  >
                    <IoIosCreate /> Create Auction
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/view-my-auctions"}
                    className="flex items-center gap-2 font-semibold text-xl hover:text-[#D6482b] hover:transition-all hover:duration-150"
                  >
                    <FaEye /> View My Auctions
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated && user && user.role === "Super Admin" && (
              <li>
                <Link
                  to={"/dashboard"}
                  className="flex items-center gap-2 font-semibold text-xl hover:text-[#D6482b] hover:transition-all hover:duration-150"
                >
                  <MdDashboard /> Dashboard
                </Link>
              </li>
            )}
          </ul>
          {!isAuthenticated ? (
            <>
              <div className="flex gap-2 my-4">
                <Link
                  to={"/sign-up"}
                  className="bg-[#D6482B] hover:bg-[#b8381e] px-4 py-1 rounded-md font-semibold text-white text-xl"
                >
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="border-[#DECCBE] border-2 bg-transparent hover:bg-[#fffefd] px-4 py-1 rounded-md font-bold text-[#DECCBE] text-xl hover:text-[#fdba88]"
                >
                  Login
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-4 my-4 w-fit" onClick={handleLogout}>
                <button className="bg-[#D6482B] hover:bg-[#b8381e] px-4 py-1 rounded-md font-semibold text-white text-xl">
                  Logout
                </button>
              </div>
            </>
          )}
          <hr className="mb-4 border-t-[#d6482b]" />
          <ul className="flex flex-col gap-3">
            {isAuthenticated && (
              <li>
                <Link
                  to={"/me"}
                  className="flex items-center gap-2 font-semibold text-xl hover:text-[#D6482b] hover:transition-all hover:duration-150"
                >
                  <FaUserCircle /> Profile
                </Link>
              </li>
            )}
            <li>
              <Link
                to={"/how-it-works-info"}
                className="flex items-center gap-2 font-semibold text-xl hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <SiGooglesearchconsole /> How it works
              </Link>
            </li>
            
          </ul>
          <IoMdCloseCircleOutline
            onClick={() => setShow(!show)}
            className="top-0 right-4 absolute sm:hidden text-[28px]"
          />
        </div>

      
      </div>
    </>
  );
};

export default SideDrawer;
