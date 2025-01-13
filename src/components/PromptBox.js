import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";

const PromptContainer = () => {
  const [placeholder, setPlaceholder] = useState("");
  const placeholderTexts = [
    "A panda baking cupcakes in a cozy cottage kitchen",
    "A robot painting a sunset on Mars",
    "A wizard casting spells in a magical forest",
  ];
  const typingSpeed = 100;
  const pauseBetweenTexts = 2000;

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentText = placeholderTexts[textIndex];
      const updatedText = isDeleting
        ? currentText.substring(0, charIndex - 1)
        : currentText.substring(0, charIndex + 1);

      setPlaceholder(updatedText);

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), pauseBetweenTexts);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % placeholderTexts.length;
      }

      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

      const delay = isDeleting ? typingSpeed / 2 : typingSpeed;
      setTimeout(type, delay);
    };

    type(); 
  }, []);

  return (
    <>
        <div className="prompt-input-container bg-zinc-900">
            <TextField variant="outlined" fullWidth multiline maxRows={5} placeholder={placeholder}
            InputProps={{
                style: { fontStyle: "italic", color: "#fff" },
            }}
            sx={{
                "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    border: "none",
                },
                },
                width: {
                    md: "730px",
                    sm: "500px"
                }
            }}
            />
        </div>
        <div>
            <Button variant="contained">Generate</Button>
        </div>
    </>
  );
};

export default PromptContainer;
