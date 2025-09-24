"use client";

import "./login.scss";
import { useActionState, useEffect } from 'react';
import DoTheLoginThing from '@/actions/do-the-login-thing';
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import { toast, ToastContainer } from "react-toastify";

export default function LoginForm() {

    const [formState, formAction, isPending] = useActionState(DoTheLoginThing);

	useEffect(function () {
		isPending ? toast.loading("Logger ind...", { toastId: "loader" }) : toast.dismiss();

		if (formState?.success) {
			toast.update("loader", {
				toastId: "loader",
				render: "Du er nu logget ind!",
				type: "success",
				isLoading: false,
				closeOnClick: false,
				hideProgressBar: true,
				position: "top-right"
			});
			setTimeout(function () {
				redirect("/");
			}, 2000);
		}
	}, [formState, isPending]);

    return isPending ? <p>loading...</p> : (
        <>
            <form action={formAction} className='form'>

                <div className='form__input-container'>
                    <label>Email</label>
                    <input placeholder="Email" type="text" name="email" />
                    <span>{formState?.properties?.email.errors}</span>
                </div>

                <div className='form__input-container'>
                    <label>Password</label>
                    <input placeholder="Password" type="password" name="password" />
                    <span>{formState?.properties?.password.errors}</span>
                </div>

                <div className='form__button-container'>
                    <button type="submit" className="button">Sign in</button>
                    <span>{formState?.errors}</span>
                </div>
                <Link className="form__forgot" href={""}>Forgot password?</Link>
                <ToastContainer />
            </form>
        </>
    )
}