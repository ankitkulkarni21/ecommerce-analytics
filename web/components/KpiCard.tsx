interface Props {
    title: string;
    value: string | number;
  }
  
  export default function KpiCard({ title, value }: Props) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm border">
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="mt-2 text-3xl font-bold text-gray-900">
          {value}
        </h3>
      </div>
    );
  }
  