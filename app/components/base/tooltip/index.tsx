'use client'
import classNames from 'classnames'
import type { FC } from 'react'
import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip' // fixed version to 5.8.3 https://github.com/ReactTooltip/react-tooltip dark:bg-slate-700/issues/972
import 'react-tooltip/dist/react-tooltip.css'

type TooltipProps = {
  selector: string
  content?: string
  htmlContent?: React.ReactNode
  className?: string // This should use !impornant to override the default styles eg: '!bg-white dark:bg-slate-800'
  position?: 'top' | 'right' | 'bottom' | 'left'
  clickable?: boolean
  children: React.ReactNode
}

const Tooltip: FC<TooltipProps> = ({
  selector,
  content,
  position = 'top',
  children,
  htmlContent,
  className,
  clickable,
}) => {
  return (
    <div className='tooltip-container'>
      {React.cloneElement(children as React.ReactElement, {
        'data-tooltip-id': selector,
      })
      }
      <ReactTooltip
        id={selector}
        content={content}
        className={classNames('!bg-white dark:bg-slate-800 !text-xs !font-normal !dark:text-slate-400 !shadow-lg !opacity-100', className)}
        place={position}
        clickable={clickable}
      >
        {htmlContent && htmlContent}
      </ReactTooltip>
    </div>
  )
}

export default Tooltip
