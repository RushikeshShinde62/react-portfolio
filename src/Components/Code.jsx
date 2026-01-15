export default function Code() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <div className="mockup-code w-full text-sm py-6 md:text-base">
        
        <pre data-prefix="$" className="whitespace-nowrap overflow-x-auto">
          <code>whoami</code>
        </pre>
        <pre data-prefix=">" className="text-red-500 whitespace-nowrap overflow-x-auto">
          <code>Rushikesh Shinde</code>
        </pre>

        <pre data-prefix="$" className="whitespace-nowrap overflow-x-auto">
          <code>about --summary</code>
        </pre>
        <pre data-prefix=">" className="text-green-500 whitespace-nowrap overflow-x-auto">
          <code>Full-stack software engineer</code>
        </pre>
        <pre data-prefix=">" className="text-green-500 whitespace-nowrap overflow-x-auto">
          <code>Experienced in Node.js, Express, Tailwind CSS</code>
        </pre>
        <pre data-prefix=">" className="text-green-500 whitespace-nowrap overflow-x-auto">
          <code>Builds reusable components and scalable features</code>
        </pre>

        <pre data-prefix="$" className="whitespace-nowrap overflow-x-auto">
          <code>location</code>
        </pre>
        <pre data-prefix=">" className="text-green-500 whitespace-nowrap overflow-x-auto">
          <code>Pune, India</code>
        </pre>
      </div>
    </section>
  );
}
