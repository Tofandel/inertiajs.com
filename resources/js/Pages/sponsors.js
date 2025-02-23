import React from 'react'
import { H1, H2, Layout, P } from '@/Components'

const meta = {
  title: 'Sponsors',
  description:
    'We are so grateful for our sponsors! Thank you! If you use Inertia, please consider becoming one of our official sponsors.',
  twitterCardImage: 'https://inertiajs.com/previews/sponsors.png',
  links: [
    { url: '#become-a-sponsor', name: 'Become a sponsor' },
    { url: '#business-sponsors', name: 'Business sponsors' },
  ],
}

const Page = () => {
  return (
    <>
      <H1>Sponsors</H1>
      <H2 id="become-a-sponsor">
        <div className="flex items-center">
          Become a sponsor
          <svg className="ml-2 w-5 h-5 fill-current text-purple-500 flex-shrink-0" viewBox="0 0 20 20">
            <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
          </svg>
        </div>
      </H2>
      <div className="mt-6">
        <img className="w-32 h-32 ml-4 mb-4 rounded float-right" src="/img/jonathan.png" alt="Jonathan Reinink" />
        <P>
          Hi there! My name is Jonathan Reinink, and I am the creator of Inertia. I am really excited for the future of
          this project. Inertia is literally changing how people build classic server-driven web apps.
        </P>
        <P>
          That said, this is easily my most ambitious project to date and it still requires a ton of development. If you
          use Inertia, please consider becoming one of our official sponsors. By becoming a sponsor, you'll help ensure
          the future success of this project, and will also be given early access to new features.
        </P>
        <a
          className="mt-2 px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-full text-sm font-medium text-white inline-flex items-center"
          href="https://github.com/sponsors/reinink"
        >
          <svg className="fill-current w-5 h-5 mr-2" viewBox="0 0 20 20">
            <title>GitHub</title>
            <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0" />
          </svg>
          Become a sponsor now
        </a>
      </div>
      <div class="mb-2">
        <H2>Business sponsors</H2>
        <P>A huge thanks to our business sponsors, whose significant support helps push Inertia.js forward!</P>
        <div className="mt-8 p-8 shadow rounded relative overflow-hidden leading-none max-w-md">
          <div className="absolute top-0 right-0 px-4 py-2 bg-red-600 text-sm font-bold text-white rounded-bl">
            Partner
          </div>
          <a className="inline-flex" href="https://forge.laravel.com" title="Laravel Forge">
            <svg className="w-auto h-8" fill="#18b69b" viewBox="0 0 217.38 39.97">
              <path d="M77.94.32c4.13 0 6.03.74 7.2 2.22 1.68 2.22 2.64 6.66-.11 17.55S79.2 35.3 76.36 37.64c-1.9 1.48-4.23 2.22-8.36 2.22H54.8c-4.13 0-6.13-.74-7.2-2.22-1.68-2.22-2.63-6.66.22-17.55 2.75-10.9 5.92-15.23 8.78-17.55C58.49 1.06 60.8.32 64.94.32h13zM58.7 30.24c.21.32.74.42 2.43.42h5.08c1.69 0 2.32-.1 2.75-.42.52-.42 1.48-1.48 3.59-10.15 2.22-8.67 1.8-9.73 1.48-10.15-.21-.32-.74-.42-2.43-.42h-4.97c-1.7 0-2.33.1-2.75.42-.53.42-1.48 1.48-3.6 10.15-2.32 8.77-1.9 9.73-1.58 10.15zm51.28-3.17c-.42-.53-.85-.74-3.38-.74h-4.97c-.53 0-1.06.42-1.17.95L97.61 38.9c-.1.53-.64.95-1.16.95H86.19c-.53 0-.85-.42-.74-.95l9.4-37.64c.11-.53.64-.95 1.17-.95h24.1c3.92 0 6.03.53 7.2 2 1.27 1.8 1.69 3.7.32 9.2-1.8 7.4-4.55 9.52-9.3 10.47v.1c3.7.96 5.7 2.23 4.43 7.94-.74 3.27-1.27 6.55-1.58 8.77-.11.53-.64 1.06-1.17 1.06h-10.46c-.43 0-.85-.32-.74-.85.31-2.43.74-4.86 1.37-7.93.42-2.85.21-3.38-.21-4.01zm-.74-9.3c2.22 0 2.85-.11 3.28-.43.74-.53 1.26-1.48 1.8-3.8s.42-3.18 0-3.7c-.32-.32-.85-.43-3.07-.43h-5.5c-.53 0-1.06.42-1.16.95L103 16.92c-.1.53.21.95.74.95h5.5v-.1zM160.94 0c4.23 0 6.45.53 7.72 2 1.48 1.8 2 4.56.84 10.69-.1.53-.63.95-1.16.95h-9.83c-.53 0-.85-.42-.74-.85.42-2.43-.1-2.75-.43-3.17-.2-.32-.63-.42-2.43-.42h-5.07c-1.8 0-2.33.1-2.75.42-.64.53-1.8 2.33-3.7 10.36s-1.59 9.94-1.27 10.47c.21.32.74.42 2.54.42h5.39c1.59 0 2.22-.1 2.64-.42.53-.42 1.59-1.48 2.22-4.33l.1-.32h-7.6c-.53 0-.85-.43-.74-.95l1.48-6.35c.1-.53.63-.95 1.16-.95h18.3c.52 0 .84.42.73.95l-.95 3.91c-2.22 9.63-4.86 13-7.61 15.23-2.01 1.7-4.87 2.33-8.57 2.33H138c-4.13 0-6.14-.74-7.3-2.33-1.8-2.33-2.75-6.66-.1-17.66s5.7-15.43 8.56-17.65C141.06.74 143.39 0 147.51 0h13.43zm41.23 39.97h-31.6c-.54 0-.85-.43-.75-.96L178.7.95c.1-.53.64-.95 1.17-.95h36.79c.63 0 .95.63.53 1.27-1.59 2.54-7.72 7.93-14.6 7.93H189.8c-.52 0-1.05.42-1.16.95l-.95 4.23c-.1.53.21.95.74.95h17.23c.53 0 .85.42.74.95l-1.48 6.66c-.1.53-.63.95-1.16.95h-17.23c-.53 0-1.06.43-1.17.96l-1.16 4.86c-.1.53.21.95.74.95h19.35c.53 0 .84.42.74.95l-1.7 7.3c-.1.63-.63 1.06-1.16 1.06zM50.24.32H6.9c-.53 0-1.05.42-1.16.95l-1.06 3.8c-.1.43.1.75.43.96 1.69.53 10.78.74 9.4 5.81l-.31 1.38-3.7 13.85-.32 1.37c-1.37 5.08-6.24 5.29-8.25 5.82-.42.1-.74.52-.84.95L.02 39c-.1.53.21.96.74.96h17.66c.53 0 1.05-.43 1.16-.96l3.17-12.26c.1-.53.64-.95 1.16-.95h11.32c.53 0 1.06-.43 1.16-.95l1.7-6.56c.1-.53-.22-.95-.75-.95H26.03c-.53 0-.85-.42-.74-.95l1.59-5.92c.1-.53.63-.95 1.16-.95h17.02c.53 0 1.06-.43 1.16-.96l4.55-7.19c.21-.63 0-1.05-.53-1.05z" />
            </svg>
          </a>
          <div className="mt-4 text-sm leading-normal">
            Server management doesn't have to be a nightmare. Provision and deploy unlimited PHP applications on
            DigitalOcean, Linode, Vultr, Amazon and more.
          </div>
        </div>
        <div className="mt-8 p-8 shadow rounded relative overflow-hidden leading-none max-w-md">
          <div className="absolute top-0 right-0 px-4 py-2 bg-yellow-500 text-sm font-bold text-white rounded-bl">
            Business
          </div>
          <a className="inline-flex" href="https://ploi.io" title="Ploi">
            <svg className="w-auto h-8" fill="#1853db" viewBox="0 0 253 93.3">
              <path d="M25.7 66a11.4 11.4 0 01-9.5-4.7q-3.6-4.7-3.7-12.6T16.2 36a11.4 11.4 0 019.5-4.7 11.4 11.4 0 019.6 4.7Q39 40.7 39 48.7t-3.6 12.6a11.5 11.5 0 01-9.6 4.7zm3.8-45.1a18.9 18.9 0 00-10.2 2.7 18 18 0 00-6.7 7.5h-.3v-9.3H0v71.5h12.6V66.5h.3a17 17 0 006.6 7.2 19.4 19.4 0 0010.2 2.6q10.2 0 16.1-7.4t6-20.3q0-12.9-6-20.4T29.5 21zM59.2 75.5h12.6V2.5H59.2v73.1zM105.3 66.6a11.5 11.5 0 01-9.6-4.7Q92 57.2 92 48.7t3.6-13.3a12.1 12.1 0 0119.2 0q3.6 4.7 3.6 13.3t-3.6 13.2a11.5 11.5 0 01-9.6 4.7zm0 10q11.8 0 19-7.4t7-20.6q0-13-7.1-20.4t-19-7.5q-11.7 0-18.8 7.5t-7.1 20.4q0 13.2 7 20.6t19 7.4zM145 13.7a6.7 6.7 0 004.9-2 6.6 6.6 0 002-4.8 6.6 6.6 0 00-2-4.9 6.8 6.8 0 00-5-2 6.7 6.7 0 00-4.8 2 6.5 6.5 0 00-2 4.9 6.5 6.5 0 002 4.8 6.6 6.6 0 004.8 2zm-6.3 61.9h12.6V21.8h-12.7v53.8zM168.8 76a5.7 5.7 0 10-4.1-1.6 5.6 5.6 0 004 1.7zM191.5 13.4a5.3 5.3 0 004-1.6A5.3 5.3 0 00197 8a5.5 5.5 0 10-11 0 5.3 5.3 0 001.5 4 5.3 5.3 0 004 1.5zm-4.4 62.1h8.8V22.8H187v52.8zM228.6 68.7a13.8 13.8 0 01-11.2-5q-4.3-5.2-4.3-14.5t4.3-14.4a14.9 14.9 0 0122.4 0q4.2 5 4.2 14.4t-4.2 14.4a13.8 13.8 0 01-11.2 5.1zm0 7.8q10.9 0 17.6-7.4t6.8-20q0-12.5-6.8-19.9T228.7 22q-11 0-17.7 7.3t-6.7 20q0 12.6 6.7 20t17.7 7.3z" />
            </svg>
          </a>
          <div className="mt-4 text-sm leading-normal">
            Ploi makes deploying a piece of cake. Ploi takes all the difficult work out of your hands, so you can focus
            on doing what you love: developing your application.
          </div>
        </div>
        <div className="mt-8 p-8 shadow rounded relative overflow-hidden leading-none max-w-md">
          <div className="absolute top-0 right-0 px-4 py-2 bg-yellow-500 text-sm font-bold text-white rounded-bl">
            Business
          </div>
          <a className="inline-flex" href="https://www.activitysource.com" title="ActivitySource">
            <svg className="w-auto h-8" viewBox="0 0 209.6 30.1">
              <path d="M44.3 3.9h3.2l7 20.2H51L49.4 19h-7l-1.7 5.1h-3.4l7-20.2zm4.1 12.3l-2.5-8-2.6 8h5.1zM54 16.9c0-4 2.3-7.5 6.9-7.5 3.1 0 5.3 1.4 6.4 4.1l-2.7 1.1c-.8-1.6-1.9-2.6-3.7-2.6-2.5 0-3.7 2.1-3.7 4.9s1.2 4.9 3.7 4.9c1.8 0 2.9-.9 3.7-2.6l2.7 1.1c-1.1 2.7-3.3 4.1-6.4 4.1-4.6 0-6.9-3.5-6.9-7.5zM70.5 19.3v-7.1h-2.3V9.6h2.3v-4l3.1-1.9v5.9h3.9v2.7h-3.9v7.1c0 1.8.7 2.4 1.9 2.4.5 0 1-.1 1.5-.4l.7 2.5c-.8.4-1.6.5-2.4.5-2.9 0-4.8-1.6-4.8-5.1zM78.7 5.4c0-1.2.9-2.1 2.1-2.1 1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1c-1.2 0-2.1-.9-2.1-2.1zm.5 4.2h3.1v14.6h-3.1V9.6zM83.8 9.6h3.1l3.3 10.8 3.3-10.8h3.1l-4.9 14.6h-2.8L83.8 9.6zM97.5 5.4c0-1.2.9-2.1 2.1-2.1 1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1c-1.3 0-2.1-.9-2.1-2.1zm.5 4.2h3.1v14.6H98V9.6zM105.1 19.3v-7.1h-2.3V9.6h2.3v-4l3.1-1.9v5.9h3.9v2.7h-3.9v7.1c0 1.8.7 2.4 1.9 2.4.5 0 1-.1 1.5-.4l.7 2.5c-.8.4-1.6.5-2.4.5-2.9 0-4.8-1.6-4.8-5.1zM118.5 23.5l-5.3-13.9h3.1l3.7 9.9 3.4-9.9h3.1l-7.4 20.5h-2.9l2.3-6.6zM128 18.8l2.6-1.6c.6 2.3 1.8 4.2 4.2 4.2 1.6 0 2.9-.9 2.9-2.9s-2.2-2.9-4.6-4.1c-2.1-1-4-2.6-4-5.6s2.3-5.2 5.4-5.2c2.8 0 4.5 1.3 5.5 3.5l-2.6 1.7c-.6-1.7-1.7-2.2-2.9-2.2-1.3 0-2.3.9-2.3 2.1 0 1.9 2 2.8 4.1 3.7 2.5 1.1 4.6 2.6 4.6 5.9 0 3.7-2.6 6-6.2 6-3.5.1-6-2.4-6.7-5.5zM142.2 16.9c0-4.1 2.7-7.5 7.2-7.5s7.2 3.4 7.2 7.5-2.7 7.5-7.2 7.5-7.2-3.4-7.2-7.5zm11.3 0c0-2.6-1.4-4.9-4-4.9s-4 2.3-4 4.9 1.4 4.9 4 4.9 4-2.3 4-4.9zM158.3 19.9V9.6h3.1v9.5c0 1.8.9 2.7 2.3 2.7 2 0 3.8-2.2 3.8-6.2v-6h3v14.6h-3v-2.5c-1.1 1.7-2.7 2.8-4.7 2.8-2.7-.1-4.5-1.6-4.5-4.6zM172.5 9.6h3.1V12c1-1.7 2.5-2.7 4.3-2.7.7 0 1.3.1 1.9.3l-.6 2.8c-.5-.3-1-.4-1.7-.4-2.1 0-3.9 1.9-3.9 6.7V24h-3.1V9.6zM181.6 16.9c0-4 2.3-7.5 6.9-7.5 3.1 0 5.3 1.4 6.4 4.1l-2.7 1.1c-.8-1.7-1.9-2.6-3.7-2.6-2.5 0-3.7 2.1-3.7 4.9s1.2 4.9 3.7 4.9c1.8 0 2.9-.9 3.7-2.6l2.7 1.1c-1.1 2.7-3.3 4.1-6.4 4.1-4.6 0-6.9-3.5-6.9-7.5zM196.1 16.9c0-3.7 2.2-7.5 6.8-7.5 4.5 0 6.7 3.6 6.7 7.1v1.3h-10.3c.1 2.2 1.4 4.1 3.8 4.1 1.8 0 2.9-.8 3.8-2.5l2.5 1c-1.2 2.7-3.2 4.2-6.5 4.2-4.6-.2-6.8-4-6.8-7.7zm10.4-1.7c-.3-1.8-1.4-3.2-3.6-3.2-2 0-3.2 1.5-3.5 3.2h7.1z" />
              <path
                d="M14.5 0C6.5 0 0 6.3 0 14.1s6.5 14.1 14.5 14.1c3.8 0 7.4-1.4 10.1-4h-4.1c-1.8 1-3.9 1.6-6 1.6-6.7 0-12.1-5.2-12.1-11.7 0-6.4 5.4-11.7 12.1-11.7s12.1 5.2 12.1 11.7c0 .8-.1 1.6-.3 2.4-.1.6-.3 1.1-.4 1.3-.4 1-.8 1.1-1.1 1.1-.4 0-.6-.3-.7-.5l-.3-1s-.2-.5-.2-.8c-.4-1.3-1.5-2.2-2.8-2.3-1-.1-1.9.3-2.6 1.1-.2.2-.4.5-.6.8-.1.2-.2.4-.4.7l.1.1-.3.6c-.5 1.1-.9 1.3-1.2 1.2-.4 0-.6-.3-.7-.5l-.5-1.5-3.5-10.1H8.8L4.4 19.5H7l3-9.2 2.6 8.2v.1c.1.3.1.5.2.6.4 1.3 1.5 2.2 2.8 2.3 2 .1 3-1.4 3.5-2.6l.1-.2c.1-.2.2-.4.2-.5.5-1.1.9-1.3 1.2-1.3.4 0 .6.3.7.5l.3 1s.2.5.2.8c.4 1.3 1.5 2.2 2.8 2.3 2 .1 3-1.4 3.5-2.6l.3-.6c.3-.8.4-1.6.4-1.8.1-.8.2-1.6.2-2.4C29 6.3 22.5 0 14.5 0z"
                fill="#009648"
              />
            </svg>
          </a>
          <div className="mt-4 text-sm leading-normal">
            Fast-growing companies use ActivitySource to scale & manage direct, partner and channel sales revenue faster
            than ever before.
          </div>
        </div>
        <div className="mt-8 p-8 shadow rounded relative overflow-hidden leading-none max-w-md">
          <div className="absolute top-0 right-0 px-4 py-2 bg-yellow-500 text-sm font-bold text-white rounded-bl">
            Business
          </div>
          <a className="inline-flex" href="https://contestkit.com" title="ContestKit">
            <svg className="w-auto h-8" viewBox="0 0 244 132">
              <path
                fill="#1A202C"
                d="M.838 65.89c0 36.287 25.993 65.424 65.249 65.424 27.217 0 47.978-14.83 58.794-35.94L96.792 80.37c-5.233 12.04-15.702 20.762-30.881 20.762-20.236 0-34.02-15.876-34.02-35.242 0-19.714 14.132-35.591 34.369-35.591 13.959 0 24.076 7.153 29.834 18.493l26.693-16.922C111.447 13.027 90.686.466 66.087.466 28.577.466.838 28.729.838 65.89z"
              />
              <path
                fill="#1A202C"
                d="M204.306 2.131l-64.318 86.81v40.8h28.675V99.156l13.984-18.846 26.775 49.431h34.019v-.002l-40.597-76.653 37.805-50.955z"
              />
              <path fill="#E53E3E" d="M139.988 2.131v38.39l28.395-38.39z" />
            </svg>
          </a>
          <div className="mt-4 text-sm leading-normal">
            ContestKit makes running giveaways unbelievably easy. Get your giveaway set up within minutes. Fine tune
            your campaign using advanced features that let you control every aspect.
          </div>
        </div>
        <div className="mt-8 p-8 shadow rounded relative overflow-hidden leading-none max-w-md">
          <div className="absolute top-0 right-0 px-4 py-2 bg-yellow-500 text-sm font-bold text-white rounded-bl">
            Business
          </div>
          <a className="inline-flex" href="https://brook.io" title="Brook">
            <svg className="w-auto h-10" viewBox="0 0 216.01 66.49">
              <path
                fill="#fff"
                d="M11.59,25.68a16.8,16.8,0,0,0,3.57-1.11,10.32,10.32,0,0,0,2.3-1.49l0,0a1.54,1.54,0,0,1,2,0l0,0a12.7,12.7,0,0,0,2.12,1.49,8.49,8.49,0,0,0,4.26,1.19A7.8,7.8,0,0,0,30,24.57a11.72,11.72,0,0,0,2.13-1.49s0,0,.08,0a1.54,1.54,0,0,1,2,0,12,12,0,0,0,2.08,1.49,8.55,8.55,0,0,0,4.29,1.23,8.37,8.37,0,0,0,4.3-1.15,10.87,10.87,0,0,0,2.08-1.44l0,0a1.54,1.54,0,0,1,2,0l.08.08a10.94,10.94,0,0,0,2.3,1.45,13.7,13.7,0,0,0,3.61,1.06,2.1,2.1,0,0,0,2.43-1.57,2,2,0,0,0-1.7-2.26,9.68,9.68,0,0,1-2.51-.72,4.5,4.5,0,0,1-1.32-.81,5.09,5.09,0,0,1-.85-.89,2.49,2.49,0,0,0-.3-.38,3.62,3.62,0,0,0-2.72-1.36,3.38,3.38,0,0,0-2.64,1.32.93.93,0,0,1-.21.25,6.33,6.33,0,0,1-.93,1,11.44,11.44,0,0,1-1.41,1,4.23,4.23,0,0,1-2.12.63,4.55,4.55,0,0,1-2.17-.63,10.37,10.37,0,0,1-1.4-1,6.45,6.45,0,0,1-.94-1c-.08-.08-.13-.17-.21-.25a3.29,3.29,0,0,0-2.59-1.36A3.35,3.35,0,0,0,30.64,19c-.09.09-.17.21-.26.3a5.14,5.14,0,0,1-1,1,8.89,8.89,0,0,1-1.48,1.06,4.52,4.52,0,0,1-2,.6,4.42,4.42,0,0,1-2.09-.64,8.92,8.92,0,0,1-1.4-1,10.4,10.4,0,0,1-.94-1c-.08-.08-.17-.21-.25-.3a3.53,3.53,0,0,0-2.72-1.27,3.77,3.77,0,0,0-2.64,1.32,3.13,3.13,0,0,1-.38.42,7.25,7.25,0,0,1-.81.85,5.93,5.93,0,0,1-1.36.85,11.23,11.23,0,0,1-2.46.72,1.94,1.94,0,0,0-1.66,2.26A2.06,2.06,0,0,0,11.59,25.68Z"
              />
              <path
                fill="#fff"
                d="M55.64,33.42a9.67,9.67,0,0,1-2.51-.73,4.5,4.5,0,0,1-1.32-.81A5.09,5.09,0,0,1,51,31a2.49,2.49,0,0,0-.3-.38,3.62,3.62,0,0,0-2.72-1.36,3.38,3.38,0,0,0-2.64,1.32.93.93,0,0,1-.21.25,6.33,6.33,0,0,1-.93,1,11.44,11.44,0,0,1-1.41,1,4.25,4.25,0,0,1-2.12.64,4.57,4.57,0,0,1-2.17-.64,10.37,10.37,0,0,1-1.4-1,6.45,6.45,0,0,1-.94-1c-.08-.08-.13-.17-.21-.25a3.29,3.29,0,0,0-2.59-1.36,3.35,3.35,0,0,0-2.68,1.27c-.09.09-.17.21-.26.3a5.14,5.14,0,0,1-1,1,8.89,8.89,0,0,1-1.48,1.06,4.4,4.4,0,0,1-2,.6,4.31,4.31,0,0,1-2.09-.64,8.92,8.92,0,0,1-1.4-1,10.4,10.4,0,0,1-.94-1c-.08-.08-.17-.21-.25-.3a3.53,3.53,0,0,0-2.72-1.27,3.77,3.77,0,0,0-2.64,1.32,3.13,3.13,0,0,1-.38.42,7.25,7.25,0,0,1-.81.85,5.93,5.93,0,0,1-1.36.85,11.21,11.21,0,0,1-2.46.73,1.93,1.93,0,0,0-1.66,2.25,2.06,2.06,0,0,0,2.42,1.53,16.8,16.8,0,0,0,3.57-1.11,10.65,10.65,0,0,0,2.3-1.48l0,0a1.56,1.56,0,0,1,2,0l0,0a13.49,13.49,0,0,0,2.12,1.48,8.49,8.49,0,0,0,4.26,1.19A7.8,7.8,0,0,0,30,36.09a12.35,12.35,0,0,0,2.13-1.48s0,0,.08,0a1.56,1.56,0,0,1,2,0,11.46,11.46,0,0,0,2.08,1.49,8.55,8.55,0,0,0,4.29,1.23,8.46,8.46,0,0,0,4.3-1.14,10.78,10.78,0,0,0,2.08-1.45l0,0a1.54,1.54,0,0,1,2,0l.08.08a10.19,10.19,0,0,0,2.3,1.45,13.7,13.7,0,0,0,3.61,1.06,2.1,2.1,0,0,0,2.43-1.57A2,2,0,0,0,55.64,33.42Z"
              />
              <path
                fill="#fff"
                d="M55.64,45a9.68,9.68,0,0,1-2.51-.72,4.72,4.72,0,0,1-1.32-.81,5.9,5.9,0,0,1-.85-.89,2.55,2.55,0,0,0-.3-.39,3.62,3.62,0,0,0-2.72-1.36,3.41,3.41,0,0,0-2.64,1.32,1,1,0,0,1-.21.26,6.8,6.8,0,0,1-.93,1,10.41,10.41,0,0,1-1.41,1,4.15,4.15,0,0,1-2.12.64,4.46,4.46,0,0,1-2.17-.64,9.51,9.51,0,0,1-1.4-1,6.93,6.93,0,0,1-.94-1l-.21-.26a3.32,3.32,0,0,0-2.59-1.36,3.35,3.35,0,0,0-2.68,1.28c-.09.08-.17.21-.26.29a5.14,5.14,0,0,1-1,1,8.82,8.82,0,0,1-1.48,1.07,4.5,4.5,0,0,1-2,.59,4.31,4.31,0,0,1-2.09-.64,8.92,8.92,0,0,1-1.4-1,11.79,11.79,0,0,1-.94-1c-.08-.09-.17-.22-.25-.3a3.53,3.53,0,0,0-2.72-1.28,3.81,3.81,0,0,0-2.64,1.32,3.23,3.23,0,0,1-.38.43,9.26,9.26,0,0,1-.81.85,6.29,6.29,0,0,1-1.36.85,11.8,11.8,0,0,1-2.46.72,1.93,1.93,0,0,0-1.66,2.25,2.05,2.05,0,0,0,2.42,1.53,16.25,16.25,0,0,0,3.57-1.1,11.08,11.08,0,0,0,2.3-1.49l0,0a1.54,1.54,0,0,1,2,0l0,0a14,14,0,0,0,2.12,1.49,8.49,8.49,0,0,0,4.26,1.19A8.72,8.72,0,0,0,30,47.66a12.25,12.25,0,0,0,2.13-1.49s0,0,.08,0a1.54,1.54,0,0,1,2,0,12.11,12.11,0,0,0,2.08,1.48,8.56,8.56,0,0,0,4.29,1.24,8.47,8.47,0,0,0,4.3-1.15,10.34,10.34,0,0,0,2.08-1.45l0,0a1.54,1.54,0,0,1,2,0l.08.09a10.52,10.52,0,0,0,2.3,1.44,14.08,14.08,0,0,0,3.61,1.07,2.1,2.1,0,0,0,2.43-1.58A2,2,0,0,0,55.64,45Z"
              />
              <path
                fill="#3981c4"
                d="M33.25,0A33.25,33.25,0,1,0,66.49,33.25,33.24,33.24,0,0,0,33.25,0ZM57.34,47.23a2.1,2.1,0,0,1-2.43,1.58,14.08,14.08,0,0,1-3.61-1.07A10.52,10.52,0,0,1,49,46.3l-.08-.09a1.54,1.54,0,0,0-2,0l0,0a10.34,10.34,0,0,1-2.08,1.45,8.47,8.47,0,0,1-4.3,1.15,8.56,8.56,0,0,1-4.29-1.24,12.11,12.11,0,0,1-2.08-1.48,1.54,1.54,0,0,0-2,0s0,0-.08,0A12.25,12.25,0,0,1,30,47.66a8.72,8.72,0,0,1-4.12,1.19,8.49,8.49,0,0,1-4.26-1.19,14,14,0,0,1-2.12-1.49l0,0a1.54,1.54,0,0,0-2,0l0,0a11.08,11.08,0,0,1-2.3,1.49,16.25,16.25,0,0,1-3.57,1.1,2.05,2.05,0,0,1-2.42-1.53A1.93,1.93,0,0,1,10.83,45a11.8,11.8,0,0,0,2.46-.72,6.29,6.29,0,0,0,1.36-.85,9.26,9.26,0,0,0,.81-.85,3.23,3.23,0,0,0,.38-.43,3.81,3.81,0,0,1,2.64-1.32,3.53,3.53,0,0,1,2.72,1.28c.08.08.17.21.25.3a11.79,11.79,0,0,0,.94,1,8.92,8.92,0,0,0,1.4,1,4.31,4.31,0,0,0,2.09.64,4.5,4.5,0,0,0,2-.59,8.82,8.82,0,0,0,1.48-1.07,5.14,5.14,0,0,0,1-1c.09-.08.17-.21.26-.29a3.35,3.35,0,0,1,2.68-1.28,3.32,3.32,0,0,1,2.59,1.36l.21.26a6.93,6.93,0,0,0,.94,1,9.51,9.51,0,0,0,1.4,1,4.46,4.46,0,0,0,2.17.64,4.15,4.15,0,0,0,2.12-.64,10.41,10.41,0,0,0,1.41-1,6.8,6.8,0,0,0,.93-1,1,1,0,0,0,.21-.26,3.41,3.41,0,0,1,2.64-1.32,3.62,3.62,0,0,1,2.72,1.36,2.55,2.55,0,0,1,.3.39,5.9,5.9,0,0,0,.85.89,4.72,4.72,0,0,0,1.32.81,9.68,9.68,0,0,0,2.51.72A2,2,0,0,1,57.34,47.23Zm0-11.56a2.1,2.1,0,0,1-2.43,1.57,13.7,13.7,0,0,1-3.61-1.06A10.19,10.19,0,0,1,49,34.73l-.08-.08a1.54,1.54,0,0,0-2,0l0,0a10.78,10.78,0,0,1-2.08,1.45,8.46,8.46,0,0,1-4.3,1.14,8.55,8.55,0,0,1-4.29-1.23,11.46,11.46,0,0,1-2.08-1.49,1.56,1.56,0,0,0-2,0s0,0-.08,0A12.35,12.35,0,0,1,30,36.09a7.8,7.8,0,0,1-4.12,1.19,8.49,8.49,0,0,1-4.26-1.19,13.49,13.49,0,0,1-2.12-1.48l0,0a1.56,1.56,0,0,0-2,0l0,0a10.65,10.65,0,0,1-2.3,1.48,16.8,16.8,0,0,1-3.57,1.11,2.06,2.06,0,0,1-2.42-1.53,1.93,1.93,0,0,1,1.66-2.25,11.21,11.21,0,0,0,2.46-.73,5.93,5.93,0,0,0,1.36-.85,7.25,7.25,0,0,0,.81-.85,3.13,3.13,0,0,0,.38-.42,3.77,3.77,0,0,1,2.64-1.32,3.53,3.53,0,0,1,2.72,1.27c.08.09.17.22.25.3a10.4,10.4,0,0,0,.94,1,8.92,8.92,0,0,0,1.4,1,4.31,4.31,0,0,0,2.09.64,4.4,4.4,0,0,0,2-.6A8.89,8.89,0,0,0,29.4,31.8a5.14,5.14,0,0,0,1-1c.09-.09.17-.21.26-.3a3.35,3.35,0,0,1,2.68-1.27,3.29,3.29,0,0,1,2.59,1.36c.08.08.13.17.21.25a6.45,6.45,0,0,0,.94,1,10.37,10.37,0,0,0,1.4,1,4.57,4.57,0,0,0,2.17.64,4.25,4.25,0,0,0,2.12-.64,11.44,11.44,0,0,0,1.41-1,6.33,6.33,0,0,0,.93-1,.93.93,0,0,0,.21-.25,3.38,3.38,0,0,1,2.64-1.32,3.62,3.62,0,0,1,2.72,1.36A2.49,2.49,0,0,1,51,31a5.09,5.09,0,0,0,.85.89,4.5,4.5,0,0,0,1.32.81,9.67,9.67,0,0,0,2.51.73A2,2,0,0,1,57.34,35.67Zm0-11.52a2.1,2.1,0,0,1-2.43,1.57,14.08,14.08,0,0,1-3.61-1.06A10.94,10.94,0,0,1,49,23.21l-.08-.08a1.54,1.54,0,0,0-2,0l0,0a10.87,10.87,0,0,1-2.08,1.44,8.37,8.37,0,0,1-4.3,1.15,8.55,8.55,0,0,1-4.29-1.23A12,12,0,0,1,34.17,23a1.54,1.54,0,0,0-2,0s0,0-.08,0A11.72,11.72,0,0,1,30,24.57a7.8,7.8,0,0,1-4.12,1.19,8.49,8.49,0,0,1-4.26-1.19,12.7,12.7,0,0,1-2.12-1.49l0,0a1.54,1.54,0,0,0-2,0l0,0a10.32,10.32,0,0,1-2.3,1.49,16.8,16.8,0,0,1-3.57,1.11,2.06,2.06,0,0,1-2.42-1.53,1.94,1.94,0,0,1,1.66-2.26,11.23,11.23,0,0,0,2.46-.72,5.93,5.93,0,0,0,1.36-.85,7.25,7.25,0,0,0,.81-.85,3.13,3.13,0,0,0,.38-.42,3.77,3.77,0,0,1,2.64-1.32A3.5,3.5,0,0,1,21.2,19c.08.09.17.22.25.3a10.4,10.4,0,0,0,.94,1,8.92,8.92,0,0,0,1.4,1,4.42,4.42,0,0,0,2.09.64,4.52,4.52,0,0,0,2-.6,8.89,8.89,0,0,0,1.48-1.06,5.14,5.14,0,0,0,1-1c.09-.09.17-.21.26-.3a3.38,3.38,0,0,1,2.68-1.28,3.32,3.32,0,0,1,2.59,1.37c.08.08.13.17.21.25a6.45,6.45,0,0,0,.94,1,10.37,10.37,0,0,0,1.4,1,4.55,4.55,0,0,0,2.17.63,4.23,4.23,0,0,0,2.12-.63,11.44,11.44,0,0,0,1.41-1,6.33,6.33,0,0,0,.93-1,.93.93,0,0,0,.21-.25,3.38,3.38,0,0,1,2.64-1.32,3.62,3.62,0,0,1,2.72,1.36,2.49,2.49,0,0,1,.3.38,5.09,5.09,0,0,0,.85.89,4.5,4.5,0,0,0,1.32.81,9.68,9.68,0,0,0,2.51.72A2,2,0,0,1,57.34,24.15Z"
              />
              <path
                fill="#3981c4"
                d="M94.22,26.35c-3.27,0-6.87,1.33-8.64,4.1V12.94H79.15v40h6.43V49.4c1.77,2.77,5.48,4.15,8.59,4.15,6.81,0,12.74-5.37,12.74-13.63S101,26.35,94.22,26.35Zm-1,21.22a7.62,7.62,0,0,1,0-15.24,7.35,7.35,0,0,1,7.31,7.54A7.5,7.5,0,0,1,93.17,47.57Z"
              />
              <path
                fill="#3981c4"
                d="M117.43,32.55V27H111V52.89h6.48v-9c0-7.26,2.33-11.47,6.54-11.47a8.06,8.06,0,0,1,3.77.94l1.27-6.1a9.51,9.51,0,0,0-4.21-.88C121.64,26.35,118.81,28.23,117.43,32.55Z"
              />
              <path
                fill="#3981c4"
                d="M143,26.35c-7.37,0-13.74,5.37-13.74,13.57A13.4,13.4,0,0,0,143,53.55c7.37,0,13.79-5.43,13.79-13.63S150.32,26.35,143,26.35Zm0,21.22a7.28,7.28,0,0,1-7.26-7.65,7.29,7.29,0,1,1,14.57,0A7.32,7.32,0,0,1,143,47.57Z"
              />
              <path
                fill="#3981c4"
                d="M173.22,26.35c-7.37,0-13.74,5.37-13.74,13.57a13.4,13.4,0,0,0,13.74,13.63c7.37,0,13.8-5.43,13.8-13.63S180.59,26.35,173.22,26.35Zm0,21.22A7.28,7.28,0,0,1,166,39.92a7.29,7.29,0,1,1,14.57,0A7.32,7.32,0,0,1,173.22,47.57Z"
              />
              <polygon
                fill="#3981c4"
                points="203.05 38.31 213.58 27.01 205.21 27.01 197.79 35.27 197.79 12.94 191.36 12.94 191.36 52.89 197.79 52.89 197.79 41.14 207.87 52.89 216.01 52.89 203.05 38.31"
              />
            </svg>
          </a>
          <div className="mt-4 text-sm leading-normal">
            Visually design and code Vue apps solo or with your team. Includes realtime designer/developer
            collaboration, pair programming, and a Tailwind based design system.
          </div>
        </div>
        <div className="mt-8 p-8 shadow rounded relative overflow-hidden leading-none max-w-md">
          <div className="absolute top-0 right-0 px-4 py-2 bg-yellow-500 text-sm font-bold text-white rounded-bl">
            Business
          </div>
          <a className="inline-flex" href="https://laracasts.com" title="Laracasts">
            <svg className="w-auto h-6" viewBox="0 0 157 18">
              <path
                fill="#4A4A4A"
                d="M0 2.694h3.406V14.65h7.38v2.778H0V2.694zM26.024 14.27H19.19l-1.303 3.157h-3.49l6.56-14.734h3.364l6.581 14.734h-3.574l-1.304-3.157zm-1.072-2.59l-2.334-5.64-2.334 5.64h4.668zm20.368 5.747l-2.839-4.105h-3.133v4.105h-3.406V2.694h6.37c1.305 0 2.437.217 3.397.652.96.435 1.7 1.053 2.218 1.853.519.8.778 1.747.778 2.841 0 1.095-.263 2.038-.788 2.831-.526.793-1.273 1.4-2.24 1.821l3.301 4.736H45.32zm-.063-9.388c0-.828-.267-1.463-.8-1.905-.532-.442-1.31-.663-2.333-.663h-2.776v5.136h2.776c1.023 0 1.801-.224 2.334-.673.532-.45.799-1.081.799-1.895zm19.337 6.23h-6.833l-1.304 3.158h-3.49l6.56-14.734h3.364l6.582 14.734h-3.575l-1.304-3.157zm-1.072-2.588L61.188 6.04l-2.334 5.642h4.668zm17.824 5.999c-1.5 0-2.857-.327-4.07-.98a7.3 7.3 0 0 1-2.859-2.715c-.694-1.157-1.04-2.466-1.04-3.925 0-1.46.346-2.768 1.04-3.926a7.3 7.3 0 0 1 2.86-2.715c1.212-.653 2.576-.979 4.09-.979 1.275 0 2.428.225 3.459.674a6.929 6.929 0 0 1 2.596 1.936l-2.186 2.02c-.996-1.15-2.23-1.725-3.701-1.725-.911 0-1.724.2-2.44.6-.714.4-1.271.957-1.67 1.673-.4.716-.6 1.53-.6 2.442 0 .912.2 1.726.6 2.442.399.715.956 1.273 1.67 1.673.716.4 1.529.6 2.44.6 1.472 0 2.705-.583 3.7-1.747l2.187 2.02a6.817 6.817 0 0 1-2.607 1.958c-1.037.45-2.194.674-3.47.674zm36.026 0a12.03 12.03 0 0 1-3.375-.474c-1.087-.316-1.96-.726-2.618-1.231l1.156-2.568c.631.463 1.381.835 2.25 1.115.87.28 1.738.421 2.608.421.967 0 1.682-.144 2.144-.431.463-.288.694-.67.694-1.147 0-.351-.137-.642-.41-.874-.273-.232-.624-.417-1.051-.558a20.91 20.91 0 0 0-1.735-.463c-1.121-.266-2.04-.533-2.754-.8a4.475 4.475 0 0 1-1.84-1.284c-.512-.59-.768-1.375-.768-2.357 0-.856.232-1.632.694-2.326.463-.695 1.16-1.246 2.092-1.653.933-.406 2.071-.61 3.417-.61.94 0 1.858.112 2.755.337.897.224 1.682.547 2.355.968l-1.052 2.59c-1.36-.773-2.72-1.159-4.079-1.159-.953 0-1.657.155-2.113.464-.456.308-.683.715-.683 1.22 0 .506.262.88.788 1.127.526.245 1.328.487 2.408.726 1.121.266 2.04.533 2.754.8a4.561 4.561 0 0 1 1.84 1.263c.512.575.767 1.354.767 2.336 0 .842-.234 1.61-.704 2.305-.47.694-1.174 1.245-2.113 1.652-.94.407-2.082.61-3.427.61zm14.922-12.209h-4.71V2.694h12.826v2.778h-4.71v11.956h-3.406V5.472zm18.18 12.209a12.03 12.03 0 0 1-3.374-.474c-1.086-.316-1.96-.726-2.618-1.231l1.157-2.568c.63.463 1.38.835 2.25 1.115.869.28 1.738.421 2.607.421.967 0 1.682-.144 2.144-.431.463-.288.694-.67.694-1.147 0-.351-.136-.642-.41-.874-.273-.232-.623-.417-1.051-.558a20.91 20.91 0 0 0-1.735-.463c-1.121-.266-2.04-.533-2.754-.8a4.475 4.475 0 0 1-1.84-1.284c-.512-.59-.768-1.375-.768-2.357 0-.856.232-1.632.694-2.326.463-.695 1.16-1.246 2.092-1.653.933-.406 2.072-.61 3.417-.61.94 0 1.858.112 2.755.337.897.224 1.682.547 2.355.968l-1.051 2.59c-1.36-.773-2.72-1.159-4.08-1.159-.953 0-1.657.155-2.113.464-.455.308-.683.715-.683 1.22 0 .506.263.88.788 1.127.526.245 1.328.487 2.408.726 1.121.266 2.04.533 2.754.8a4.561 4.561 0 0 1 1.84 1.263c.512.575.768 1.354.768 2.336 0 .842-.235 1.61-.705 2.305-.47.694-1.174 1.245-2.113 1.652-.94.407-2.082.61-3.427.61z"
              />
              <g fill="#4A4A4A">
                <path d="M94.06 4.688l2.4 2.401a1.266 1.266 0 1 1-1.79 1.79l-2.401-2.4a1.266 1.266 0 1 1 1.79-1.79zM99.191 9.82l5.143 5.143a1.266 1.266 0 1 1-1.79 1.79L97.4 11.612a1.266 1.266 0 1 1 1.79-1.79z" />
                <path d="M92.843 4.363l13.816-3.59a1.303 1.303 0 0 1 1.583.915 1.264 1.264 0 0 1-.9 1.56L93.525 6.836a1.303 1.303 0 0 1-1.583-.914 1.264 1.264 0 0 1 .9-1.56z" />
                <path d="M102.193 15.504l3.59-13.816a1.264 1.264 0 0 1 1.559-.9c.686.189 1.093.894.914 1.582l-3.59 13.817a1.264 1.264 0 0 1-1.56.9 1.303 1.303 0 0 1-.913-1.583z" />
              </g>
              <path
                fill="#53B5FF"
                d="M101.718 9.147l-4.99 4.991a1.289 1.289 0 0 1-1.822-1.822l4.99-4.991a1.289 1.289 0 1 1 1.822 1.822zM94.288 16.578l-.75.75a1.289 1.289 0 0 1-1.822-1.822l.75-.75a1.289 1.289 0 1 1 1.822 1.822z"
              />
            </svg>
          </a>
          <div className="mt-4 text-sm leading-normal">
            Push your web development skills to the next level, through expert screencasts on Laravel, Vue, and so much
            more.
          </div>
        </div>
      </div>
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page
