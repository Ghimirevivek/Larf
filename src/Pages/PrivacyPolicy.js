import React from 'react'
import UnderConstruction from '../Components/UnderConstruction'
import NavBar from '../Components/HomePageComponents/NavBar'
import Footer from '../Components/HomePageComponents/Footer'

function PrivacyPolicy() {
  return (
    <div className="bg-[#f7f7fe]">
      <UnderConstruction />
      <NavBar />
      <div className='bg-blu-300 h-[35vh] flex flex-col mt-5 justify-center space-y-5 pl-[8vw] border-y-2 border-solid border-[#ebebf0]'>
        <div className='flex justify-between w-[90%]'>
          <p className='text-sm font-semibold text-[#282c3f]'>Legal Rights</p>
          <a href='/legalRightsPDF/privacy-policy.pdf' target='_blank' className='text-sm font-light flex items-center gap-2 text-white bg-green-500 py-3 px-3 rounded-lg'>
            Download PDF <img className="h-[20px] w-[20px]" src="/legalRightsPDF/download.png" alt="download" />
          </a>
        </div>
        <h1 className='text-5xl font-extrabold text-[#282c3f] capitalize'>Privacy Policy</h1>
      </div>
      <div className='w-[90%] pl-[8vw] py-16'>
        <h1 className="text-base font-bold leading-6 text-[#555770] mt-5">Privacy Policy for LargestAgroResearchFoundation [LARF] Pvt Ltd</h1>

        <p className="text-sm font-light leading-6 text-[#555770]">This is the Privacy Policy for LARF Pvt Ltd, accessible from https://largestagroresearch.org</p> <br /><br />

        <p className="text-sm font-light leading-6 text-[#555770]"><strong className='text-base font-semibold'>Data Collection</strong>: <br />

          
          We may collect the following types of data from users:
          <br /><br />

          <strong className='text-base font-semibold'>Personal Information</strong>: <br />

          This may include names, email addresses, and other contact
          details.
          <br />



          <strong className='text-base font-semibold'>Location Data</strong>: <br />

          We may collect location data for analytics and customization
          purposes. <br /> <br />

          <p className="text-sm font-light leading-6 text-[#555770]"><strong className='text-base font-semibold'>Data Usage:</strong>: <br />

            We collect and use data for the following purposes:<br /><br />
            <strong className='text-base font-semibold'>User Registration: </strong>: <br />

            To provide access to specific areas of our website.
            <br />
            <strong className='text-base font-semibold'>Newsletter Subscriptions</strong>: <br />

            This may include names, email addresses, and other contact
            details.
            <br />
            <strong className='text-base font-semibold'>Analytics</strong>: <br />

            To understand user behavior and improve our services.<br />
            We do not share user data with third parties without explicit consent.

            <br />
            <br />

            <strong className='text-base font-semibold'>Cookies and Tracking</strong>: <br />

            We use cookies and similar technologies to enhance user experience, analyze website
            performance, and track user interactions on our site.

            <br />
            <br />
            <strong className='text-base font-semibold'>Data Security</strong>: <br />

            We implement security measures to protect user data from unauthorized access or
            breaches.


            <br />
            <br />
            <strong className='text-base font-semibold'>User Rights</strong>: <br />

            Users have the right to access, update, or delete their personal information. To
            exercise these rights, please contact us at info@snsilos.in.


            <br />
            <br />
            <strong className='text-base font-semibold'>Third-Party Links</strong>: <br />

            Our website may contain links to third-party websites or services. This privacy
            policy does not cover those external sites, and users should refer to the privacy
            policies of those sites.


            <br />
            <br />
            <strong className='text-base font-semibold'>Compliance with Laws</strong>: <br />

            We are committed to complying with applicable data protection laws and regulations.

            <br />
            <br />
            <strong className='text-base font-semibold'>Policy Updates</strong>: <br />

            This privacy policy may be updated from time to time. Users will be notified of
            such updates on our website.
            <br />
            <br />
          </p>


        </p>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy