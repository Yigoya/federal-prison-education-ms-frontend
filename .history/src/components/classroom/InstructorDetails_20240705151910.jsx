import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";

const InstructorDetails = () => {
  return (
    <div className="m-4 w-fit p-2 w-2/5 rounded-2xl relative bg-gradient-to-r from-zinc-300 to-zinc-200">
      {/* Main content */}
      <div className="flex flex-col place-items-center">
        <div className="flex justify-between items-center">
          <img
            src="https://img.freepik.com/premium-vector/user-vector-icon-outline-style-isolated-white-background-mobile-app-website-logotype-ui-human-symbol-man-silhouette-social-member-sign-personal-profile-sign-10-eps_824631-3088.jpg?w=740"
            alt="Profile"
            className="h-28 w-28 rounded-full"
          />
          <div className="absolute top-0 right-0 mt-1 mr-1">
            <MoreHorizOutlinedIcon cl/>
          </div>
        </div>

        <h1 className="text-lg mt-1 font-semibold">Hailu Kebede</h1>
        <p className="text-sm">Teacher</p>
      </div>

      {/* Additional info */}
      <div className="bg-gray-300 rounded-xl w-full p-3 leading-3.5 mt-4">
        <div className="flex gap-5">
          <div>
            <p className="text-[13px] text-gray-700">Department</p>
            <p className="text-[14px]">Department affiliation</p>
          </div>
          <div>
            <p className="text-[13px] text-gray-700">Hired date</p>
            <p className="text-[14px]">08-01-2022</p>
          </div>
        </div>

        <div className="mt-6 leading-4 text-[14px]">
          <div className="flex">
            <AlternateEmailOutlinedIcon className="pb-2" />
            <p>faculty@mail.com</p>
          </div>
          <div className="flex">
            <PhoneEnabledOutlinedIcon className="pb-2"/>
            <p>+251-91-103-8492</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
