type Props = {
  className?: string
}

const Logo = ({ className = "" }: Props) => {
  return (
    <svg viewBox="0 0 132.292 132.292" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g stroke="#053b50" fill="none">
        <g transform="matrix(1.41942 0 0 1.41942 38.078 -222.495)">
          <circle cx="56.065" cy="203.246" r="7.81" strokeWidth="5" />
          <path
            d="M57.327 225.52a22.17 22.17 0 0 1-.133 0 22.17 22.17 0 0 1-22.17-22.17 22.17 22.17 0 0 1 22.17-22.17 22.17 22.17 0 0 1 .133.001"
            strokeWidth="6"
          />
        </g>
        <g transform="matrix(0 1.41942 -1.41942 0 354.786 38.078)">
          <circle cx="56.065" cy="203.246" r="7.81" strokeWidth="5" />
          <path
            d="M57.327 225.52a22.17 22.17 0 0 1-.133 0 22.17 22.17 0 0 1-22.17-22.17 22.17 22.17 0 0 1 22.17-22.17 22.17 22.17 0 0 1 .133.001"
            strokeWidth="6"
          />
        </g>
        <g transform="matrix(0 -1.41942 1.41942 0 -222.495 94.214)">
          <circle cx="56.065" cy="203.246" r="7.81" strokeWidth="5" />
          <path
            d="M57.327 225.52a22.17 22.17 0 0 1-.133 0 22.17 22.17 0 0 1-22.17-22.17 22.17 22.17 0 0 1 22.17-22.17 22.17 22.17 0 0 1 .133.001"
            strokeWidth="6"
          />
        </g>
        <g transform="matrix(-1.41942 0 0 -1.41942 94.214 354.786)">
          <circle cx="56.065" cy="203.246" r="7.81" strokeWidth="5" />
          <path
            d="M57.327 225.52a22.17 22.17 0 0 1-.133 0 22.17 22.17 0 0 1-22.17-22.17 22.17 22.17 0 0 1 22.17-22.17 22.17 22.17 0 0 1 .133.001"
            strokeWidth="6"
          />
        </g>
        <path strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" d="M56.2 56.2h19.891v19.891H56.2z" />
      </g>
    </svg>
  )
}

export default Logo
