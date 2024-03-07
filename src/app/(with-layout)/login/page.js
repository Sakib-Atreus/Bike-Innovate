import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="container mx-auto">
      <div className="login-page hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <h1 className="text-4xl font-bold text-center m-2">Login</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  // disabled={disabled}
                  disabled={false} //* TODO: make button disabled for captcha */
                  className="btn bg-blue-400 text-white"
                  value="LOGIN"
                  type="submit"
                />
              </div>
              <p className="text-sm text-center text-blue-300 text-semibold">
                New here?{" "}
                <Link href="" className="text-blue-400 text-bold">
                  Create a New Account
                </Link>
              </p>
              <p className="text-sm text-center">Or sign in with</p>
              Login with Google
            </form>
          </div>
          {/* <div className="text-center lg:text-left">
            <img className="" src={loginImg} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
