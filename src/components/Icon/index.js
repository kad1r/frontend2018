import React from 'react'

const Icon = props => {
  const { name } = props
  if (name === 'checkbox-icon') {
    return (
      <svg
        width="10"
        height="7"
        viewBox="0 0 10 7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="list" transform="translate(-187 -529)" fill="#FFF">
            <polygon
              id="Shape-2-Copy-2"
              points="190.571429 536 187 532.634615 188 531.692308 190.571429 534.115385 196 529 197 529.942308"
            />
          </g>
        </g>
      </svg>
    )
  }
}

export default Icon
