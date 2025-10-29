// src/pages/ResetPassword.jsx
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, InputAdornment } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PatternLog from "../../assets/PatternLog.png";
import { useNavigate, useLocation } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const formik = useFormik({
        initialValues: {
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            newPassword: Yup.string().min(6, "At least 6 characters").required("Required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("newPassword")], "Passwords must match")
                .required("Required"),
        }),
        onSubmit: (values) => {
            const emailOrPhone = location.state?.emailOrPhone;
            if (!emailOrPhone) return;

            const users = JSON.parse(localStorage.getItem("users") || "[]");
            const userIndex = users.findIndex(
                (u) => u.email === emailOrPhone || u.phone === emailOrPhone
            );

            if (userIndex === -1) {
                alert("User not found!");
                return;
            }

            if (users[userIndex].password === values.newPassword) {
                formik.setFieldError("newPassword", "New password cannot be the same as the old one.");
                return;
            }

            users[userIndex].password = values.newPassword;
            localStorage.setItem("users", JSON.stringify(users));

            // آپدیت currentUser
            ["currentUser"].forEach((key) => {
                const stored = JSON.parse(localStorage.getItem(key) || sessionStorage.getItem(key) || "{}");
                if (stored.email === emailOrPhone || stored.phone === emailOrPhone) {
                    const updated = { ...stored, password: values.newPassword };
                    localStorage.setItem(key, JSON.stringify(updated));
                    sessionStorage.setItem(key, JSON.stringify(updated));
                }
            });

            alert("Password reset successful!");
            navigate("/login");
        },
    });

    useEffect(() => {
        if (!location.state?.emailOrPhone) {
            navigate("/forget");
        }
    }, [location.state, navigate]);

    if (!location.state?.emailOrPhone) {
        return null;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative">
            <div className="absolute inset-0 w-[682px] h-[382px] top1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(193,79,230,0.7)_35%,_rgba(0,0,0,0)_70%)] blur-[200px] z-0 overflow-hidden"></div>
            <img src={PatternLog} alt="Pattern" className="w-150 absolute" style={{ marginBottom: "420px" }} />

            <div className="flex flex-col items-center justify-center gap-3 z-10" style={{ marginTop: "130px" }}>
                <div className="font-normal text-4xl font-lobster">
                    <p>Evenjo</p>
                </div>
                <div className="text-center text-white text-2xl">
                    <p>Reset Password</p>
                </div>
                <div>
                    <p className="text-center opacity-50">Enter a new password below to change your password.</p>
                </div>
            </div>

            <form onSubmit={formik.handleSubmit} className="flex flex-col w-full max-w-md p-6 rounded-lg gap-5 z-10 mt-12">
                <TextField
                    label="New Password"
                    name="newPassword"
                    type="password"
                    fullWidth
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPassword}
                    error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                    helperText={formik.touched.newPassword && formik.errors.newPassword}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOutlinedIcon style={{ color: "#B3B3B3" }} />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{ style: { color: "#B3B3B3" } }}
                    sx={{
                        backgroundColor: "rgba(29, 29, 29, 0.8)",
                        input: { color: "#B3B3B3" },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            "& fieldset": { borderColor: "#B3B3B3" },
                            "&:hover fieldset": { borderColor: "#B3B3B3" },
                        },
                    }}
                />
                <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    fullWidth
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOutlinedIcon style={{ color: "#B3B3B3" }} />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{ style: { color: "#B3B3B3" } }}
                    sx={{
                        backgroundColor: "rgba(29, 29, 29, 0.8)",
                        input: { color: "#B3B3B3" },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            "& fieldset": { borderColor: "#B3B3B3" },
                            "&:hover fieldset": { borderColor: "#B3B3B3" },
                        },
                    }}
                />
                <button
                    type="submit"
                    className="w-full h-16 bg-[#C14FE6] hover:bg-purple-700 text-white rounded-md transition mt-8"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;