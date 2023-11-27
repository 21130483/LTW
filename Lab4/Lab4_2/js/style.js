const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");

function giaiPhuongTrinhBac2() {
  var avalue = a.value;
  var bvalue = b.value;
  var cvalue = c.value;
  const dapAn = document.getElementById("dap-an");
  if (avalue && bvalue && cvalue) {
    if (avalue != 0) {
      var delta = bvalue * bvalue - 4 * avalue * cvalue;
      console.log(delta);
      if (delta < 0) {
        dapAn.textContent = 'Vô nghiệm';
      } else if (delta == 0) {
        var nghiemKep = -bvalue / 2 * avalue;
        dapAn.textContent = 'Có nghiệm kép x1 = x2 = ' + nghiemKep;
      } else {
        var x1 = (-bvalue + Math.sqrt(delta)) / (2 * avalue);
        var x2 = (-bvalue - Math.sqrt(delta)) / (2 * avalue);
        console.log(x1);
        console.log(x2);
        dapAn.textContent = 'Có nghiệm x1 = ' + x1 + ' ,x2 = ' + x2;
      }
    } else {
      dapAn.textContent = 'Đây không phải phương trình bậc 2';

    }

  } else {
    dapAn.textContent = 'Chưa đủ thông tin';
  }
}
