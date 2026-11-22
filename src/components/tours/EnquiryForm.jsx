import { Send } from "lucide-react";

const EnquiryForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 font-serif text-2xl font-bold text-gray-900">
        Send Enquiry
      </h2>

      <p className="mb-6 text-sm text-gray-500">
        Fill in your details and we will get back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#e83248]"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#e83248]"
        />

        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#e83248]"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#e83248]"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="adults"
            min="1"
            value={formData.adults}
            onChange={handleChange}
            placeholder="Adults"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#e83248]"
          />

          <input
            type="number"
            name="children"
            min="0"
            value={formData.children}
            onChange={handleChange}
            placeholder="Children"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#e83248]"
          />
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#e83248]"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#e83248]"
        />

        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            required
            className="mt-1 accent-[#e83248]"
          />
          I agree to the privacy policy.
        </label>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#e83248] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#c9253a]"
        >
          <Send size={17} />
          Send Enquiry
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
