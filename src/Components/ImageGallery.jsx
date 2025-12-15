export default function ImageGallery({ overview }) {
  if (!overview?.length) return null;

  return (
    <div className="space-y-14 mt-12">
      {overview.map((item, idx) => (
        <div key={idx} className="space-y-4">
          <p className="text-gray-300 leading-relaxed">{item.text}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {item.image?.map((img, i) => (
              <img
                key={i}
                src={`/${img}`}
                alt=""
                className="rounded-xl border border-white/10"
              />
            ))}
          </div>

          {Array.isArray(item.keywords) && (
            <div className="flex flex-wrap gap-2 mt-3">
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
      ))}
    </div>
  );
}
