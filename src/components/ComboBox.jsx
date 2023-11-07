import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

const season = [
    { id: 1, name: 'Season 1'},
    { id: 2, name: 'Season 2'},
    { id: 3, name: 'Season 3'},
    { id: 4, name: 'Season 4'},
    { id: 5, name: 'Season 5'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TheComboBox = () => {
  const [query, setQuery] = useState('')
  const [selectedSeason, setSelectedSeason] = useState(null)

  const fileteredSeason =
    query === ''
      ? season
      : season.filter((szn) => {
          return szn.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox as="div" value={selectedSeason} onChange={setSelectedSeason}>
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(szn) => szn?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {fileteredSeason.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {fileteredSeason.map((szn) => (
              <Combobox.Option
                key={szn.id}
                value={szn}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{szn.name}</span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}

export default TheComboBox;
