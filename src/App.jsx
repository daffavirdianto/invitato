import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Desktop from './components/DesktopLeft'
import Button from './components/Button'

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="desktop-left">
          <Desktop />
        </div>
        <div className="desktop-right">

          <div className="page-1">
            <div className="cover">
              <div className="sub-title">
                <p>WEDDING ANNOUNCEMENT</p>
              </div>
              <div className="title">
                <h2>Tiffany & Jared</h2>
                <h3>#TImetoshaRE</h3>
              </div>
              <Button />
            </div>
          </div>

          <div id='page-2' className="page-2">
            <div className="cover">
              <div className="sub-title">
                <p>WEDDING ANNOUNCEMENT</p>
              </div>
              <div className="title">
                <h2>Tiffany & Jared</h2>
                <h3>#TImetoshaRE</h3>
              </div>
            </div>
          </div>

          <div id='page-3' className="page-3">
            <div className="opening">
              <div className="sub-title">
                <p>DEAR MR-MRS-MS,</p>
                <p>Family & Friends</p>
              </div>
              <div className="title">
                <h2>
                  Welcome to
                  <br />
                  Tiffany & Jared’s
                  <br />
                  Wedding Website
                </h2>
              </div>
              <div className="desc">
                <p>
                  Together with joyful hearts and the grace of God,
                  we joyfully announce the upcoming of our marriage.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;