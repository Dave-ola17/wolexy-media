"use client"
import { Tab } from '@headlessui/react'
import Masonry from 'react-masonry-css'
import  images  from './images'
import Image from 'next/image'


const tabs = [
    {
        key: 'all',
        display: 'All'
    },
    {
        key: 'weddings',
        display: 'Weddings'
    },
    {
        key: 'social',
        display: 'Social Events'
    },
    {
        key: 'outdoor',
        display: 'Outdoor Landscape',
    }
]

function MyTabs() {
    return (
      <div className="flex flex-col h-full items-center">
      <Tab.Group>
        <Tab.List className="flex justify-center space-x-12">
          {tabs.map((tab) => (
            <Tab key={tab.key} className="p-2">
              {({ selected }) => (
                <span className={selected ? 'text-white' : 'text-stone-600'}>
                  {tab.display}
                </span>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-10 h-full max-w-[900px] w-full px-2 sm:px-4">
          {tabs.map((tab) => (
            <Tab.Panel key={tab.key} className="">
              <Masonry
                className="flex gap-2"
                breakpointCols={2}
                columnClassName=""
              >
                {images
                  .filter((image) => (tab.key === 'all' ? true : image.category === tab.key))
                  .map((image) => (
                    <div className="mb-3" key={image.id}>
                      <Image 
                        width={500}
                        height={500}
                        className="rounded cursor-pointer"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  ))}
              </Masonry>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    );
}
    export default MyTabs;