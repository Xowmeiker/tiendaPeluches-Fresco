import React from "react";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useContext } from "react";
import { context } from "../CustomProvider/CustomProvider";

export default function CheckoutForm() {
  const { createOrder } = useContext(context);

  const form = useForm({
    initialValues: {
      name: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email invalido"),
      phoneNumber: (value) =>
        /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value)
          ? null
          : "Telefono invalido",
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => {createOrder(values)})}>
        <TextInput
          label="Nombre"
          placeholder="Juan"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Apellido"
          placeholder="Perez"
          {...form.getInputProps("lastName")}
        />

        <NumberInput
          placeholder="Tu numero de telefono"
          label="Telefono"
          hideControls
          {...form.getInputProps("phoneNumber")}
        />

        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <Checkbox
          mt="md"
          label="Acepto recibir ofertas que puedan interesarme"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group position="right" mt="md">
          <Button
            type="submit"
          >
            Siguiente
          </Button>
        </Group>
      </form>
    </Box>
  );
}
