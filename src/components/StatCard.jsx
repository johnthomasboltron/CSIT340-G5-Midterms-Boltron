
function StatCard({ value, label }) {
  return (
    <div className="w-48 rounded-xl bg-[#F3E6D5] py-4 text-center">
      <p className="text-4xl font-bold">{value}</p>
      <p className="mt-1 text-lg text-black">{label}</p>
    </div>
  );
}

export default StatCard;
