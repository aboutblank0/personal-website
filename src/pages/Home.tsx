import { About } from "../components/about";
import { Experience } from "../components/experience";
import { NavBar } from "../components/navbar";
import { Projects } from "../components/projects";
import { Socials } from "../components/socials";
import { CircularPhotoDisplay } from "../threeFiber/reusable/circularPhotoDisplay";
import JoseDarkImage from "../assets/Photo_Jose_Dark.jpg";
import JoseLightImage from "../assets/Photo_Jose_Light.png";
import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";

export const Home = () => {
  const theme = useTheme();
  const [image, setImage] = useState(theme.currentTheme === "dark" ? JoseDarkImage : JoseLightImage);

  useEffect(() => {
    setImage(theme.currentTheme === "dark" ? JoseDarkImage : JoseLightImage);
  }, [theme.currentTheme]);

  return (
    <>
      {/* <ParticleBackground /> */}
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:gap-24'>
          <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24'>
            {/* Left Side */}
            <div className='flex flex-col'>
              <CircularPhotoDisplay
                photoUrl={image}
                className='h-56'
              />
              <h1 className='text-4xl font-bold text-center mt-2'>
                José Colaco
              </h1>
              <h2 className='text-lg mt-3 text-center'> Developer </h2>
            </div>
            <NavBar />
            <Socials />
          </header>
          <main className='lg:w-2/3 lg:pb-24 flex flex-col'>
            {/* Right side */}
            <About />
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </>
  );
};
