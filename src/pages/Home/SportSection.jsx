import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setWhatFilter,
  filterEvents,
  setCategory,
} from "../../Store/unifiedStore";
import EventCard from "../../components/EventCard";

const SportsSection = () => {
  const dispatch = useDispatch();
  const { filteredEvents, filters } = useSelector((state) => state.unified);
  const { what } = filters;

  React.useEffect(() => {
    dispatch(setCategory("sports"));
  }, [dispatch]);

  const sportsTypes = [
    "All",
    "Archery Arnis",
    "Baseball",
    "Basketball",
    "Boxing",
    "Chelsea vs Liverpool",
    "Figure Skating",
  ];
  const displayEvents = filteredEvents.sports.slice(0, 4);

  const handleSportTypeChange = (sportType) => {
    const filterValue = sportType === "All" ? "" : sportType;
    dispatch(setWhatFilter(filterValue));
    dispatch(
      filterEvents({ what: filterValue, when: "", where: "", price: "" })
    );
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-white">Sports</h2>
          <a
            href="#"
            className="text-white hover:text-primaryMain transition-colors"
          >
            See all
          </a>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {sportsTypes.map((sportType) => (
            <button
              key={sportType}
              onClick={() => handleSportTypeChange(sportType)}
              className={`px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap ${
                (what === "" && sportType === "All") || what === sportType
                  ? "bg-primaryMain text-white"
                  : "bg-neutral-n700 text-white hover:bg-neutral-n600"
              }`}
            >
              {sportType}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
