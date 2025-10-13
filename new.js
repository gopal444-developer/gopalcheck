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
      q2: "B",
      q3: "A",
      q4: "A",
      q5: "A",
      q6: "A",
      q7: "A",
      q8: "B",
      q9: "A",
      q10: "C",
      q11: "A",
      q12: "A",
      q13: "A",
      q14: "B",
      q15: "B",
      q16: "B",
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
      q28: "C",
      q29: "A",
      q30: "B",
      q31: "A",
      q32: "A",
      q33: "B",
      q34: "C",
      q35: "A",
      q36: "A",
      q37: "A",
      q38: "B",
      q39: "B",
      q40: "C",
       
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
