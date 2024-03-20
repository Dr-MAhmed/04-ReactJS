import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2); //Simulating network delay..

    let fet = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await fet.text();
    console.log(data, res);

    // Custom Errors
    if (data.username === "harry") {
      setError("person", {
        message: "This user has been blocked from accessing the website",
      });
    }
    if (data.password === "harry") {
      setError("blocked", {
        message: "Password should be harry",
      });
    }
  };
  return (
    <>
    <h4>This is about form handling in reactJS and connecting it with express backend.. That was not about styling, That was only about functionality..</h4>
      {isSubmitting && <div className="fontBold fontSize">Loading....</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="username"
            {...register("username", {
              required: {
                value: true,
                message: "username is required",
              },
              minLength: {
                value: 3,
                message: "username must be at least 3 characters",
              },
              maxLength: {
                value: 15,
                message: "username must be at most 15 characters",
              },
            })}
            type="text"
          />
          {errors.username && (
            <div className="purple">{errors.username.message}</div>
          )}
          <br />
          <input
            placeholder="password"
            {...register("password", {
              required: {
                value: true,
                message: "password is required",
              },
              minLength: {
                value: 5,
                message: "password must be at least 5 characters",
              },
              maxLength: {
                value: 15,
                message: "password must be at most 15 characters",
              },
            })}
            type="password"
          />
          {errors.password && (
            <div className="purple">{errors.password.message}</div>
          )}
          {errors.person && <div className="purple">{errors.person.message}</div>}
          {errors.blocked && (
            <div className="purple">{errors.blocked.message}</div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
