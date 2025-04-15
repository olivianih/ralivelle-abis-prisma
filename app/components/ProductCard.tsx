interface ProductCardProps {
    name: string;
    description: string;
    imageUrl: string;
    price: string;
  }
  
  export default function ProductCard({ name, description, imageUrl, price }: ProductCardProps) {
    return (
      <div className="p-4 border rounded-md">
        <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
        <h2 className="font-bold">{name}</h2>
        <p>{description}</p>
        <p className="text-blue-500 mt-2">{price}</p>
      </div>
    );
  }
  