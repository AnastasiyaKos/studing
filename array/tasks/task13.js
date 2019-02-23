



exports.sortByCores = (current, next) => {
    if (current.info.cores < next.info.cores) return -1;
    if (current.info.cores > next.info.cores) return 1;
};