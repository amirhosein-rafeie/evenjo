import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterBar from "../../components/FilterBar.jsx";
import EventCard from "../../components/EventCard.jsx";
import { setCategory } from "../../Store/unifiedStore.js";

const ConcertList = () => {
  const dispatch = useDispatch();
  const { filteredEvents, filters, loading, error } = useSelector(
    (state) => state.unified
  );

  React.useEffect(() => {
    dispatch(setCategory("concerts"));
  }, [dispatch]);

  const filteredConcerts = filteredEvents.concerts;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading concerts...</div>
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
            your search: {filteredConcerts.length} concerts found
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
          {filteredConcerts.map((concert) => (
            <EventCard key={concert.id} event={concert} />
          ))}
        </div>

        {filteredConcerts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-xl mb-4">
              No concerts found matching your criteria
            </div>
            <p className="text-gray-500">
              Try adjusting your search filters to find more concerts
            </p>
          </div>
        )}
      
      </div>
    </div>
  );
};

export default ConcertList;
