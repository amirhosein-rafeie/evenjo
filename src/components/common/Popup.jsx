import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { hidePopup } from "../features/popupSlice";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";

const Popup = () => {
    const dispatch = useDispatch();
    const { show, type, message } = useSelector((state) => state.popup);

    useEffect(() => {
        if (show) {
            const timer = () => {
                dispatch(hidePopup());
            };
            return () => clearTimeout(timer);
        }
    }, [show, dispatch]);

    const getIcon = () => {
        const sizeClasses = "!w-20 !h-20";
        switch (type) {
            case "success":
                return (
                    <CheckCircleIcon
                        className={`${sizeClasses} text-green-400 drop-shadow-[0_0_20px_#22c55e]`}
                    />
                );
            case "error":
                return (
                    <ErrorIcon
                        className={`${sizeClasses} text-red-400 drop-shadow-[0_0_10px_#ef4444]`}
                    />
                );
            default:
                return (
                    <InfoIcon
                        className={`${sizeClasses} text-blue-400 drop-shadow-[0_0_10px_#3b82f6]`}
                    />
                );
        }
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-center z-50"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-center justify-center flex-col gap-10 p-12 rounded-3xl shadow-2xl text-center w-96 h-96 bg-[#1F1F1F]`}
                    >
                        <div className="flex justify-center mb-6">{getIcon()}</div>
                        <h3 className="text-white font-semibold text-2xl mb-4">
                            {type === "success"
                                ? "Success"
                                : type === "error"
                                    ? "Error"
                                    : "Information"}
                        </h3>
                        <p className="text-gray-300 mb-6 text-lg">{message}</p>

                        <button
                            onClick={() => dispatch(hidePopup())}
                            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-200 w-86 h-13"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Popup;
