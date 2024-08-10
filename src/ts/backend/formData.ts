export default function formData() {
    const formtSignIn: HTMLElement = document.getElementById('form-sign-in');
    let jsonFormData: any = undefined;

    const getFormData = (event: Event) => {
        const formData = new FormData(event.target as HTMLFormElement);
        const jsonData = Object.fromEntries(formData.entries());
        return jsonData;
    };

    function emailValidation() {
        console.log(jsonFormData.mail);
    }

    function passwordValidation() {
        console.log(jsonFormData.password);
    }

    function submitHandler(event: SubmitEvent) {
        event.preventDefault();
        jsonFormData = getFormData(event);
        emailValidation();
        passwordValidation();
    }

    formtSignIn.addEventListener('submit', submitHandler);
}
