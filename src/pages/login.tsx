import { useState } from 'react';
import lendsqrLogo from '../assets/images/lendsqr-logo.png'
import illustration from '../assets/images/sign-in-illustration.png'
import Input from '../components/input'
import loginStyle from "../scss/login.module.scss"
import { FaSpinner } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Login(){
  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = useState(false);
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ showPassword, setShowPassword] = useState(false);
  const [ errors , setErrors ] = useState<{ 
     email: string | null;
     password: string | null
    }>({
      email: null,
      password: null,
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasError = false;

    const newErrors = {
      email: null as string | null,
      password: null as string | null,
    };

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
      hasError = true;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      hasError = true;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    // Fake login
    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      setIsLoading(false);
      toast.success("Login successful!");
      navigate("/dashboard");
    }, 1000);
  };


  return (
    <main className={loginStyle.main}>
      <section className={loginStyle.image_container}>
        <img src={lendsqrLogo} alt='Lendsqr Logo' className={loginStyle.logo}/>
        <img src={illustration} alt='Sign In Illustration' className={loginStyle.illustration}/>
      </section>
      <section className={loginStyle.welcome}>
        <div className={loginStyle.container}>
          <hgroup>
            <h1>Welcome!</h1>
            <h2>Enter details to login.</h2>
          </hgroup>
         
           <form className={loginStyle.login__form} onSubmit={handleSubmit}>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              handleValue={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
               handleValue={(e) => setPassword(e.target.value)}
               error={errors.password}
              onShowPassword={() => setShowPassword(!showPassword)}
            />
            <Link to='/'>FORGOT PASSWORD?</Link>
            <button disabled={isLoading} type='submit'>
              {isLoading ? (
                <FaSpinner className={loginStyle.spinner} />
              ) : (
                "LOG IN"
              )}
            </button>
            </form> 
        </div>
      </section>
    </main>

  )
}