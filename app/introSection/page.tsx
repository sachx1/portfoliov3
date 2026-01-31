import { useEffect, useState } from "react";
import { Typewriter } from 'nextjs-simple-typewriter'

export default function IntroSection() {
    const [step, setStep] = useState(0);

    const handleType = (count: number) => {
        const fullWord = "Sachin Khargie";
        let isStep = false;

        // When count reaches the full length, typing is done
        if (count === fullWord.length) {
            setStep(1);
            console.log('1');
        }

        if (step === 1){
            isStep = true;
        }

        return isStep;
    };

    const finishedFirstWord = handleType

    return (
        <div>
            <h1 className="text-5xl font-mono neon-welcome">
                <Typewriter
                    words={[`Sachin Khargie`]}
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onType={handleType}
                />
            </h1>
            
            {handleType &&

                <h1 className="text-5xl font-mono neon-welcome">
                    <Typewriter
                        words={['Full‑Stack Developer']}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onType={handleType}
                    />
                </h1>
            }
        </div>
    );
}