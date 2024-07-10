import React from "react";

const InstructorDetails = () => {
  return (
    <div>
      <div className="m-4 bg-white w-fit p-1 w-2/5 rounded-2xl">
        {/* <div className="flex justify-center font-bold text-2xl">
          <h1>Personal Info</h1>
        </div> */}

        <div className="flex flex-col place-items-center">
          <img
            src="https://img.freepik.com/premium-vector/user-vector-icon-outline-style-isolated-white-background-mobile-app-website-logotype-ui-human-symbol-man-silhouette-social-member-sign-personal-profile-sign-10-eps_824631-3088.jpg?w=740"
            alt="Profile"
            className="h-28 w-28  rounded-full"
          />
          <h1 className="text-lg mt-1 font-semibold">Hailu Kebede</h1>
          <p className="text-sm">Teacher</p>
        </div>

        <div className="bg-gray-300 rounded-xl w-full p-2 leading-3">
          <div className="flex gap-3">
            <div>
              <p className="text-[13px] text-gray-700">Department</p>
              <p className="text-[13px]">Department affiliation</p>
            </div>
            <div>
                <p className="text-[12px] text-gray-700">Hired date</p>
                <p className="text-[13px]">08-01-2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
