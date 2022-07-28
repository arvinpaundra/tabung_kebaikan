import { Combobox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiOutlineSelector } from 'react-icons/hi';

export const SelectList = (props) => {
  const { children, selected, setSelected, displayValue, placeholder, setQuery, color_scheme } =
    props;

  return (
    <div className="relative w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <div
            className={`relative w-full cursor-default overflow-auto 'bg-light-grey text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gsc focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 rounded-full`}
          >
            <SelectInput
              displayValue={displayValue}
              placeholder={placeholder ? placeholder : ''}
              onChange={(event) => setQuery(event.target.value)}
              color_scheme={color_scheme}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <HiOutlineSelector className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <SelectOptions setQuery={setQuery}>{children}</SelectOptions>
        </div>
      </Combobox>
    </div>
  );
};

const SelectInput = (props) => {
  const { color_scheme } = props;

  return (
    <div
      className={`relative w-full cursor-default overflow-auto ${
        color_scheme ? `bg-${color_scheme}` : 'bg-light-grey'
      } text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gsc focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 rounded-full border ${
        color_scheme ? `border-${color_scheme}` : 'border-light-grey'
      } hover:border hover:border-gsc`}
    >
      <Combobox.Input
        className={`w-full border-none py-2 px-4 rounded-full focus:outline-none ${
          color_scheme ? `bg-${color_scheme}` : 'bg-light-grey'
        } placeholder:text-black/60`}
        {...props}
      />
      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
        <HiOutlineSelector className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Combobox.Button>
    </div>
  );
};

const SelectOptions = (props) => {
  const { children, setQuery } = props;

  return (
    <Transition
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={() => setQuery('')}
    >
      <Combobox.Options className="absolute mt-1 w-full z-10 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {children}
      </Combobox.Options>
    </Transition>
  );
};
