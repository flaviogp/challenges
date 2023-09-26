import Form from "../../components/Form";
import { FormProps } from "../../interfaces";



export default function FormSection ({ setFormData, formData }: FormProps) {
    return (
        <section className="form-section">
            <Form setFormData={setFormData} formData={formData}/>
        </section>
    )
}