export default function PrivacyPolicy({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  return (
    <section className="max-w-4xl mx-auto py-20 px-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        {lang === "es" ? "Política de Privacidad" : "Privacy Policy"}
      </h1>

      {lang === "es" ? (
        <>
          <p className="text-gray-700 leading-relaxed">
            En KLF Ministries, su privacidad es muy importante para nosotros. Estamos comprometidos
            a manejar su información personal con cuidado, integridad y respeto.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Cualquier información personal que usted proporcione voluntariamente a través de este
            sitio web — incluyendo su nombre, dirección de correo electrónico, número de teléfono
            y peticiones de oración — se recopila únicamente con el propósito de servirle,
            brindarle apoyo pastoral, responder a sus consultas y acompañarle a través de nuestro
            ministerio.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Utilizamos su información solo para comunicarnos con usted, procesar peticiones de
            oración, compartir actualizaciones del ministerio y ofrecer recursos espirituales que
            puedan serle de ayuda. No vendemos, intercambiamos, alquilamos ni compartimos su
            información personal con terceros sin su consentimiento explícito, excepto cuando la
            ley así lo requiera.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Tomamos medidas razonables y apropiadas para proteger su información personal contra
            accesos no autorizados, uso indebido o divulgación. Sin embargo, aunque nos esforzamos
            por proteger sus datos, ningún método de transmisión por internet o almacenamiento
            electrónico puede garantizar una seguridad absoluta.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Al utilizar este sitio web, usted reconoce y confía en que KLF Ministries recopila y
            utiliza su información de acuerdo con esta política de privacidad.
          </p>
        </>
      ) : (
        <>
          <p className="text-gray-700 leading-relaxed">
            At KLF Ministries, your privacy matters deeply to us. We are committed to handling your
            personal information with care, integrity, and respect.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Any personal information you voluntarily provide through this website — including your
            name, email address, phone number, and prayer requests — is collected solely for the
            purpose of serving you, providing pastoral care, responding to your inquiries, and
            supporting you through our ministry.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We use your information only to communicate with you, to process prayer requests, to
            share ministry updates, and to provide spiritual resources that may be helpful to you.
            We do not sell, trade, rent, or share your personal information with third parties
            without your explicit consent, except when required to do so by law.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We take reasonable and appropriate measures to protect your personal information from
            unauthorized access, misuse, or disclosure. While no method of online transmission or
            electronic storage can be guaranteed to be completely secure, we strive to safeguard
            your information to the best of our ability.
          </p>

          <p className="text-gray-700 leading-relaxed">
            By using this website, you acknowledge and trust KLF Ministries to collect and use your
            information in accordance with this privacy policy.
          </p>
        </>
      )}

      <p className="text-sm text-gray-500 pt-6">
        {lang === "es" ? "Última actualización: Enero 2026" : "Last updated: January 2026"}
      </p>
    </section>
  );
}
