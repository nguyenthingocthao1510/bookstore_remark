import { Button, Carousel } from "antd";
import { Content } from "antd/es/layout/layout";
import { BookstoreBackground } from "src/assets/icons";
import "./style.scss";
import { useBook } from "src/helpers/api/books";
import { useState } from "react";
import { ProductModal } from "./productModal";
import { formatPrice } from "src/utils/formatPrice";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export const HomepagePage = () => {
  const { data, isLoading } = useBook();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<string | undefined>();

  const showModal = (value?: string) => {
    setIsModalOpen(true);
    setSelectedBook(value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Content style={{ margin: "24px 16px 0" }}>
        <div className="background-bookstore">
          <img
            src={BookstoreBackground}
            alt="backgroundBookStore"
            className="w-full rounded-lg"
          />
          <div className="advertise-text">
            <p className="font-wind text-8xl">Welcome</p>
            <p className="text-3xl ml-5">to the world of books</p>
          </div>
        </div>
      </Content>

      <Content
        style={{ margin: "24px 16px 0" }}
        className="bg-gradient-to-b from-[#D78EAC] via-[#f9e0e7] to-[white] rounded-lg pt-5"
      >
        <div>
          {/* TITLE */}
          <div className="flex justify-center">
            <h4 className="text-2xl font-bold text-white">
              HIGHLIGHTS PRODUCTS
            </h4>
          </div>

          {/* CAROUSEL */}
          <div>
            {isLoading ? (
              <div className="my-5 h-20">
                <div className="w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            ) : (
              <Carousel
                infinite
                className="carousel-cpn flex flex-row justify-between mx-10 mb-10 mt-7"
                slidesToShow={5}
                arrows
                autoplay
              >
                {data?.items?.map((books) => (
                  <div key={books.id}>
                    <div className="flex flex-col mb-5 px-4">
                      {/* Image + Button */}
                      <div className="relative group">
                        <img
                          src={books?.volumeInfo?.imageLinks?.thumbnail}
                          alt={books.volumeInfo?.title}
                          className="rounded-lg w-full h-96 object-cover transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        />

                        <Button
                          className="absolute bottom-0 left-0 right-0 text-black bg-white text-1xl border-none rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:!text-white hover:!bg-black"
                          onClick={() => showModal(books.id)}
                        >
                          Quick view
                        </Button>
                      </div>

                      {/* Title + Price */}
                      <div className="mt-2">
                        <p className="truncate text-lg font-light text-[#BD7C89]">
                          {books.volumeInfo?.title}
                        </p>
                        <p className="text-lg text-red-500">
                          {formatPrice(
                            books.saleInfo?.listPrice.amount ?? 0,
                            books.saleInfo?.listPrice.currencyCode
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </Content>

      <Content
        style={{ margin: "24px 16px 0" }}
        className="bg-white rounded-lg pt-5"
      >
        <div>
          {/* TITLE */}
          <div className="flex mx-10">
            <h4 className="text-2xl font-semibold text-[#FBA1B3] border-b-4 border-[#FBA1B3]">
              Product Category
            </h4>
            <div className="flex-1 !-mt-2 border-b border-[#FBA1B3]"></div>
          </div>

          {/* CAROUSEL */}
          <div>
            {isLoading ? (
              <div className="my-5 h-20">
                <div className="w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            ) : (
              <Carousel
                infinite
                className="carousel-cpn flex flex-row justify-between mx-10 mb-10 mt-7"
                slidesToShow={5}
                arrows
                autoplay
              >
                {data?.items?.map((books) => (
                  <div key={books.id}>
                    <div className="flex flex-col mb-5 px-4">
                      {/* Image + Button */}
                      <div className="relative group">
                        <img
                          src={books?.volumeInfo?.imageLinks?.thumbnail}
                          alt={books.volumeInfo?.title}
                          className="rounded-lg w-full h-96 object-cover transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        />

                        <Button
                          className="absolute bottom-0 left-0 right-0 text-black bg-white text-1xl border-none rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:!text-white hover:!bg-black"
                          onClick={() => showModal(books.id)}
                        >
                          Quick view
                        </Button>
                      </div>

                      {/* Title + Price */}
                      <div className="mt-2">
                        <p className="truncate text-lg font-light text-[#BD7C89]">
                          {books.volumeInfo?.title}
                        </p>
                        <p className="text-lg text-red-500">
                          {formatPrice(
                            books.saleInfo?.listPrice.amount ?? 0,
                            books.saleInfo?.listPrice.currencyCode
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </Content>

      <Content
        style={{ margin: "24px 16px 0" }}
        className="bg-white rounded-lg pt-5"
      >
        <div>
          {/* TITLE */}
          <div className="flex mx-10">
            <h4 className="text-2xl font-semibold text-[#FBA1B3] border-b-4 border-[#FBA1B3]">
              Best Selling Products
            </h4>
            <div className="flex-1 !-mt-2 border-b border-[#FBA1B3]"></div>
          </div>

          {/* CAROUSEL */}
          <div>
            {isLoading ? (
              <div className="my-5 h-20">
                <div className="w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            ) : (
              <Carousel
                infinite
                className="carousel-cpn flex flex-row justify-between mx-10 mb-10 mt-7"
                slidesToShow={5}
                arrows
                autoplay
              >
                {data?.items?.map((books) => (
                  <div key={books.id}>
                    <div className="flex flex-col mb-5 px-4">
                      {/* Image + Button */}
                      <div className="relative group">
                        <img
                          src={books?.volumeInfo?.imageLinks?.thumbnail}
                          alt={books.volumeInfo?.title}
                          className="rounded-lg w-full h-96 object-cover transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        />

                        <Button
                          className="absolute bottom-0 left-0 right-0 text-black bg-white text-1xl border-none rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:!text-white hover:!bg-black"
                          onClick={() => showModal(books.id)}
                        >
                          Quick view
                        </Button>
                      </div>

                      {/* Title + Price */}
                      <div className="mt-2">
                        <p className="truncate text-lg font-light text-[#BD7C89]">
                          {books.volumeInfo?.title}
                        </p>
                        <p className="text-lg text-red-500">
                          {formatPrice(
                            books.saleInfo?.listPrice.amount ?? 0,
                            books.saleInfo?.listPrice.currencyCode
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </Content>

      <ProductModal
        isModalOpen={isModalOpen}
        onCancel={closeModal}
        onOk={closeModal}
        bookId={selectedBook}
      />
    </div>
  );
};
