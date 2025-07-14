import { HeartOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Carousel, Modal } from "antd";
import { useState } from "react";
import { useBookDetail } from "src/helpers/api/books";
import { formatPrice } from "src/utils/formatPrice";

type Prop = {
  isModalOpen?: boolean;
  bookId?: string;
  onCancel: (e?: any) => void;
  onOk: (e?: any) => void;
};

export const ProductModal = (props: Prop) => {
  const { data } = useBookDetail(props.bookId);
  const [bookNumber, setBookNumber] = useState<number>(1);

  const handleIncrease = () => {
    setBookNumber(bookNumber + 1);
  };

  const handleDecrease = () => {
    if (bookNumber < 1) {
      alert("Can not decrease anymore");
    } else {
      setBookNumber(bookNumber - 1);
    }
  };

  return (
    <Modal
      centered
      title={null}
      open={props.isModalOpen}
      onCancel={props.onCancel}
      onOk={props.onOk}
      footer={null}
      width={1000}
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Image */}
        <div className="flex items-center justify-center flex-shrink-0">
          {/* <img
            src={data?.volumeInfo?.imageLinks?.thumbnail}
            alt={data?.volumeInfo?.title}
            className="w-80 h-auto object-cover rounded-xl shadow-md "
          /> */}
          <Carousel arrows autoplay infinite className="w-80">
            {data?.volumeInfo?.imageLinks?.thumbnail && (
              <div>
                <img
                  src={data.volumeInfo.imageLinks.thumbnail}
                  alt="Thumbnail"
                  className="w-80 h-auto object-cover rounded-xl shadow-md"
                />
              </div>
            )}
            {data?.volumeInfo?.imageLinks?.smallThumbnail && (
              <div>
                <img
                  src={data.volumeInfo.imageLinks.smallThumbnail}
                  alt="Small Thumbnail"
                  className="w-80 h-auto object-cover rounded-xl shadow-md"
                />
              </div>
            )}
            {data?.volumeInfo?.imageLinks?.small && (
              <div>
                <img
                  src={data.volumeInfo.imageLinks.small}
                  alt="Small"
                  className="w-80 h-auto object-cover rounded-xl shadow-md"
                />
              </div>
            )}
          </Carousel>
        </div>

        {/* Book Info */}
        <div className="flex flex-col flex-1">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {data?.volumeInfo?.title}
            </h2>
            <p className="text-gray-500 text-md mt-1 italic">
              by {data?.volumeInfo?.authors?.join(", ") ?? "Unknown"}
            </p>
            <p className="text-sm text-gray-400">
              Published by {data?.volumeInfo?.publisher ?? "Unknown"} on{" "}
              {data?.volumeInfo?.publishedDate}
            </p>

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

            {/* Additional Info */}
            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>
                📄 <strong>Pages:</strong> {data?.volumeInfo?.pageCount}
              </p>
              <p>
                ⭐ <strong>Rating:</strong>{" "}
                {data?.volumeInfo?.averageRating ?? "N/A"}
              </p>
            </div>

            {/* Price */}
            <div className="mt-6">
              <p className="text-2xl font-bold text-red-500">
                {formatPrice(
                  data?.saleInfo?.listPrice?.amount ?? 0,
                  data?.saleInfo?.listPrice?.currencyCode
                )}
              </p>
            </div>
          </div>

          {/* Quantity + Actions */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              {/* Quantity Box */}
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
              <Button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white h-12 rounded-lg font-semibold shadow-md transition-all duration-300">
                ADD TO CART
              </Button>
            </div>

            {/* Wishlist Button */}
            <Button className="h-11 rounded-lg hover:!text-red-500 border border-gray-400 hover:!border-red-400 text-gray-700">
              ❤️ ADD TO WISHLIST
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
