"use client";

import "./login.scss";
import { useActionState, useEffect } from 'react';
import DoTheLoginThing from '@/actions/do-the-login-thing';
import Link from "next/link";

export default function LoginForm() {

    const [formState, formAction, isPending] = useActionState(DoTheLoginThing)

    useEffect(function () {
        if (!formState) return;
        console.log(formState);
    }, [formState]);

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
            </form>
        </>
    )
}