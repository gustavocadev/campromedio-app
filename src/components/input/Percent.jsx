import React from "react";

const Percent = ({ setCurrentPercent, currentPercent }) => {
  const title = "Ingrese el porcentaje";

  // Destructuring CurrentPercent
  const { inputPercent1, inputPercent2, inputPercent3 } = currentPercent;

  // handle change is to watch everytime the inputs change
  const handleChange = (e) => {
    setCurrentPercent({
      ...currentPercent,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form className="flex flex-col">
        <label className="dark:text-[#54A0FF]">{title}</label>
        <input
          type="text"
          placeholder="40"
          className="px-[16px] py-[12px] rounded dark:text-white dark:bg-[#131313]  mt-[8px]"
          name="inputPercent1"
          onChange={handleChange}
          value={inputPercent1}
        />

        <label className="dark:text-[#54A0FF] pt-[24px]">{title}</label>
        <input
          type="text"
          placeholder="50"
          className="px-[16px] py-[12px] rounded dark:bg-[#131313] dark:text-white  mt-[8px]"
          name="inputPercent2"
          onChange={handleChange}
          value={inputPercent2}
        />

        <label className="dark:text-[#54A0FF]  pt-[24px]">{title}</label>
        <input
          type="text"
          placeholder="10"
          className="px-[16px] py-[12px] rounded dark:text-white dark:bg-[#131313]  mt-[8px]"
          name="inputPercent3"
          onChange={handleChange}
          value={inputPercent3}
        />
      </form>
    </>
  );
};

export default Percent;
