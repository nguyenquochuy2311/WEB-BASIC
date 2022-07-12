// Liet ke nhung nam co: ngay Chu Nhat ngay 01 thang 01

for (let year = 2000; year < 2050; year++) {
    let d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
        console.log(`Ngay 01 thang 01 vao ngay Chu Nhat la nam: ${year}`);
    }
}