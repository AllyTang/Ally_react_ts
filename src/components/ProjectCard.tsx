import axios from 'axios'
import { ChevronRightIcon } from '@heroicons/react/outline'
import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { ProjectProps } from '../config/projects'

const ProjectCard = (props: ProjectProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [projectStat, setProjectStat] = useState({ star: 0, fork: 0 })

  const starRef = useRef(null)

  useEffect(() => {
    const githubApi = `https://api.github.com/repos/${props.slug}`

    axios
      .get(githubApi)
      .then(({ data }) => {
        setProjectStat({ star: data.stargazers_count, fork: data.forks })
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        setIsLoading(false)
      })
  }, [])

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card rounded compact shadow transition transform hover:shadow-md hover:-translate-y-1"
    >
      <figure className="h-32 overflow-hidden">
        <img src={props.bimg} alt="background" />
      </figure>

      <div className="card-body bg-neutral">
        <div className="card-title text-neutral-content">{props.name}</div>
        <div className="flex justify-between mt-2 text-neutral-content">
          <div className="flex items-center space-x-2 h-5">
            <svg height="18" viewBox="0 0 16 16" version="1.1" width="18" aria-hidden="true" className="fill-current">
              <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
            </svg>
            <SwitchTransition>
              <CSSTransition
                key={isLoading ? 'loading' : 'loaded'}
                timeout={200}
                classNames="fade"
                nodeRef={starRef}
                unmountOnExit
              >
                <div ref={starRef} className="flex w-9 items-center"/>
              </CSSTransition>
            </SwitchTransition>
           
           
          </div>

          <div className="flex items-center">
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
