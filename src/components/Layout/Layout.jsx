import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useTheme } from '../../context/ThemeContext';
import '../Layout/layout.css';

const Layout = (props) => {
  const { theme } = useTheme();

  return (
    <div className="content-wrapper" style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}>
      <Navbar />
      <main className="main-content">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
