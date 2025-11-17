import { Link } from "react-router";

export const HomeEnquire = () => {
  return (
    <section className="py-20 container">
      <div className="h-100 relative py-20 overflow-hidden">
        <img
          src="/home/require.jpg"
          className="absolute top-0 left-0 size-full object-cover"
        />

        <div className="absolute size-300 top-0 -right-100 bg-white/55 rotate-35 backdrop-blur-xl">
          dsad
        </div>

        <div className="absolute flex flex-col gap-4 right-5 top-1/2 -translate-y-1/2 w-[40%]">
          <h2 className="h3">Get the Bett Buzz all year round!</h2>
          <p className="p">
            Enjoy a snapshot of industry news, must-views and exclusive updates
            about News 2026 when you sign up to our monthly newsletter.
          </p>

          <Link to="">
            <button className="button-primary">Enquire to exhibit</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
