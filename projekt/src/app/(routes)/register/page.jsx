"use client";

import CreateUser from "@/actions/create-user";
import { useActionState, useState } from "react";

export default function NewUser() {
	const [formState, formAction, isPending] = useActionState(CreateUser);

	console.log("formState", formState);


	return (isPending ? <p>loading...</p> :
		<>
			<form action={formAction} className="form">
				<div className='form__input-container'>
					<label>First Name</label>
					<input type="text" name="firstname" defaultValue={formState?.data?.firstname} />

				</div>
				<div className='form__input-container'>
					<label>Last Name</label>
					<input type="text" name="lastname" defaultValue={formState?.data?.lastname} />

				</div>
				<div className='form__input-container'>
					<label>Email</label>
					<input type="email" name="email" defaultValue={formState?.data?.email} />

				</div>
				<div className='form__input-container'>
					<label>Password</label>
					<input type="password" name="password" defaultValue={formState?.data?.password} />

				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	)
}