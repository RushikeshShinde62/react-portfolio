import background from '../assets/background.jpg';
import profile from '../assets/profile.jpg';
export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content flex-col lg:flex-row gap-10 text-neutral-content">
        <img
          src={profile}
          alt='profile photo'
          className="max-w-xs rounded-lg shadow-4xl hover:scale-105 transition-transform duration-300"
        />

        <div className="max-w-md text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold">Hello there, I am Rushikesh</h1>
         <p className="mb-4 text-xl font-medium">
  A{"  "}
<span className="font-semibold text-primary bg-base-100 px-3 py-1 rounded-md shadow-sm">
    Software Engineer
  </span>
  {"  "}From India
</p>


          <p className="mb-5">
            Passionate about creating beautiful, functional, and user-centered
            digital experiences. I bring ideas to life through clean code and
            thoughtful design.
          </p>
          <button className="btn btn-primary">Download Resume</button>
        </div>
      </div>
    </div>
  );
}
