import React from "react";
import { FormInputs } from "../../components/form-inputs/form-inputs";
import { EMAIL_REGEX, NAME_REGEX, PHONE_REGEX, TEXT_REGULAR, PHONE_REGULAR } from "../../components/constants";

export const DiscountInput = ({
  register,
  errors,
  control,
  lightColor,
  signUp,
  signIn,
  forgotPassword,
}) => {
  // Определяем, какие поля должны быть отображены

  console.log(forgotPassword, signUp, signIn,)
  let inputFields = [];

  // Если signUp (регистрация), показываем все поля: Name, Email и Password
  if (signUp) {
    inputFields = [
      <FormInputs
        key="userName"
        lightColor={lightColor}
        inputPlaceholder={"Name"}
        inputTyp={"text"}
        register={register}
        control={control}
        errors={errors}
        name="userName"
        rules={{
          required: "Please enter your name",
          pattern: {
            value: NAME_REGEX,
            message: "Only letters should be here",
          },
        }}
      />,
      <FormInputs
        key="userEmail"
        lightColor={lightColor}
        inputPlaceholder={"Email"}
        inputTyp={"email"}
        inputRegex={EMAIL_REGEX}
        register={register}
        control={control}
        errors={errors}
        name="userEmail"
        rules={{
          required: "Please enter your email",
          pattern: {
            value: EMAIL_REGEX,
            message: "Enter a valid email address",
          },
        }}
      />,
      <FormInputs
        isPassword = {true}
        key="userPassword"
        lightColor={lightColor}
        inputPlaceholder={"Password"}
        inputTyp={"password"}
        register={register}
        control={control}
        errors={errors}
        name="userPassword"
        rules={{
          required: "Please enter your password",
          pattern: {
            // value: PHONE_REGEX,
            message: "Password must meet specific criteria",
          },
        }}
      />,
    ];
  }

  // Если signIn (вход), показываем только Email и Password
  else if (signIn) {
    inputFields = [
      <FormInputs
        key="userEmail"
        lightColor={lightColor}
        inputPlaceholder={"Email"}
        inputTyp={"email"}
        inputRegex={EMAIL_REGEX}
        register={register}
        control={control}
        errors={errors}
        name="userEmail"
        rules={{
          required: "Please enter your email",
          pattern: {
            value: EMAIL_REGEX,
            message: "Enter a valid email address",
          },
        }}
      />,
      <FormInputs
      isPassword = {true}
        key="userPassword"
        lightColor={lightColor}
        inputPlaceholder={"Password"}
        inputTyp={"password"}
        register={register}
        control={control}
        errors={errors}
        name="userPassword"
        rules={{
          required: "Please enter your password",
          pattern: {
            // value: PHONE_REGEX,
            message: "Password must meet specific criteria",
          },
        }}
      />,
    ];
  }

  // Если forgotPassword (восстановление пароля), показываем только Email
  else if (forgotPassword) {
    inputFields = [
      <FormInputs
        key="userEmail"
        lightColor={lightColor}
        inputPlaceholder={"Email"}
        inputTyp={"email"}
        inputRegex={EMAIL_REGEX}
        register={register}
        control={control}
        errors={errors}
        name="userEmail"
        rules={{
          required: "Please enter an email",
          pattern: {
            value: EMAIL_REGEX,
            message: "Enter a valid email address",
          },
        }}
      />,
    ];
  }

  return <>{inputFields}</>;
};