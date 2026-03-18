import React from "react";
import photo from "../photo.jpg";
import styled from "styled-components";

const Photo = styled.img`
  height: auto;
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1rem;
`;

const Email = styled.p`
  overflow-wrap: break-word;
  padding-bottom: 1rem;
`;

const MyLink = styled.a`
  text-decoration: none;
  color: #155171;
  padding-bottom: 1rem;

  &:focus,
  &:hover,
  &:visited,
  &:active,
  &:mailto {
    text-decoration: none;
  }
  @media all and (min-width: 401px) {
    color: white;
  }
`;

const PersInfo = () => {
  const Mailto = ({
    email,
    subject = "",
    body = "",
    children,
  }) => {
    let params = subject || body ? "?" : "";
    if (subject)
      params += `subject=${encodeURIComponent(subject)}`;
    if (body)
      params += `${
        subject ? "&" : ""
      }body=${encodeURIComponent(body)}`;

    return (
      <MyLink href={`mailto:${email}${params}`}>
        {children}
      </MyLink>
    );
  };
  return (
    <div className="personal-info">
      <Photo src={photo} alt="Razvan-Cosmin Ciobanel" />
      <h2 className="name">Razvan-Cosmin Ciobanel</h2>
      <div className="container">
        <h2 className="name">Contact</h2>
        <p className="text">Email:</p>
        <Email>
          <Mailto email="razvancosminciobanel@protonmail.com">
            razvancosminciobanel@protonmail.com
          </Mailto>
        </Email>
        <p className="profile">
          <MyLink
            href="https://www.linkedin.com/in/razvan-cosmin-ciobanel-832945351/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </MyLink>
        </p>
        <p className="profile">
          <MyLink
            href="https://github.com/RazvanCiobanel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </MyLink>
        </p>
      </div>
      <div className="container">
        <h2>Self definition</h2>
        <p>
          Experienced Live Casino professional with over 2
          years of experience as an Online Roulette Dealer
          and 8 years of maritime leadership experience as a
          Third Officer in the merchant navy. Strong
          background in operational control, compliance,
          incident reporting, safety procedures, and team
          coordination. Skilled at maintaining high
          standards in fast-paced environments, resolving
          issues quickly, and supporting efficient daily
          operations. Known for discipline, professionalism,
          communication skills, and the ability to perform
          effectively under pressure.
        </p>
      </div>
      <div className="container">
        <h2>Spoken languages</h2>
        <p className="text">English - B1 level</p>
      </div>
    </div>
  );
};

export default PersInfo;
