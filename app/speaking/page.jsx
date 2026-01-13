export const metadata = {
  title: "Speaking Engagements | KLF Ministries",
  description:
    "Invite Pastor Kiwayne Ferron for preaching, seminars, revivals, and speaking engagements.",
};

export default function SpeakingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Speaking Engagements
      </h1>
      <p className="mb-6 text-gray-700">
        Pastor Kiwayne Ferron is available for preaching, seminars, revivals,
        and special ministry events.
      </p>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSesBJjzAZPg7ylXIGcC4WFoEphcZP1apZfylh3fozrGnULP7w/viewform?embedded=true"
        width="100%"
        height="800"
      />
    </main>
  );
}
