"use client"
import React, { useState } from 'react'

export default function TestApp() {


    // const ques = ["opt1", "opt2", "opt3", "op4"];
    // const ansIndex = 2;
    // const selectedAns = "opt2";

    // for (let i = 0; i < ques.length; i++) {
    //     const element = ques[i];
    //     console.log(element)

    // }

    // const index = ques.indexOf(selectedAns);
    // console.log(index)

    // console.log(ques[ansIndex])


    const arr = ["আম", "জাম", "কলা", "কাঁঠাল"]
    const ansIndex = 3
    const sAns = 'কাঁঠাল'

    const index = arr.indexOf(sAns);

    const isCorrect = ansIndex === index

    console.log(isCorrect)

    const [text, setText] = useState("")

    const handleChange = (e , index) => {
        setText(e.target.value)
        console.log(e.target.value , index)
    }

    return (
        <div className=' w-full min-h-screen p-20'>
            {
                arr.map((a, i) => (
                    <div>
                        <label htmlFor={a}>{a}</label>
                        <input onChange={(e) => handleChange(e, index)} value={text} type="radio" name={a} />
                    </div>
                ))
            }
        </div>
    )
}
