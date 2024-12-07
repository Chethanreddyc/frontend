import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const doctors = [
  {
    id: 1,
    name: 'Dr.Vasikaran',
    specialty: 'Neuroligisit',
    image: 'https://th.bing.com/th/id/OIP.Nm1veNvgPX_af5ZkMbngagHaLJ?w=121&h=183&c=7&r=0&o=5&dpr=2&pid=1.7',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Dr.Balayya',
    specialty: 'Orthopedics',
    image: 'https://th.bing.com/th/id/OIP.DkNq2i0klEkUpXkdZ3OvLgHaLH?w=122&h=183&c=7&r=0&o=5&dpr=2&pid=1.7',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Dr. Shankar',
    specialty: 'Pulmonologist',
    image: 'https://th.bing.com/th/id/OIP.IVwf85npYYUcwRp4EIhqDgHaJm?w=122&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Dr. Arjun  ',
    specialty: 'Pulmonologist',
    image: 'https://th.bing.com/th/id/OIP.Yiu73mJb23PW8EXKySiDLQHaK5?w=121&h=181&c=7&r=0&o=5&dpr=2&pid=1.7',
    rating: 4.9,
  },
];

export default function Doctors() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Our Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="w-full max-w-xs shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-70 w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="font-medium">
                {doctor.name}
              </Typography>
              <Typography color="gray" className="text-sm">
                {doctor.specialty}
              </Typography>
              <Typography color="blue-gray" className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                {doctor.rating}
              </Typography>
            </CardBody>
            <CardFooter>
              <Button size="lg" fullWidth>
                Book Appointment
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}