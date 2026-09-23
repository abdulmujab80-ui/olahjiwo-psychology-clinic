type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  price: string;
};


export default function ServiceCard({
  icon,
  title,
  description,
  price,
}: ServiceCardProps) {

  return (

    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">


      <div className="text-3xl mb-4">
        {icon}
      </div>


      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>


      <p className="text-gray-600 mt-3 text-sm leading-relaxed">
        {description}
      </p>


      <div className="mt-5">

        <p className="text-sm text-gray-500">
          Mulai dari
        </p>

        <p className="text-xl font-bold text-red-700">
          {price}
        </p>

      </div>



      <a
        href="/program"
        className="block text-center mt-5 bg-red-700 text-white py-3 rounded-xl font-semibold hover:bg-red-800"
      >
        Pilih Program
      </a>


    </div>

  );

}