import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { apiUserLogout } from "../../store/reducers/authReducer/actions";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStickyBox } from "react-sticky-box";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeIcon from "@mui/icons-material/Home";
// import "./index.css";
const SwaN_Sidebar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeMenuItem, setActiveMenuItem } = props;
  const location = useLocation();
  const handleLogOut = () => {
    dispatch(apiUserLogout("123124"));
    navigate("/");
  };
  const { collapseSidebar } = useProSidebar();
  const stickyRef = useStickyBox({ offsetTop: 0, offsetBottom: 0 });
  useEffect(() => {
    setActiveMenuItem(location.pathname);
  }, [location.pathname]);

  return (
    <aside ref={stickyRef} id="54321">
      <Sidebar id="SwaN_Sidebar" style={{ position: "sticky", top: "0px" }}>
        <Menu id="123123">
          <MenuItem
            className="menu1"
            icon={
              <MenuRoundedIcon
                onClick={() => {
                  collapseSidebar();
                }}
              />
            }
          >
            <h2>Black_Swan</h2>
          </MenuItem>
          <MenuItem
            icon={<HomeIcon />}
            active={activeMenuItem === "/admin/dashboard"}
            component={<Link to="/dashboard" className="link" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<ReceiptRoundedIcon />}
            active={activeMenuItem === "/admin/carousel"}
            component={<Link to="/admin/carousel" className="link" />}
          >
            Carousel
          </MenuItem>
          <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
            <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
            <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
            <MenuItem icon={<AccountBalanceRoundedIcon />}>
              Current Wallet
            </MenuItem>
            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem icon={<MonetizationOnRoundedIcon />}>Transactions</MenuItem>
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>Profile</MenuItem>
            <MenuItem
              icon={<NotificationsRoundedIcon />}
              component={<Link to="/admin/users" className="link" />}
            >
              UsersList
            </MenuItem>
          </SubMenu>

          <MenuItem icon={<LogoutRoundedIcon />} onClick={handleLogOut}>
            {" "}
            LogOut{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </aside>
  );
};

export default SwaN_Sidebar;
