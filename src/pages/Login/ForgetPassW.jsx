// src/pages/ForgetPassW.jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { TextField, InputAdornment, Select, MenuItem } from "@mui/material";
import { setField } from "../../components/features/authSlice";
import flag1 from "../../assets/img/Flag img/flag1.png";
import flag2 from "../../assets/img/Flag img/flag2.png";
import PatternLog from "../../assets/PatternLog.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useNavigate } from "react-router-dom";
import { showPopup } from "../../components/features/popupSlice";

const ForgetPassW = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { form, country, forgetMethod } = useSelector((state) => state.auth);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: form,
        validationSchema: Yup.object({
            ...(forgetMethod === "phone"
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
        }),
        onSubmit: (values) => {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            let userFound = null;

            if (forgetMethod === "phone") {
                userFound = users.find((user) => user.phone === values.phone);
            } else {
                userFound = users.find((user) => user.email === values.email);
            }

            if (!userFound) {
                dispatch(
                    showPopup({
                        type: "error",
                        message: `No account found with this ${forgetMethod === "phone" ? "phone number" : "email"}.`,
                    })
                );
                return;
            }

            navigate("/verify-code", {
                state: {
                    identifier: forgetMethod === "phone" ? values.phone : values.email,
                    method: forgetMethod,
                },
            });
        },
    });

    const handleChange = (e) => {
        formik.handleChange(e);
        const { name, value } = e.target;
        if (name) dispatch(setField({ field: name, value }));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative">
            <div className="absolute inset-0 w-[682px] h-[382px] top1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(193,79,230,0.7)_35%,_rgba(0,0,0,0)_70%)] blur-[200px] z-0 overflow-hidden"></div>
            <img src={PatternLog} alt="Pattern" className="w-150 absolute" style={{ marginBottom: "420px" }} />

            <div className="flex flex-col items-center justify-center gap-8 z-10" style={{ marginTop: "130px" }}>
                <div className="font-normal text-4xl font-lobster">
                    <p>Evenjo</p>
                </div>
                <div className="text-center font-inter mb-12">
                    <p className="mb-6 opacity-50 text-xl">Forgot your password?</p>
                    <p className="opacity-50">
                        Please enter your {forgetMethod === "phone" ? "phone number" : "email"} and we'll send you a verification code.
                    </p>
                </div>

                <div className="flex items-center justify-center gap-4 w-110 h-10 rounded-[12px]" style={{ backgroundColor: "rgba(45, 45, 45, 0.8)" }}>
                    <button
                        type="button"
                        onClick={() => dispatch(setField({ field: "forgetMethod", value: "email" }))}
                        className={`flex items-center justify-center px-4 py-2 w-50 h-8 rounded-[12px] ${forgetMethod === "email" ? "bg-[#454545]" : ""}`}
                    >
                        Email
                    </button>
                    <button
                        type="button"
                        onClick={() => dispatch(setField({ field: "forgetMethod", value: "phone" }))}
                        className={`flex items-center justify-center px-4 py-2 h-8 w-50 rounded-[12px] ${forgetMethod === "phone" ? "bg-[#454545]" : ""}`}
                    >
                        Phone number
                    </button>
                </div>
            </div>

            <form onSubmit={formik.handleSubmit} className="flex flex-col w-full max-w-md p-6 rounded-lg gap-5 z-10" style={{ marginTop: "40px" }}>
                {forgetMethod === "phone" ? (
                    <div className="mb-4">
                        <div className="flex gap-2">
                            <div className="flex items-center px-2 rounded-l-md gap-1 h-12" style={{ backgroundColor: "rgba(29, 29, 29, 0.8)" }}>
                                <Select
                                    value={country}
                                    onChange={(e) => dispatch(setField({ field: "country", value: e.target.value }))}
                                    variant="standard"
                                    disableUnderline
                                    sx={{ color: "white", "& .MuiSelect-icon": { color: "white" }, minWidth: "70px" }}
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
                                name="phone"
                                type="text"
                                placeholder="23445676"
                                className="flex-grow p-2 rounded-r-md text-white outline-none"
                                style={{ backgroundColor: "rgba(29, 29, 29, 0.8)" }}
                                onChange={handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone || ""}
                            />
                        </div>
                        {formik.touched.phone && formik.errors.phone && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                        )}
                    </div>
                ) : (
                    <div className="mb-4">
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Negarkhosravii@yahoo.com"
                            fullWidth
                            variant="outlined"
                            onChange={handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email || ""}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlinedIcon style={{ color: "#B3B3B3" }} />
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
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        )}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full h-16 bg-[#C14FE6] hover:bg-purple-700 text-white rounded-md transition"
                >
                    Get verification code
                </button>
            </form>
        </div>
    );
};

export default ForgetPassW;