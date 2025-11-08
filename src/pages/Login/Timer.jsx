import React, { useEffect, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(10);
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setIsExpired(true);
        }
    }, [seconds]);

    const formatTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const remainingSeconds = secs % 60;
        return `${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""
            }${remainingSeconds}`;
    };

    return (
        <span className="opacity-80 ml-2">
            {isExpired ? (
                <span className="text-[#C14FE6] font-medium cursor-pointer">
                    Resend available
                </span>
            ) : (
                ` ${formatTime(seconds)}`
            )}
        </span>
    );
};

export default Timer;
