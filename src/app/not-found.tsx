"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">404 - Страница не найдена</h1>
      <p className="text-gray-500 mt-2">
        Извините, такой страницы не существует.
      </p>

      <div className="pt-6">
        <Button as={Link} href="/" color="primary" variant="solid">
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
