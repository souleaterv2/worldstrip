import { Center, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard } from "swiper";

SwiperCore.use([Navigation, Pagination, Keyboard]);

type Content = {
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
        <SwiperSlide tag="li" key={slide.name}>
          <Center
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundImage={`url(${slide.image})`}
            backgroundPosition="center"
            flexDirection="column"
            fontWeight="700"
            color="white"
            h="450px"
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
