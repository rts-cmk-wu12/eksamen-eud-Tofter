"use client";

import CreateUser from "@/actions/create-user";
import { useActionState, useState } from "react";

export default function NewUser() {
    const [formState, formAction, isPending] = useActionState(CreateUser);

    return( isPending ? <p>loading...</p> :
        <>
        <form action={formAction}>
			<div>
				<label>
					<span>First Name</span>
					<input type="text" name="name" defaultValue={formState?.data?.name} />
				</label>
			</div>
			<div>
				<label>
					<span>Last Name</span>
					<input type="text" name="dough" defaultValue={formState?.data?.dough} />
				</label>
			</div>
			<div>
				<label>
					<span>Email</span>
					<input type="text" name="topping" defaultValue={formState?.data?.topping} />
				</label>
			</div>
			<div>
				<label>
					<span>Password</span>
					<input type="password" name="price" defaultValue={formState?.data?.price} />
				</label>
			</div>
			<button type="submit">Submit</button>
		</form>
        </>
    )
}