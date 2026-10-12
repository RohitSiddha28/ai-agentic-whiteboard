"use client";
import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext } from "@/context/UserDetailContext";

const provider = ({ children }: { children: React.ReactNode }) => {

    const [userDetail, setUserDetail] = useState<any>();
    useEffect(() => {
      CreateNewUser();
    }, []);

  const CreateNewUser = async () => {
    const result = await axios.post("/api/users");
    setUserDetail(result.data);
  };

  return (
    <UserDetailContext.Provider value = {{userDetail, setUserDetail}}>
        <div>{children}</div>
    </UserDetailContext.Provider>
  )
};

export default provider;
