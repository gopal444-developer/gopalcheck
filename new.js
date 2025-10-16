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
      q5: "A",
      q6: "B",
      q7: "A",
      q8: "D",
      q9: "B",
      q10: "A",
      q11: "A",
      q12: "A",
      q13: "D",
      q14: "D",
      q15: "A",
      q16: "A",
      q17: "C",
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
      q33: "A",
      q34: "D",
      q35: "D",
      q36: "C",
      q37: "B",
      q38: "A",
      q39: "A",
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


