import { useState } from "react";
import { User, Mail, Phone, MapPin, Footprints, MessageSquare, Send, CircleCheck } from "lucide-react";

function Forms() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    shoeSize: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowSuccess(true);
  }

  return (
    <>
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="w-full max-w-md rounded -xs bg-white p-8 text-center shadow-[0_20px_45px_rgba(0,0,0,0.18)] border border-[#e7e7e7]">
            <div className="mb-5 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f5f5f5]">
                <CircleCheck className="h-10 w-10 text-green-600" strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#111111]">Submitted Successfully!</h2>
            <p className="mt-3 text-[#4a4a4a] leading-relaxed">
              Thank you, {formData.fullName || "Buyer"}! Your credentials have been received.
              We’ll get back to you as soon as possible.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="rounded-xs cursor-pointer mt-6 inline-flex items-center gap-2  bg-[#111827] px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-[#1f2937]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="bg-[#f5f5f5] p-6 max-[500px]:p-3.5">
        <div className="mt-8 mx-auto w-full max-w-2xl">
          <div className="mb-6">
            <h1 className=" text-2xl font-bold text-[#111111]">Contact Us</h1>
            <p className="mt-1 text-[#4a4a4a] leading-relaxed">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#e7e7e7] shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-8 max-[500px]:p-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-[#111111]">
                  <User className="h-4 w-4 text-[#6b7280]" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Juan Dela Cruz"
                  required
                  className="w-full border border-gray-300 bg-[#f5f5f5] px-4 py-2.5 text-sm text-[#111111] placeholder-[#9ca3af] outline-none transition-colors focus:border-[#111827] focus:ring-1 focus:ring-[#111827]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-[#111111]">
                  <Mail className="h-4 w-4 text-[#6b7280]" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="juan@email.com"
                  required
                  className="w-full border border-gray-300 bg-[#f5f5f5] px-4 py-2.5 text-sm text-[#111111] placeholder-[#9ca3af] outline-none transition-colors focus:border-[#111827] focus:ring-1 focus:ring-[#111827]"
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-[#111111]">
                  <Phone className="h-4 w-4 text-[#6b7280]" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+63 912 345 6789"
                  className="w-full border border-gray-300 bg-[#f5f5f5] px-4 py-2.5 text-sm text-[#111111] placeholder-[#9ca3af] outline-none transition-colors focus:border-[#111827] focus:ring-1 focus:ring-[#111827]"
                />
              </div>

              <div>
                <label htmlFor="location" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-[#111111]">
                  <MapPin className="h-4 w-4 text-[#6b7280]" />
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Manila, Philippines"
                  className="w-full border border-gray-300 bg-[#f5f5f5] px-4 py-2.5 text-sm text-[#111111] placeholder-[#9ca3af] outline-none transition-colors focus:border-[#111827] focus:ring-1 focus:ring-[#111827]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="shoeSize" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-[#111111]">
                <Footprints className="h-4 w-4 text-[#6b7280]" />
                Preferred Shoe Size
              </label>
              <select
                id="shoeSize"
                value={formData.shoeSize}
                onChange={handleChange}
                className="w-full cursor-pointer border border-gray-300 bg-[#f5f5f5] px-4 py-2.5 text-sm text-[#111111] outline-none transition-colors focus:border-[#111827] focus:ring-1 focus:ring-[#111827]"
              >
                <option value="" disabled>Select a size</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-[#111111]">
                <MessageSquare className="h-4 w-4 text-[#6b7280]" />
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="What can we help you with?"
                className="w-full resize-none border border-gray-300 bg-[#f5f5f5] px-4 py-2.5 text-sm text-[#111111] placeholder-[#9ca3af] outline-none transition-colors focus:border-[#111827] focus:ring-1 focus:ring-[#111827]"
              />
            </div>

            <div className="mt-7">
              <button
                type="submit"
                className="cursor-pointer inline-flex w-full items-center justify-center gap-2 bg-[#111827] px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-[#1f2937]"
              >
                <Send className="h-4 w-4" />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Forms;
