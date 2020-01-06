---
layout: challenge
title: Money Coins ⚓️
---

## Deskripsi Tantangan

Terdapat sebuah counter untuk melakukan penukaran uang menjadi pecahan yang lebih kecil. Counter
ini memiliki coin uang dengan pecahan sbb : `1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000,
10000` dan masing-masing pecahan jumlahnya saat ini tidak terbatas.

## Releases

### Release 0 : Exchange money coin

Tulis sebuah function dengan nama `convertToCoin` yang akan menerima parameter sebuah angka yang
akan berisi nominal uang yang mau ditukarkan **DAN** hasil akhir dari function tersebut berupa
array. Uang koin yang diberikan harus berurutan mulai dari yang nilainya paling besar. Lihat contoh
di bawah ini:

```javascript
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
// [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
```
