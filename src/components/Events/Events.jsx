import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import eventsData from "./EventData";

const EventCard = ({ event }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
      className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
    >
      {/* Tooltip */}
      <span
        className="absolute px-2 py-1 z-10 whitespace-nowrap text-sm rounded bg-white/80 border border-gray-200 backdrop-blur-[4px] text-gray-900 font-medium pointer-events-none"
        style={{
          top: position.y + 10,
          left: position.x + 10,
          opacity: tooltipVisible ? 1 : 0,
          transform: tooltipVisible ? "scale(1)" : "scale(0.6)",
          transition: "all 0.2s ease-out",
        }}
      >
        Date: {event.Date}
      </span>

      {/* Event Image */}
      <img
        className="w-full h-56 object-cover"
        src={event.image}
        alt={event.title}
      />

      {/* Event Details */}
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold text-gray-900">{event.title}</h5>
        <p className="mb-3 text-gray-700">{event.description}</p>

        {/* Read More - Link to event detail page */}
        <Link
          to={`/events/${event.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-indigo-300"
        >
          Read more
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Events & Activities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
