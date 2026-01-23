export default function Speaking() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6 space-y-12">
      
      {/* PAGE TITLE */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-900">
          Speaking Engagements
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Invite Pastor Kiwayne Ferron to minister at your church, conference, or special event.
        </p>
      </div>

      {/* INTRO SECTION */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow-sm space-y-6">
        <h2 className="text-2xl font-semibold text-blue-900">
          About the Speaker
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Pastor <strong>Kiwayne Ferron</strong> is a pastor, author, and evangelistic speaker
          committed to proclaiming the gospel of Jesus Christ with clarity, urgency, and hope.
          He ministers across churches, youth programs, revival meetings, and special conferences,
          calling hearts to deeper commitment and faithful Christian living.
        </p>

        <p className="text-gray-700 leading-relaxed">
          His preaching focuses on Christ-centered evangelism, spiritual revival, discipleship,
          Christian marriage, and end-time hope. Pastor Ferron ministers with authenticity,
          biblical depth, and a passion to see lives transformed by the grace of God.
        </p>

        {/* TOPICS */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Common Speaking Topics
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
            <li>Evangelism & Revival</li>
            <li>Christian Marriage & Family</li>
            <li>Youth & Discipleship</li>
            <li>Prophecy & End-Time Hope</li>
            <li>Prayer & Spiritual Growth</li>
            <li>Leadership in Ministry</li>
          </ul>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center text-blue-900">
          Request a Speaking Engagement
        </h2>

        <p className="text-center text-gray-600 max-w-xl mx-auto">
          Please complete the form below to request Pastor Ferron for your upcoming event.
          You will be contacted to confirm availability and details.
        </p>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSesBJjzAZPg7ylXIGcC4WFoEphcZP1apZfylh3fozrGnULP7w/viewform?embedded=true"
          width="100%"
          height="900"
          frameBorder="0"
          className="rounded-xl border"
        />
      </div>
    </section>
  );
}
