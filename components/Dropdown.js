const Dropdown = ({ state, name }) => {
  return (
    <>
      <div class="group inline-block md:block relative my-4 w-1/4 md:w-auto">
        <button class=" text-white bg-[#292929] font-semibold py-2 px-4 rounded inline-flex items-center w-full justify-center">
          <span class="mr-1">{name}</span>
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.09409 9.18994L0.816466 0.0488263L11.3717 0.0488253L6.09409 9.18994Z"
              fill="#A5A5A5"
            />
          </svg>
        </button>
        <ul class="absolute hidden md:w-full text-white bg-[#292929] pt-1 group-hover:block z-50">
          {state.map((sub, i) => (
            <li key={i}>
              <span
                class=" py-2 px-4 block whitespace-no-wrap text-white"
                href="#"
              >
                {sub}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
