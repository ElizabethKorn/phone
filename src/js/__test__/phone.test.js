import PhoneNumberFormatter from "../phone";

test("should format Russian phone number starting with 8", () => {
    const phone = new PhoneNumberFormatter();
    const formatted = phone.formatPhoneNumber("8 (927) 000-00-00");
    expect(formatted).toBe("+79270000000");
});

test("should format Russian phone number starting with +7", () => {
    const phone = new PhoneNumberFormatter();
    const formatted = phone.formatPhoneNumber("+7 960 000 00 00");
    expect(formatted).toBe("+79600000000");
});

test("should format phone number starting with +7", () => {
    const phone = new PhoneNumberFormatter();
    const formatted = phone.formatPhoneNumber("+5 960 000 00 00");
    expect(formatted).toBe("+59600000000");
});
