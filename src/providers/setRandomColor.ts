const setRandomColor = (): string => {

    const red = Math.floor(Math.random() * 130);
    const green = Math.floor(Math.random() * 130);
    const blue = Math.floor(Math.random() * 130);

    return `rgb(${red}, ${green}, ${blue})`;
}

export default setRandomColor;