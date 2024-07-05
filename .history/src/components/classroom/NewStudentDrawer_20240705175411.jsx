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
import { courseOptions, studentsData } from "../../data/classroomArrayData.js";

// eslint-disable-next-line react/prop-types
const NewStudentDrawer = ({ visiblity }) => {
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
            <Button className="bg-[#0085FF]" onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          
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
export default NewStudentDrawer;
