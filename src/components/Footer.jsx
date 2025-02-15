import React from 'react'
import { Facebook, Instagram, Linkedin, X } from '../icon/icon'

const Footer = () => {
    return (
        <div className='bg-black text-white p-10'>
            <footer className="footer text-base-content p-10 ">
                <div className="grid grid-cols-12 gap-4 mb-5">
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12'>
                        <h6 className="footer-title font-bold mb-5">Services</h6>
                        <a className="link link-hover">Branding</a><br />
                        <a className="link link-hover">Design</a><br />
                        <a className="link link-hover">Marketing</a><br />
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12'>
                        <h6 className="footer-title font-bold mb-5">Company</h6>
                        <a className="link link-hover">About us</a><br />
                        <a className="link link-hover">Contact</a><br />
                        <a className="link link-hover">Jobs</a><br />
                        {/* <a className="link link-hover">Press kit</a> */}
                    </div>
                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12'>
                        <h6 className="footer-title font-bold mb-5">Social</h6>
                        <div className="flex gap-4">
                            <a href='https://x.com/CareerNexusLtd'>
                                <X />
                            </a>
                            <a href='https://www.linkedin.com/company/career-nexus-ltd/'>
                                <Linkedin />
                            </a>
                            <a href='https://www.instagram.com/careernexus.ltd/'>
                               <Instagram />
                            </a>
                            <a href='#'>
                               <Facebook/>
                            </a>
                        </div>
                    </div>
                    <form className='lg:col-span-3 md:col-span-6 sm:col-span-12 col-span-12'>
                        <h6 className="footer-title font-bold mb-5">Newsletter</h6>
                        <div className="form-control">
                            <label className="label my-5">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="mt-4 flex w-2/5">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered py-3 rounded-tl rounded-bl w-36 text-black" />
                                <button className="bg-green-800 text-white p-3 rounded-tr rounded-br">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
                <hr />
                <div>
                    <p className="text-center text-sm mt-4">
                        Copyright &copy; {new Date().getFullYear()} Career Nexus. All rights reserved.
                    </p>
                    <div className='flex justify-center my-5'>
                        <div className=" flex gap-4">
                            <a href='#' className="link link-hover">Terms & Conditions</a><br />
                            <a href='#' className="link link-hover">Privacy Policy</a><br />
                            <a href='#' className="link link-hover">Help</a><br />
                            <a href='#' className="link link-hover">Contact Us</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer