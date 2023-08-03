import { UserData } from "../../models/user.model";

export interface NavbarProps {
  user: UserData;
  isSidebarOpen?: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
