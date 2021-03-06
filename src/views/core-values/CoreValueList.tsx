import React from 'react';

import { TCoreValue } from '../../data/core-values-data';

import CoreValueItem from './CoreValueItem';

interface ComponentProps {
  coreValues: TCoreValue[]
}

function CoreValueList(props: ComponentProps) {
  return (
    <div className="flex flex-col space-y-20 md:space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
      {
        props.coreValues.map((coreValue) => (
          <CoreValueItem
            key={coreValue.id}
            coreValue={coreValue}
          />
        ))
      }
    </div>
  )
}

export default CoreValueList;
