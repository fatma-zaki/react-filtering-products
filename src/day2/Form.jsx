
import {useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for validation
const schema = z.object({
  fullName: z.string().min(8, "Full Name is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  city: z.string().min(1, "City is required"),
  password: z.string().min(5, "password is required"),
});

export default function RegistrationForm() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(schema),
  });

  // Handle red border on focus/blur
  const handleFocus = (e) => {
    e.target.style.border = "solid 1px red";
  };
  const handleBlur = (e) => {
    e.target.style.border = "";
  };

  const onSubmit = (data) => {
    // Navigate to /result and pass form data as state
    navigate("/shop", { state: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: "auto" }}>
      <div>
        <label>Full Name*</label><br />
        <input
          type="text"
          {...register("fullName")}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{errors.fullName?.message}</p>
      </div>

      <div>
        <label>Email*</label><br />
        <input
          type="email"
          {...register("email")}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>

      <div>
        <label>City</label><br />
        <select {...register("city")} onFocus={handleFocus} onBlur={handleBlur} defaultValue="">
          <option value="" disabled>Select city</option>
          <option value="New York">New York</option>
          <option value="Cairo">Cairo</option>
          <option value="Paris">Paris</option>
          <option value="Tokyo">Tokyo</option>
        </select>
        <p style={{ color: "red" }}>{errors.city?.message}</p>
      </div>

      <div>
        <label>Password</label><br />
        <input
          type="password"
          {...register("password")}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <button type="submit" style={{ marginTop: 10 }}>Register</button>
    </form>
  );
}



