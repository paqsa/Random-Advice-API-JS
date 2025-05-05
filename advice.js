const adviceNumber = document.getElementById("adviceNumber");
    const adviceText = document.getElementById("adviceText");
    const generateAdviceBtn = document.getElementById("generateAdvice");

async function getAdvice() {
    try {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        const { id, advice } = data.slip;

        adviceNumber.textContent = `Advice # ${id}`;
        adviceText.textContent = `“${advice}”`;
        } catch (error) {
        adviceNumber.textContent = "Error";
        adviceText.textContent = "Could not fetch advice. Please try again.";
    }
}

generateAdviceBtn.addEventListener("click", getAdvice);