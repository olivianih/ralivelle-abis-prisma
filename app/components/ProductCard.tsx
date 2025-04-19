interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  price: string;
}

export default function ProductCard({ name, description, imageUrl, price }: ProductCardProps) {
  return (
    <div className="p-4 border border-gray-400 rounded-lg h-full w-full flex flex-col items-start transition-colors duration-300 hover:border-[#D39C9C]">
      <div className="w-full aspect-square mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h2 className="font-bold text-base">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-blue-500 mt-2 font-semibold">{price}</p>
    </div>
  );
}
