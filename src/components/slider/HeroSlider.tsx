import React from "react";
import Slider from "react-slick";

type HeroSliderType = {
  id: number;
  image: string;
  title?: string;
  description?: string;
  buttonLink?: string;
  buttonText?: string;
};

const data: HeroSliderType[] = [
  {
    id: 1,
    image: "/images/slider/slider1.jpg",
    title: "Outset",
    description:
      "Form is designed by Agota Store and is part of the Form series. It is an  armless modern chair with great back support.",
    buttonLink: "/hero-1",
    buttonText: "Explore",
  },
  {
    id: 2,
    image: "/images/slider/slider2.jpg",
    title: "Styles",
    description:
      "Form is designed by Agota Store and is part of the Form series. It is an armless modern chair with great back support.",
    buttonLink: "/hero-2",
  },
  {
    id: 3,
    image: "/images/slider/slider3.jpg",
    title: "Office",
    description:
      "Form is designed by Agota Store and is part of the Form series. It is an  armless modern chair with great back support.",
    buttonLink: "/hero-3",
  },
];

const HeroSlider = () => {
  const [cssLoaded, setCssLoaded] = React.useState(false);

  const settings = {
    dots: true,
    arrows: false /* disable next prev button */,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: false, // Automatically cycle through slides
    autoplaySpeed: 3000, // Time between transitions (in milliseconds)
    responsive: [
      // Adjust settings based on screen size
      {
        breakpoint: 1024, // At 1024px and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // At 600px and below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  React.useEffect(() => {
    Promise.all([
      import("slick-carousel/slick/slick.css"),
      import("slick-carousel/slick/slick-theme.css"),
      import("@/styles/slick-custom.css"),
    ]).then(() => {
      setCssLoaded(true);
    });

    return () => {
      setCssLoaded(false);
    };
  }, []);

  if (!cssLoaded) {
    return <div>Loading...</div>; // Placeholder while CSS loads
  }

  return (
    <div className="w-slider-cmp slider-container">
      <Slider {...settings} className="isolation slider-container relative">
        {data.map((item: any) => (
          <div className="slider-item relative" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="slider-item-content text-left absolute top-0 left-0 w-[50%] h-full md:gap-10">
              <div className="flex flex-col gap-5 slider-item-content-inner items-center justify-center h-full  transform-none text-white  w-[80%]">
                <div className="text-left flex flex-col gap-6">
                  <h3 className="slider-title text-3xl text-white animate-slowSlideShowText duration-2000 text-4xl font-bold">
                    {item.title}
                  </h3>
                  <p className="slider-description text-2xl animate-slowSlideShowText duration-1500 text-white text-lg">
                    {item.description}
                  </p>
                  <a
                    className="py-2 w-fit inline-block px-4 bg-white uppercase text-black animate-slowSlideShowText duration-1000  rounded-xs"
                    href={item?.buttonLink ?? "#"}
                  >
                    {item.buttonText ? item.buttonText : "EXPLORE"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
