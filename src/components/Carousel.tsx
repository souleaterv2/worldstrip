import Link from "next/link";

import { Center, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard } from "swiper";

SwiperCore.use([Navigation, Pagination, Keyboard]);

type Content = {
  id: number;
  name?: string;
  coment?: string;
  image: string;
};

interface CarouselProps {
  carouselItens: Content[];
}

export function Carousel({ carouselItens }: CarouselProps) {
  return (
    <Swiper
      id="main"
      tag="section"
      navigation
      pagination
      keyboard
      wrapperTag="ul"
      spaceBetween={0}
      slidesPerView={1}
    >
      {carouselItens.map((slide) => (
        <SwiperSlide tag="li" key={slide.id}>
          <Link href={`/continent/${slide.id}`}>
            <Center
              cursor="pointer"
              as="a"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              backgroundImage={`url(${slide.image})`}
              backgroundPosition="center"
              flexDirection="column"
              fontWeight="700"
              color="white"
              h="450px"
              _hover={{
                color: "highlight.500",
              }}
              transition="color 0.2s"
            >
              <Text
                fontSize={{
                  base: "1.5rem",
                  lg: "3rem",
                }}
              >
                {slide.name}
              </Text>
              <Text fontSize={{ base: "0.875rem", lg: "1.5rem" }}>
                {slide.coment}
              </Text>
            </Center>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
