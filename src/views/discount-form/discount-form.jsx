import React from "react";
import styles from "./index.module.scss";
import { DiscountInput } from ".";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/title/title";

export const DiscountForm = ({ handle, signUp, formText, signIn,forgotPassword }) => {
  const navigate = useNavigate(); // Используем useNavigate для навигации
  const isDiscountApplied = useSelector((state) => state.shop.discountApplied);

  const onFormSubmit = (formData) => {
    handle(formData);
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  return (
    <>
        <Title text={"Trood."}/>
    
    <section className={styles.formSection}>
      <div className={styles.form_container}>
        <div className={styles.form_content}>
          <div className={styles.form}>
            <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form__form}>
              <h1 className={styles.form__title}>{formText}</h1>
              <DiscountInput
              forgotPassword = {forgotPassword}
               signUp={signUp}
                errors={errors}
                control={control}
                text={"Get a discount"}
                lightColor={true}
                signIn = {signIn}
              />
              <div className={styles.btnContainer}>
                {signIn ? (
                  <button type="submit" className={cn(styles.form__button, {
                    [styles.btn_active]: signIn,
                  })}>
                    Login
                  </button>
                ) : (
                 <Link to={"/sign-in"} className={styles.form__button} > 
                   Login
                 </Link>
                )}
                {signUp ? (
                  <button
                    type="submit"
                    className={cn(styles.form__button, {
                      [styles.btn_active]: signUp,
                    })}
                  >
                    Sign up
                  </button>
                ) : (
                  <Link to={"/"} className={styles.form__button} > 
                  Sign up
                </Link>
                )}
                {forgotPassword &&    <button type="submit" className={cn(styles.form__button, {
                    [styles.btn_active]: forgotPassword,
                  })}>
                    Reset password
                  </button>}
              </div>
              {signIn && <Link className={styles.forgottPassword} to={"/forgott-password"}>Forgott password?</Link>}
            </form>
          </div>
        </div>

      </div>
    
    </section>
    </>
  );
};