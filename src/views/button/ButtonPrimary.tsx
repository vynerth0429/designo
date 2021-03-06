import React from 'react'
import ButtonComp from '../../components/ButtonComp';

interface ComponentProps {
  label: string,
  onClick: () => void,
}

function ButtonPrimary(props: ComponentProps) {
  return (
    <ButtonComp
      label={
        <div className="uppercase text-caption font-medium text-white group-hover:text-white">
          <span>
            { props.label }
          </span>
        </div>
      }
      className="group bg-peach hover:bg-peach-light transition-all"
      onClick={props.onClick}
    />
  )
}

export default React.memo(ButtonPrimary);
