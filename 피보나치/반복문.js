function fibo(n) {
    const result = [0, 1];

    if (n === 0 || n === 1) return result[n]

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];
        result.push(a + b);
    }

    return result[n];
}