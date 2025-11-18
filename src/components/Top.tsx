import steamLogo from "/steam-logo.png"

function Top() {
  return (
    <>
      <div className="hero bg-base-200 h-50">
        <div className="hero-content text-center">
          <img src={steamLogo} className="steam-logo"/>
          <div className="max-w-md">
            <h1 className="text-5xl pb-2 font-bold">Steam Sales</h1>
            <p className="pt-2">
              Gaming is fun, but it shouldn't break the bank.
            </p>
          </div>
          <img src={steamLogo} className="steam-logo"/>
        </div>
      </div>
    </>
  );
}

export default Top;
