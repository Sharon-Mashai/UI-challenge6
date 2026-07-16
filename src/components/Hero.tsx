

export const Hero = () => {
  return (
    <section className="hero">
      {/* Sign In is placed at the top level so it clings to the upper-right corner */}
      <div className="signin">
        <button onClick={() => alert("Sign In Approved!")}>
          SIGN IN
        </button>
      </div>

      {/* Left Column: Text and Main Button */}
      <div className="heroText">
        <p className="premium">
          Premium Restaurant
        </p>

        <h1>
          Anida
          <br />
          Dedelay
        </h1>

        <h3>
          BEST HEALTHY SALAD SERVED
          <br />
          IN OUR RESTAURANT
        </h3>

        <button onClick={() => alert("Welcome to our Restaurant. Thank you for your interest in our healthy meals. Continue browsing for more info")}>
          LEARN MORE
        </button>
      </div>

    </section>
  );
};
