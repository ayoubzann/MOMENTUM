const FinishedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center floatIn ">
      <h1 className="text-2xl">You.</h1>
      <br />
      <h1 className="text-4xl">Are.</h1>
      <br />
      <h1 className="text-5xl">A.</h1>
      <br />
      <h1 className="text-7xl">Hero.</h1>
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
        <h2 className="text-4xl ">See you soon!</h2>
        <div className="mt-8">
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="text-slate-300 text-xl">
            Made by Ayoub Zannachi <br />
            (and 18 cups of coffee)
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedPage;
