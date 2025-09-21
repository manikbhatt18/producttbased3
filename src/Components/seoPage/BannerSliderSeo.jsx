


import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../../images/banner 25.jpg";
import slide2 from "../../images/bg2.jpg";
import slide3 from "../../images/Flow web banner  (1600 x 833 px).jpg";

// This is the main component for the banner slider.
// It's built with Tailwind CSS and Framer Motion for animations.
function BannerSliderSeo() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Slide data, using placeholder images.
  // Replace these URLs with your actual image paths.
  const slides = [
    {
      img: slide2,
      heading: "UTILITIES are most Valuable,",
      subHeading: "When they stay INVISIBLE.",
      text: "Un-regulated / Un-Monitored utility expenses are draining your Money.",
    },
    {
      img: slide1,
      heading: "Protecting Your Reputation,",
      subHeading: "Always.",
      text: "With IOTAFLOW, you gain a lean, reliable partner ensuring accuracy, efficiency, and peace of mind in flow measurement — year after year.",
    },
    {
      img: slide3,
      heading: "Your Process is Unique,",
      subHeading: "So Are Our Solutions.",
      text: "We don’t believe in one-size-fits-all. At IOTAFLOW, every customer gets custom flow measurement solutions designed to fit their unique needs — without compromise.",
    },
  ];

  // Handlers for previous and next buttons, optimized with useCallback
  const handlePrev = useCallback(() => {
    setIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  // Effect for auto-sliding every 4 seconds, now with pause-on-hover logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    // Cleanup the timer when the component unmounts or is paused
    return () => clearInterval(timer);
  }, [index, isPaused, handleNext]); 

  const currentSlide = slides[index];

  return (
  <div 
    className="tw-relative tw-w-full tw-h-[50vh] md:tw-h-[85vh] tw-overflow-hidden tw-bg-gray-900"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
  >
    <AnimatePresence initial={false}>
      <motion.div
        key={index}
        // The image and its scaling animation
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="tw-absolute tw-inset-0"
      >
        <motion.img
          key={currentSlide.img}
          src={currentSlide.img}
          className="tw-w-full tw-h-full tw-object-cover"
          alt={`Slide ${index}`}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
    </AnimatePresence>
    
    {/* Semi-transparent overlay for better text readability */}
    <div className="tw-absolute tw-inset-0 tw-bg-black/40"></div>

    {/* Caption Content */}
    <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-start tw-p-6 sm:tw-p-12 md:tw-p-24">
      {/* This div now has the background to create the rectangular shadow effect */}
      <div className="tw-max-w-md lg:tw-max-w-2xl tw-text-left tw-space-y-4 tw-bg-black/50 tw-p-8 tw-rounded-lg">
        <motion.h1
          key={`${index}-h1`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="tw-font-bold tw-text-yellow-400 tw-text-2xl sm:tw-text-3xl lg:tw-text-5xl"
        >
          {currentSlide.heading}
        </motion.h1>

        <motion.h2
          key={`${index}-h2`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="tw-font-bold tw-text-white tw-text-xl sm:tw-text-2xl lg:tw-text-4xl"
        >
          {currentSlide.subHeading}
        </motion.h2>

        <motion.p
          key={`${index}-p`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="tw-text-gray-200 tw-text-sm sm:tw-text-base lg:tw-text-lg"
        >
          {currentSlide.text}
        </motion.p>
        
        <motion.div
            key={`${index}-btn`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          {/* Custom styled button with a sliding hover effect */}
          <button className="tw-hidden sm:tw-inline-block tw-mt-4 tw-relative group tw-overflow-hidden tw-px-6 tw-py-3 tw-rounded-md tw-border-2 tw-border-yellow-400 tw-text-yellow-400 tw-font-semibold tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-scale-105">
            <span className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-yellow-400 tw-transform tw--translate-x-full tw-transition-transform tw-duration-500 tw-ease-in-out group-hover:tw-translate-x-0"></span>
            <span className="tw-relative tw-z-10 tw-transition-colors tw-duration-500 group-hover:tw-text-black">
              Our Products
            </span>
          </button>
        </motion.div>
      </div>
    </div>

    {/* Custom Controls */}
    <div className="tw-hidden md:tw-flex tw-absolute tw-bottom-5 tw-right-5 tw-z-10 tw-gap-3">
      <button
        onClick={handlePrev}
        className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-white/20 tw-text-white tw-flex tw-items-center tw-justify-center tw-backdrop-blur-sm tw-border tw-border-white/30 tw-transition-all hover:tw-bg-white/40"
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-yellow-400/80 tw-text-black tw-flex tw-items-center tw-justify-center tw-backdrop-blur-sm tw-border tw-border-yellow-400/50 tw-transition-all hover:tw-bg-yellow-400"
        aria-label="Next slide"
      >
        &gt;
      </button>
    </div>
  </div>
);
}

export default BannerSliderSeo;

   