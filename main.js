const goodMark = 90;
const goodAverageAttendance = 0.9;

class Student {
    constructor(firstName, lastName, year, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.marks = marks;
        this.attendance = [];
        this.results = {
            bad: "Редиска!",
            normal: "Норм, но можно лучше",
            excellent: "Ути какой молодчинка!"
        };
    }

    get age() {
        return new Date().getFullYear() - this.year;
    };

    get averageMark() {
        return Math.round(this.marks.reduce((a, b) => a + b) / this.marks.length)
    };

    present() {
        if (this.attendance.length < 25) {
            return this.attendance.push('true')
        }
    }

    absent() {
        if (this.attendance.length < 25) {
            return this.attendance.push('false')
        }
    }

    get averageAttendance(){
        let count = 0;
        this.attendance.forEach(function (item, i){
            if (item === "true"){
                count++;
            }
        });
        let averageAttendance = count/ this.attendance.length;
        return averageAttendance.toFixed(2)
    }

    get summary() {
        if (this.averageMark < goodMark && this.averageAttendance < goodAverageAttendance) {
            return this.results.bad;
        } else if (this.averageMark < goodMark || this.averageAttendance < goodAverageAttendance)
            return this.results.normal;
        else
            return this.results.excellent;
    }

}

var sergey = new Student('sergey', 'ivanov', '1993', [90, 100, 90, 80, 95, 90, 100, 85, 100, 80, 93]);
sergey.present();
sergey.present();
sergey.present();
sergey.absent();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.absent();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
sergey.present();
console.log(sergey);

var oleg = new Student('oleg', 'petrov', '1985', [50, 65, 40, 60, 45, 55, 50, 85, 30, 55, 60]);
oleg.present();
oleg.present();
oleg.present();
oleg.absent();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.absent();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
oleg.present();
console.log(oleg);

var ivan = new Student('ivan', 'sidorov', '1990', [30, 40, 35, 50, 30, ]);
ivan.present();
ivan.absent();
ivan.absent();
ivan.present();
ivan.present();
ivan.absent();
ivan.present();
ivan.present();
ivan.absent();
ivan.absent();
ivan.present();
ivan.present();
ivan.absent();
ivan.absent();
ivan.absent();
ivan.present();
ivan.present();
ivan.present();
ivan.absent();
ivan.present();
ivan.present();
ivan.absent();
ivan.present();
ivan.present();
ivan.present();
console.log(ivan);

