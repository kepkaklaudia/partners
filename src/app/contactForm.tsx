"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { TextareaField } from "@/app/components/Form/textareaField";
import { CheckboxField } from "@/app/components/Form/checkboxField";
import { TextField } from "@/app/components/Form/textField";
import { validateEmail } from "@/app/components/Form/validateEmail";
import { StyledModal } from "@/app/components/Form/modal";

export interface FormValues {
  [key: string]: string;
}

export const modalItems = [
  {
    label: "Imię i nazwisko",
    value: "fullName",
  },
  {
    label: "E-mail",
    value: "email",
  },
  {
    label: "Wiadomość",
    value: "description",
  },
];

export const ContactForm = () => {
  const [show, setShow] = useState(false);

  const [submittedFormValues, setSubmittedFormValues] =
    useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setSubmittedFormValues(data);
    setShow(true);
    reset();

    await fetch("https://submit-form.com/BC8HJw8mU", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Imię: data.fullName,
        Email: data.email,
        Wiadomość: data.description,
      }),
    })
      .then(function (response) {
        console.log(response);
        console.log(
          "Form submitted:",
          data.fullName,
          data.email,
          data.description
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div id="contact" className="mb-20 max-w-[600px] w-[90%] mx-auto">
      <form
        className="gap-7 flex flex-col"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          type="text"
          register={register}
          errors={errors}
          fieldName="fullName"
          label="Imię i nazwisko"
          placeholder="Wpisz swoje imię i nazwisko"
        />
        <TextField
          type="email"
          register={register}
          errors={errors}
          fieldName="email"
          label="E-mail"
          placeholder="Wpisz swój e-mail"
          validateFunction={validateEmail}
        />
        <TextareaField
          register={register}
          errors={errors}
          fieldName="description"
          placeholder="Napisz wiadomość"
        />
        <CheckboxField
          control={control}
          errors={errors}
          fieldName="consent"
          label="Wyrażam zgodę na przetwarzanie danych osobowych w&nbsp;związku ze złożeniem zapytania za pośrednictwem formularza&nbsp;kontaktowego."
        />
        <button
          className="bg-black text-white p-3 focus-visible:outline-none focus-visible:ring-blue focus-visible:ring-1 focus-visible:ring-offset-1 transition-colors mx-auto rounded-none ml-auto mr-0 font-light"
          type="submit"
        >
          Wyślij formularz
        </button>
      </form>
      <StyledModal
        modalItems={modalItems}
        show={show}
        setShow={setShow}
        data={submittedFormValues}
      />
    </div>
  );
};
