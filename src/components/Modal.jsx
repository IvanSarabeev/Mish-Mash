import React, { useState } from "react";
import StarIcon from "../assets/icons/StarIcon";

const Modal = ({ isOpen, onClose, categories, handleSubmit }) => {
  const [selectedRating, setSelectedRating] = useState({});

  const handleRatingChange = (categoryName, value) => {
    setSelectedRating((prevState) => ({
      ...prevState,
      [categoryName]: value,
    }));
  };

  return (
    <>
      <div className="fixed inset-x-0 inset-y-[6%] md:inset-y-[15%] lg:inset-y-[25%] z-20 w-fit p-4 mx-auto h-[calc(100%-2rem)] max-h-full">
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-gray-900 rounded-lg shadow">
            <h2 className="text-xl md:text-2xl font-bold text-gray-400 font-sub-headings pl-4 pt-4">
              Rate your experience
            </h2>
            <div className="flex flex-wrap py-4 lg:py-6 lg:px-8 justify-center items-center space-y-6">
              <form
                action="#"
                onSubmit={handleSubmit}
                className="gap-y-8 flex flex-auto flex-wrap justify-center items-center"
              >
                {categories.map((category) => {
                  return (
                    <div
                      key={category.name}
                      className="flex flex-wrap justify-center items-center mx-8"
                    >
                      <label htmlFor={category.name}>
                        <h5 className="text-[16px] md:text-xl font-semibold">
                          {category.label}
                        </h5>
                        <span className="flex items-center">
                          {Array.from({ length: 5 }).map((_, index) => {
                            return (
                              <StarIcon
                                key={index}
                                onClick={() =>
                                  handleRatingChange(category.name, index + 1)
                                }
                              />
                            );
                          })}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </form>
            </div>
            <p className="p-4 text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
              Thank you for considering our business for your next event or
              meal. We look forward to serving you soon!
            </p>
            <div className="flex items-center justify-center md:justify-normal p-6 space-x-2 border-t rounded-b border-gray-600">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
