document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quizForm");
  const radios = form.querySelectorAll("input[type=radio]");
  const resultBox = document.getElementById("result");

  
  const quizSubmitted = localStorage.getItem("quizSubmitted");

  if (!quizSubmitted) {
    radios.forEach(radio => {
      const saved = localStorage.getItem(radio.name);
      if (saved && radio.value === saved) {
        radio.checked = true;
      }
    });
  } else {
    
    localStorage.clear();
  }

  
  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        localStorage.setItem(radio.name, radio.value);
      }
    });
  });

   
  window.calculateResult = function () {
    
    let correct =0;
    let correctCount = 0;
  let incorrectCount = 0;
    const correctAnswers = {
       
       q1: "A",
       q2: "D",
       q3: "A",
       q4: "A",
       q5: "C",
       q6: "A",
       q7: "A",
       q8: "D",
       q9: "A",
       q10: "A",
       q11: "B",
       q12: "D",
       q13: "D",
       q14: "B",
       q15: "A",
       q16: "D",
       q17: "A",
       q18: "A",
       q19: "A",
       q20: "A",
       q21: "B",
       q22: "B",
       q23: "A",
       q24: "B",
       q25: "A",
       q26: "A",
       q27: "B",
       q28: "D",
       q29: "C",
       q30: "A",
       q31: "B",
       q32: "A",
       q33: "A",
       q34: "B",
       q35: "B",
       q36: "C",
       q37: "C",
       q38: "C",
       q39: "C",
       q40: "B",
       
    };

    radios.forEach(radio => {
      if (radio.checked && correctAnswers[radio.name]) {
        if (radio.value === correctAnswers[radio.name]) {
          correct += 1;  
          correctCount += 1;
        } else {
          correct -= 0.25; 
          incorrectCount += 1; 
        }
      }
    });

    

    resultBox.innerHTML = `  
    // ✅ Total Correct Answers: ${correctCount} 
    <br>  
    //  ❌ Total Wrong Answers: ${incorrectCount} 
     <br> 
     🧮 Total Marks: ${correct }`;

     
    radios.forEach(radio => {
      radio.checked = false;
    });

     
    localStorage.clear();
    localStorage.setItem("quizSubmitted", "true");  
  };
});

