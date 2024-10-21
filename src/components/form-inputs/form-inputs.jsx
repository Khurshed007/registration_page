import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import styles from "./index.module.scss";
import { EyeHide, XOctagon,EyeShow } from "../../assets/icons";
import cn from "classnames";

export const FormInputs = ({
  inputPlaceholder,
  inputTyp,
  inputRegular,
  name,
  rules,
  register,
  control,
  errors,
  lightColor,
  isPassword,
  togglePasswordVisibility, // Добавляем пропс для изменения видимости пароля
}) => {
  const [showOrHide, setShowOrHide] = useState(false);
  const [eyeFormIcon, changeEyeFormIcon] = useState(<EyeHide className={styles.eye} />);

  // Смена иконки и состояния видимости пароля
  useEffect(() => {
    if (!showOrHide) {
      changeEyeFormIcon(<EyeShow className={styles.eye} />);
    } else {
      changeEyeFormIcon(<EyeHide className={styles.eye}  />);
    }
  }, [showOrHide]);

  // Состояние для видимости пароля
  const handleEyeIconClick = () => {
    setShowOrHide(!showOrHide);
    if (togglePasswordVisibility) {
      togglePasswordVisibility(!showOrHide); // Используем переданную функцию
    }
  };

  // Очистка имени пользователя из строки (если нужно)
  let userForm = name.split("user").filter((e) => e).join("");

  return (
    <Controller
      name={name} // name должен совпадать с name регистра
      control={control}
      rules={rules} // хранит объект. внутри которого паттерны и message
      render={({ field }) => (
        <div className={styles.input_wrapper} data-input-type={`${userForm}`}>
          <input
            className={cn(styles.form__input, {
              [styles.input_active]: errors[name],
            })}
            placeholder={inputPlaceholder}
            type={showOrHide ? "text" : inputTyp} // Меняем тип инпута в зависимости от состояния
            {...field}
            onChange={(e) =>
              field.onChange(e.target.value.replace(inputRegular, "")) // Очищаем ввод по регулярному выражению
            }
          />
          {errors[name] && (
            <div className={styles.error_content}>
              <XOctagon className={styles.icon} />
              <span
                className={cn(styles.message, { [styles.active]: lightColor })}
              >
                {errors[name].message}
              </span>
            </div>
          )}
          {isPassword && (
            <div onClick={handleEyeIconClick} className={styles.eye_icon_wrapper}>
              {eyeFormIcon}
            </div>
          )}
        </div>
      )}
    />
  );
};