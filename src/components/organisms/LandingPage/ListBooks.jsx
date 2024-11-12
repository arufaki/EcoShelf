import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import Card from "../../molecules/ListBooks/Card";
import { useAppContext } from "../../../context/AppContext";

const ListBooks = () => {
    const { books } = useAppContext();
    const sliceBooks = books.slice(0, 8);

    return (
        <div className="w-full px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-green-700 pt-14 mb-8">List Books</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    475: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    690: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },

                    890: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {sliceBooks.map((book, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <Card book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="btn btn-outline btn-success outline-none hover:!text-white my-10">More Books</button>
        </div>
    );
};

export default ListBooks;
