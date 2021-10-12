import guroo from '../assets/guroo.png'
import netcorpGps from '../assets/netcorpGps.png'
import jianshu from '../assets/jianshu.png'
import rn from '../assets/rn.png'
import JR from '../assets/JR.png'

export interface ProjectProps {
  name: string
  link: string
  slug: string
  bimg: string
}

export const projects: ProjectProps[] = [
  {
    name: 'Pooled Energy',
    link: '',
    slug: 'Pooled Energy App',
    bimg: rn,
  },
  {
    name: 'jianshu',
    link: 'https://www.jianshu.com/',
    slug: 'jianshu',
    bimg: jianshu,
  },
  {
    name: 'netcorpGps',
    link: 'https://netcorpgps.com.au/live-gps-tracking/',
    slug: 'netcorpGps',
    bimg: netcorpGps,
  },
  {
    name: 'guroo',
    link: 'https://www.gurooproducer.com/',
    slug: 'guroo producer',
    bimg: guroo,
  },
  {
    name: 'jiangren',
    link: 'https://jracademy.com.au/',
    slug: 'jiangren',
    bimg: JR,
  },
]
