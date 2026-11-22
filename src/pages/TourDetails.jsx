import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { CalendarDays, MapPin, Footprints } from "lucide-react";

import tours from "../data/tours";

// Tour components
import TourBanner from "../components/tours/TourBanner";
import TourGallery from "../components/tours/TourGallery";
import TourInformation from "../components/tours/TourInformation";
import TourTabs from "../components/tours/TourTabs";
import TourOverview from "../components/tours/TourOverview";
import TourItinerary from "../components/tours/TourItinerary";
import TourCost from "../components/tours/TourCost";
import TourFAQs from "../components/tours/TourFAQs";
import TourMap from "../components/tours/TourMap";
import EnquiryForm from "../components/tours/EnquiryForm";
import FeaturedTrips from "../components/tours/FeaturedTrips";
import RelatedTours from "../components/tours/RelatedTours";

const TourDetails = () => {
  const { slug } = useParams();

  const tour = tours.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    adults: "1",
    children: "0",
    subject: "",
    message: "",
    privacy: false,
  });

  if (!tour) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <h1 className="font-serif text-4xl text-gray-900">Tour Not Found</h1>

        <p className="mt-4 text-gray-500">
          The tour you are looking for is not available.
        </p>

        <Link
          to="/"
          className="mt-6 rounded-lg bg-[#e83248] px-6 py-3 text-white"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const relatedTours = tours.filter((item) => item.id !== tour.id);

  const tabs = ["Overview", "Itinerary", "Cost", "FAQs", "Map"];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Tour Enquiry: ${tour.title}

Name: ${formData.name}
Email: ${formData.email}
Country: ${formData.country}
Contact: ${formData.phone}
Adults: ${formData.adults}
Children: ${formData.children}
Subject: ${formData.subject}
Message: ${formData.message}
    `;

    const whatsappUrl = `https://wa.me/918218462981?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleTabChange = (tab) => {
    const sectionId = tab.toLowerCase();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Tour Banner */}
      <TourBanner tour={tour} />

      {/* Main Content */}
      <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-8 lg:py-24">
        {/* Tour Gallery */}
        <TourGallery images={tour.gallery} title={tour.title} />

        {/* Tour Title and Enquiry Layout */}
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,2.2fr)_minmax(300px,0.9fr)]">
          {/* Left Content */}
          <div className="min-w-0">
            {/* Title and Duration */}
            <div className="flex flex-wrap items-start justify-between gap-5 border-b border-gray-200 pb-6">
              <h2 className="font-serif text-3xl font-bold leading-tight text-[#171717] sm:text-4xl">
                {tour.title}
              </h2>

              <div className="flex min-w-[70px] flex-col overflow-hidden rounded-md text-center shadow">
                <span className="bg-[#e83248] px-5 py-1 text-3xl font-bold text-white">
                  {tour.duration.split(" ")[0]}
                </span>

                <span className="border border-gray-200 bg-white py-1 text-sm text-gray-600">
                  {tour.duration.includes("Nights") ? "Days" : "Day"}
                </span>
              </div>
            </div>

            {/* Tour Information */}
            <TourInformation tour={tour} />

            {/* Detail Tabs */}
            <div className="sticky top-0 z-20 mt-5">
              <TourTabs
                tabs={tabs}
                activeTab="Overview"
                onTabChange={handleTabChange}
              />
            </div>

            {/* Overview */}
            <TourOverview tour={tour} />

            {/* Itinerary */}
            <TourItinerary itinerary={tour.itinerary} />

            {/* Cost */}
            <TourCost includes={tour.includes} excludes={tour.excludes} />

            {/* FAQs */}
            <TourFAQs faqs={tour.faqs} />

            {/* Map */}
            <TourMap mapQuery={tour.mapQuery} title={tour.title} />
          </div>

          {/* Right Sidebar */}
          <aside className="flex w-full min-w-0 flex-col gap-10 self-start">
            {/* Enquiry Form */}
            <div className="w-full min-w-0 border-t border-gray-200 pt-6">
              <h2 className="mb-2 font-serif text-2xl font-bold text-gray-900">
                Send Your Enquiry
              </h2>

              <p className="mb-6 text-sm text-gray-600">
                Tour name: <span className="font-semibold">{tour.title}</span>
              </p>

              <EnquiryForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>

            {/* Featured Trips */}
            <FeaturedTrips tours={relatedTours} />
          </aside>
        </div>

        {/* Related Tours */}
        <RelatedTours tours={tours} currentTourId={tour.id} />
      </div>
    </main>
  );
};

export default TourDetails;
