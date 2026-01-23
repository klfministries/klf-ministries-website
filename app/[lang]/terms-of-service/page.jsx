export default function TermsOfService({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-4xl mx-auto py-20 px-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        {lang === "es" ? "Términos de Servicio" : "Terms of Service"}
      </h1>

      {lang === "es" ? (
        <>
          <p className="text-gray-700 leading-relaxed">
            Bienvenido a KLF Ministries. Al acceder y utilizar este sitio web, usted acepta cumplir
            con estos Términos de Servicio y con todas las leyes y regulaciones aplicables. Si no
            está de acuerdo con alguna parte de estos términos, le pedimos amablemente que deje de
            utilizar este sitio web.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Todo el contenido proporcionado en este sitio web — incluyendo sermones, devocionales,
            artículos, videos, recursos de oración y otros materiales — se ofrece únicamente con
            fines informativos, educativos y espirituales. El contenido tiene como propósito
            fomentar la fe, el crecimiento personal y la reflexión espiritual, y no debe
            considerarse asesoramiento profesional, legal, médico ni de consejería.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Aunque procuramos con oración ofrecer contenido preciso y significativo, KLF Ministries
            no garantiza la exactitud, integridad ni confiabilidad de la información presentada en
            este sitio. El uso de este contenido queda bajo su propia responsabilidad.
          </p>

          <p className="text-gray-700 leading-relaxed">
            KLF Ministries no se hace responsable de ninguna decisión, acción o consecuencia que
            pueda resultar del uso de la información proporcionada en este sitio web.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Nos reservamos el derecho de actualizar o modificar estos Términos de Servicio en
            cualquier momento. El uso continuo de este sitio web después de que se publiquen
            cambios se considerará como aceptación de los términos revisados.
          </p>
        </>
      ) : (
        <>
          <p className="text-gray-700 leading-relaxed">
            Welcome to KLF Ministries. By accessing and using this website, you agree to be bound by
            these Terms of Service and all applicable laws and regulations. If you do not agree with
            any part of these terms, we kindly ask that you discontinue use of this website.
          </p>

          <p className="text-gray-700 leading-relaxed">
            All content provided on this website — including sermons, devotionals, articles, videos,
            prayer resources, and other materials — is offered for informational, educational, and
            spiritual purposes only. The content is intended to encourage faith, personal growth,
            and spiritual reflection, and should not be considered professional, legal, medical, or
            counseling advice.
          </p>

          <p className="text-gray-700 leading-relaxed">
            While we prayerfully seek to provide accurate and meaningful content, KLF Ministries
            does not make any warranties or guarantees regarding the completeness, accuracy, or
            reliability of the information on this site. Use of this content is at your own
            discretion and responsibility.
          </p>

          <p className="text-gray-700 leading-relaxed">
            KLF Ministries is not responsible for any decisions, actions, or outcomes that may
            result from the use of information provided on this website.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We reserve the right to update or modify these Terms of Service at any time. Continued
            use of the website after any changes are posted will be considered acceptance of the
            revised terms.
          </p>
        </>
      )}

      <p className="text-sm text-gray-500 pt-6">
        {lang === "es" ? "Última actualización: Enero 2026" : "Last updated: January 2026"}
      </p>
    </section>
  );
}
