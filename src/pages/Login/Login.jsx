import React from "react"; import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { TextField, InputAdornment, Select, MenuItem } from "@mui/material";
import {
    setField,
    resetForm,
    loginSuccess,
} from "../../components/features/authSlice";
import flag1 from "../../assets/img/Flag img/flag1.png";
import flag2 from "../../assets/img/Flag img/flag2.png";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PatternLog from "../../assets/PatternLog.png";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import { useNavigate } from "react-router-dom";
import { showPopup } from "../../components/features/popupSlice";

import Popup from "../../components/common/Popup";

const Login = () => {
    const dispatch = useDispatch();
    const { form, country, showPassword, loginMethod } = useSelector(
        (state) => state.auth
    );

    const navigate = useNavigate();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: form,
        validationSchema: Yup.object({
            ...(loginMethod === "phone"
                ? {
                    phone: Yup.string()
                        .matches(/^\d+$/, "Just enter numbers")
                        .min(8, "Must be at least 8 digits")
                        .required("Phone number is required"),
                }
                : {
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Email is required"),
                }),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            let userFound = null;

            if (loginMethod === "phone") {
                userFound = users.find(
                    (user) =>
                        user.phone === values.phone && user.password === values.password
                );
            } else {
                userFound = users.find(
                    (user) =>
                        user.email === values.email && user.password === values.password
                );
            }

            if (userFound) {
                dispatch(loginSuccess(userFound));
                if (values.remember) {
                    localStorage.setItem("currentUser", JSON.stringify(userFound));
                    sessionStorage.removeItem("currentUser");
                } else {
                    sessionStorage.setItem("currentUser", JSON.stringify(userFound));
                    localStorage.removeItem("currentUser");
                }
                dispatch(resetForm());

                dispatch(
                    showPopup({
                        type: "success",
                        message: "Login successful! Welcome back to Evenjo.",
                    })
                );

                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                dispatch(
                    showPopup({
                        type: "error",
                        message: "Invalid credentials! Please check your information.",
                    })
                );
            }
        },
    });

    const handleChange = (e) => {
        formik.handleChange(e);
        const name = e.target.name;
        if (name) dispatch(setField({ field: name, value: e.target.value }));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative">
            <Popup />

            <div
                className="absolute inset-0 w-[682px] h-[382px] top1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 rounded-full 
        bg-[radial-gradient(circle,_rgba(193,79,230,0.7)_35%,_rgba(0,0,0,0)_70%)] 
        blur-[200px] z-0 overflow-hidden"
            ></div>

            <img
                src={PatternLog}
                alt="Pattern"
                className="w-150 absolute"
                style={{ marginBottom: "420px" }}
            />

            <div
                className="flex flex-col items-center justify-center gap-8 z-10"
                style={{ marginTop: "130px" }}
            >
                <div className="font-normal text-4xl font-lobster">
                    <p>Evenjo</p>
                </div>
                <p className="mb-6 opacity-50">Please enter your details to login</p>

                <div
                    className="flex items-center justify-center gap-4 w-110 h-10 rounded-[12px]"
                    style={{ backgroundColor: "rgba(45, 45, 45, 0.8)" }}
                >
                    <button
                        type="button"
                        onClick={() =>
                            dispatch(setField({ field: "loginMethod", value: "email" }))
                        }
                        className={`flex items-center justify-center px-4 py-2 w-50 h-8 rounded-[12px] ${loginMethod === "email" ? "bg-[#454545]" : ""
                            }`}
                    >
                        Email
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            dispatch(setField({ field: "loginMethod", value: "phone" }))
                        }
                        className={`flex items-center justify-center px-4 py-2 h-8 w-50 rounded-[12px] ${loginMethod === "phone" ? "bg-[#454545]" : ""
                            }`}
                    >
                        Phone number
                    </button>
                </div>
            </div>

            <form
                autoComplete="new-password"
                onSubmit={formik.handleSubmit}
                className="flex flex-col w-full max-w-md p-6 rounded-lg gap-5 z-10"
                style={{ marginTop: "80px" }}
            >
                {loginMethod === "phone" ? (
                    <div className="mb-4">
                        <div className="flex gap-2">
                            <div
                                className="flex items-center px-2 rounded-l-md gap-1 h-12"
                                style={{ backgroundColor: "rgba(29, 29, 29, 0.8)" }}
                            >
                                <Select
                                    value={country}
                                    onChange={(e) =>
                                        dispatch(
                                            setField({ field: "country", value: e.target.value })
                                        )
                                    }
                                    variant="standard"
                                    disableUnderline
                                    sx={{
                                        color: "white",
                                        fontFamily: "Inter, sans-serif",
                                        "& .MuiSelect-icon": { color: "white" },
                                        minWidth: "70px",
                                    }}
                                >
                                    <MenuItem value="Eng">
                                        <div className="flex items-center gap-1">
                                            <img src={flag1} style={{ height: "14px" }} alt="Eng" />
                                            Eng
                                        </div>
                                    </MenuItem>
                                    <MenuItem value="Ir">
                                        <div className="flex items-center gap-1">
                                            <img src={flag2} style={{ height: "14px" }} alt="Ir" />
                                            Ir
                                        </div>
                                    </MenuItem>
                                </Select>
                            </div>

                            <input
                                id="login_phone"
                                name="phone"
                                type="text"
                                placeholder="23445676"
                                autoComplete="new-phone"
                                className="flex-grow p-2 rounded-r-md text-white outline-none"
                                style={{ backgroundColor: "rgba(29, 29, 29, 0.8)" }}
                                onChange={handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone || ""}
                            />
                        </div>
                        {formik.touched.phone && formik.errors.phone && (
                            <div className="text-red-500 text-sm mt-1">
                                {formik.errors.phone}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="mb-4">
                        <TextField
                            label="Email"
                            id="login_email"
                            name="email"
                            type="email"
                            placeholder="Negarkhosravii@yahoo.com"
                            autoComplete="new-email"
                            onChange={handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email || ""}
                            fullWidth
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlinedIcon style={{ color: "#B3B3B3" }} />
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{
                                style: { color: "#B3B3B3" },
                            }}
                            sx={{
                                backgroundColor: "rgba(29, 29, 29, 0.8)",
                                input: { color: "#B3B3B3" },
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "10px",
                                    "& fieldset": { borderRadius: "10px" },
                                    "&:hover fieldset": { borderColor: "#b3b3b39c" },
                                },
                            }}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm mt-1">
                                {formik.errors.email}
                            </div>
                        )}
                    </div>
                )}

                <div className="mb-4 relative">
                    <TextField
                        id="login_password"
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        placeholder="818367"
                        autoComplete="new-password"
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password || ""}
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon style={{ color: "#B3B3B3" }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        dispatch(
                                            setField({
                                                field: "showPassword",
                                                value: !showPassword,
                                            })
                                        )
                                    }
                                >
                                    {showPassword ? (
                                        <VisibilityOffOutlinedIcon style={{ color: "#B3B3B3" }} />
                                    ) : (
                                        <RemoveRedEyeOutlinedIcon style={{ color: "#B3B3B3" }} />
                                    )}
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{ style: { color: "#B3B3B3" } }}
                        sx={{
                            backgroundColor: "rgba(29, 29, 29, 0.8)",
                            input: { color: "#B3B3B3" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                "& fieldset": { borderColor: "#b3b3b3a0", borderRadius: "8px" },
                                "&:hover fieldset": { borderColor: "#b3b3b3a5" },
                                "&.Mui-focused fieldset": { borderColor: "#B3B3B3" },
                            },
                        }}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-red-500 text-sm mt-1">
                            {formik.errors.password}
                        </div>
                    )}
                </div>

                <div className="flex justify-between items-center mb-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            name="remember"
                            type="checkbox"
                            className="form-checkbox h-5 w-5 accent-[#C14FE6]"
                            onChange={(e) => {
                                formik.setFieldValue("remember", e.target.checked);
                                dispatch(
                                    setField({ field: "remember", value: e.target.checked })
                                );
                            }}
                            checked={formik.values.remember || false}
                        />
                        <span>Remember me</span>
                    </label>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/forget");
                        }}
                        className="text-sm text-gray-400 hover:text-purple-400"
                    >
                        Forgot Password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full h-16 bg-[#C14FE6] hover:bg-purple-700 text-white rounded-md transition"
                >
                    Log in
                </button>

                <p className="text-center mt-4 text-gray-400">
                    New to Evenjo?{" "}
                    <button
                        type="button"
                        onClick={() => navigate("/signup")}
                        className="text-[#C14FE6] hover:underline"
                    >
                        Create account
                    </button>
                </p>

                <div className="flex items-center justify-center w-full my-1">
                    <hr className="border-t border-[#999999] flex-grow h-px" />
                    <span className="px-2 text-[#999999] text-xs">Or continue with</span>
                    <hr className="border-t border-[#999999] flex-grow h-px" />
                </div>

                <div className="flex justify-center items-center space-x-4 mt-6 gap-2">
                    <div className="w-25 h-15 rounded-[14px] bg-white/10 backdrop-blur-md flex items-center justify-center shadow-md cursor-pointer">
                        <AppleIcon />
                    </div>
                    <div className="w-25 h-15 rounded-[14px] bg-white/10 backdrop-blur-md flex items-center justify-center shadow-md cursor-pointer">
                        <GoogleIcon />
                    </div>
                    <div className="w-25 h-15 rounded-[14px] bg-white/10 backdrop-blur-md flex items-center justify-center shadow-md cursor-pointer">
                        <FacebookSharpIcon />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
