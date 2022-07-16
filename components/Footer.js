import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-sm text-gray-400">
        <p>Copyright &copy; {new Date().getFullYear()} Zokir Rakhimov</p>
      </footer>
    );
  }
}

export default Footer;
