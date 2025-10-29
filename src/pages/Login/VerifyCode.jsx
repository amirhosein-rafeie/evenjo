import React, { useState, useRef, useEffect } from "react";
import PatternLog from "../../assets/PatternLog.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showPopup } from "../../components/features/popupSlice";
import Timer from "./Timer";

const VerifyCode = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const { identifier } = location.state || {};
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [correctCode, setCorrectCode] = useState("");
    const inputsRef = useRef([]);

    useEffect(() => {
        if (!identifier) {
            navigate("/forget");
        }
    }, [identifier, navigate]);

    const generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const handleResend = () => {
        const newOTP = generateOTP();
        setCorrectCode(newOTP);

        dispatch(
            showPopup({
                type: "success",
                message: `Verification code : ${newOTP}`,
            })
        );

        setCode(["", "", "", "", "", ""]);
        inputsRef.current[0]?.focus();
    };

    useEffect(() => {
        if (identifier && !correctCode) {
            handleResend();
        }
    });

    const handleChange = (index, value) => {
        if (!/^\d?$/.test(value)) return;
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredCode = code.join("");

        if (enteredCode.length !== 6) return;

        if (enteredCode === correctCode) {
            navigate("/reset-password", {
                state: { emailOrPhone: identifier },
            });
        } else {
            dispatch(
                showPopup({
                    type: "error",
                    message: "The code is wrong.!",
                })
            );
            setCode(["", "", "", "", "", ""]);
            inputsRef.current[0]?.focus();
        }
    };

    if (!identifier) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative gap-20">
            <div className="absolute inset-0 w-[682px] h-[382px] top1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(193,79,230,0.7)_35%,_rgba(0,0,0,0)_70%)] blur-[200px] z-0 overflow-hidden"></div>
            <img src={PatternLog} alt="Pattern" className="w-150 absolute" style={{ marginBottom: "420px" }} />

            <div className="flex flex-col justify-center gap-8 z-10" style={{ marginTop: "130px" }}>
                <div className="text-center font-normal text-4xl font-lobster">
                    <p>Evenjo</p>
                </div>
                <div className="text-center font-inter mb-12">
                    <p className="mb-6 opacity-50 text-xl">Request sent successfully!</p>
                    <p className="opacity-50">
                        We've sent a 6-digit confirmation code to <br />
                        <strong className="text-[#C14FE6]">{identifier}</strong>
                        <br />
                        Please enter the code below.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="z-10 w-full max-w-md">
                <div className="flex justify-center items-center space-x-3 mt-6 gap-2">
                    {code.map((digit, i) => (
                        <input
                            key={i}
                            ref={(el) => (inputsRef.current[i] = el)}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            className="w-12 h-12 text-center text-lg rounded-[8px] bg-white/10 backdrop-blur-md shadow-md text-white outline-none focus:ring-2 focus:ring-[#C14FE6] transition-all"
                            style={{
                                border: digit ? "2px solid #d2d2d2ff" : "none",
                            }}
                        />
                    ))}
                </div>

                <div className="flex justify-around text-sm font-inter mt-6" style={{ marginTop: "20px", marginBottom: "50px" }}>
                    <p className="opacity-60">Didn't receive the code?</p>
                    <span
                        className="opacity-80 cursor-pointer hover:text-[#C14FE6] transition"
                        onClick={handleResend}
                    >
                        <Timer />
                        Resend
                    </span>
                </div>

                <button
                    type="submit"
                    disabled={code.join("").length !== 6}
                    className="flex items-center justify-center w-full h-16 bg-[#C14FE6] hover:bg-purple-700 text-white rounded-md transition mt-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Confirm
                </button>
            </form>
        </div>
    );
};

export default VerifyCode;