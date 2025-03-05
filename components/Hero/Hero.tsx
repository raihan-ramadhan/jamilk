"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { DotButton, useDotButton } from "../ui/test";
import useEmblaCarousel from "embla-carousel-react";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({});

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="h-[calc(100vh+80px)] w-full bg-primary ">
      <Carousel
        ref={emblaRef}
        className="relative overflow-hidden w-full h-full"
      >
        <CarouselContent containerClassName="w-full h-full" className="!ml-0">
          <CarouselItem className="relative">
            <Image
              src="/carousel-imgs/DSC09540.jpg"
              alt="jamilk-model image"
              fill
              loading="eager"
              className="object-cover"
            />
          </CarouselItem>
          <CarouselItem className="relative">
            <Image
              src="/carousel-imgs/DSC09540.jpg"
              alt="jamilk-model image"
              loading="eager"
              fill
              className="object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        {/* <div className="bg-gree-500 absolute right-0 bottom-0">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
        <div className="content-[ ] bg-white w-[calc(100%+150px)] h-[150px] absolute bottom-0 z-10 rounded-[100%/150px] translate-y-1/2 left-1/2 -translate-x-1/2" />
      </Carousel>
    </section>
  );
};

export default Hero;
