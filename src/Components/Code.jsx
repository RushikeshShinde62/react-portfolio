export default function Code() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

      <div className="mockup-code w-full text-sm md:text-base">
        <pre data-prefix="$">
          <code>whoami</code>
        </pre>
        <pre data-prefix=">" className="text-red-500">
          <code>Rushikesh Shinde</code>
        </pre>

        <pre data-prefix="$">
          <code>about --summary</code>
        </pre>
        <pre data-prefix=">">
          <code className="text-green-500">
            Full-stack–focused Software Engineer with experience in building
            responsive web applications using modern technologies.
          </code>
        </pre>
        <pre data-prefix=">" className="text-green-500">
          <code>
            Skilled in React, Node.js, Express, Tailwind CSS, and Supabase,
            with a strong foundation in JavaScript and SQL.
          </code>
        </pre>
        <pre data-prefix=">" className="text-green-500">
          <code>
            I enjoy creating clean, reusable components and scalable
            features that solve real-world problems.
          </code>
        </pre>

        <pre data-prefix="$">
          <code>location</code>
        </pre>
        <pre data-prefix=">" className="text-green-500">
          <code>Nasik, India</code>
        </pre>
      </div>
    </section>
  );
}
