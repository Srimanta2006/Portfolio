import React from 'react'
import FooterForm from './FooterForm';
import FooterTopLeft from './FooterTopLeft'

const FooterTop = () => {
    return (
        <section
            aria-label="Footer"
            itemScope
            itemType="https://schema.org/WPFooter"
            className="min-h-screen bg-center bg-cover bg-no-repeat gap-10
            px-5 py-12 sm:px-8 sm:py-16 lg:px-22 lg:pt-22 justify-between pb-4 flex flex-col
        "
            style={{ backgroundImage: "url('/images/footer.png')" }}
        >
            <h2 className="sr-only">Footer information</h2>

            <div className='footer-container flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
                <FooterTopLeft />
                <FooterForm />
            </div>

            <div className='mt-10 border-white/20 pt-5 text-center'>
                <p className='text-sm sm:text-lg text-white/60' itemProp="copyrightNotice">&copy; 2026 Designed & Developed by Srimanata</p>
            </div>

        </section>
    )
}

export default FooterTop