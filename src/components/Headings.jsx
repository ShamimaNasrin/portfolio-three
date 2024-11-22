/* eslint-disable react/prop-types */

const Headings = ({ text }) => {
  const words = text.split(" ");
  const mainText = words.slice(0, -1).join(" ");
  const highlightedText = words[words.length - 1];

  return (
    <div>
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl md:text-4xl font-semibold mb-8">
        <span>{mainText}</span>{" "}
        <span className="text-violet-600">{highlightedText}</span>
      </h2>
    </div>
  );
};

export default Headings;
