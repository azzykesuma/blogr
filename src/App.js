import React,{useState} from 'react';
import './App.css';
import logo from './images/logo.svg'
import hamburger from './images/icon-hamburger.svg'
import mobile from './images/illustration-phones.svg'
import MobileTab from './component/MobileTab';
import arrow from './images/icon-arrow-dark.svg'
import arrowUp from './images/icon-arrow-light.svg'

function App() {
  const [clicked,setClicked] = useState(false)
  const [ClickProduct,setClickProduct] = useState(false)
  const [ClickCompany,setClickCompany] = useState(false)
  const [ClickConnect,setClickConnect] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleClickProduct = () => {
    setClickProduct(!ClickProduct)
  }

  const handleClickCompany = () => {
    setClickCompany(!ClickCompany)
  }

  const handleClickConnect = () => {
    setClickConnect(!ClickConnect)
  }

  return (
    <div className='MainContainer'>
      <div className='headerContainer'>
        <div className='header'>
          <div className='firstSection'>
            <img src={logo} alt='logo' />
            <img className='hamburger' src={hamburger} alt='hamburger' onClick={handleClick}/>
            
            {/* desktop Navigation Bar */}
            
            <div className='DesktopNav'>
              <ul>
              <div className='listItem'>
                <li>Product {ClickProduct  ? 
                <img src={arrow} alt='arrow-down' className='arrowDown' onClick={handleClickProduct}/> 
                :<img src={arrowUp} alt='arrow-up' onClick={handleClickProduct} />}</li>
                  {ClickProduct ? (
                    <div className='navBox'>
                      <ul>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Feature</li>
                        <li>Integrations</li>
                      </ul>
                    </div>
                  ) : null}
                </div>

                <div className='listItem'>
                <li>Company {ClickCompany  ? 
                <img src={arrow} alt='arrow-down' className='arrowDown' onClick={handleClickCompany}/> 
                :<img src={arrowUp} alt='arrow-up' onClick={handleClickCompany} />}</li>
                  {ClickCompany ? (
                    <div className='navBox'>
                      <ul>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Career</li>
                      </ul>
                    </div>
                  ) : null}
                </div>

                <div className='listItem'>
                <li>Connect {ClickConnect  ? 
                <img src={arrow} alt='arrow-down' className='arrowDown' onClick={handleClickConnect}/> 
                :<img src={arrowUp} alt='arrow-up' onClick={handleClickConnect} />}</li>
                  {ClickConnect ? (
                    <div className='navBox'>
                      <ul>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>Blog</li>
                        <li>LinkedIn</li>
                      </ul>
                    </div>
                  ) : null}
                </div>
              </ul>
            </div>
          </div>
          <div className='secondSection'>
              <button className='Login'>Login</button>
              <button className='SignUp'>Sign Up</button>
          </div>
        </div>
        {clicked ? <MobileTab /> : null}
        {
          clicked ? null : (
          <div className='heroTittle'>
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
          {
            clicked ? null : (
              <div className='buttonContainer'>
                <button className='primary'>Start for Free</button>
                <button className='regular'>Learn More</button>
              </div>
            )
          }
          
        </div>
          )
        }
      </div>
        {/* body section */}

      <div className='card'>
        <h2>Designed for the future</h2>
        <div className='middleCard'>
          <div className='imageCard'></div>
          <div className='cardDesc'>
            <h2>Introducing an extensible editor</h2>
            <p>
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
              change the looks of a blog.
            </p>
            <h2>Robust content management</h2>
            <p>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog 
              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
            </p>
          </div>
        </div>
      </div>

      <div className='middleSection'>
        {/* <img className='mobile' src={mobile} alt='mobile-phone' /> */}
        <div className='midBackground'>
          <img className='mobile' src={mobile} alt='mobile-phone' />
          <div className='midDesc'>
            <h1>State of the Art Infrastructure</h1>
              <p>
                With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
              </p>
          </div>
        </div>
      </div>
      
      <div className='cardBottom'>
        <div className='middleCardBottom'>
          <div className='imageCardBottom'></div>
          <div className='cardDesc'>
            <h2>Free, open, simple</h2>
            <p>
              Blogr is a free and open source application backed by a large community of helpful developers. It supports 
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
            </p>
            <h2>Powerful tooling</h2>
            <p>
                Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>

      <footer>
      <img src={logo} alt='logo' />

          <div className='footerCard'>
            <p>Product</p>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div className='footerCard'>
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className='footerCard'>
            <p>Connect</p>
            <ul>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>Blog</li>
              <li>LinkedIn</li>
            </ul>
          </div>

         
      </footer>
    </div>
  );
}

export default App;
