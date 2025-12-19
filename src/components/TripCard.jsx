const TripCard = ({ image, title, description, price, duration }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary">{price}</span>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
      </div>
    </div>
  );
};
export default TripCard;
