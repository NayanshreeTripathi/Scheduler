import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Testimonial from "@/components/testimonial";

const features = [
  {
    icons:Calendar,
    tittle:"Create Events",
    description:"Easily set up and customize your event types."
  },
  {
    icons:Clock,
    tittle:"Manage Availability",
    description:"Define your availability to streamline scheduling",
  },
  {
    icons:LinkIcon,
    tittle:"Custom Links",
    description:"Share your personalized scheduling link",
  }
];

const HowItWorks = [
  {
    step:"Sign Up",
    description:"Create your free schedulrr account."
  },
  {
    step:"Set Availability",
    description:"Define when you are available for meetings."
  },
  {
    step:"Share Your Link",
    description:"Send your scheduling link to clients or colleagues."
  },
  {
    step:"Get Booked",
    description:"Recive confirmations for new appointments automatically."
  },
];

export default function Home() {
  return <main className="container mx-auto px-4 py-16">
    <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12"> 
      <div className="lg:w-1/2 ">
        <h1 className="text-6xl font-extrabold pb-6 gradient-tittle">Simplify your day and focus on what matters most.</h1>
        <p className="text-xl text-gray-600 mb-4">
          Effortlessly schedule your meetings and calls with Schedulrr. Stay organized and never miss a moment with streamlined planning and real-time updates
        </p>
        <Link href='/dashboard'>
          <Button size='lg' className='text-lg'>Get Started <ArrowRight className="ml-2 h-5 w-5"/> </Button>
        </Link>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className=" relative w-full max-w-md aspect-square">
        <Image 
        src="/poster.png"        
        alt="scheduling illustration"
        layout="fill"
        objectFit="contain"/>
        </div>
      </div>
    </div>

    {/* Key Features */}
    
    <div className="mb-24">
      <h1 className="mb-12 text-2xl lg:text-4xl gradient-tittle text-center">Key Features</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((feature,index) => {
           return <Card key={index}>
           <CardHeader>
             <feature.icons className="h-12 w-12 text-blue-500 mb-4 mx-auto"/>
             <CardTitle className='text-center text-blue-600'>{feature.tittle}</CardTitle>
           </CardHeader>
           <CardContent>
             <p className="text-center text-gray-800 ">{feature.description}</p>
           </CardContent>
         </Card>         
        })}
      </div>
    </div>

    <div className="mb-24">
      <h1 className="mb-12 text-2xl lg:text-4xl gradient-tittle text-center">What our users say</h1>
      <div>
         <Testimonial/>
      </div>
    </div>

    <div className="mb-24 items-center">
      <h1 className="mb-12 text-2xl lg:text-4xl gradient-tittle text-center">How It Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {HowItWorks.map((step,index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-300 text-black h-10 w-10 rounded-full p-2 flex items-center justify-center mx-auto mb-4">
              <span>{index+1}</span>
            </div>
            <div>
              <div className="text-blue-600 font-semibold text-lg">{step.step}</div>
              <div className="text-gray-700 text-sm">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
      <h2 className="font-semibold text-4xl mb-4">Ready to Simplify your scheduling</h2>
      <p className="mb-6 text-2xl">Join thousands of professionals who trust Schedulrr for efficient time management</p>
      <Link href='/dashboard'>
       <Button size='lg' variant='secondary' className='text-blue-600' >Start For Free <ArrowRight className="w-5 h-5 ml-2"/></Button>
      </Link>
    </div>

  </main>
}
