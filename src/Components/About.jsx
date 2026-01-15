import Code from './Code';

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left: Code Component */}
        <div className="w-full lg:w-1/2">
          <Code />
        </div>

        {/* Right: Humanized story */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
          <p className="text-lg">
            Hello! I'm <span className="font-semibold text-primary">Rushikesh Shinde</span>, a passionate developer who believes great code starts with great ideas. 
          </p>
          <p className="text-lg">
            I recently graduated with hands-on internship experience and a love for problem-solving. I enjoy building applications that users actually enjoy and experiences that make an impact.
          </p>
          <p className="text-lg">
            Beyond coding, I spend time exploring new technologies, contributing to open-source projects, and brainstorming my next big idea—often with a cup of coffee in hand.
          </p>
          <p className="text-lg">
            My work focuses on <span className="font-semibold text-accent">web development, UI/UX design, and performance optimization</span>. I aim to craft digital experiences that are both intuitive and scalable.
          </p>
          <a
            href="/resume.pdf"
            className="btn btn-primary w-max mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
