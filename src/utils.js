
export function validateEmail(email){
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (!emailRegex.test(email)) {
      if (email.length === 0) {
        return 'Please enter an email address.';
      } else {
        return 'Please enter a valid email address (e.g., example@domain.com).';
      }
    }
     return (''); 
  };
  