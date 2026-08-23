import Image from "next/image";

type Preview = {
  image: string;
};

type PreviewListProps = {
  previews: Preview[];
};

export default function PreviewList({
  previews,
}: PreviewListProps) {
  return (
    <div>
      {/* TITLE */}
      <div className="mb-8 px-10">
        <div className="h1 font-black text-black">
          Preview
        </div>
      </div>

      {/* PREVIEW GRID */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 px-10 md:grid-cols-4">
        {previews.map((preview, index) => (
          <div
            key={index}
            className="relative aspect-[1.4/1] w-full"
          >
            <Image
              src={preview.image}
              alt={`Hobart Preview ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}