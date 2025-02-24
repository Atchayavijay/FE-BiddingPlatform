import Spinner from "@/custom-components/Spinner";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);
  return (
    <>
      <section className="flex flex-col justify-start m-0 ml-0 px-5 py-4 pt-20 lg:pl-[320px] w-full h-fit min-h-screen">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="flex flex-col justify-center items-center gap-4 bg-white mx-auto px-2 py-4 rounded-md w-full h-auto">
              <img
                src={user.profileImage?.url}
                alt="/imageHolder.jpg"
                className="rounded-full w-36 h-36"
              />

              <div className="mb-6 w-full">
                <h3 className="mb-4 font-semibold text-xl">Personal Details</h3>
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <label className="block font-medium text-gray-700 text-sm">
                      Username
                    </label>
                    <input
                      type="text"
                      defaultValue={user.userName}
                      className="border-gray-300 mt-1 p-2 rounded-md w-ful focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 text-sm">
                      Email
                    </label>
                    <input
                      type="text"
                      defaultValue={user.email}
                      className="border-gray-300 mt-1 p-2 rounded-md w-ful focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 text-sm">
                      Phone
                    </label>
                    <input
                      type="number"
                      defaultValue={user.phone}
                      className="border-gray-300 mt-1 p-2 rounded-md w-ful focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    
                    <input
                      type="text"
                      defaultValue={user.address}
                      className="border-gray-300 mt-1 p-2 rounded-md w-ful focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 text-sm">
                      Role
                    </label>
                    <input
                      type="text"
                      defaultValue={user.role}
                      className="border-gray-300 mt-1 p-2 rounded-md w-ful focus:outline-none"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 text-sm">
                      Joined On
                    </label>
                    <input
                      type="text"
                      defaultValue={user.createdAt?.substring(0, 10)}
                      className="border-gray-300 mt-1 p-2 rounded-md w-ful focus:outline-none"
                      disabled
                    />
                  </div>
                </div>
              </div>

              {user.role === "Auctioneer" && (
                <div className="mb-6 w-full">
                  
                  <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                    <div>
                      </div>
                  </div>
                </div>
              )}

              <div className="mb-6 w-full">
                <h3 className="mb-4 font-semibold text-xl">
                  Other User Details
                </h3>
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                 
                  {user.role === "Bidder" && (
                    <>
                      <div>
                        <label className="block font-medium text-gray-700 text-sm">
                          Auctions Won
                        </label>
                        <input
                          type="text"
                          defaultValue={user.auctionsWon}
                          className="border-gray-300 mt-1 p-2 rounded-md w-ful focus:outline-none"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="block font-medium text-gray-700 text-sm">
                          Money Spent
                        </label>
                        <input
                          type="text"
                          defaultValue={user.moneySpent}
                          className="border-gray-300 mt-1 p-2 rounded-md w-ful focus:outline-none"
                          disabled
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default UserProfile;
