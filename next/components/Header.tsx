import Link from 'next/link'

const Header = () => {
  return (
    <header className="border-b border-black ">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-5">
        <div>
          <Link href="/">
            <img
              className="w-44 cursor-pointer object-cover"
              src="https://i.imgur.com/VTl3Nrp.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-5">
            <li className="cursor-pointer">Our story</li>
            <li className="cursor-pointer">Membership</li>
            <li className="cursor-pointer">Write</li>
            <li className="cursor-pointer">Sign In</li>
            <li className="cursor-pointer rounded-3xl bg-green-600 px-4 py-1 text-white">
              Get started
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
