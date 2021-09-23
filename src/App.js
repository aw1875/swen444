import React, { Component } from 'react';
import Address from './forms/Address';
import Affiliation from './forms/Affiliation';
import ConfirmData from './forms/ConfirmData';
import Payment from './forms/Payment';

import Personal from './forms/Personal';
import Registering from './forms/Registering';

const originalStates = { page: 1, registerPanel: false, allowNext: false, user: {  firstName: '', lastName: '', emailAddress: '',  streetAddress: '', city: '', zipCode: '', state: '', country: '',  status: '',  cardNumber: '', expMonth: '', expYear: '', cvv: '' } }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      registerPanel: false,
      allowNext: false,
      user: {
        // Personal Information
        firstName: '',
        lastName: '',
        emailAddress: '',

        // Address Information
        streetAddress: '',
        city: '',
        zipCode: '',
        state: '',
        country: '',

        // School/Company Information
        status: '',

        // Payment Section
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvv: ''
      },
    }

    this.allowNext = this.allowNext.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getStep() {
    switch (this.state.page) {
      case 1:
        return <Personal formData={this.state.user} handleChange={this.handleChange} allowNext={this.allowNext} />

      case 2:
        return <Address formData={this.state.user} handleChange={this.handleChange} allowNext={this.allowNext} />

      case 3:
        return <Affiliation formData={this.state.user} handleChange={this.handleChange} allowNext={this.allowNext} />

      case 4:
        return <Payment formData={this.state.user} handleChange={this.handleChange} allowNext={this.allowNext} />

      case 5:
        return <ConfirmData formData={this.state.user} handleChange={this.handleChange} allowNext={this.allowNext} />

      case 6:
        return <Registering />
      default:
        break;
    }
  }

  allowNext(value) {
    if (this.state.allowNext !== value) {
      this.setState({
        allowNext: value
      })
    }
  }

  handleChange(e) {
    const { name, value } = e.target

    this.setState({
      user: { ...this.state.user, [name]: value }
    })
  }

  returnButton() {
    if (this.state.page === 1) {
      return <button className={this.state.allowNext !== false ? "bg-secondary hover:bg-hover absolute right-8 text-blue-50 rounded-lg py-2 px-4 transition duration-300" : "bg-gray-300 absolute right-8 text-blue-50 rounded-lg py-2 px-4 cursor-not-allowed	"} onClick={() => { if (this.state.allowNext !== false) { this.setState({ page: this.state.page + 1 }) } }}>
        <div className="flex">
          <p className="pr-1">Next</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    } else if (this.state.page === 2) {
      return <div>
        <button className={this.state.type !== '' ? "bg-secondary hover:bg-hover absolute left-8 text-blue-50 rounded-lg py-2 px-4 transition duration-300" : "bg-gray-300 absolute left-8 text-blue-50 rounded-lg py-2 px-4 cursor-not-allowed	"} onClick={() => { if (this.state.type !== '') { this.setState({ page: this.state.page - 1 }) } }}>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <p className="pr-1">Back</p>
          </div>
        </button>

        <button className={this.state.allowNext !== false ? "bg-secondary hover:bg-hover absolute right-8 text-blue-50 rounded-lg py-2 px-4 transition duration-300" : "bg-gray-300 absolute right-8 text-blue-50 rounded-lg py-2 px-4 cursor-not-allowed	"} onClick={() => { if (this.state.allowNext !== false) { this.setState({ page: this.state.page + 1 }) } }}>
          <div className="flex">
            <p className="pr-1">Next</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    } else if (this.state.page === 3) {
      return <div>
        <button className={this.state.type !== '' ? "bg-secondary hover:bg-hover absolute left-8 text-blue-50 rounded-lg py-2 px-4 transition duration-300" : "bg-gray-300 absolute left-8 text-blue-50 rounded-lg py-2 px-4 cursor-not-allowed	"} onClick={() => { if (this.state.type !== '') { this.setState({ page: this.state.page - 1 }) } }}>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <p className="pr-1">Back</p>
          </div>
        </button>

        <button className={this.state.allowNext !== false ? "bg-secondary hover:bg-hover absolute right-8 text-blue-50 rounded-lg py-2 px-4 transition duration-300" : "bg-gray-300 absolute right-8 text-blue-50 rounded-lg py-2 px-4 cursor-not-allowed	"} onClick={() => { if (this.state.allowNext !== false) { this.setState({ page: this.state.page + 1 }) } }}>
          <div className="flex">
            <p className="pr-1">Next</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    } else if (this.state.page === 4) {
      return <div>
        <button className={this.state.type !== '' ? "bg-secondary hover:bg-hover absolute left-8 text-blue-50 rounded-lg py-2 px-4 transition duration-300" : "bg-gray-300 absolute left-8 text-blue-50 rounded-lg py-2 px-4 cursor-not-allowed	"} onClick={() => { if (this.state.type !== '') { this.setState({ page: this.state.page - 1 }) } }}>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <p className="pr-1">Back</p>
          </div>
        </button>

        <button className={this.state.allowNext !== false ? "bg-secondary hover:bg-hover absolute right-8 text-blue-50 rounded-lg py-2 px-4 transition duration-300" : "bg-gray-300 absolute right-8 text-blue-50 rounded-lg py-2 px-4 cursor-not-allowed	"} onClick={() => { if (this.state.allowNext !== false) { this.setState({ page: this.state.page + 1 }) } }}>
          <div className="flex">
            <p className="pr-1">Next</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    } else if (this.state.page === 5) {
      return <div>
        <button className={this.state.type !== '' ? "bg-secondary hover:bg-hover absolute left-8 text-blue-50 rounded-lg py-2 px-4 transition duration-300" : "bg-gray-300 absolute left-8 text-blue-50 rounded-lg py-2 px-4 cursor-not-allowed	"} onClick={() => { if (this.state.type !== '') { this.setState({ page: this.state.page - 1, user: { ...this.state.user, cardNumber: "" } }) } }}>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <p className="pr-1">Back</p>
          </div>
        </button>

        <button className={this.state.type !== '' ? "bg-secondary hover:bg-hover absolute right-8 text-blue-50 rounded-lg py-2 px-4 transition duration-300" : "bg-gray-300 absolute right-8 text-blue-50 rounded-lg py-2 px-4 cursor-not-allowed	"} onClick={() => this.submitData()}>
          <div className="flex">
            <p className="pr-1">Register</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
        </button>
      </div>
    }
  }

  submitData() {
    this.setState({
      page: 6
    })
  }

  render() {
    return (
      <>
        <div
          className="w-full h-screen relative">

          {/* Hero Bar Section */}
          <div
            className="w-full h-screen flex items-center justify-center bg-no-repeat bg-cover bg-fixed bg-right bg-opacity-10"
            style={{ backgroundImage: "linear-gradient(rgba(7, 30, 61, 0.9), rgba(31, 66, 135, 0.9)), url('https://blog.parkinn.com/wp-content/uploads/sites/7/2014/04/Panorama-of-Toronto-skyline.jpg')" }}
          >
            <div className="text-center">
              <p className="text-xl font-medium tracking-wider text-gray-300">Toronto, Canada</p>
              <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">The SWEN 444 Conference</h2>

              <div className="flex justify-center mt-8">
                <a className="px-8 py-2 text-lg font-medium text-white transition duration-300 transform bg-secondary rounded hover:bg-hover"
                  href="#" onClick={() => this.setState({ registerPanel: true })}>Register</a>
              </div>
            </div>

            {/* Registration Form */}
            {this.state.registerPanel ?
              <div className="bg-gray-100 w-3/5 rounded-lg shadow-2xl absolute top-50 z-50">
                <span className="absolute right-2 top-2 cursor-pointer transition duration-300 hover:text-hover" onClick={() => { this.setState({ registerPanel: false }); this.setState( originalStates) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>

                {/* Form Header */}
                <header className="bg-gray-100 rounded-t-lg py-8 px-8 text-xl font-bold text-center">
                  <div className="flex">

                    {/* Personal Information */}
                    <div className="w-1/5">
                      <div className="relative mb-2">
                        <div className={this.state.page === 1 ? "w-10 h-10 mx-auto bg-secondary rounded-full text-lg text-white flex items-center" : "w-10 h-10 mx-auto bg-main rounded-full text-lg text-white flex items-center"}>
                          <span className="text-center text-white w-full">
                            <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-center md:text-base">Personal Information</div>
                    </div>

                    {/* Address */}
                    <div className="w-1/5">
                      <div className="relative mb-2">
                        <div className="absolute flex align-center items-center align-middle content-center" style={{ width: "calc(100% - 2.5rem - 1rem)", top: "50%", transform: "translate(-50%, -50%)" }}>
                          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                            <div className={this.state.page > 2 ? "w-0 bg-main py-1 rounded" : "w-0 bg-gradient-to-r from-main to-secondary py-1 rounded"} style={this.state.page < 2 ? { width: "0%" } : { width: "100%" }}></div>
                          </div>
                        </div>

                        <div className={this.state.page < 2 ? "w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center" : this.state.page > 2 ? "w-10 h-10 mx-auto bg-main border-2 border-gray-200 rounded-full text-lg text-white flex items-center" : "w-10 h-10 mx-auto bg-secondary border-2 border-gray-200 rounded-full text-lg text-white flex items-center"}>
                          <span className={this.state.page < 2 ? "text-center text-gray-600 w-full" : "text-center text-white w-full"}>
                            <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24" fill="currentColor">
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-center md:text-base">Address</div>
                    </div>

                    {/* Affilation */}
                    <div className="w-1/5">
                      <div className="relative mb-2">
                        <div className="absolute flex align-center items-center align-middle content-center" style={{ width: "calc(100% - 2.5rem - 1rem)", top: "50%", transform: "translate(-50%, -50%)" }}>
                          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                            <div className={this.state.page > 3 ? "w-0 bg-main py-1 rounded" : "w-0 bg-gradient-to-r from-main to-secondary py-1 rounded"} style={this.state.page < 3 ? { width: "0%" } : { width: "100%" }}></div>
                          </div>
                        </div>

                        <div className={this.state.page < 3 ? "w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center" : this.state.page > 3 ? "w-10 h-10 mx-auto bg-main border-2 border-gray-200 rounded-full text-lg text-white flex items-center" : "w-10 h-10 mx-auto bg-secondary border-2 border-gray-200 rounded-full text-lg text-white flex items-center"}>
                          <span className={this.state.page < 3 ? "text-center text-gray-600 w-full" : "text-center text-white w-full"}>
                            <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24" fill="currentColor">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-center md:text-base">Affilation</div>
                    </div>

                    {/* Payment Information */}
                    <div className="w-1/5">
                      <div className="relative mb-2">
                        <div className="absolute flex align-center items-center align-middle content-center" style={{ width: "calc(100% - 2.5rem - 1rem)", top: "50%", transform: "translate(-50%, -50%)" }}>
                          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                            <div className={this.state.page > 4 ? "w-0 bg-main py-1 rounded" : "w-0 bg-gradient-to-r from-main to-secondary py-1 rounded"} style={this.state.page < 4 ? { width: "0%" } : { width: "100%" }}></div>
                          </div>
                        </div>

                        <div className={this.state.page < 4 ? "w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center" : this.state.page > 4 ? "w-10 h-10 mx-auto bg-main border-2 border-gray-200 rounded-full text-lg text-white flex items-center" : "w-10 h-10 mx-auto bg-secondary border-2 border-gray-200 rounded-full text-lg text-white flex items-center"}>
                          <span className={this.state.page < 4 ? "text-center text-gray-600 w-full" : "text-center text-white w-full"}>
                            <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24" fill="currentColor">
                              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                              <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-center md:text-base">Payment Information</div>
                    </div>

                    {/* Submit Data */}
                    <div className="w-1/5">
                      <div className="relative mb-2">
                        <div className="absolute flex align-center items-center align-middle content-center" style={{ width: "calc(100% - 2.5rem - 1rem)", top: "50%", transform: "translate(-50%, -50%)" }}>
                          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                            <div className={this.state.page > 5 ? "w-0 bg-main py-1 rounded" : "w-0 bg-gradient-to-r from-main to-secondary py-1 rounded"} style={this.state.page < 5 ? { width: "0%" } : { width: "100%" }}></div>
                          </div>
                        </div>

                        <div className={this.state.page < 5 ? "w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center" : this.state.page > 5 ? "w-10 h-10 mx-auto bg-main border-2 border-gray-200 rounded-full text-lg text-white flex items-center" : "w-10 h-10 mx-auto bg-secondary border-2 border-gray-200 rounded-full text-lg text-white flex items-center"}>
                          <span className={this.state.page < 5 ? "text-center text-gray-600 w-full" : "text-center text-white w-full"}>
                            <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                              <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-center md:text-base">Confirm Data</div>
                    </div>
                  </div>
                </header>

                {/* Form Body */}
                <div className="px-8 pt-0 pb-8">
                  {this.getStep()}
                </div>

                {/* Form Footer */}
                <footer className="bg-gray-100 rounded-b-lg relative h-14 py-3 px-8 text-xs text-gray-500">
                  {this.returnButton()}
                </footer>
              </div>
              :
              null
            }
          </div>
        </div>

        {/* Page 2 */}
        <div
          className="w-full h-screen relative">

          {/* Hero Bar Section */}
          <div
            className="w-full h-screen flex items-center justify-center bg-background"
          >
            <div className="text-center">
              {/* <p className="text-xl font-medium tracking-wider text-gray-300">Toronto, Canada</p> */}
              <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">About Our Conference</h2>
              <div className="flex justify-center items-center">
                <div className="flex w-3/4 mt-12 text-white">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis enim at blanditiis, consequatur id necessitatibus fugiat, alias esse placeat molestias aut dolorum. Molestiae nisi ipsa modi possimus nihil similique assumenda ex laborum eaque porro sequi tenetur vero labore ducimus, ipsam cum quibusdam, odio dolor. Blanditiis facere velit aperiam accusantium eligendi distinctio? Rerum corrupti totam, omnis saepe excepturi autem dicta tempora laudantium quo quidem ab esse? Neque autem sed rerum molestias. Quia velit, eos reprehenderit corrupti adipisci nulla nihil in? Repudiandae, deleniti. Animi vel deserunt nulla voluptates quam! Velit eum libero, optio pariatur perspiciatis doloremque placeat at quis voluptate, dicta labore tenetur? Adipisci quibusdam ipsum facilis tenetur doloremque laboriosam aspernatur mollitia eos aliquid, libero quaerat modi nemo eligendi iure numquam quos fuga beatae in blanditiis voluptatibus veniam rerum voluptas ducimus earum! Necessitatibus ea amet itaque soluta nostrum perferendis? Consequatur, voluptates obcaecati itaque unde deleniti possimus error quia totam voluptatibus laborum ea.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 3 */}
        <div
          className="w-full h-screen relative">

          {/* Hero Bar Section */}
          <div
            className="w-full h-screen flex items-center justify-center bg-no-repeat bg-cover bg-fixed bg-right bg-opacity-10"
            style={{ backgroundImage: "linear-gradient(rgba(7, 30, 61, 0.9), rgba(31, 66, 135, 0.9)), url('https://www.streetwisereports.com/images/Toronto-pixabay-9-26-19-900.jpg')" }}
          >
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">Read Our Reviews</h2>
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-3/4 mt-12 text-white">
                  <p className="w-full mx-2">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aperiam."<br /><b> - Agáta Dzintra</b></p>
                  <p className="w-full mx-2">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, eligendi quia esse corporis repellendus vero minima quisquam dolorem harum ut itaque ad exercitationem asperiores dolor!"<br /><b> - Lucius Dafna</b></p>
                  <p className="w-full mx-2">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam explicabo neque iusto, aspernatur ut?"<br /><b> - Lyall Shapour</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;