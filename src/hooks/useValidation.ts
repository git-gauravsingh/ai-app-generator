export default function useValidation(json: string) {
    try {
        JSON.parse(json);

        return {
            isValid: true,
            error: null,
        };
    } catch {
        return {
            isValid: false,
            error: "Invalid JSON",
        };
    }
}