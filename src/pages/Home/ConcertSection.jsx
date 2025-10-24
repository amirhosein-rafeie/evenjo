import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/unifiedStore";
import EventCard from "../../components/EventCard";

const ConcertSection = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.unified);
  const [selectedGenre, setSelectedGenre] = useState("");

  React.useEffect(() => {
    dispatch(setCategory("concerts"));
  }, [dispatch]);

  const genres = [
    "All",
    "Pop",
    "R&B",
    "Rock",
    "Jazz & Blues",
    "Hip-Hop & Rap",
    "Alternative",
    "Classical",
    "Opera",
    "Country",
  ];

  const filteredConcerts = useMemo(() => {
    if (!selectedGenre || selectedGenre === "All") {
      return events.concerts;
    }
    return events.concerts.filter(
      (concert) => concert.genre.toLowerCase() === selectedGenre.toLowerCase()
    );
  }, [events.concerts, selectedGenre]);

  const displayEvents = filteredConcerts.slice(0, 4);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-white">Concerts</h2>
          <a
            href="#"
            className="text-white hover:text-primaryMain transition-colors"
          >
            See all
          </a>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreChange(genre)}
              className={`px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap ${
                (selectedGenre === "" && genre === "All") ||
                selectedGenre === genre
                  ? "bg-primaryMain text-white"
                  : "bg-neutral-n700 text-white hover:bg-neutral-n600"
              }`}
            >
              {genre}
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

export default ConcertSection;
