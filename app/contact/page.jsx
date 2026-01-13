export const metadata = {
  title: "Contact KLF Ministries | Kiwayne Ferron",
  description:
    "Get in touch with KLF Ministries for ministry inquiries, speaking engagements, or encouragement.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Contact KLF Ministries
        </h1>

        <p className="text-gray-700 mb-8">
          We would be happy to connect with you for ministry inquiries,
          speaking engagements, or words of encouragement.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            📧{" "}
            <a
              href="mailto:klfministries7@gmail.com"
              className="text-blue-700 underline"
            >
              klfministries7@gmail.com
            </a>
          </p>

          <p>📞 +1 (876) 870-0508</p>

          <p>
            📸{" "}
            <a
              href="https://instagram.com/kiwayne27"
              target="_blank"
              className="text-pink-600 underline"
            >
              Instagram
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
