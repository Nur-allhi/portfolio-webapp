import React from "react";
import { useForm } from "react-hook-form";

import {
  ContactFormContainer,
  SocialMediaContainer,
  SMAnchor,
  SMLogo,
  FormContainer,
  Input,
  Massage,
  FiledRequire,
} from "./ContactFormStyle";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <ContactFormContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Your name" {...register("name")} />
        <br />
        <Input
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        <br />

        {errors.email && <FiledRequire>This field is required</FiledRequire>}

        <br />
        <Massage placeholder="Your massege to me" name="messege"></Massage>
        <br />
        <Input type="submit" />
      </FormContainer>
      <SocialMediaContainer>
        <SMAnchor href="https://www.facebook.com/Eftynur" target="blank">
          <SMLogo src="images\social media\fb.png" alt="facebook" />
        </SMAnchor>
        <SMAnchor href="https://www.linkedin.com/in/nureallhi/" target="blank">
          <SMLogo src="images\social media\linkedin.png" alt="facebook" />
        </SMAnchor>
        <SMAnchor href="https://github.com/Nur-allhi" target="blank">
          <SMLogo src="images\social media\github.png" alt="facebook" />
        </SMAnchor>
      </SocialMediaContainer>
    </ContactFormContainer>
  );
};

export default ContactForm;
