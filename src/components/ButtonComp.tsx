import React from 'react';

interface ComponentProps {
  icon?: JSX.Element,
  label: JSX.Element,
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
}

function ButtonComp(props: ComponentProps) {
  return (
    <div
      className={`rounded-lg h-14 flex items-center justify-center cursor-pointer ${props.className} ${props.icon ? 'pl-2 pr-4' : 'px-6'}  ${props.disabled ? 'opacity-75' : 'opacity-100'}`}
      onClick={() => !props.disabled && props.onClick?.() }>
      <div className="flex items-center space-x-4 text-center">
        { props.icon && props.icon }
        { props.label }
      </div>
    </div>
  )
}

export default React.memo(ButtonComp);
