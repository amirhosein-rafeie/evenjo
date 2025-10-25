import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterBar from "../../components/FilterBar.jsx";
import EventCard from "../../components/EventCard.jsx";
import { setCategory } from "../../Store/unifiedStore.js";

const SportsList = () => {
  const dispatch = useDispatch();
  const { filteredEvents, filters, loading, error } = useSelector(
    (state) => state.unified
  );
  const { category } = filters;

  React.useEffect(() => {
    dispatch(setCategory("sports"));
  }, [dispatch]);

  const filteredSports = filteredEvents.sports;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading sports events...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FilterBar />
        <div className="mb-6">
          <h2 className="text-gray-300 text-lg">
            your search: {filteredSports.length} sports events found
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
          {filteredSports.map((sport) => (
            <EventCard key={sport.id} event={sport} />
          ))}
        </div>

        {filteredSports.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-xl mb-4">
              No sports events found matching your criteria
            </div>
            <p className="text-gray-500">
              Try adjusting your search filters to find more sports events
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportsList;
