// Write your function here:
const finalGrade = (note1, note2, note3) => {
    let note_average = (note1 + note2 + note3) / 3;
    if ((note1 < 0 || note1 > 100) || (note2 < 0 || note2 > 100) || (note3 < 0 || note3 > 100)) {
      return 'You have entered an invalid grade.';
    } else if (note_average <= 59) {
      return 'F';
    } else if (note_average <= 69) {
      return 'D';
    } else if (note_average <= 79) {
      return 'C';
    } else if (note_average <= 89) {
      return 'B';
    } else {
       return 'A';
    }
  }
  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(99, 92, 95)) // Should print 'A'
  // We encourage you to add more function calls of your own to test your code!