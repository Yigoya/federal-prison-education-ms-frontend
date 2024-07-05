import React from "react";

const InstructorDetails = () => {
  return (
    <div>
      <div className="m-1 bg-white h-fit w-fit p-6 w-2/5 rounded-2xl">
        <div className="mt-4 mb-8 ml-4 flex font-bold text-2xl">
          <h1>Personal Info</h1>
        </div>

        <div className="flex flex-col place-items-center">
          <img
            src="https://img.freepik.com/premium-vector/user-vector-icon-outline-style-isolated-white-background-mobile-app-website-logotype-ui-human-symbol-man-silhouette-social-member-sign-personal-profile-sign-10-eps_824631-3088.jpg?w=740"
            alt="Profile"
            className="h-28 w-28 mb-4 rounded-full"
          />
          <h1 className="text-xl font-semibold">Hailu Kebede</h1>
          <h2>FPI 1</h2>
        </div>

        <div>
          <h1 className="text-xl font-semibold ml-4 mb-4">Basic detail :</h1>
          <table className="ml-8">
            <tbody>
              <tr>
                <td>Department </td>
                <td className="w-20 pl-10">: </td>
                <td className="font-semibold">soft</td>
              </tr>
              <tr>
                <td>Year </td>
                <td className="w-20 pl-10">: </td>
                <td className="font-semibold">2022</td>
              </tr>
              <tr>
                <td>Level</td>
                <td className="w-20 pl-10">: </td>
                <td className="font-semibold">masters </td>
              </tr>
              <tr>
                <td>Email </td>
                <td className="w-20 pl-10">: </td>
                <td className="font-semibold">hailu@gmail.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td className="w-20 pl-10">: </td>
                <td className="font-semibold">098474884</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
