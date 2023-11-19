import { DownOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { funclogedin, funcuserState } from "../../Redux/loginslice";
const items = [
  {
    key: "Dashboard",
    label: "Dashboard",
  },
  {
    key: "LogOut",
    label: "LogOut",
  },
];
const DropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        onSelect: (item) => {
          item.key === "LogOut" && (
            <>
              {navigate("/")}
              {dispatch(funclogedin(false))}
              {dispatch(funcuserState("seller"))}
            </>
          );
        },
      }}
    >
      <Typography.Link>
        <Space>
          <Avatar src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};
export default DropDown;
