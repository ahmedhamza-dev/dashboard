import { UserData } from "../../models/user.model";

export interface SidebarProps {
  user: UserData;
  isSidebarOpen: boolean;
  isNonMobile: boolean;
  drawerWidth: string;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}