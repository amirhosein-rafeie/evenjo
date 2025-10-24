import { motion } from "framer-motion";
import { concerts } from "../../components/data";

const DataCommentSlider = [
  {
    id: 1,
    name: "Esther Howard",
    text: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f",
    rating: 4,
    avatar: concerts[0].img,
  },
  {
    id: 2,
    name: "Jane Cooper",
    text: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus bl",
    rating: 4,
    avatar: concerts[1].img,
  },
  {
    id: 3,
    name: "Leslie Alexander",
    text: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    rating: 4,
    avatar: concerts[2].img,
  },
  {
    id: 4,
    name: "Jenny Wilson",
    text: "Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam",
    rating: 4,
    avatar: concerts[3].img,
  },
  {
    id: 5,
    name: "Jerome Bell",
    text: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P",
    rating: 4,
    avatar: concerts[4].img,
  },
  {
    id: 6,
    name: "Kristin Watson",
    text: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus bl",
    rating: 4,
    avatar: concerts[5].img,
  },
  {
    id: 7,
    name: "Bessie Cooper",
    text: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
    rating: 4,
    avatar: concerts[6].img,
  },
  {
    id: 8,
    name: "Ralph Edwards",
    text: "In a laoreet purus. Integer laoreet id orci nec, ultrices nunc. Aliquam erat vo",
    rating: 4,
    avatar: concerts[7].img,
  },
];

const Star = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "var(--color-primaryMain)" : "var(--color-neutral-n400)"}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CommentSliderCard = ({ t }) => (
  <div
    className="w-[288px] flex-shrink-0 rounded-2xl p-3 shadow-lg"
    style={{ border: "1px solid var(--color-neutral-n400)" }}
  >
    <p className="text-neutral-n100 text-sm leading-relaxed mb-3">{t.text}</p>
    <div className="flex items-center gap-2">
      <img
        src={t.avatar}
        alt={t.name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div>
        <p className="text-white text-sm font-medium">{t.name}</p>
        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < t.rating} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CommentSlider = () => {
  const items = DataCommentSlider;
  const half = Math.ceil(items.length / 2);
  const row1 = items.slice(0, half);
  const row2 = items.slice(half);

  const SliderRow = ({ data, speed, direction = "left" }) => {
    const duplicated = [...data, ...data, ...data, ...data];
    return (
      <motion.div
        className="flex gap-4"
        animate={{
          x:
            direction === "left"
              ? [0, -262 * data.length]
              : [0, 262 * data.length],
        }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {duplicated.map((t, i) => (
          <CommentSliderCard key={`${t.id}-${i}`} t={t} />
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
              Loved by Thousands
            </h2>
            <p className="text-lg text-neutral-n300 max-w-2xl mx-auto mb-0">
              Smooth, easy ticket buying — hear it from our happy users.
            </p>
          </div>
          <div className="relative h-[410px] overflow-hidden rounded-3xl">
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-center px-8 space-y-6">
              <SliderRow data={row1} speed={25} direction="left" />
              <SliderRow data={row2} speed={35} direction="left" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommentSlider;
