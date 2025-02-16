
//prevoius pattern  pattern="^(\+375|375|80)(\(\d{2}\)|\d{2})((\d{7})|(\d{3}-\d{2}-\d{2})|(\d{2}-\d{2}-\d{3}))$"

// const input = document.querySelector(".content__form.input.first");
// const inputS = document.querySelector(".content__form.input.second");

// Функция для префикса телефонного номера
const prefixNumber = (str) => {
    // For Belarusian numbers starting with +375 or 80
    if (str === "8") {
        return "+375 (";
    }
    if (str === "3") {
        return "+375 (";
    }
    if (str === "+") {
        return "+375 (";
    }
    return "+375 (";
};


// Обработчик ввода

const phoneInputs = document.querySelectorAll("input[name='phone']");

phoneInputs.forEach((input) => {
    if (input)
        input.addEventListener("input", (e) => {
            const value = input.value.replace(/\D+/g, "");
            const numberLength = 10;

            let result = "";

            //
            for (let i = 0; i < value.length && i < numberLength; i++) {
                switch (i) {
                    case 0: {
                        result += prefixNumber(value[i]);
                        continue;
                    }
                    case 3: {
                        result += ") ";
                        break;
                    }
                    case 6: {
                        result += "-";
                        break;
                    }
                    case 8: {
                        result += "-";
                        break;
                    }
                    default: {
                        break;
                    }

                }
                if (value[i + 2] !== undefined)
                    result += value[i + 2];
            }
            input.value = result;

        });

    // Обработчик для клавиш Backspace и Delete
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" || e.key === "Delete") {
            const cursorPos = input.selectionStart;
            let value = input.value;
          
            // Если курсор на позиции после цифры 3, 6 или 8 (где тире), удаляем тире
            if(cursorPos===10 || cursorPos===9){
                value = value.slice(0, cursorPos - 2) + value.slice(cursorPos);
            } else if (value[value.length - 1] === "-") {
                value = value.slice(0, cursorPos - 1) + value.slice(cursorPos);
            } else {
                value = value.slice(0, cursorPos) + value.slice(cursorPos);
            }
            
            input.value = value; // Обновляем значение
        }
    });
})        