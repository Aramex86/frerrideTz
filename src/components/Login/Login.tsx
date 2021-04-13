import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router";
import { FormValuesType, ResponseDataType } from "../../Types/Types";
import { loginApi } from "../../Api/api";
import Error from "../common/Error";

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 6 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 9 },
};

const Login = () => {
  const [responseData, setResponseData] = useState<ResponseDataType>();
  const [formValues, setFormValues] = useState<FormValuesType>();
  const [error, setError] = useState<string>("");
  const history = useHistory();

  const fetchData = (values: FormValuesType) => {
    loginApi
      .login(values)
      .then((res) => {
        if (res.success === true) {
          setResponseData(res);
          history.push("/housedata");
        } else {
          history.push("/");
        }
      })
      .catch((err) => setError(err.message));
  };
  const onFinish = (values: any) => {
    //   console.log("Success:", values);
    setFormValues(values);
    fetchData(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <>
      {error ? <Error /> : null}
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
