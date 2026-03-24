const ContactSection = ({
  titleClassName = "text-xl sm:text-2xl font-semibold text-[#1d2554] mt-4",
  email = "armando.charal1998@gmail.com",
}) => {
  return (
    <>
      <hr className="mt-6" />
      <h3 className={titleClassName}>Contacto</h3>
      <p>
        Para alguna modificación o sugerencia, por favor mandar mail a{" "}
        <a
          href={`mailto:${email}`}
          className=" text-[#1d2554] hover:text-[#374785] underline hover:no-underline"
        >
          {email}
        </a>
      </p>
    </>
  );
};

export default ContactSection;
