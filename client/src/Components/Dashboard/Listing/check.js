import React, { useState } from "react";
import { Button, Form, Input, Select, Space, Cascader } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

// Sample nested categories
const categoryOptions = [
  {
    value: "electronics",
    label: "Electronics",
    children: [
      {
        value: "laptops",
        label: "Laptops",
        children: [
          {
            value: "macbook",
            label: "MacBook",
          },
          {
            value: "surface",
            label: "Microsoft Surface",
          },
          {
            value: "dell",
            label: "Dell",
          },
          {
            value: "hp",
            label: "HP",
          },
          {
            value: "lenovo",
            label: "Lenovo",
          },
          {
            value: "asus",
            label: "ASUS",
          },
          {
            value: "acer",
            label: "ACER",
          },
        ],
      },
      {
        value: "phones",
        label: "Phones",
        children: [
          {
            value: "Apple",
            label: "Apple",
          },
          {
            value: "Samsung",
            label: "Samsung",
          },
          {
            value: "Google",
            label: "Google",
          },
          {
            value: "OnePlus",
            label: "OnePlus",
          },
          {
            value: "Xiaomi",
            label: "Xiaomi",
          },
          {
            value: "Huawei",
            label: "Huawei",
          },
          {
            value: "OPPO",
            label: "OPPO",
          },
          {
            value: "Vivo",
            label: "Vivo",
          },
        ],
      },
    ],
  },
  {
    value: "clothing",
    label: "Clothing",
    children: [
      {
        value: "men",
        label: "Men",
      },
      {
        value: "women",
        label: "Women",
      },
    ],
  },
  {
    value:'Books',
    label:'Books',
    children:[
{

  value:'School',
  label:'School'
},
{

  value:'Novels',
  label:'Novels'
}


    ]
  }
];

