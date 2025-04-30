"use client";

export default function GoogleMap() {
  return (
    <div className="rounded-3xl overflow-hidden shadow-lg h-full w-full">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573856897!2d-73.98784532396766!3d40.75798833440302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1714394258761!5m2!1sen!2sus" 
        width="100%" 
        height="450" 
        style={{ border: 0, minHeight: "400px" }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
