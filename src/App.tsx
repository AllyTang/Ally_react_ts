import React from 'react'

import {
  CodeIcon,
  CubeTransparentIcon,
  ServerIcon,
  ClockIcon,
  MailIcon,
  PuzzleIcon,
  ChartBarIcon,
  BeakerIcon,
  LibraryIcon,
} from '@heroicons/react/outline'
import {
  Amazonaws,
  Github,
  Javascript,
  Googlemaps,
  Laravel,
  Nextdotjs,
  Nativescript,
  Php,
  ReactJs,
  Tailwindcss,
  Typescript,
  Webpack,
  Visualstudiocode,
  Vuedotjs,
  Express,
} from '@icons-pack/react-simple-icons'
import toast, { Toaster } from 'react-hot-toast'
import { projects } from './config/projects'
import CardBtnIcons from './components/CardBtnIcons'
import SocialIcons from './components/SocialIcons'
import ProjectCard from './components/ProjectCard'
import avatar from './assets/avatar.png'
import wave from './assets/wave.png'


const projectCards = projects.map(p => (
  <ProjectCard key={p.name} name={p.name} link={p.link} slug={p.slug} bimg={p.bimg} />
))

const App = () => {
  const currentYear: number = new Date().getFullYear()

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 pb-6 max-w-4xl bg-base-200 rounded">
        <div className="mt-12 md:mt-24 p-6 bg-primary shadow-md rounded transform -translate-y-6">
          <Toaster />

          <div className="flex flex-col space-y-4 md:flex-row md:space-x-8">
            <img
              className="w-24 h-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2"
              src={avatar}
              alt="avatar"
            />

            <div>
              <div className="flex items-center">
                <div className="text-2xl md:text-3xl font-bold text-neutral-content">Hi, I'm Ally Tang</div>
                <img className="w-8 h-8 ml-2 wave" src={wave} alt="wave" />
              </div>

              <div className="flex flex-wrap mt-8 gap-2 overflow-hidden">
                <CardBtnIcons
                  desc={'use.lang'}
                  descIcon={CodeIcon}
                  icons={[Javascript, Typescript,Php]}
                />
                <CardBtnIcons
                  desc={'use.framework'}
                  descIcon={CubeTransparentIcon}
                  icons={[Express, ReactJs, Nextdotjs, Vuedotjs, Tailwindcss,Nativescript,Laravel]}
                />
                <CardBtnIcons
                  desc={'use.service'}
                  descIcon={ServerIcon}
                  icons={[Visualstudiocode, Googlemaps, Webpack, Amazonaws]}
                />
              </div>

              <hr className="border-dashed border-secondary-focus mt-4" />

              <div className="flex flex-wrap mt-4 gap-2">
                <SocialIcons link={'https://github.com/AllyTang'} icon={Github} />
                <a className="btn btn-sm btn-secondary" href="mailto:allytang2015@gmail.com">
                  <MailIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <BeakerIcon className="w-6 h-6" />
            <span className="text-xl ml-2 font-bold">Projects</span>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">{projectCards}</div>     
        </div>
      </div>

      <footer className="w-full text-center my-8">
        <div>
          Powered by{' '}
          <a className="link" href="https://reactjs.org/">
            React
          </a>
          ,{' '}
          <a className="link" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>
          ,{' '}
          <a className="link" href="https://vitejs.dev/">
            Vite
          </a>{' '}
          and{' '}
          <a className="link" href="https://www.typescriptlang.org/">
            TypeScript.
          </a>
        </div>
        <div>Ally Tang © 2018-{currentYear}</div>
      </footer>
    </div>
  )
}

export default App