const Add = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [categoryValues, setCategoryValues] = useState({
    mainCategory: "",
    main2Category: "",
    main3Category: "",
  });
  /////upload images code
  const [previewOpen, setPreviewOpen] = useState(false);
  const [cat, setcat] = useState("");
  ///manually categroy making like first main category like electionics /clothes
  const [maincat, setmaincat] = useState("");
  //for the subcategogiese
  //laptops,phones
  const [subcat, setsubcat] = useState("");
  //subcategries 2
  const [subcat2, setsubcat2] = useState("");

  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [test, settest] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const [checkedValues, setCheckedValues] = useState([]);
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
    setCheckedValues(checkedValues);
  };

  const collectData = () => {
    if (!cat) {
      alert("Please fill the form first");
    } else {
      console.log("Selected Category:", selectedCategory);
      setmaincat(categoryValues.mainCategory);
      console.log(maincat);
      alert(maincat);
      console.log("Main Category:", categoryValues.mainCategory);
      //subcategory
      setsubcat(categoryValues.main2Category);
      alert(subcat);
      setsubcat2(categoryValues.main3Category);
      alert(subcat2);
      console.log("Main2 Category:", categoryValues.main2Category);
      console.log("Main3 Category:", categoryValues.main3Category);
      console.log("Product Name:", cat);
      console.log(
        "Product Images:",
        fileList.map((file) => file.url)
      );
      alert(cat);
    }
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const onFinish = (values) => {
    console.log("Received values of form:", values);
    console.log("Received values of form:",checkedValues );
  };

  const handleCategoryChange = (value, selectedOptions) => {
    // Log the selected category values
    console.log("Selected categories:", value);

    // Log the names of the main, main2, and main3 categories
    const mainCategory = selectedOptions[0]?.label || "";
    const main2Category = selectedOptions[1]?.label || "";
    const main3Category = selectedOptions[2]?.label || "";

    console.log("Main Category:", mainCategory);
    console.log("Main2 Category:", main2Category);
    console.log("Main3 Category:", main3Category);

    setSelectedCategory(value);

    // Show the additional fields when the "Laptops" category is selected
    setShowAdditionalFields(
      value.includes("laptops") || value.includes("clothing")
    );
    setCategoryValues({
      mainCategory,
      main2Category,
      main3Category,
    });
  };

  return (
    <div className="e-commerce-form-container   p-5  overflow-scroll  hide-scroll-bar">
      <h1>E-commerce Form</h1>
      <Form name="e-commerce-form" className="" onFinish={onFinish}>
        <Form.Item
          name="category"
          label="Product Category"
          rules={[
            {
              required: true,
              message: "Please select a category!",
            },
          ]}
        >
          <Cascader
            options={categoryOptions}
            onChange={handleCategoryChange}
            placeholder="Select a category"
          />
        </Form.Item>

        {showAdditionalFields && (
          <>
            {/* Additional fields for Laptops */}
            {selectedCategory.includes("laptops") && (
              <>
                <Form.Item
                  name="ramSize"
                  label="RAM Size"
                  rules={[
                    {
                      required: true,
                      message: "Please input the RAM size!",
                    },
                  ]}
                >
                  <Select placeholder="Select RAM Size">
                    <Option value="4GB">4GB</Option>
                    <Option value="8GB">8GB</Option>
                    <Option value="16GB">16GB</Option>
                    <Option value="32GB">32GB</Option>
                    <Option value="64GB">64GB+</Option>
                  </Select>
                </Form.Item>

              
            

              </>
            )}

            {/* Additional fields for Clothing */}
            {selectedCategory.includes("clothing") && (
              <>
                <Form.Item
                  name="fabricType"
                  label="Fabric Type"
                  rules={[
                    {
                      required: true,
                      message: "Please select the fabric type!",
                    },
                  ]}
                >
                  <Select placeholder="Select Fabric Type">
                    <Option value="cotton">Cotton</Option>
                    <Option value="silk">Silk</Option>
                    <Option value="wool">Wool</Option>
                    <Option value="polyester">Polyester</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="color"
                  label="Color"
                  rules={[
                    {
                      required: true,
                      message: "Please select a color!",
                    },
                  ]}
                >
                  <Select placeholder="Select Color">
                    <Option value="red">Red</Option>
                    <Option value="blue">Blue</Option>
                    <Option value="green">Green</Option>
                    <Option value="black">Black</Option>
                  </Select>
                </Form.Item>
              </>
            )}
          </>
        )}
            {selectedCategory.includes("Books") && (
              <>
                  <Select placeholder="Select Pages">
                    <Option value="red">2</Option>
                    <Option value="blue">4</Option>
                    <Option value="green">56</Option>
                    <Option value="black">5</Option>
                  </Select>
              
              </>
            )}
        {/* Other common form fields */}
        <Form.Item
          name="productName"
          label="Product Name"
          value={cat}
          onChange={(e) => {
            setcat(e.target.value);
          }}
          rules={[
            {
              required: true,
              message: "Please input the product name!",
            },
          ]}
        >
          <Input placeholder="Product Name" />
        </Form.Item>

        <Form.Item
          name="productPrice"
          label="Product Price"
          rules={[
            {
              required: true,
              message: "Please input the product price!",
            },
          ]}
        >
          <Input type="number" placeholder="Product Price" />
        </Form.Item>

        <Form.Item
          name="productquantity"
          label="Product Quantity"
          rules={[
            {
              required: true,
              message: "Please input the product quantity!",
            },
          ]}
        >
          <Input type="number" placeholder="Product Quantity" />
        </Form.Item>

        <Form.Item
          name="productdes"
          label="Product Description"
          rules={[
            {
              required: true,
              message: "Please input the product description!",
            },
          ]}
        >
          <Input type="text" placeholder="Product description" />
        </Form.Item>
        {/* Upload Image Code */}
        <h1>Upload Your Product Images</h1>
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img
            alt="example"
            style={{
              width: "100%",
            }}
            src={previewImage}
          />
        </Modal>
        <Button
          type="primary"
          className="bg-dark-blue"
          htmlType="submit"
          onClick={collectData}
        >
          Add Product
        </Button>
      </Form>
    </div>
  );
};

export default Add;
