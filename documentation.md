# Dokumentation for SwapHub - Eksamen
Rasmus Toft, WU12

# Sådan kommer du i gang
`npm install`

`npm run dev`

`npm start ( på API )`

Jeg har valgt valgfri-opgave C


## Tech-stack
* **Next.js**  
Et front-end framework baseret på React.js som også giver adgang til server-side komponenter og -actions, samt mappebaseret routing. Server-side komponenter og funktioner giver en større sikkerhed, da al koden afvikles på serveren fremfor i klienten.

* **React**  
Et bibliotek der giver mig mulighed for at lave komponenter og håndtere states på en god og let måde. React har et stort community med et stort modul-bibliotek, som er aktivt, vel-dokumenteret og vel-understøttet. Det er også det mest brugte front-end bibliotek i verden, så efterspørgslen på React-udviklere er stor.

* **Git**  
Et versionsstyringsværktøj, som lader mig lave branches og versioner af min kode, så jeg let kan gå tilbage til tidligere versioner, hvis jeg for eksempel har lavet en fejl. Jeg bruger Git sammen med GitHub.

* **React-icons**  
Et ikon-bibliotek, som er beregnet på React.

* **SASS**  
En udvidelse til CSS, som lader mig lave funktioner, variabler, mixins og nesting. Jeg kan opdele min CSS i moduler og dermed genbruge kode flere steder.

* **Web-API fra SwapHub**  
Et interface til at få adgang til SwapHub's data, så jeg kan lave min egen app.

* **Zod**  
Et valideringsbibliotek til objekter og strings. Jeg bruger Zod til blandt andet at validere bruger-input fra formularer.

## Kode-eksempel
Kode-eksempel path: project/src/app/(routes)/login
```jsx
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
        }
    }, [formState, isPending]);

    return (
        <>
            <form action={formAction} className='form'>

                <div className='form__input-container'>
                    <label>Email</label>
                    <input placeholder="Email" type="text" name="email" />
                    <span>{formState?.properties?.email?.errors}</span>
                </div>
                ...
                <ToastContainer />
```
useActionState er en hook som gør at man kan opdatere en "state" baseret på indholdet af formAction som er vores funktion og de 2 andre er states.

useEffect er også en hook til react som acceptere 2 argumenter - den kører toastify some kører 2 hooks onOpen og onClose til at give os en alert eller form for loading. der bliver også brugt ternary operator som er en simplificeret udgave af if / else ( condition ? "noget" if true : "noget andet" if false).

så har vi en "if" statement som kører formState funktionen med en optional chaining operator som får et object som er endten undefined eller null, til at kortslutte og give undefined istedet for at give en error.

useEffecten slutter af med et dependency array, som fortæller react hvornår useEffect callback skal køre igen.

formen kører vores formAction funktion når der bliver submittet som bliver taget fra parameter DoTheLoginThing

span viser os en error besked som også har optional chaining.