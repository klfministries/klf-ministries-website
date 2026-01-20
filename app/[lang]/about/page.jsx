import Image from "next/image";

export default function About({ params }) {
  const lang = params.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-start">
      {/* LEFT COLUMN — IMAGES */}
      <div className="space-y-6">
        {/* MAIN PORTRAIT */}
        <Image
          src="/images/author.jpg"
          alt="Pastor Kiwayne Ferron"
          width={500}
          height={600}
          className="rounded-2xl shadow-lg"
          priority
        />

        {/* SECOND IMAGE — SMALLER */}
        <div className="max-w-xs mx-auto">
          <Image
            src="/images/about-couple.jpg"
            alt="Pastor Kiwayne Ferron and wife"
            width={300}
            height={400}
            className="rounded-xl shadow-md"
          />
          <p className="text-center text-sm text-gray-500 mt-2">
            Ministry moment
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN — TEXT */}
      <div>
        <h1 className="text-3xl font-bold mb-6">
          {lang === "es" ? "Acerca del Autor" : "About the Author"}
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong>Pastor Kiwayne Ferron</strong> is a pastor, author, and
            speaker committed to preaching the gospel of Jesus Christ with
            clarity, urgency, and hope. He was born and raised in the district
            of Arcadia, nestled in the beautiful, fertile, and water-rich
            parish of St. Thomas, Jamaica.
          </p>

          <p>
            He is married to <strong>Trudy-Ann Moore Ferron</strong>, a gifted
            singer whose ministry and unwavering support strengthen his
            calling. Pastor Ferron is a devoted student of Scripture, a lover
            of the Word of God, a servant of God, and a friend to humanity.
            His life and ministry reflect a deep passion for sharing Christ
            in both word and deed.
          </p>

          <p>
            Pastor Ferron serves as a pastor in the{" "}
            <strong>East Jamaica Conference of Seventh-day Adventists</strong>.
            Endowed with diverse gifts, he ministers with authenticity,
            compassion, and spiritual depth. He lives by the guiding
            philosophy, <em>“To-live-is-Christ; I-know-no-other-way,”</em> and
            carries the mantra,{" "}
            <strong>“Rescued people, rescue people,”</strong> believing that
            those transformed by grace are called to extend that grace to
            others.
          </p>

          <p>
            <strong>KLF Ministries and Publications</strong> exists to reach
            hearts with the life-changing message of the gospel and to inspire
            believers to live fully committed to the Lord. Through devotionals,
            prayer support, testimonies, sermons, and faith-based resources,
            the ministry seeks to encourage spiritual growth, strengthen
            faith, and cultivate a vibrant walk with Christ.
          </p>

          <p>
            Visitors are invited to engage with uplifting sermons, share prayer
            requests, read and submit testimonies, and access books and other
            resources designed to equip, inspire, and empower individuals for
            faithful Christian living and service.
          </p>
        </section>
      </div>
    </section>
  );
}
