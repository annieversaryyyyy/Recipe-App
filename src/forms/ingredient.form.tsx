"use client";
import { createIngredient } from "@/actions/ingredient";
import { CATEGORY_OPTIONS, UNIT_OPTIONS } from "@/constants/select-options";
import { Button, Select, SelectItem, Input, Form } from "@heroui/react";
import { useState } from "react";

const IngredientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    unit: "",
    pricePerUnit: null as number | null,
    description: "",
  });

  const handleSubmit = async (formData: FormData) => {
    console.log("Form submitted", formData);
    await createIngredient(formData)
  };

  return (
    <Form className="w-[400px]" action={handleSubmit}>
      <Input
        isRequired
        name="name"
        placeholder="Введите название ингридиента"
        type="text"
        value={formData.name}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        validate={(value) => {
          if (!value) return "Название обязательно";
          return null;
        }}
      />
      <div className="flex gap-2 w-full">
        <div className="w-1/3">
          <Select
            isRequired
            name="category"
            placeholder="Категория"
            aria-label="Категория ингредиента"
            selectedKeys={formData.category ? [formData.category] : []}
            classNames={{
              trigger: "bg-default-100 w-full",
              innerWrapper: "text-sm",
              value: "truncate",
              selectorIcon: "text-black",
            }}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {CATEGORY_OPTIONS.map((option) => (
              <SelectItem key={option.value} className="text-black">
                {option.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="w-1/3">
          <Select
            aria-label="Категория ингредиента"
            isRequired
            name="unit"
            placeholder="Ед. изм"
            selectedKeys={formData.unit ? [formData.unit] : []}
            classNames={{
              trigger: "bg-default-100 w-full",
              innerWrapper: "text-sm",
              value: "truncate",
              selectorIcon: "text-black",
            }}
            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
          >
            {UNIT_OPTIONS.map((option) => (
              <SelectItem key={option.value} className="text-black">
                {option.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="w-1/3">
          <Input
            isRequired
            name="pricePerUnit"
            placeholder="Цена"
            value={
              formData.pricePerUnit !== null
                ? formData.pricePerUnit.toString()
                : ""
            }
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm focus:outline-none",
            }}
            onChange={(e) => {
              const value = e.target.value ? parseFloat(e.target.value) : null;
              setFormData({ ...formData, pricePerUnit: value });
            }}
            endContent={
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
            }
            validate={(value) => {
              if (!value) return "Цена обязательна";
              const num = parseFloat(value);
              if (isNaN(num) || num < 0)
                return "Цена должна быть положительной";
              return null;
            }}
          />
        </div>
      </div>

      <Input
        name="description"
        placeholder="Введите описание(необязательно)"
        type="text"
        value={formData.description}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none",
        }}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <div className="flex w-full items-center justify-end">
        <Button color="primary" type="submit">
          Добавить ингредиент
        </Button>
      </div>
    </Form>
  );
};

export default IngredientForm;
