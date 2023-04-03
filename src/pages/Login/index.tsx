import ICONS from "../../assets/icons";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { useFormik } from 'formik';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <div className="min-h-screen flex flex-col md:flex-row">
        <div className="flex-[0.2] md:flex-1 flex items-center bg-primary">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-[3rem] md:leading-[5rem] p-[3rem] md:p-[5rem]">
                Lets Begin Your<br />
                Journey with<br />
                <span className="text-primarySoft">Tech.id</span>
            </h1>
        </div>
        <div className="flex-1 flex items-center justify-center p-[3rem] md:p-[5rem] flex-col">
            <div className="w-full flex flex-col">
                <label className="font-semibold mb-2 text-sm">Email</label>
                <TextInput onChange={(e) => formik.setFieldValue("email", e.target.value)} onBlur={() => null} id="email" name="email" value={formik.values.email} placeholder="Masukkan email" />
            </div>
            <div className="w-full flex flex-col mt-5">
                <label className="font-semibold mb-2 text-sm">Password</label>
                <TextInput type="password" onChange={(e) => formik.setFieldValue("password", e.target.value)} onBlur={() => null} id="password" name="password" value={formik.values.email} placeholder="Masukkan password" />
            </div>
            <span className="text-xs font-bold text-gray py-5">Atau login dengan</span>
            <div className="w-full flex flex-col">
                <Button text="Login dengan Akun Github" icon={ICONS.LOGOS.GIT.SM} />
            </div>
        </div>
    </div>
}

export default Login;