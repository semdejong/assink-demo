import { plateById, type WorkPlate } from "@/content";

export function Plate({
  plate,
  priority = false,
  frame,
}: {
  plate: WorkPlate;
  priority?: boolean;
  frame?: number;
}) {
  const sized = frame ?? Math.round(plate.width * 1.25);
  return (
    <figure className="plate" style={{ width: `min(100%, ${sized}px)` }}>
      <div className="mat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={plate.src}
          alt={plate.alt}
          width={plate.width}
          height={plate.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      <figcaption>
        <span className="cap-title">{plate.title}</span>
        <span className="cap-material">{plate.material}</span>
      </figcaption>
    </figure>
  );
}

export function PlateSet({ ids, priorityFirst = false }: { ids: readonly string[]; priorityFirst?: boolean }) {
  return (
    <div className="plates">
      {ids.map((id, index) => (
        <Plate key={id} plate={plateById(id)} priority={priorityFirst && index === 0} />
      ))}
    </div>
  );
}
