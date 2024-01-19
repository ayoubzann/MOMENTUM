const FinishedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center floatIn ">
      <h1 className="text-2xl">You</h1>
      <br />
      <h1 className="text-4xl">Are</h1>
      <br />
      <h1 className="text-7xl">A</h1>
      <br />
      <h1 className="text-8xl momentum">Champion!</h1>
      <br />
      <br />
      <br />
      <div className="floatInRocket">
        <div className="flex justify-center">
          <img className="w-2/4" src="/rocket.gif" alt="Rocket" />
        </div>
        <br />
        <br />
        <br />
        <div className="floatInEnd">
          <h2 className="text-4xl momentum ">See you soon!</h2>
          <div className="mt-8">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="flex animate-pulse items-center justify-center mt-10 text-text text-xl">
              <img className="h-10 px-4" src="/git.jpg" />
              <h1 className="text-2xl">ayoubzann</h1>
            </div>
            <h2 className="text-slate-400  font-bold text-xl mt-3">
              Made by Ayoub Zannachi <br />
              (and 18 cups of coffee)
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedPage;
