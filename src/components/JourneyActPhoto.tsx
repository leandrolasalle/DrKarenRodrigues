import karenPortrait from '../../watermarked_img_16837427052121350212.jpg';

interface JourneyActPhotoProps {
  actIndex: number;
  actNumber: string;
  caption: string;
  subcaption: string;
}

export default function JourneyActPhoto({
  actIndex,
  actNumber,
  caption,
  subcaption,
}: JourneyActPhotoProps) {
  return (
    <figure className="relative h-full min-h-[300px] w-full overflow-hidden bg-[#E7E2DC] sm:min-h-[360px]">
      <img
        src={karenPortrait}
        alt="Dra. Karen Rodrigues em seu escritório"
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${
          actIndex % 2 === 0 ? 'object-[center_24%]' : 'object-[center_34%]'
        }`}
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-5 pt-16 text-white">
        <span className="block text-[9px] font-medium uppercase tracking-[0.18em] text-white/75">
          {actNumber} · {subcaption}
        </span>
        <span className="mt-1 block font-cinzel text-sm font-medium">{caption}</span>
      </figcaption>
    </figure>
  );
}
