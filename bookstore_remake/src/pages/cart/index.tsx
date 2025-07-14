import { CloseOutlined } from "@ant-design/icons";
import { Button, Divider, Modal, notification, Row, Table } from "antd";
import { Content } from "antd/es/layout/layout";
import { ColumnType } from "antd/es/table";
import classNames from "classnames";
import { Formik, useFormik } from "formik";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { InputProps } from "src/components/Form/FormItem";
import InputFields from "src/components/Form/FormItem/InputFields";
import { TYPE_FIELD } from "src/constants/enum/common";
import { Books } from "src/constants/types/books/book";
import { useBook } from "src/helpers/api/books";
import { formatPrice } from "src/utils/formatPrice";
import { yubObject } from "src/utils/validate";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
import { useNavigate } from "react-router-dom";

type ShippingDetail = {
  name?: string;
  phone_number?: string;
  city?: string;
  order_id?: string;
  district?: string;
  ward?: string;
};

export const CartPage = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useBook(undefined, 0, 2, undefined);

  const amount: number[] = [1, 2];

  const [items, setItems] = useState<Books[]>([]);
  const [formValue, setFormValue] = useState<Record<string, string>>({});
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [bookId, setBookId] = useState<string | undefined>();
  const [api, contextHolder] = notification.useNotification();

  const totalAmount = useMemo(() => {
    return items.reduce((sum, item, index) => {
      const price = item.saleInfo?.listPrice.amount;
      return sum + (price || 0) * amount[index];
    }, 0);
  }, [items]);

  const coinValue = totalAmount / 1000;

  const defaultValue: ShippingDetail = {
    city: "",
    district: "",
    name: "",
    order_id: "",
    phone_number: "",
    ward: "",
  };

  useEffect(() => {
    if (data?.items) {
      setItems(data.items);
    }
  }, [data]);

  const handleDelete = (id?: string) => {
    setBookId(id);
    setIsOpenModal(true);
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  const handleConfirmDelete = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setIsOpenModal(false);
  };

  const onHandleChange = (key: string, value: string) => {
    setFormValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    const generateOrderId = uuidv4();
    formValues.setFieldValue("order_id", generateOrderId);
    setFormValue((prev) => ({
      ...prev,
      order_id: generateOrderId,
    }));
  }, []);

  const formSchema = yubObject({
    name: Yup.string().required("Please enter name!").nullable(),
    phone_number: Yup.string()
      .required("Please enter phone number!")
      .nullable(),
    city: Yup.string().required("Please enter city!").nullable(),
    district: Yup.string().required("Please enter district!").nullable(),
    ward: Yup.string().required("Please enter ward!").nullable(),
  });

  const formValues = useFormik<ShippingDetail>({
    initialValues: defaultValue,
    validationSchema: formSchema,
    onSubmit: async (data: ShippingDetail) => {
      try {
        api["success"]({
          message: "Payment Successful",
          description: "Your payment was processed successfully.",
        });
        setTimeout(() => {
          navigate("/purchase-success");
        }, 2000);
      } catch (error) {
        api["error"]({
          message: "Payment Failed",
          description:
            "Something went wrong while processing your payment. Please try again.",
        });
      }
    },
  });

  const columnProps: ColumnType<Books>[] = [
    {
      title: "",
      dataIndex: "thumbnail",
      key: "thumbnail",
      align: "center",
      render: (_, record) => {
        return <img src={record.volumeInfo?.imageLinks?.thumbnail} />;
      },
    },
    {
      title: "Product",
      dataIndex: "title",
      key: "title",
      align: "center",
      className: "!text-[#BD7C89] !font-bold",
      render: (_, record) => {
        return <p className="!font-normal">{record.volumeInfo?.title}</p>;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
      className: "!text-[#BD7C89] !font-bold",
      render: (_, record) => {
        return (
          <p className="!font-normal">
            {formatPrice(
              record.saleInfo?.listPrice.amount ?? 0,
              record.saleInfo?.listPrice.currencyCode
            )}
          </p>
        );
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "center",
      className: "!text-[#BD7C89] !font-bold justify-items-center",
      render: (_, __, index) => {
        return (
          <p className="!font-normal border border-1 border-black w-1/2 h-full">
            {amount[index]}
          </p>
        );
      },
    },
    {
      title: "Into money",
      dataIndex: "into_money",
      key: "into_money",
      align: "center",
      className: "!text-[#BD7C89] !font-bold",
      render: (_, record, index) => {
        const total = amount[index] * (record.saleInfo?.listPrice.amount ?? 0);
        return (
          <div className="flex flex-col justify-between h-16 mb-10">
            <div className="w-full flex justify-end -ml-20">
              <Button
                icon={<CloseOutlined />}
                className="border-red-500 text-red-500 pb-2"
                onClick={() => handleDelete(record.id)}
              />
            </div>
            <p className="!font-normal">{formatPrice(total, undefined)}</p>
          </div>
        );
      },
    },
  ];

  const inputShippingDetail: InputProps[] = [
    {
      name: "name",
      label: "Name",
      value: formValues.values.name,
      allowClear: true,
      type: TYPE_FIELD.TEXT,
      placeholder: "",
      style: {
        borderTop: "unset",
        borderLeft: "unset",
        borderRight: "unset",
        borderBottom: "2px solid #FBA1B3",
        borderRadius: "0px",
        padding: "0px",
        marginBottom: "1%",
        marginLeft: "2%",
        paddingLeft: "1%",
      },
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange("name", e.target.value);
      },
      span: 12,
    },
    {
      name: "phone_number",
      label: "Phone number",
      value: formValues.values.phone_number,
      allowClear: true,
      type: TYPE_FIELD.TEXT,
      placeholder: "",
      style: {
        borderTop: "unset",
        borderLeft: "unset",
        borderRight: "unset",
        borderBottom: "2px solid #FBA1B3",
        borderRadius: "0px",
        padding: "0px",
        marginBottom: "1%",
        width: "100%",
        paddingLeft: "1%",
      },
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange("phone_number", e.target.value);
      },
      span: 12,
    },
    {
      name: "city",
      label: "City",
      value: formValues.values.city,
      allowClear: true,
      type: TYPE_FIELD.TEXT,
      placeholder: "",
      style: {
        borderTop: "unset",
        borderLeft: "unset",
        borderRight: "unset",
        borderBottom: "2px solid #FBA1B3",
        borderRadius: "0px",
        padding: "0px",
        marginBottom: "1%",
        marginLeft: "2%",
        paddingLeft: "1%",
      },
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange("city", e.target.value);
      },
      span: 12,
    },
    {
      name: "order_id",
      label: "Order ID",
      value: formValues.values.order_id,
      allowClear: true,
      type: TYPE_FIELD.TEXT,
      placeholder: "",
      style: {
        borderTop: "unset",
        borderLeft: "unset",
        borderRight: "unset",
        borderBottom: "2px solid #FBA1B3",
        borderRadius: "0px",
        padding: "0px",
        marginBottom: "1%",
        paddingLeft: "1%",
      },
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange("order_id", e.target.value);
      },
      disabled: true,
      span: 12,
    },
    {
      name: "district",
      label: "District",
      value: formValues.values.district,
      allowClear: true,
      type: TYPE_FIELD.TEXT,
      placeholder: "",
      style: {
        borderTop: "unset",
        borderLeft: "unset",
        borderRight: "unset",
        borderBottom: "2px solid #FBA1B3",
        borderRadius: "0px",
        padding: "0px",
        marginBottom: "1%",
        marginLeft: "2%",
        paddingLeft: "1%",
      },
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange("district", e.target.value);
      },
      span: 12,
    },
    {
      name: "ward",
      label: "Ward",
      value: formValues.values.ward,
      allowClear: true,
      type: TYPE_FIELD.TEXT,
      placeholder: "",
      style: {
        borderTop: "unset",
        borderLeft: "unset",
        borderRight: "unset",
        borderBottom: "2px solid #FBA1B3",
        borderRadius: "0px",
        padding: "0px",
        marginBottom: "1%",
        marginLeft: "2%",
        paddingLeft: "1%",
      },
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onHandleChange("ward", e.target.value);
      },
      span: 12,
    },
  ];

  return (
    <>
      {contextHolder}
      {/* {data?.items?.map((books, index) => (
        <p key={index}>{books.volumeInfo?.title}</p>
      ))} */}
      <Content className="rounded-lg bg-white mx-5 my-5">
        <div className="flex mx-5 my-5">
          <h4 className="text-2xl mt-3 font-semibold text-[#FBA1B3] border-b-4 border-[#FBA1B3]">
            Cart
          </h4>
          <div className="flex-1 !-mt-2 border-b border-[#FBA1B3]"></div>
        </div>

        <div className="mx-5">
          <Table
            dataSource={items || []}
            columns={columnProps}
            pagination={false}
            className="cart-table-cpn"
            loading={isLoading}
          />
        </div>
      </Content>

      <Content className="rounded-lg bg-white mx-5">
        <div className="flex mx-5 py-5">
          <h4 className="text-2xl font-semibold text-[#FBA1B3] border-b-4 border-[#FBA1B3]">
            Shipment details
          </h4>
          <div className="flex-1 !-mt-2 border-b border-[#FBA1B3]"></div>
        </div>
        <div className="px-5 py-5">
          <InputFields
            inputs={inputShippingDetail}
            form={formValues}
            gutter={[16, 16]}
            className="shipping-detail-cpn"
          />
        </div>

        <div className="flex flex-col text-[#BD7C89]">
          <p className="flex justify-center w-full text-2xl font-bold">
            Add shopping cart
          </p>
          <div className="flex justify-end mr-10 py-5">
            <div className="w-1/2 flex-col border border-1 border-gray-500 p-5 rounded-lg">
              <div className="flex justify-between">
                <p>Into money</p>
                <p>{formatPrice(totalAmount)}</p>
              </div>
              <Divider className="border border-1 border-gray-300" />
              <div className="flex justify-between">
                <p>Shipping fee</p>
                <p>0 ₫</p>
              </div>
              <div className="flex justify-between pt-3">
                <p>Total</p>
                <p>{formatPrice(totalAmount)}</p>
              </div>
              <Divider className="border border-1 border-gray-300" />{" "}
              <div className="flex justify-between">
                <p>Coin</p>
                <p>{coinValue} coin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-5 pl-80">
          <Button
            onClick={() => formValues.handleSubmit()}
            className="!ml-96 bg-gradient-to-r from-[#f97892] to-[#fbaebe] w-64 text-white"
          >
            Process Payment
          </Button>
        </div>
      </Content>
      <Modal
        title={
          <div className="flex items-center gap-2 text-red-500">
            <CloseOutlined className="text-red-500" />
            <span className="text-xl font-semibold">Remove Book</span>
          </div>
        }
        centered
        open={isOpenModal}
        onOk={() => bookId && handleConfirmDelete(bookId)}
        onCancel={handleCancel}
        okText="Yes, remove it"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p className="text-gray-700 text-base">
          Are you sure you want to{" "}
          <strong className="text-red-500">remove</strong> this book from your
          cart?
        </p>
      </Modal>
    </>
  );
};
