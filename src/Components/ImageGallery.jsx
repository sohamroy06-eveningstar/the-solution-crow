export default function ImageGallery({ overview }) {
  if (!overview?.length) return null;

  return (
    <div className="space-y-24 mt-16">
      {overview.map((item, idx) => {
        const isReverse = idx % 2 !== 0;

        return (
          <div
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}
          >
            {/* TEXT */}
            <div
              className={`space-y-4 ${
                isReverse ? "md:order-2" : "md:order-1"
              }`}
            >
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {item.text}
              </p>

              {Array.isArray(item.keywords) && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.keywords.map((key, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
                    >
                      {key}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* IMAGES */}
            <div
              className={`grid grid-cols-1 gap-6 ${
                isReverse ? "md:order-1" : "md:order-2"
              }`}
            >
              {item.image?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="rounded-xl border border-white/10 shadow-lg"
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
