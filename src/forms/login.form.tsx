import { signInWithCredentials } from "@/actions/sign-in";
import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";

interface IProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    await signInWithCredentials(
      formData.email,
      formData.password
    );
    window.location.reload();
    onClose();
  };
  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <Input
        isRequired
        name="email"
        placeholder="Введите ваш email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => {
          if (!value) return "Пожалуйста,введите ваш email";
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

          return null;
        }}
      />

      <div>
        <Button variant="light" onPress={onClose}>
          Отмена
        </Button>

        <Button color="primary" type="submit">
          Войти
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
