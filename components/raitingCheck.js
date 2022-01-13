function raitingCheck(value) {
    if (value >= 7) {
        return 'green';
    }
    if(value <= 6) {
        return 'red';
    }
    if (value < 7) {
        return 'orange';
    }  
}

export {raitingCheck}