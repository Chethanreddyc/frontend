import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Main from './main.jpg'


const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Default() {
  return (<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
      </svg>
    </div>
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">Heal faster</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to VCH</h1>
            <p className="mt-4 font-semibold text-gray-900">
            At *VCH (Virtual Care Hospital)*, we are dedicated to transforming the way hospitals manage their operations, patient care, and overall workflow.
             Our innovative, user-friendly platform is designed to simplify hospital management, ensuring seamless coordination between healthcare professionals, administrative staff, and patients.

            </p>
          </div>
        </div>
      </div>
      <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
          alt=""
          src={Main}
          className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
        />
      </div>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>
           

            </p>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Push to deploy.</strong> At VCH, we make hospital management effortless, 
                  from deployment to daily operations. Our platform is designed for seamless integration, ensuring that your hospital 
                  can go live with minimal setup and maximum efficiency.

                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold text-gray-900">SSL certificates.</strong> Your hospital’s data 
                  security is our top priority. VCH ensures full encryption with SSL certificates, safeguarding sensitive 
                  information like patient records and transactions. With us, you can rest easy knowing that your data is protected with the highest security standards.

                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold text-gray-900">Database backups.</strong> VCH automatically backs up your
                   hospital’s critical data, ensuring no information is lost. From patient health records to billing details,
                    we guarantee real-time backups to keep your hospital’s database secure and easily retrievable in case of any emergencies.

                </span>
              </li>
            </ul>
            <p className="mt-8">
            Communication between medical teams is crucial for smooth hospital operations. VCH’s platform bridges the gap by enabling 
            real-time collaboration across departments. Whether it’s sharing patient information, lab results, or staff schedules, our
             system ensures efficient coordination throughout.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Seamless Patient Experience</h2>
            <p className="mt-6">
            At VCH, we prioritize enhancing the patient journey from admission to discharge. Our intuitive system ensures smooth
             scheduling, easy access to medical records, and real-time updates for both patients and healthcare providers. 
             By streamlining administrative tasks and reducing waiting times, VCH helps create a more comfortable, efficient
              experience for every patient. Keep your patients informed, engaged, and satisfied with a seamless, well-coordinated
               care process from start to finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}