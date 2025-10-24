import React from "react";

const EventCard = ({ event, variant = "default" }) => {
  const isSport = event.type === "sport" || event.sportName;
  const displayName = event.artistName || event.sportName || event.name;

  if (variant === "slider") {
    return (
      <div className="min-w-[228px] h-full rounded-2xl border border-neutral-n700 bg-neutral-n900/70 backdrop-blur flex items-center gap-2 text-white flex-shrink-0">
        <img
          src={event.img}
          alt={displayName}
          className="w-[88px] h-[100px] object-cover rounded-l-2xl"
        />
        <div className="px-2">
          <p className="font-semibold text-lg">{displayName}</p>
          <p className="text-sm text-neutral-n200">
            {event.date}, {event.location}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-72 text-white hover:scale-105 transition-transform duration-300 mb-20">
      <div className="relative">
        <img
          src={event.img}
          alt={displayName}
          className="w-[288px] h-[336px] object-cover rounded-2xl"
        />
      </div>

      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-neutral-n800 rounded-2xl p-4 shadow-xl">
        <h2 className="text-xl font-semibold mb-2">{displayName}</h2>

        <div className="flex justify-between text-neutral-n200 text-sm mb-2">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-neutral-n200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{event.date}</span>
          </div>

          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-neutral-n200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3zm0 10s-7-4.935-7-10a7 7 0 0114 0c0 5.065-7 10-7 10z"
              />
            </svg>
            <span>{event.location}</span>
          </div>
        </div>

        <div className="text-primaryMain font-semibold text-lg">
          from <span className="text-white">${event.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
