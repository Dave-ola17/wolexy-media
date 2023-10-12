"use client"
import { Tab } from '@headlessui/react'

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
              <Tab key={tab.key} className=" p-2">
                {({ selected }) => (
                  <span className={selected ? 'text-white' : 'text-stone-600'}>
                    {tab.display}
                  </span>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-10 bg-stone-900 bg-opacity-80 max-w-[900px] w-full px-2 sm:px-4 h-full">
            <Tab.Panel className=" ">Section for all images</Tab.Panel>
            <Tab.Panel>Section for Wedding images</Tab.Panel>
            <Tab.Panel>Section for social functions</Tab.Panel>
            <Tab.Panel>Section for outdoor landscape images</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
}
    export default MyTabs;