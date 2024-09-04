export default class PhoneNumberFormatter {
    formatPhoneNumber(phone) {
        let rightNumber = phone.replace(/[^\d+]/g, "");
        if (rightNumber[0] === "8" && rightNumber.length === 11) {
            rightNumber = "+7" + rightNumber.slice(1);
        }
        return rightNumber;
    }
}