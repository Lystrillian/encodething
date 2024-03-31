import { useTranslations } from '../../hooks/use-translations';

const TypesGrid = () => {
  const { types } = useTranslations();
  const type = [
    types.string,
    types.number,
    types.date,
    types.color,
    types.cipher,
    types.hash,
    types.tailwind,
  ];

  const desc = [
    types.stringDesc,
    types.numberDesc,
    types.dateDesc,
    types.colorDesc,
    types.cipherDesc,
    types.hashDesc,
    types.tailwindDesc,
  ];

  return (
    <>
      <section>
        <div className="grid-cols-2 gap-2 grid">
          {type.map((type, index) => (
            <div
              className="p-16 border-[0.5px] border-gray-main"
              style={{ fontSize: 'clamp(1rem, 0.943rem + 0.28vw, 1.125rem)' }}
              key={index}
            >
              {type}
              <div className="truncate text-gray-main">{desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TypesGrid;
