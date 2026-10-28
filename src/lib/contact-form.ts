import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Indiquez votre nom.").max(100, "100 caractères maximum."),
  email: z.string().trim().min(1, "Indiquez votre e-mail professionnel.").email("Adresse e-mail invalide.").max(255),
  organization: z.string().trim().max(150, "150 caractères maximum.").optional().or(z.literal("")),
  topic: z.string().trim().min(10, "Décrivez votre enjeu en quelques mots (10 caractères minimum).").max(2000, "2000 caractères maximum."),
  consent: z.literal(true, { errorMap: () => ({ message: "Votre accord est nécessaire pour être recontacté." }) }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const initialContact = {
  name: "",
  email: "",
  organization: "",
  topic: "",
  consent: false,
};
