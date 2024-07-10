import { useState } from "react";
import {
  Button,
  Col,
  Drawer,
  Form,
  Row,
  Space,
} from "antd";
import ComboBox from "./ComboBox.jsx";
import { studentsData } from "../../data/classroomArrayData.js";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// eslint-disable-next-line react/prop-types
const NewStudentDrawer = ({ visiblity }) => {
  const [open, setOpen] = useState(visiblity);

  const onClose = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <Drawer
        title="Add students to classroom"
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
        </Form>
      </Drawer>
    </>
  );
};
export default NewStudentDrawer;
