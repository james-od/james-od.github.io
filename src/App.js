import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Profile } from './assets/Profile'
import { GithubIcon } from './assets/GithubIcon'
import { TwitterIcon } from './assets/TwitterIcon'
import { LinkedInIcon } from './assets/LinkedInIcon'
import { OpenTag } from './assets/OpenTag'
import { SpaceBackdrop } from './assets/SpaceBackdrop'
import { FlightControls } from './assets/FlightControls'
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
<Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <div
                    className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    <BrowserRouter>
                      <HashLink smooth to="/#projects">Home</HashLink>
                    </BrowserRouter>
                  </div>
                  <div
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    <BrowserRouter>
                      <HashLink smooth to="/#projects">Projects</HashLink>
                    </BrowserRouter>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  CV
                </button>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
              <BrowserRouter>
                <HashLink smooth to="/#home">Home</HashLink>
              </BrowserRouter>                
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                <BrowserRouter>
                  <HashLink smooth to="/#projects">Projects</HashLink>
                </BrowserRouter>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    <div id="home">
      <div class="flex-initial m-4 flex justify-center items-center min-h-screen">
        <div class="w-150 -mt-32">
          <OpenTag/>
          <h1 class="mt-8 text-center lg:text-left font-sans text-4xl font-extrabold">
          Hi!<span class="ml-4"></span>I'm James<span class="text-4xl font-extrabold text-yellow-400">;</span></h1>        
          <body class="mt-16 text-xl text-center lg:text-left">        
            <br/>
            I’m currently a <span class="font-bold">Senior Software Engineer</span> at Skyscanner. I love creating <span class="font-bold">beautiful, scalable</span>, <span class="font-bold">performant</span> and <span class="font-bold">accessible</span> frontend products.
            <br/>
            <br/>
            I mostly code in <span class="font-bold">JavaScript</span> (Typescript), React specifically. I work regularly with Redux, Jest and Sass.
            <br/>  
            <br/>  
            I'm really enthusiastic about anything <span class="font-bold">web performance</span> - talk to me about Lighthouse, Core Web Vitals and code splitting!
            <br/> 
          </body>
          <div class="flex justify-center lg:justify-between">
            <div class="mt-16 flex justify-between w-32">
            <a href="https://github.com/james-od">
              <GithubIcon/>
            </a>
            <a href="https://twitter.com/James_O_D/">
              <TwitterIcon/>
            </a>
            <a href="https://www.linkedin.com/in/james-od/">
              <LinkedInIcon/>
            </a>                        
            </div>
          </div>
        </div>
        <div class=" hidden lg:block w-150 -mt-32">
          <Profile/>
        </div>
      </div>

    <div class="w-full h-48 lg:h-96 bg-indigo-900">
      <SpaceBackdrop class="h-48 lg:h-96 mx-auto"/>   
    </div>

    <dl class="bg-white mt-16  flex items-center space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-y-10 max-w-4/5 mx-auto mb-32 z-10">
      <div class="relative hidden lg:block">
         <FlightControls />
      </div>
      <div class="relative mx-auto lg:ml-16" id="projects">
         <h1 class="text-left text-6xl font-extrabold">Projects</h1>
         <p class="text-left text-md text-gray-600">
          <p class="mt-8">
            <a href="https://www.skyscanner.net" class="font-bold underline">Skyscanner</a> - Core engineer on Skyscanner’s largest frontend microsites
          </p>
          <p class="mt-8">
            <a href="https://www.klune.co" class="font-bold underline">Klune</a> - Founded Klune, a service that allows you to label images with interactive link tags, see <a href="https://www.klune.co" class="font-bold">klune.co</a>. Currently a work in progress.
          </p>            
          <p class="mt-8">
            <a href="https://www.glenstack.com" class="font-bold underline">Glenstack</a> - Glenstack was intended to be a marketplace for data exchange - accepted into the Pioneer accelerator. Now in hibernation. I Designed and implemented the landing page, <a href="https://www.glenstack.com" class="font-bold">glenstack.com</a>, as well as mockups for the planned product.
          </p>          
          <p class="mt-8">
            <a href="https://github.com/bosun-monitor/bosun-grafana-app/pull/32/files" class="font-bold underline">Templating functionality in Bosun Grafana App</a> - Added templating to reduce complexity and learning curve involved in using the Bosun query language in Grafana.
          </p>
          <p class="mt-8">
            <a href="https://dl.acm.org/doi/abs/10.1145/3399715.3399922" class="font-bold underline">Dynamic network measures</a>- I extended the functionality of The Vistorian, a dynamic network visualisation tool - to include and visualise dynamic network measures, some of my own design.
          </p>    
          <p class="mt-8">
            <a href="https://james-odonnell.com/demos/searcher.html" class="font-bold underline">Autocompletion with Tries</a> - Demonstration of how to use a Trie for string autocompletion on my old site.
          </p>                
          <p class="mt-8">
          <a href="https://github.com/GregBrimble/contributeto.tech" class="font-bold underline">Contributeto.tech</a> - A hackathon project, takes your github profile, looks at your favourite languages, and recommends open source projects and issues based on that.</p>
          </p>
      </div>
    </dl>  
   
    </div>
    </div>
  );
}

export default App;
