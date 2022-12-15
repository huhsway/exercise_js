// 시간 복잡도 2^n
function fibo(n) {
    if (n < 2) return n;
    return fibo(n-1) + fibo(n-2)
}
