import paracetmol from '../assets/paracetmol.webp';
import { Typography } from "@material-tailwind/react";

const products = [
  {
    id: 1,
    name: 'paracetmol',
    href: '#',
    price: '₹150',
    imageSrc: paracetmol ,
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '₹500',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqanPDrmkLnFGyGPyv-L4aLmgtH0sqHS3oQ&s',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '₹420',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf32MQEvpr0XSv9HPEb4taAf5jngfERhKdg&s',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '₹42',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsklrKsJfY_ocN5aT1jOEKwXwPJ0AlEEPUA&s',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '₹120',
    imageSrc: 'https://images.apollo247.in/pub/media/catalog/product/D/H/DHO0086_1-JULY23_1.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '₹220',
    imageSrc: 'https://images.apollo247.in/pub/media/catalog/product/D/H/DHO0085_1-JULY23_1.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '₹35',
    imageSrc: 'https://images.apollo247.in/pub/media/catalog/product/A/P/APR0138_1-JULY23_1.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '₹320',
    imageSrc: 'https://images.apollo247.in/pub/media/catalog/product/D/H/DHO0101_1-JULY23_1.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '₹79',
    imageSrc: 'https://images.apollo247.in/pub/media/catalog/product/s/e/seb0036-2-2.png?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '₹199',
    imageSrc: 'https://images.apollo247.in/pub/media/catalog/product/g/a/gar0765_1.jpg?tr=q-80,f-webp,w-150,dpr-2,c-at_max',
  }
]

export default function Example() {
  return (
    <div className="bg-white">
  <figure className="relative h-96 w-full">
    <img
      className="h-full w-full rounded-xl object-cover object-center"
      src="https://irishpharmacist.ie/wp-content/uploads/2023/03/IP_mar_weight_loss_drug.jpg"
      alt="nature image"
    />
    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm ">
      <div>
        <Typography  variant="h5" color="blue-gray">
          Get All Your Medicines Home
        </Typography>
      </div>
    </figcaption>
  </figure>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-4">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-2 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}