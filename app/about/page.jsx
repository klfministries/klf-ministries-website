export const metadata = {
  title: "About Kiwayne Ferron | Pastor, Author & Speaker",
  description:
    "Learn more about Kiwayne Ferron, pastor, author, and Christian speaker behind KLF Ministries, committed to sharing the gospel with clarity and hope.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center p-8">
          {/* TEXT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              About the Author
            </h1>

            <p className="text-gray-700 leading-relaxed mb-4">
              Kiwayne Ferron is a pastor, author, and speaker committed to
              sharing the gospel of Jesus Christ with clarity, urgency, and
              hope. Through preaching, teaching, and writing, he seeks to
              inspire believers to live prepared, faithful, and active lives.
            </p>

            <p className="text-gray-700 leading-relaxed">
              KLF Ministries exists to equip God’s people, strengthen faith,
              and point hearts toward Christ in these critical times.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="/author.jpg"
              alt="Kiwayne Ferron"
              className="rounded-xl shadow-lg max-w-sm"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
