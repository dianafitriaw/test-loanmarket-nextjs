import Chardtopbank from "./charttopbank";

export default function CardTopbank() {
    return (
      <div className="bg-bgcolor w-full max-w-3xl mx-auto p-4 rounded-lg shadow-lg">
        {/* Judul */}
        <h1 className="font-semibold text-xl md:text-3xl text-center py-4">
          Top 5 Approval Bank Tertinggi
        </h1>
  
        {/* Grafik */}
        <div className="py-4 flex justify-center items-center">
          <Chardtopbank />
        </div>
      </div>
    );
  }
  