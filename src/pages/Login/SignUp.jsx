import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../components/features/usersSlice";
import { setField, loginSuccess, resetForm } from "../../components/features/authSlice";
import { useNavigate } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";

import flag1 from "../../assets/img/Flag img/flag1.png";
import flag2 from "../../assets/img/Flag img/flag2.png";
import PatternLog from "../../assets/PatternLog.png";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { form: authForm, country, showPassword, signUpMethod } = useSelector((s) => s.auth);
    const users = useSelector((s) => s.users.list || []);

    const commonSx = {
        backgroundColor: "rgba(29, 29, 29, 0.8)",
        input: { color: "#B3B3B3" },
        "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "& fieldset": { borderRadius: "8px" },
            "&:hover fieldset": { borderColor: "#B3B3B3" },
            "&.Mui-focused fieldset": { borderColor: "#B3B3B3" },
        },
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: authForm.firstName || "",
            lastName: authForm.lastName || "",
            email: authForm.email || "",
            phone: authForm.phone || "",
            password: authForm.password || "",
            remember: authForm.remember || false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            ...(signUpMethod === "phone"
                ? { phone: Yup.string().matches(/^\d+$/, "Just enter numbers").min(8, "Must be at least 8 digits").required("Phone number is required") }
                : { email: Yup.string().email("Invalid email address").required("Email is required") }
            ),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        }),
        onSubmit: (values, { resetForm: resetFormik }) => {
            const duplicate = users.find(
                (u) => (values.email && u.email === values.email) || (values.phone && u.phone === values.phone)
            );
            if (duplicate) {
                alert("A user with this email or phone already exists.");
                return;
            }

            const newUser = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email || null,
                phone: values.phone || null,
                password: values.password,
            };

            dispatch(registerUser(newUser));
            dispatch(loginSuccess(newUser));

            if (values.remember) {
                localStorage.setItem("currentUser", JSON.stringify(newUser));
                sessionStorage.removeItem("currentUser");
            } else {
                sessionStorage.setItem("currentUser", JSON.stringify(newUser));
                localStorage.removeItem("currentUser");
            }

            resetFormik();
            dispatch(resetForm());
            alert("User registered successfully!");
            navigate("/login");
        },
    });

    const handleChange = (e) => {
        formik.handleChange(e);
        const { name, value, type, checked } = e.target;
        const v = type === "checkbox" ? checked : value;
        if (name) dispatch(setField({ field: name, value: v }));
    };

    const handleSignUpMethod = (method) => {
        dispatch(setField({ field: "signUpMethod", value: method }));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative">
            <div
                className="absolute inset-0 w-[682px] h-[382px] top1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-[radial-gradient(circle,_rgba(193,79,230,0.7)_35%,_rgba(0,0,0,0)_70%)]
          blur-[200px] z-0 overflow-hidden"
            ></div>

            <img src={PatternLog} alt="Pattern" className="w-150 absolute" style={{ marginBottom: "720px" }} />

            <div className="flex flex-col items-center justify-center gap-8 z-10" style={{ marginTop: "130px" }}>
                <div className="font-normal text-4xl font-lobster">
                    <p>Evenjo</p>
                </div>

                <p className="mb-6 opacity-50">Please enter your details to sign up</p>

                <div
                    className="flex items-center justify-center gap-4 w-110 h-10 rounded-[12px]"
                    style={{ backgroundColor: "rgba(45, 45, 45, 0.8)" }}
                >
                    <button
                        type="button"
                        onClick={() => handleSignUpMethod("email")}
                        className={`flex items-center justify-center px-4 py-2 w-50 h-8 rounded-[12px] ${signUpMethod === "email" ? "bg-[#454545]" : ""
                            }`}
                    >
                        Email
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSignUpMethod("phone")}
                        className={`flex items-center justify-center px-4 py-2 h-8 w-50 rounded-[12px] ${signUpMethod === "phone" ? "bg-[#454545]" : ""
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
                <div className="flex gap-4">
                    <TextField
                        label="Name"
                        placeholder="Negar"
                        name="firstName"
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={formik.values.firstName}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlineRoundedIcon style={{ color: "#B3B3B3" }} />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{ style: { color: "#B3B3B3" } }}
                        sx={commonSx}
                    />
                    <TextField
                        label="Last name"
                        name="lastName"
                        placeholder="Khosravi"
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={formik.values.lastName}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlineRoundedIcon style={{ color: "#B3B3B3" }} />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{ style: { color: "#B3B3B3" } }}
                        sx={commonSx}
                    />
                </div>

                {signUpMethod === "phone" ? (
                    <div className="mb-4">
                        <div className="flex gap-2">
                            <div
                                className="flex items-center px-2 rounded-l-md gap-1 h-12"
                                style={{ backgroundColor: "rgba(29, 29, 29, 0.8)" }}
                            >
                                <Select
                                    value={country}
                                    onChange={(e) => dispatch(setField({ field: "country", value: e.target.value }))}
                                    variant="standard"
                                    disableUnderline
                                    MenuProps={{
                                        PaperProps: {
                                            sx: {
                                                backgroundColor: "#0a0a0a",
                                                color: "#fff",
                                                border: "1px solid #a855f7",
                                                borderRadius: "10px",
                                                boxShadow: "0 0 10px rgba(168,85,247,0.6)",
                                                "& .MuiMenuItem-root": {
                                                    backgroundColor: "#0a0a0a",
                                                    color: "#fff",
                                                    "&.Mui-selected": {
                                                        backgroundColor: "#3b0764 !important",
                                                    },
                                                    "&:hover": {
                                                        backgroundColor: "#4c1d95 !important",
                                                    },
                                                },
                                            },
                                        },
                                        disablePortal: true,
                                    }}
                                    sx={{
                                        color: "white",
                                        fontFamily: "Inter, sans-serif",
                                        "& .MuiSelect-icon": { color: "white" },
                                        minWidth: "70px",
                                    }}
                                >

                                    <MenuItem value="Eng">
                                        <div className="flex items-center gap-1">
                                            <img src={flag1} style={{ height: "14px" }} alt="Eng Flag" />
                                            Eng
                                        </div>
                                    </MenuItem>
                                    <MenuItem value="Ir">
                                        <div className="flex items-center gap-1">
                                            <img src={flag2} style={{ height: "14px" }} alt="Ir Flag" />
                                            Ir
                                        </div>
                                    </MenuItem>
                                </Select>
                            </div>

                            <input
                                name="phone"
                                type="text"
                                placeholder="23445676"
                                className="flex-grow p-2 rounded-r-md text-white outline-none"
                                style={{ backgroundColor: "rgba(29, 29, 29, 0.8)" }}
                                onChange={handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                        </div>
                        {formik.touched.phone && formik.errors.phone && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                        )}
                    </div>
                ) : (
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Negarkhosravii@yahoo.com"
                        fullWidth
                        variant="outlined"
                        size="small"
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlinedIcon style={{ color: "#B3B3B3" }} />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{ style: { color: "#B3B3B3" } }}
                        sx={commonSx}
                    />
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
                        <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                    )}
                </div>

                <FormControlLabel
                    control={
                        <Checkbox
                            name="remember"
                            checked={formik.values.remember}
                            onChange={(e) => {
                                formik.setFieldValue("remember", e.target.checked);
                                dispatch(setField({ field: "remember", value: e.target.checked }));
                            }}
                            sx={{
                                color: "#FFFFFF",
                                "&.Mui-checked": { color: "#C14FE6" },
                            }}
                        />
                    }
                    label="Remember me"
                    sx={{ color: "#B3B3B3" }}
                />

                <button
                    type="submit"
                    className="w-full h-16 bg-[#C14FE6] hover:bg-purple-700 text-white rounded-md transition"
                >
                    Sign up
                </button>

                <p className="text-center mt-4 text-gray-400">
                    Have a Evenjo account?{" "}
                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="text-[#C14FE6] hover:underline"
                    >
                        Sign in
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

export default SignUp;
