import React, {useEffect, useState} from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import './layout.css'

const Layout = ({children}) => {
    
    const [withSidebar, setWithSidebar] = useState(false);
    const [isFeign, setIsFeign] = useState(false);
    const [isNeubBuntu, setIsNeubBuntu] = useState(true);

  
  useEffect(() => {

      toggleWithSidebar();


    window.addEventListener("resize", toggleWithSidebar);

    return () => {
      window.removeEventListener("resize", toggleWithSidebar);
    };
  }, []);

  const toggleWithSidebar = ()=>{
    const screenWidth = window.innerWidth;

      if (screenWidth > 1200) {
        setWithSidebar(false);
        setIsFeign(false)
        setIsNeubBuntu(true)
      } else {
        setWithSidebar(true);
        // setIsFeign(true)
        setIsNeubBuntu(false)
      }
  }



  const toggleFeignClass = ()=>{
    console.log("click enregistré !")
    if(withSidebar){
      setIsFeign(!isFeign)
    }
  }


  

    return (
        <div  className="mainWrapper">
            <Sidebar withSidebar={withSidebar} isFeign={isFeign} toggleFeignClass={toggleFeignClass}/>
            <div className="bodyWrapper">
                <Header toggleFeignClass={toggleFeignClass} isNeubBuntu={isNeubBuntu}/>

                <Content>
                    {children}
                </Content>
            </div>
        </div>
    );
}

export default Layout;
