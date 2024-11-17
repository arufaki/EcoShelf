import WishlistCard from "../../molecules/Wishlist/WishlistCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useAppContext } from "../../../context/AppContext";

const Wishlist = () => {
    const { wishlist, books } = useAppContext();
    const filterWishlist = books.filter((book) => wishlist.includes(book.id));
    return (
        <section className="py-10 px-5">
            <h1 className="text-lg font-bold text-green-700 font-poppins tracking-wide pb-5">Book Wishlist</h1>
            {wishlist.length > 0 ? (
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        650: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        950: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {filterWishlist.map((book, index) => (
                        <SwiperSlide key={index}>
                            <WishlistCard book={book} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p className="text-center text-green-950 text-xl font-poppins font-semibold h-[400px] flex justify-center items-center">You don't have a wishlist yet</p>
            )}
        </section>
    );
};

export default Wishlist;
