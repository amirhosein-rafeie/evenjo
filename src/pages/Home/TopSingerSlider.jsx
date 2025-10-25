import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import EventCard from "../../components/EventCard";

const ConcertSlider = () => {
  const { events } = useSelector((state) => state.unified);
  const items = events.concerts || [];
  const half = Math.ceil(items.length / 2);
  const row1 = items.slice(0, half);
  const row2 = items.slice(half);

  const SliderRow = ({ data, speed, direction }) => {
    const duplicatedData = [...data, ...data, ...data, ...data];

    return (
      <motion.div
        className="flex gap-4"
        animate={{
          x:
            direction === "left"
              ? [0, -262 * data.length]
              : [0, 262 * data.length],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {duplicatedData.map((item, i) => (
          <EventCard key={`${item.id}-${i}`} event={item} variant="slider" />
        ))}
      </motion.div>
    );
  };

  return (
    <div className="w-full relative overflow-hidden">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-1">
              Top singers
            </h2>
            <p className="text-lg text-neutral-n300 max-w-2xl mx-auto mb-0">
              Find the singers you're looking for quickly.{" "}
              <span className="text-primaryMain font-medium cursor-pointer hover:text-primaryLight transition-colors">
                You can see more.
              </span>
            </p>
          </div>

          <div className="relative h-[45vh] md:h-[40vh] overflow-hidden rounded-3xl">
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l  from-black to-transparent z-20 pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col justify-center px-8 space-y-3">
              <SliderRow data={row1} speed={25} direction="left" />
              <SliderRow data={row2} speed={35} direction="left" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConcertSlider;
