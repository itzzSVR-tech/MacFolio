import dayjs from 'dayjs'

import { navIcons, navLinks } from '#constants'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className='font-bold'>SVR's Portfolio</p>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <p>{link.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map((icon) => (
                        <li key={icon.id}>
                            <img src={icon.img} className="icon-hover" alt={`icon-${icon.id}`} />
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format('ddd MMM D h:mm A')}.</time>
            </div>
        </nav>
    )
}

export default Navbar