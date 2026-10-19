
function Intro({ author }) {
  return (
    <header className="px-20 pt-8 text-center">

      <p className="mt-5 text-2xl text-[#000000]">
        An open-source component kit for React.
      </p>

      <p className="mt-2 text-xl text-[#000000]">
        Made by {author}
      </p>
    </header>
  );
}

export default Intro;
