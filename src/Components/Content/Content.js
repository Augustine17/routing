import React from 'react'
import './Content.css'

export const Content = () => {
  return (
    <section className="content">
            <div className="content-container">
                <div className="content-img-container">
                    <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="image-house" />
                </div>
                <div className="content-text-container">
                    <span></span>
                    <div className="content-text">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                        <a href="/">Get in Touch</a>
                    </div>
                </div>
            </div>
        </section>
  )
}