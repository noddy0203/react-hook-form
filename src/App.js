import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  //all tge functionalities from useForm package
  const {
    handleSubmit,
    register, //for registtering field
    formState: { errors }, //errors object
    reset, //after submitting the form set the field to null
    trigger, //trigger error with keyup
    setFocus,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <>
      <div className="parent">
        <form className="formStyle" action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputField">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "It's not valid name",
                },
              })}
              onKeyUp={() => {
                trigger("name");
              }}
            />
            {errors.name && (
              <small className="errMsg">{errors.name.message}</small>
            )}
          </div>
          <div className="inputField">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              {...register("age", {
                required: "Age is required",
                min: {
                  value: 13,
                  message: "minimum required age is 13",
                },
                max: {
                  value: 65,
                  message: "maximum age authorized is 65",
                },
              })}
              onKeyUp={() => {
                trigger("age");
              }}
            />
            {errors.age && (
              <small className="errMsg">{errors.age.message}</small>
            )}
          </div>
          <div className="inputField">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: "This email is invalid",
                },
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <small className="errMsg">{errors.email.message}</small>
            )}
          </div>
          <div className="inputField">
            <label htmlFor="phone">Contact no.</label>
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: "Contact number is required",
                pattern: {
                  value: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
                  message: "Mention valid mobile number",
                },
              })}
              onKeyUp={() => {
                trigger("phone");
              }}
            />
            {errors.phone && (
              <small className="errMsg">{errors.phone.message}</small>
            )}
          </div>
          <div className="inputField">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="2"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "minimum text length is 10 character",
                },
                maxLength: {
                  value: 70,
                  message: "Max length is 70",
                },
              })}
              onKeyUp={() => {
                trigger("message");
              }}
            ></textarea>
            {errors.message && (
              <small className="errMsg">{errors.message.message}</small>
            )}
          </div>
          <div className="inputField">
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
