import Card from './Card';
import React from 'react'; // Make sure to import React

const data = [
  {
    name: 'Nest Education IT School сургуулийн маань 11 дүгээр ангийн',
    description: 'IT-ийн чиглэлээр сурч, мэргэшиж буй залуусын',
    img: "https://nhs.edu.mn/assets/images/itpec.jpg"
  },{
    name: 'Nest Education IT School сургуулийн маань 11 дүгээр ангийн',
    description: 'IT-ийн чиглэлээр сурч, мэргэшиж буй залуусын',
    img: "https://nhs.edu.mn/assets/images/itpec.jpg"
  },{
    name: 'Nest Education IT School сургуулийн маань 11 дүгээр ангийн',
    description: 'IT-ийн чиглэлээр сурч, мэргэшиж буй залуусын',
    img: "https://nhs.edu.mn/assets/images/itpec.jpg"
  },{
    name: 'Nest Education IT School сургуулийн маань 11 дүгээр ангийн',
    description: 'IT-ийн чиглэлээр сурч, мэргэшиж буй залуусын',
    img: "https://nhs.edu.mn/assets/images/itpec.jpg"
  },{
    name: 'Nest Education IT School сургуулийн маань 11 дүгээр ангийн',
    description: 'IT-ийн чиглэлээр сурч, мэргэшиж буй залуусын',
    img: "https://nhs.edu.mn/assets/images/itpec.jpg"
  },{
    name: 'Nest Education IT School сургуулийн маань 11 дүгээр ангийн',
    description: 'IT-ийн чиглэлээр сурч, мэргэшиж буй залуусын',
    img: "https://nhs.edu.mn/assets/images/itpec.jpg"
  },{
    name: 'Nest Education IT School сургуулийн маань 11 дүгээр ангийн',
    description: 'IT-ийн чиглэлээр сурч, мэргэшиж буй залуусын',
    img: "https://nhs.edu.mn/assets/images/itpec.jpg"
  },{
    name: 'Nest Education IT School сургуулийн маань 11 дүгээр ангийн',
    description: 'IT-ийн чиглэлээр сурч, мэргэшиж буй залуусын',
    img: "https://nhs.edu.mn/assets/images/itpec.jpg"
  },{
    name: 'Nest Education IT School сургуулийн маань 11 дүгээр ангийн',
    description: 'IT-ийн чиглэлээр сурч, мэргэшиж буй залуусын',
    img: "https://nhs.edu.mn/assets/images/itpec.jpg"
  },{
    name: 'Nest Education IT School сургуулийн маань 11 дүгээр ангийн',
    description: 'IT-ийн чиглэлээр сурч, мэргэшиж буй залуусын',
    img: "https://nhs.edu.mn/assets/images/itpec.jpg"
  },
];

export default function Home() {
  return (
    <div className="w-screen flex justify-evenly items-center flex-col bg-gradient-to-r from-slate-900  to-slate-700 gap-10">
      <div className="w-full flex justify-center items-center flex-col font-bold mt-24">
        <p className="text-2xl text-white uppercase">Сургуулийн эргэн</p>
        <p className="text-4xl text-sky-500 font-black uppercase">тойронд</p>
      </div>
      <div className="w-[90vw] gap-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-col-3 2xl:grid-cols-3">
        {data.map((el, index) => (
          <Card key={index} name={el.name} image={el.img} description={el.description} />
        ))}
      </div>
    </div>
  );
}
