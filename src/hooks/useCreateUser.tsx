import { useState } from "react";

export const useGetCreateUser = () => {
   const [surename, setSurename] = useState<string>("");
   const [othernames, setOthernames] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [phone, setPhone] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [confirmPassword, setConfirmPassword] = useState<string>("");

   return { surename, setSurename, othernames, setOthernames, email, setEmail, phone, setPhone, password, setPassword, confirmPassword,  setConfirmPassword };
};
