const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
};

export default wait;