import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import PrivacyTipRoundedIcon from "@mui/icons-material/PrivacyTipRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { paths } from "../../route/frontend";
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

export const ProfileList = [
   {
      name: "Your Profile",
      link: paths.userProfile,
      id: 1,
      icon: PersonRoundedIcon,
   },
   {
      name: "Settings",
      link: paths.profileSettings,
      id: 2,
      icon: SettingsSuggestRoundedIcon,
   },
   {
      name: "Payment Method",
      link: "",
      id: 1,
      icon: PaymentRoundedIcon,
   },
   {
      name: "Help Center",
      link: "",
      id: 1,
      icon: HelpOutlineRoundedIcon,
   },
   {
      name: "Privacy Policy",
      link: "",
      id: 1,
      icon: PrivacyTipRoundedIcon,
   },
   {
      name: "Logout",
      link: "",
      id: 1,
      icon: LogoutRoundedIcon,
   },
];



export const ProfileInputFields = [
   { name: "name", label: "Name", type: "text", tValue: "Emmanuel Okafor" },
   { name: "phoneNumber", label: "Phone Number", type: "tel" ,tValue: "+2348134609306"},
   { name: "email", label: "Email", type: "email" , tValue: "EmmanuelOkafor@gmail.com" },
   { name: "dob", label: "Date of Birth", type: "date" ,tValue: "20july1960"},
   { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
];

// Settings 

export const ProfileSettingsList = [
   {
      name: "Notification Settings",
      // link: paths.userProfile,
      id: 1,
      icon: CircleNotificationsRoundedIcon,
   },
   {
      name: "Password Manager",
      // link: "",
      id: 2,
      icon: LockRoundedIcon,
   },
   {
      name: "Delete Account",
      // link: "",
      id: 1,
      icon: DeleteForeverRoundedIcon,
   },
];



// TYPES 
export type ProfileProps = {
   name: string;
   link: string;
   id: number,
   icon: React.FC<any>
}

export interface SettingsProps{
   name: string;
   link?: string;
   id: number,
   icon: React.FC<any>
}


export type ProfileInputProps = {
   name: string;
   label: string;
   type: string;
   options?: string[]
   tValue?: string;
}