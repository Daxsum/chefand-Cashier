import useCountdown from "./timer/useCountdown";

function ChefHome({ currentUser }) {
  const endTime = new Date().getTime() + 60000 * 2; // 2 minutes
  const [timeLeft, setEndTime] = useCountdown(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;

  return (
    <div className="app">
      <div className="min-w-screen min-h-screen bg-orange-500 flex flex-col items-center justify-center px-5 py-5">
        card
        <div className="min-w-screen min-h-screen bg-orange-500 flex items-center justify-center px-5 py-5">
          <div className="text-yellow-100">
            <h1 className="text-3xl text-center mb-3 font-extralight">
              When will food must deliver?*
            </h1>
            <div className="text-6xl text-center flex w-full items-center justify-center">
              <div className="text-2xl mr-1 font-extralight">in</div>
              <div className="w-24 mx-1 p-2 bg-white text-orange-500 rounded-lg">
                <div className="font-mono leading-none">00</div>
                <div className="font-mono uppercase text-sm leading-none">
                  Days
                </div>
              </div>
              <div className="w-24 mx-1 p-2 bg-white text-orange-500 rounded-lg">
                <div className="font-mono leading-none">00</div>
                <div className="font-mono uppercase text-sm leading-none">
                  Hours
                </div>
              </div>
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
    </div>
  );
}

export default ChefHome;
