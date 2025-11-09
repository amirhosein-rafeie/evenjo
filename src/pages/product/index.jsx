import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EventCard from "../../components/EventCard.jsx";
import { addToCart } from "../../components/features/cartSlice";
import adele from "../../assets/img/concert img/adele.png";
import Headimg from "../../assets/img/product img/adllle.jpg";
import BannerImg from "../../assets/img/product img/banner.png";

const LocationPinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="shrink-0"
  >
    <path
      d="M8 0C4.686 0 2 2.686 2 6c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S6.62 3.5 8 3.5 10.5 4.62 10.5 6 9.38 8.5 8 8.5z"
      fill="currentColor"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect
      x="3"
      y="4"
      width="10"
      height="9"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M5 2v3M11 2v3M3 7h10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 4v4l3 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ShareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="4" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M6.5 12.5L11.5 7.5M11.5 10.5L6.5 15.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const BookmarkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M4 3h10v12l-5-3-5 3V3z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AdeleConcertPage() {
  const { id } = useParams();
  const eventId = parseInt(id);
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.unified);

  const allEvents = [...(events?.concerts || []), ...(events?.sports || [])];

  const selectedEvent = allEvents.find((e) => e.id === eventId);

  if (!selectedEvent) {
    return (
      <div className="min-h-screen bg-neutral-n900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event not found</h1>
          <p className="text-neutral-n400">
            The event you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const isSportEvent = selectedEvent.type === "sport";

  const handleAddToCart = () => {
    dispatch(addToCart(selectedEvent));
  };

  const getEventTags = (index) => {
    const tags = [
      ["Popular", "Best Setting"],
      ["Today's Pick"],
      ["Almost Sold Out", "Great"],
    ];
    return tags[index % tags.length] || [];
  };

  const upcomingEvents = allEvents
    .filter((e) => e.id !== selectedEvent?.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen text-white">
      <div className="relative w-full min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Headimg})`,
            filter: "brightness(0.3) blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-n1000 via-neutral-n900/80 to-transparent z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-16 pt-24">
          <div className="flex flex-col lg:flex-row items-start gap-8 relative">
            <div className="flex-1 z-30">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
                {selectedEvent?.artistName ||
                  selectedEvent?.sportName ||
                  selectedEvent?.name}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-n200">
                {isSportEvent
                  ? `Experience the thrill: ${
                      selectedEvent?.artistName || selectedEvent?.sportName
                    } - Live Sports Event.`
                  : `A Night to Remember: ${selectedEvent?.artistName} Live with Her Greatest Hits.`}
              </p>
            </div>
            <div
              className="hidden lg:block absolute right-0 bottom-0 z-30"
              style={{ transform: "translateY(60px)" }}
            >
              <div className="w-64 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedEvent?.img || adele}
                  alt={
                    selectedEvent?.artistName ||
                    selectedEvent?.sportName ||
                    selectedEvent?.name
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl ">All days and times</h2>
          <button className="flex items-center gap-2 bg-transparent px-4 py-2 rounded-lg text-white  transition">
            <span className="text-tint-bt2">
              <LocationPinIcon />
            </span>
            <span>{selectedEvent?.location}</span>
          </button>
        </div>

        <div className="space-y-6 mb-12">
          {upcomingEvents.map((event, index) => {
            const tags = getEventTags(index);
            const times = ["20:00", "22:30", "19:00"];
            const dates = ["Mar 06 - 2025", "Mar 07 - 2025", "Mar 08 - 2025"];
            const time = times[index % times.length];
            const displayDate = dates[index % dates.length] || event.date;

            return (
              <div
                key={event.id}
                className="w-full rounded-2xl bg-neutral-n1000 border border-neutral-n800 px-5 py-4 flex flex-col gap-3 transition hover:bg-neutral-n800"
              >
                <div className="flex justify-between items-start gap-3 flex-wrap">
                  <div className="flex items-center gap-2 text-white font-semibold text-[16px] leading-snug truncate max-w-[60%]">
                    <span className="text-tint-bt2">
                      <LocationPinIcon />
                    </span>
                    <span className="truncate">
                      {event.location ||
                        "Fontainebleau Las Vegas - Complex, Las Vegas, Nevada"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="text-neutral-n100 hover:text-white transition p-1.5">
                      <ShareIcon />
                    </button>
                    <button className="text-neutral-n100 hover:text-white transition p-1.5">
                      <BookmarkIcon />
                    </button>
                    <button
                      onClick={handleAddToCart}
                      className="px-4 py-[5px] rounded-full text-sm font-medium border border-tint-bt2 hover:bg-tint-wt transition"
                    >
                      Get Tickets
                    </button>
                  </div>
                </div>

                <div className="border-t border-dashed border-neutral-n500" />

                <div className="flex items-center justify-between flex-wrap gap-3 text-sm text-neutral-n200">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon />
                      <span>{displayDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <ClockIcon />
                      <span>{time} Pm</span>
                    </div>
                  </div>

                  {tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-[3px] rounded-md text-xs font-medium bg-neutral-n500 text-neutral-n200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="my-12 rounded-xl overflow-hidden relative">
          <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64">
            <img
              src={BannerImg}
              alt="Music Festival Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-neutral-n1000/20" />
          </div>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">
              {isSportEvent ? "Sports events near you" : "Concert near you"}
            </h2>
            <a
              href="#"
              className="text-tint-bt2 hover:text-tint-bt1 transition-colors text-sm font-medium"
            >
              See all
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
            {allEvents
              .filter((e) => e.id !== selectedEvent?.id)
              .slice(0, 4)
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
