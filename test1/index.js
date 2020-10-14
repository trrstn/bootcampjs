/*
  Title:
    Abbreviate a Two Word Name

  Description:
    Write a function to convert a name into initials.
    This kata strictly takes two words with one space in between them.

    The output should be two capital letters with a dot seperating them.

    It should look like this:

    Sam Harris => S.H

    Patrick Feeney => P.F

  Kata Link:
    https://www.codewars.com/kata/abbreviate-a-two-word-name

  Discuss Link:
    https://www.codewars.com/kata/abbreviate-a-two-word-name/discuss

  Solutions Link:
    https://www.codewars.com/kata/abbreviate-a-two-word-name/solutions
*/

const abbrevName = (name) => {
  const splitted = name.split(' ')
  const initials = splitted.shift().charAt(0).concat('.') + splitted.pop().charAt(0)
  
  return initials.toUpperCase()
}

// Function Export
module.exports = abbrevName
