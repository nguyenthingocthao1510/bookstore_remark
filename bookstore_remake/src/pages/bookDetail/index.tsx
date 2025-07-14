import { HomeOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Carousel, notification, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useBookDetail } from "src/helpers/api/books";
import { formatPrice } from "src/utils/formatPrice";

export const BookDetailPage = () => {
  const { bookId } = useParams();
  const { data, isLoading } = useBookDetail(bookId);
  const [bookNumber, setBookNumber] = useState<number>(1);
  const [api, contextHolder] = notification.useNotification();

  const handleIncrease = () => {
    setBookNumber((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (bookNumber > 1) {
      setBookNumber((prev) => prev - 1);
    } else {
      api.warning({
        message: "Minimum Quantity",
        description: "You must purchase at least one copy.",
      });
    }
  };

  const addToCart = () => {
    api.success({
      message: "Added to Cart",
      description: "Your book was added to the cart successfully.",
    });
  };

  if (isLoading || !data) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <Spin size="large" />
      </div>
    );
  }

  const { volumeInfo, saleInfo, id } = data;

  return (
    <Content className="bg-white rounded-lg m-5 p-5">
      {contextHolder}

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          {
            title: (
              <Link
                to="/homepage"
                className="text-[#BD7C89]"
                style={{ display: "flex", alignItems: "center" }}
              >
                <HomeOutlined className="mr-2" /> Home
              </Link>
            ),
          },
          {
            title: "Reference books",
          },
          {
            title: (
              <Link className="!text-gray-900" to={`/book/${id}`}>
                {volumeInfo?.title}
              </Link>
            ),
          },
        ]}
        className="bg-[#FDD7DE]  mb-5 rounded-xl px-5 py-2"
      />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Image Carousel */}
        <div className="flex items-center justify-center flex-shrink-0">
          <Carousel arrows autoplay infinite className="w-80">
            {volumeInfo?.imageLinks?.thumbnail && (
              <img
                src={volumeInfo.imageLinks.thumbnail}
                alt="Thumbnail"
                className="w-80 h-auto object-cover rounded-xl shadow-md"
              />
            )}
            {volumeInfo?.imageLinks?.smallThumbnail && (
              <img
                src={volumeInfo.imageLinks.smallThumbnail}
                alt="Small Thumbnail"
                className="w-80 h-auto object-cover rounded-xl shadow-md"
              />
            )}
            {volumeInfo?.imageLinks?.small && (
              <img
                src={volumeInfo.imageLinks.small}
                alt="Small"
                className="w-80 h-auto object-cover rounded-xl shadow-md"
              />
            )}
          </Carousel>
        </div>

        {/* Book Info */}
        <div className="flex flex-col flex-1">
          <h2 className="text-3xl font-bold text-gray-800">
            {volumeInfo?.title}
          </h2>
          <p className="text-gray-500 text-md mt-1 italic">
            by {volumeInfo?.authors?.join(", ") ?? "Unknown"}
          </p>
          <p className="text-sm text-gray-400">
            Published by {volumeInfo?.publisher ?? "Unknown"} on{" "}
            {volumeInfo?.publishedDate}
          </p>

          {/* Categories */}
          {/* Genres */}
          {data?.volumeInfo?.categories?.length ? (
            <div className="mt-4">
              <h4 className="font-semibold mb-1 text-gray-700">Genres:</h4>
              <div className="flex gap-2 flex-wrap">
                {data.volumeInfo.categories.map((value) => (
                  <span
                    key={value}
                    className="bg-red-100 text-red-800 px-3 py-1 text-xs rounded-full shadow-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* Meta Info */}
          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <p>
              📄 <strong>Pages:</strong> {volumeInfo?.pageCount}
            </p>
            <p>
              ⭐ <strong>Rating:</strong> {volumeInfo?.averageRating ?? "N/A"}
            </p>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-2xl font-bold text-red-500">
              {formatPrice(
                saleInfo?.listPrice?.amount ?? 0,
                saleInfo?.listPrice?.currencyCode
              )}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-4 w-1/2">
            <div className="flex items-center gap-4">
              {/* Quantity */}
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 gap-4">
                <Button
                  onClick={handleDecrease}
                  icon={<MinusOutlined />}
                  className="border-none pb-1 text-xl text-gray-500 hover:!text-red-500"
                />
                <span className="text-lg font-semibold mt-1">{bookNumber}</span>
                <Button
                  onClick={handleIncrease}
                  icon={<PlusOutlined />}
                  className="border-none pb-1 text-xl text-gray-500 hover:!text-green-500"
                />
              </div>

              {/* Add to Cart */}
              <Button
                onClick={addToCart}
                className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white h-12 rounded-lg font-semibold shadow-md transition-all duration-300"
              >
                ADD TO CART
              </Button>
            </div>

            {/* Wishlist */}
            <Button className="h-11 w-full rounded-lg hover:!text-red-500 border border-gray-400 hover:!border-red-400 text-gray-700">
              ❤️ ADD TO WISHLIST
            </Button>
          </div>
        </div>
      </div>

      {/* Divider Title */}
      <div className="flex my-5">
        <h4 className="text-2xl font-semibold text-[#FBA1B3] border-b-4 border-[#FBA1B3]">
          Product Detail
        </h4>
        <div className="flex-1 !-mt-2 border-b border-[#FBA1B3]"></div>
      </div>

      {/* Detailed Info Section */}
      <div className="bg-[#FDD7DE] p-5 rounded-lg space-y-2">
        <p>
          <strong>Title:</strong> {volumeInfo?.title}
        </p>
        <p>
          <strong>Publisher:</strong> {volumeInfo?.publisher}
        </p>
        <p>
          <strong>Author(s):</strong> {volumeInfo?.authors?.join(", ")}
        </p>
        <p>
          <strong>Number of pages:</strong> {volumeInfo?.pageCount}
        </p>
        <p>
          <strong>Publication Date:</strong> {volumeInfo?.publishedDate}
        </p>
        <p>
          <strong>Genres:</strong> {volumeInfo?.mainCategory}
        </p>
        <p>
          <strong>Description:</strong> {volumeInfo?.description}
        </p>
      </div>
    </Content>
  );
};
