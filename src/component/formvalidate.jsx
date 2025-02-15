import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SimpleForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
   <div>
     <button className="bg-black">
    <Link to={"/"} className="text-white text-5xl">
      หน้าหลัก
    </Link>
  </button>
    <div className="max-w-sm mx-auto p-4 border rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div className="mb-3">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border rounded"
          ></input>
        </div>

        {/* UserName */}
        <div className="mb-3">
          <label className="block mb-1 font-medium">UserName</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            {...register("username", { required: "username is required" })}
          ></input>
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-2 border rounded"
          ></input>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
   </div>
  );
}
