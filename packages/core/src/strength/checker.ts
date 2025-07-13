import zxcvbn from "zxcvbn";
import { colors } from "@seampass/shared";

export const checkPasswordStrength = (password: string) => {
  const evaluationResult = zxcvbn(password);
  let strengthMessage = "";
  let color = "";

  switch (evaluationResult.score) {
    case 0:
    case 1:
      strengthMessage = "Weak";
      color = colors.weak;
      break;
    case 2:
      strengthMessage = "Fair";
      color = colors.good;
      break;
    case 3:
    case 4:
      strengthMessage = "Strong";
      color = colors.strong;
      break;
    default:
      strengthMessage = "Weak";
      color = colors.weak;
  }

  return { strengthMessage, color, score: evaluationResult.score };
};
