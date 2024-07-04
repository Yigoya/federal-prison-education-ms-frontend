import { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Space,
} from "antd";
import ComboBox from "./ComboBox.jsx";
import { courseOptions, studentsData } from "../";

const NewSectionDrawer = ({ visiblity }) => {
  const [open, setOpen] = useState(visiblity);

  const onClose = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <Drawer
        title="Create a new section"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button className="bg-violet-800" onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="name"
                label="Section name"
                rules={[
                  {
                    required: true,
                    message: "Please enter the section name.",
                  },
                ]}
              >
                <Input placeholder="Please enter the section name" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="capacity"
                label="Capacity"
                rules={[
                  {
                    required: true,
                    message: "Please enter section capacity",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  type="number"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="room"
                label="Room number"
                rules={[
                  {
                    required: true,
                    message: "Please enter the room number",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Code"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="courses"
                label="Courses"
                rules={[
                  {
                    required: true,
                    message: "Please select atleast one course",
                  },
                ]}
              >
                <ComboBox options={courseOptions} />
              </Form.Item>
            </Col>


            <Col span={24}>
              <Form.Item
                name="students"
                label="Students"
                rules={[
                  {
                    required: true,
                    message: "Please choose students",
                  },
                ]}
              >
                <ComboBox options={studentsData} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: "Please choose the dateTime",
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: "100%",
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter section description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter section description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default NewSectionDrawer;
