import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

import img from "../../assets/pro2.jpg";

type OnChange = NonNullable<TableProps<DataType>["onChange"]>;

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
  key: string;
  image: string;
  name: string;
  age: number;
  price: number;
}

import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import { updatePageNavigation } from "../../Features/Features";

const ProductList = () => {
  const dispatch = useDispatch();
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});
  useEffect(() => {
    dispatch(updatePageNavigation("product-list"));
  }, [dispatch]);

  const data: DataType[] = [
    {
      key: "1",
      image: img,
      name: "John Brown",
      age: 32,
      price: 500,
    },
    {
      key: "2",
      image: img,
      name: "Jim Green",
      age: 42,
      price: 500,
    },
    {
      key: "3",
      image: img,
      name: "Joe Black",
      age: 32,
      price: 500,
    },
    {
      key: "4",
      image: img,
      name: "Jim Red",
      age: 32,
      price: 500,
    },
    {
      key: "5",
      image: img,
      name: "John Brown",
      age: 32,
      price: 500,
    },
    {
      key: "6",
      image: img,
      name: "Jim Green",
      age: 42,
      price: 500,
    },
    {
      key: "7",
      image: img,
      name: "Joe Black",
      age: 32,
      price: 500,
    },
    {
      key: "8",
      image: img,
      name: "Jim Red",
      age: 32,
      price: 600,
    },
    {
      key: "9",
      image: img,
      name: "John Brown",
      age: 32,
      price: 600,
    },
    {
      key: "10",
      image: img,
      name: "Jim Green",
      age: 42,
      price: 600,
    },
    {
      key: "11",
      image: img,
      name: "Joe Black",
      age: 32,
      price: 400,
    },
    {
      key: "12",
      image: img,
      name: "Jim Red",
      age: 32,
      price: 400,
    },
  ];

  const columns: TableColumnsType<DataType> = [
    {
      title: "Product Image",
      dataIndex: "image",
      key: "image",
      render: (text: string) => <img src={text} alt="Product" style={{ width: 50, height: 50, borderRadius: "6px" }} />,
      ellipsis: true,
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Product Code",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Product Price ($)",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === "price" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter as Sorts);
  };

  return (
    <div className="flex-1">
      <PagesHeader title="Product List" nav={"Product / Product List"} />
      <div className="mx-[15px] mt-[15px]">
        <Table columns={columns} dataSource={data} onChange={handleChange} />
      </div>
    </div>
  );
};

export default ProductList;
