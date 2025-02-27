import React from 'react';

const ContactForm = () => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-white text-2xl mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label className="text-white" htmlFor="name">Name:</label>
          <input type="text" id="name" className="w-full p-2 rounded" />
        </div>
        <div className="mb-4">
          <label className="text-white" htmlFor="email">Email:</label>
          <input type="email" id="email" className="w-full p-2 rounded" />
        </div>
        <div className="mb-4">
          <label className="text-white" htmlFor="message">Message:</label>
          <textarea id="message" className="w-full p-2 rounded" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default ContactForm; 