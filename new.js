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
      q3: "B",
      q4: "A",
      q5: "A",
      q6: "C",
      q7: "B",
      q8: "C",
      q9: "C",
      q10: "C",
      q11: "B",
      q12: "A",
      q13: "B",
      q14: "A",
      q15: "A",
      q16: "A",
      q17: "C",
      q18: "A",
      q19: "C",
      q20: "B",
      q21: "B",
      q22: "B",
      q23: "D",
      q24: "A",
      q25: "C",
      q26: "A",
      q27: "A",
      q28: "D",
      q29: "C",
      q30: "A",
      q31: "A",
      q32: "A",
      q33: "C",
      q34: "D",
      q35: "A",
      q36: "A",
      q37: "B",
      q38: "A",
      q39: "A",
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



