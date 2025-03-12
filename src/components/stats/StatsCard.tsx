interface StatsCardProps {
    label: string;
    value: number;
  }
  
  const StatsCard = ({ label, value }: StatsCardProps) => {
    return (
      <div className="bg-gray-800 p-4 rounded-md shadow-md">
        <h3 className="text-xl text-gray-200">{label}</h3>
        <p className="text-3xl text-blue-500">{value}</p>
      </div>
    );
  };
  
  export default StatsCard;
  