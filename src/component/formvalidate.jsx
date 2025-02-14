import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Formvalidate() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const show = watch("showPassword", false);

  const onSubmit = (data) => {
    if (data.password !== data.confirm) {
      window.alert("not match");
      return;
    }
    if (/\s/.test(data.email) || /\s/.test(data.username) || /\s/.test(data.password) || /\s/.test(data.confirm)) {
      window.alert("ห้ามเว้นช่องว่าง");
      return;
    }

    console.log("อีเมล:", data.email);
    console.log("ชื่อผู้ใช้:", data.username);
    console.log("รหัสผ่าน:", data.password);
  };

  return (
    <div>
      <button>
        <Link to={"/"}>หน้าหลัก</Link>
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>สมัครสมาชิก</h1>
        
        <input 
          type="email" 
          placeholder="enter email" 
          {...register("email", { required: "กรุณากรอกอีเมล" })} 
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input 
          type="text" 
          placeholder="enter username" 
          {...register("username", { required: "กรุณากรอกชื่อผู้ใช้" })} 
        />
        {errors.username && <p>{errors.username.message}</p>}

        <input 
          type={show ? "text" : "password"} 
          placeholder="enter password" 
          {...register("password", { required: "กรุณากรอกรหัสผ่าน" })} 
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input 
          type="password" 
          placeholder="confirm password" 
          {...register("confirm", { required: "กรุณายืนยันรหัสผ่าน" })} 
        />
        {errors.confirm && <p>{errors.confirm.message}</p>}

        <label>
          <input type="button" {...register("showPassword")} /> Show Password
        </label>

        <button type="submit">ยืนยันการสมัครสมาชิก</button>
      </form>
    </div>
  );
}
