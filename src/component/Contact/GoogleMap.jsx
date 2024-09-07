import React from "react";

const GoogleMap = () => {
  return (
    <div>
      {/* <!-- Map --> */}
      <div class="mt-10 aspect-video overflow-hidden rounded-lg lg:mt-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14477.321813388362!2d91.81971087546331!3d24.886707431000232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751aace0f0199df%3A0x3e805a19621656e0!2sTechnical%20Rd%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1725726286350!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="h-full w-full object-cover border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
