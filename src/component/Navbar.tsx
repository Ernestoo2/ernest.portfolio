import { FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-2 '>
      <div className='flex items-center flex-shrink-0'>
        <h1 className='text-5xl font-artistic'>Eze Ernest</h1> 
      </div>
      <div className='flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/ernestoo2/" title="linkedin"><FaLinkedin /></a>
        <a href="http://github.com/Ernestoo2" title="github"><FaGithub /></a>
        <a href="https://www.instagram.com/ernestezeoo2/" title="instagram"><FaInstagram /></a>
        <a href="https://x.com/EzeCErnest?t=FzBoXcsXLEl-1dNflLSN8A&s=09" title="twitter"><FaSquareXTwitter /></a>
      </div>
    </nav>
  )
}

export default Navbar