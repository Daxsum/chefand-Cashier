import useCountdown from "./timer/useCountdown";
import axios from "axios";
import { useEffect, useState } from "react";

function ChefHome({ currentUser }) {
  const [activeOrder, setActiveOrder] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        authorization: sessionStorage.getItem("token"),
      },
    };
    axios
      .get("http://localhost:5000/api/order/getAll", config)
      .then((response) => setActiveOrder(response.data))
      .catch((error) => {
        console.log(error);
      });
  });
  const endTime = new Date().getTime() + 60000 * 2 * 5; // 2 minutes

  const [timeLeft, setEndTime] = useCountdown(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;
  console.log(activeOrder);
  return (
    <div className="bg-orange-500 w-full">
      {activeOrder.map((order) => (
        <div
          key={order._id}
          className="min-w-screen min-h-screen bg-orange-500 flex flex-row items-center justify-start px-5 py-5"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg w-80">
            <img
              className="w-full"
              src={`//localhost:5000/${order.item.filePath}`}
              alt="foods pic"
            />
            <div className="px-6 py-4">
              <div className=" px-6 py-4">
                <div className="text-yellow-100">
                  <h1 className="text-xl text-center mb-3 font-extralight whitespace-nowrap">
                    When will food must deliver?*
                  </h1>
                  <div className="text-6xl text-center flex w-full items-center justify-center">
                    <div className="text-2xl mr-1 font-extralight">in</div>

                    <div className="w-24 mx-1 p-2 bg-white text-orange-500 rounded-lg">
                      <div className="font-mono leading-none">{minutes}</div>
                      <div className="font-mono uppercase text-sm leading-none">
                        Minutes
                      </div>
                    </div>
                    <div className="text-2xl mx-1 font-extralight">and</div>
                    <div className="w-24 mx-1 p-2 bg-white text-orange-500 rounded-lg">
                      <div className="font-mono leading-none">{seconds}</div>
                      <div className="font-mono uppercase text-sm leading-none">
                        Seconds
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div>this is {currentUser.userName} home</div> */}
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{order.item.name}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{order.quantity}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChefHome;
