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
          <Mailto email="razvancciobanel@gmail.com">
            razvancciobanel@gmail.com
          </Mailto>
        </Email>
        <p className="profile">
          <MyLink
            href="https://www.linkedin.com/in/razvan-cosmin-ciobanel-18237221b"
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
          I am willing to learn new front end and back end
          technologies. I have a good understanding of
          responsive web design and SEO practices. I am a
          consistent person and I like to achieve my goals.
        </p>
      </div>
      <div className="container">
        <h2>Spoken languages</h2>
        <p className="text">English - C2 Advanced level</p>
      </div>
    </div>
  );
};

export default PersInfo;
