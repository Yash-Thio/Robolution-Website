import { ReactNode } from "react";
import Image from "next/image";

interface AchievementContent {
  title: string;
  description: string;
  content: ReactNode;
}

export const content: AchievementContent[] = [
    {
        title: "ABU Robocon 2014-2015",
        description:
          `Participated in ABU Robocon at Pune and was ranked 9th out of total of 90 teams
           In the same event, our team (Team Pratyunmis) was awarded by MathWorks as the best usage
           of Math works Tools. `,
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/images/DSC_0169.JPG"
              width={300}
              height={300}
              className="aspect-square w-60 object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "ABU Robocon 2015-2016",
        description:
          `Participated in ABU Robocon at Pune and bagged 26th rank out of 105 teams. We also remained
           unbeaten in the whole competition and were the only team to implement pole climbing with
           huge payload using pneumatics.`,
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/images/DSC_0169.JPG"
              width={300}
              height={300}
              className="aspect-square w-60 object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "ABU Robocon 2016-2017",
        description:
          `Only team to use image processing to detect the Frisbee and then use AI to make alterations to
           control provided to Frisbee to land it on a given pole. `,
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/images/DSC_0169.JPG"
              width={300}
              height={300}
              className="aspect-square w-60 object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "ABU Robocon 2017-2018",
        description:
          `Participated in ABU Robocon 2018 held at Pune from 1st to 3rd March 2018 and was one of the
           handful teams to implement throwing mechanism using motors.`,
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/images/DSC_0169.JPG"
              width={300}
              height={300}
              className="aspect-square w-60 object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "ABU Robocon 2020-2021",
        description:
          `We achieved 100 out of 100 marks in the first round of Robocon. A feat never achieved before!!! `,
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/images/DSC_0169.JPG"
              width={300}
              height={300}
              className="aspect-square w-60 object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "ISRO Robotics Challenge 2024-25",
        description:
          `ISRO is foraying into the development of state-of-the-art Space Robotics, Artificial Intelligence and Machine 
          Learning technologies. The technologies are being developed to meet the futuristic mission needs of ISRO viz., ISRO
           In-orbit Servicer Mission, Lunar sample return mission, Docking in Space (SPADEX), Mars Lander Mission etc. `,
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/images/DSC_0169.JPG"
              width={300}
              height={300}
              className="aspect-square w-60 object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      }
]