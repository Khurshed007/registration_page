import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { database } from "../firebaseConfig/firebaseConfig";
import { DiscountForm } from "../discount-form/discount-form";

function SignIn() {
  const navigate = useNavigate();
  const auth = getAuth();

  // Функция для входа пользователя в систему
  const handle = (formData) => {
    if (!formData.userEmail || !formData.userPassword) {
      alert("Please fill in all fields");
      return;
    }

    signInWithEmailAndPassword(auth, formData.userEmail, formData.userPassword)
      .then(async (userCredential) => {
        const user = userCredential.user;

        try {
          // Получаем данные пользователя из Firestore
          const userDocRef = doc(database, "users", user.uid);
          const userSnapshot = await getDoc(userDocRef);

          if (userSnapshot.exists()) {
            const userData = {
              ...userSnapshot.data(),
              id: user.uid,
              email: user.email,
            };

            // Сохранение данных пользователя в localStorage
            localStorage.setItem("currentUser", JSON.stringify(userData));

            // Выводим данные пользователя в консоль
            console.log("Авторизованный пользователь:", userData);

            // Перенаправление на страницу /main
            alert("Успешная авторизация!");
            navigate("/main");
          } else {
            console.error("Пользовательские данные не найдены в Firestore.");
            alert("User data not found.");
          }
        } catch (error) {
          console.error(
            "Ошибка при получении данных пользователя из Firestore:",
            error
          );
          alert("Error retrieving user data.");
        }
      })
      .catch((error) => {
        alert(error.message); // Обработка ошибок
      });
  };

  return (
    <div className="App-header">
      <DiscountForm handle={handle} signIn={true} formText={"Authorization"} />
    </div>
  );
}

export default SignIn;