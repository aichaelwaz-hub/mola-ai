import { describe, expect, it } from "vitest";
import { contactSchema, initialContact } from "@/lib/contact-form";

const valid = { name: "Awa", email: "awa@exemple.cm", organization: "", topic: "Prioriser nos cas d’usage", consent: true as const };

describe("contact form", () => {
  it("consent is not pre-checked", () => {
    expect(initialContact.consent).toBe(false);
  });
  it("rejects submission without consent", () => {
    expect(contactSchema.safeParse({ ...valid, consent: false }).success).toBe(false);
  });
  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "awa" }).success).toBe(false);
  });
  it("organization is optional", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
});
