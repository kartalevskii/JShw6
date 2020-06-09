console.log('Objects');
// Возможные методы: ввод информации о лампочке (мощность, стоимость
// электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
//  счетчик горения лампочки.
let Lamp = function() {

    this.get = function() {
        this.a = +prompt('Введите стоимость лампочки (в рублях)');
        this.b = +prompt('Введите мощность лампочки (в ватах)');
        this.c = +prompt('Cколько у Вас таких лампочек?');
        this.o = +prompt('Ваше среднее время использования данных лампочек в день летом (в часах)');
        this.op = +prompt('Ваше среднее время использования данных лампочек в день осень (в часах)');
        this.ope = +prompt('Ваше среднее время использования данных лампочек в день зима (в часах)');
        this.oper = +prompt('Ваше среднее время использования данных лампочек в день весна (в часах)');
        this.pro = prompt('Высчитать? Да или Нет');
        this.operation();
    };

    this.operation = function() {
        this.problem = this.ope * 29.6 * 3;
        if (this.problem > 700) {
            switch (this.pro) {
                case 'Да':
                    this.result1 = this.a + ((((((this.b * 0.001) * 4) * this.oper) * 30.6) * 3) * this.c);
                    this.result2 = this.a * 2 + (((this.b * 0.001) * 4) * this.problem * this.c);
                    this.result3 = this.a + ((((((this.b * 0.001) * 4) * this.op) * 30.6) * 3) * this.c);
                    this.result4 = this.a + ((((((this.b * 0.001) * 4) * this.o) * 30.3) * 3) * this.c);
                    break;
                case 'Нет':
                    this.result1 = this.a - this.a;
                    break;
                default:
                    this.result1 = 0;
            };
          } else {
            switch (this.pro) {
                case 'Да':
                    this.result1 = this.a + ((((((this.b * 0.001) * 4) * this.oper) * 30.6) * 3) * this.c);
                    this.result2 = this.a * 2 + (((this.b * 0.001) * 4) * this.problem * this.c);
                    this.result3 = this.a + ((((((this.b * 0.001) * 4) * this.op) * 30.6) * 3) * this.c);
                    this.result4 = this.a + ((((((this.b * 0.001) * 4) * this.o) * 30.3) * 3) * this.c);
                case 'Нет':
                    this.result1 = this.a - this.a;
                    break;
                default:
                    this.result1 = 0;
            }
          }
        this.next();
    };

    this.next = function() {
        this.year = (this.result1 + this.result2 + this.result3 + this.result4) * 3;
        this.show();
    };
    this.show = function() {
        document.write(this.year + ' рублей - Ваша затрата на использование света в год');
    };
};
let lamp = new Lamp();
lamp.get();

let light = new Lamp();
light.a = 5;
light.b = 12;
light.c = 6;
console.log(light);
