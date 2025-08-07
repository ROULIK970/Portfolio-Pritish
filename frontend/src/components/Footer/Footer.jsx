import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#f4fafd] py-[40px] text-[14px] text-center">
      <div className="container">
        <div>
          <p>
            © <span>Copyright</span>{" "}
            <strong class="px-1 sitename">myPortfolio</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div>
          <p className="text-[#149ddd]">Designed by Pritish Bordoloi</p>
        </div>
      </div>
    </footer>
  ); 
}
