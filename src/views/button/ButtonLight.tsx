import React from 'react'
import ButtonComp from '../../components/ButtonComp';

interface ComponentProps {
  label: string,
  onClick: () => void,
}

function ButtonLight(props: ComponentProps) {
  return (
    <ButtonComp
      label={
        <div className="uppercase text-caption font-medium text-grey-dark group-hover:text-white">
          <span>
            { props.label }
          </span>
        </div>
      }
      className="group bg-white hover:bg-peach-light transition-all"
      onClick={props.onClick}
    />
  )
}

export default React.memo(ButtonLight);
