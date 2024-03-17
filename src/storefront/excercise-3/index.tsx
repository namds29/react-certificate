import React, { useCallback, useEffect, useState } from "react";

import utilsService from "../../services/utils-service";
import FilterInput from "../../common/FilterInput";
import { User } from "../../helper/types";

const Exercise3 = React.memo(() => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const data = await utilsService.fetchAllUsers();
      console.log(data);
      setUsers(data);
    };
    getAllUsers();
  }, []);

  const handleChangeValue = useCallback((options: Set<string>) => {
    console.log(options);
  }, []);

  return (
    <div className="w-full">
      <h1>Exercise 3</h1>
      {users.length !== 0 && (
        <div className="flex gap-10">
          {/* Company name */}
          <div className="relative w-full">
            <FilterInput
              data={users}
              placeholder={"Enter your company name"}
              attributeName={"company.name"}
              onChangeValue={handleChangeValue}
            />
          </div>
          {/* Username */}
          <div className="relative w-full">
            <FilterInput
              data={users}
              placeholder={"Enter your username"}
              attributeName={"username"}
              onChangeValue={handleChangeValue}
            />
          </div>

        </div>
      )}
    </div>
  );
});

export default Exercise3;
