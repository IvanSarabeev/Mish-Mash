import React from "react";
import SurveyImg from "../../assets/images/survey.jpg";
// import IconMessage from "../../assets/icons/MessageIcon";
// import Modal from "../../components/Modal";

// const categories = [
//   { name: "attitude", label: "Attitude" },
//   { name: "taste", label: "Taste" },
//   { name: "service", label: "Service" },
//   { name: "apperance", label: "Apperance" },
// ];

const Survey = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDialog = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <section className="relative z-10 gap-y-14 flex flex-col-reverse justify-evenly items-center lg:flex-row pb-10">
        <img
          src={SurveyImg}
          alt="survey"
          className="relative z-20 w-80 h-80 lg:h-[450px] md:w-[350px] lg:w-96 aspect-auto px-4 sm:px-0 rounded-md object-cover"
        />
        <aside className="px-3 md:px-0 text-center lg:text-left">
          <h3 className="sub-heading font-semibold font-lora mb-2 sm:mb-4 md:mb-6">
            Passione & <strong className="text-rose-600">Food</strong>
          </h3>
          <div className="max-w-xl min-w-fit px-2.5 font-medium font-martel text-lg md:text-xl leading-6 md:leading-8 break-words antialiased">
            <p>
              At MishMash, we believe in using only the best ingredients and
              cooking techniques to create delicious and authentic food that our
              customers will love.
            </p>
            <p className="mt-2">
              We are passionate about sharing the flavors of Bulgaria with the
              world, and we hope that you will join us in this culinary journey.
            </p>
          </div>
          {/* <button
            type="button"
            onClick={toggleDialog}
            className="text-white font-martel inline-flex gap-x-2 items-center bg-gradient-to-bl from-[#7f4091] to-rose-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-slate-800 font-medium rounded-lg text-md px-5 py-2.5 mt-4 animate-pulse"
          >
            Leave note <IconMessage />
          </button> */}
        </aside>
        {/* {isOpen && (
          <Modal
            isOpen={isOpen}
            onClose={toggleDialog}
            categories={categories}
            handleSubmit={handleSubmitMessage}
          />
        )} */}
      </section>
    </>
  );
};

export default Survey;
