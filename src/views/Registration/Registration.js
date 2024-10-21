import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { database } from "../firebaseConfig/firebaseConfig";
import { setCurrentUser } from "../../store/bewertung";
import { useDispatch, useSelector } from "react-redux";
import { DiscountForm } from "../discount-form/discount-form";
function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();



  const handleSubmit = async (formData) => {
    console.log(formData, "rom");
    try {
      // Регистрация пользователя
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.userEmail,
        formData.userPassword
      );
      const user = userCredential.user;

      // Обновление профиля пользователя, добавление имени
      await updateProfile(user, {
        displayName: formData.userName,
      });

      console.log("Профиль обновлен:", user);
      // alert("Пользователь зарегистрирован с именем: " + data.name);

      // Добавление данных пользователя в Firestore
      const userDocRef = doc(database, "users", user.uid); // Создание ссылки на документ с UID пользователя
      await setDoc(userDocRef, {
        id: user.uid,
        name: formData.userName.split(" ")[0],
        surname: formData.userName.split(" ")[1] || "", // Фамилия, если указана
        displayName: formData.userName,
        email: formData.userEmail,
        photoURL: "", // Поскольку при регистрации через почту фото не добавляется, оставляем пустым
        comments: [],
        ratings: [],
        isAdmin: formData.isAdmin || false, // Добавляем значение isAdmin из формы tckb
      });

      // Сохранение данных пользователя в localStorage и обновление текущего пользователя в Redux
      const userData = {
        id: user.uid,
        name: formData.userName.split(" ")[0],
        surname: formData.userName.split(" ")[1] || "", // Фамилия, если указана
        displayName: formData.userName,
        email: formData.userEmail,
        photoURL: "", // Поскольку при регистрации через почту фото не добавляется, оставляем пустым
        comments: [],
        ratings: [],
        isAdmin: formData.isAdmin || false, // Добавляем значение isAdmin из формы tckb
      };

      localStorage.setItem("currentUser", JSON.stringify(userData));
      dispatch(setCurrentUser(userData));

      alert("Данные пользователя успешно сохранены в Firestore.");
      navigate("/main");
    } catch (error) {
      console.error("Ошибка при регистрации пользователя:", error);
      alert(error.message);
    }
  };

  return (
    <div className="App-header">
      <DiscountForm
        handle={handleSubmit}
        signUp={true}
        formText={"Registration"}
      />
    </div>
  );
}

export default Registration;
