
"use client";

import { registerUser } from "@/actions/register";
import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";

interface IProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  const result = await registerUser(formData)
  console.log("result",result)
    onClose();
  };
  return (
    <Form className="w-full max-w-xs" onSubmit={onSubmit}>
      <Input
        isRequired
        name="email"
        placeholder="Введите ваш email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => {
          if (!value) return "Пожалуйста,введите ваш email";
          if (!validateEmail(value)) return "Неккоректный email";
          return null;
        }}
      />

      <Input
        isRequired
        name="password"
        placeholder="Введите ваш пароль"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(value) => {
          if (!value) return "Пожалуйста,введите пароль";
          if (value.length < 6)
            return "Пароль должен включать не менее 6 символов";
          return null;
        }}
      />

      <Input
        isRequired
        name="confirmPassword"
        placeholder="Подтвердите ваш пароль"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        validate={(value) => {
          if (!value) return "Пожалуйста,подтвердите ваш пароль";
          if (value !== formData.password) return "Пароли не совпадают";
          return null;
        }}
      />

      <div>
        <Button variant="light" onPress={onClose}>
          Отмена
        </Button>

        <Button color="primary" type="submit">
          Зарегистрироваться
        </Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
