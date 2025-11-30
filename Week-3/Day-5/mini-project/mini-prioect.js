
const grid = document.getElementById("grid");
const totalPixels = 50 * 50; // 50x50 grid

for (let i = 0; i < totalPixels; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    grid.appendChild(pixel);
}


let currentColor = "black";


const colors = document.querySelectorAll(".color");
colors.forEach(color => {
    color.addEventListener("click", () => {
        currentColor = color.style.backgroundColor;
    });
});


let isDrawing = false;


const pixels = document.querySelectorAll(".pixel");

pixels.forEach(pixel => {
 
    pixel.addEventListener("mousedown", () => {
        isDrawing = true;
        pixel.style.backgroundColor = currentColor;
    });

    pixel.addEventListener("mouseover", () => {
        if (isDrawing) {
            pixel.style.backgroundColor = currentColor;
        }
    });


    pixel.addEventListener("mouseup", () => {
        isDrawing = false;
    });
});


grid.addEventListener("mouseleave", () => {
    isDrawing = false;
});


const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = "white";
    });
});
