import React from 'react'
import FooterForm from './FooterForm';
import FooterTopLeft from './FooterTopLeft'

const FooterTop = () => {
    return (
        <div
            className="min-h-screen bg-center bg-cover bg-no-repeat gap-10
            px-5 py-12 sm:px-8 sm:py-16 lg:px-22 lg:pt-22 justify-between pb-4 flex flex-col
        "
            style={{ backgroundImage: "url('/images/footer.png')" }}
        >
            <div className='flex flex-col gap-10 lg:flex-col lg:items-start lg:justify-between'>
                <FooterTopLeft />
                <FooterForm />
            </div>

            <div className='mt-10 border-white/20 pt-5 text-center'>
                <p className='text-sm sm:text-lg text-white/60'>&copy; 2026 Designed & Developed by Srimanata</p>
            </div>

        </div>
    )
}

export default FooterTop