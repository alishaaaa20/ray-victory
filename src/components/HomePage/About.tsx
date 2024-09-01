import {
  GlobeLock,
  PlugZap,
  ShieldHalf,
  Fingerprint,
  BatteryCharging,
  BotMessageSquare,
} from "lucide-react";
import { H3 } from "../Typography";

const About = () => {
  return (
    <div className="relative border-b border-neutral-800 bg-gray-950 min-h-[800px]">
      <div className="text-center py-20">
        <span className="bg-white  text-primary rounded-full h-10 text-xl font-bold px-2 py-1 uppercase">
          Why US?
        </span>
        <H3 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-white">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your business
          </span>
        </H3>
      </div>
      <div className="flex flex-wrap lg:mt-10 container">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-primary justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <p className="text-lg p-2 mb-20 text-neutral-300">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

export const features = [
  {
    icon: <BotMessageSquare />,

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Fingerprint />,

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <ShieldHalf />,

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <BatteryCharging />,

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <PlugZap />,

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <GlobeLock />,

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
