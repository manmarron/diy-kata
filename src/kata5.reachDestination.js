const reachDestination = (distance, speed) => {
    const i = Math.ceil((distance / speed) / 0.5) * 0.5;

    return 'I should be there in ' + i + ' hours.';
};

module.exports = reachDestination;
