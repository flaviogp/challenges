export interface FormData{
    cardName: string;
    cardNumber: string;
    expDate: {
        month: string;
        year: string;
    }
    cvc: string
}
export interface FormProps{
    setFormData: (arg: FormData) => void;
    formData: FormData;
}
export interface CardProps{
    formData: FormData;
}
