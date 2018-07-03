// import export



//// =========================================== types vs interfaces vs classes
// const firstnName: string = 'Nabil';
// const lastName: string = 'Naffar';

// type StringOrNumber = string | number;
// const age: StringOrNumber = true;

// interface Component {
//     getName(): string;
// }

// class CarComponent implements Component {
//     getName() {
//         return 'Car';
//     }
// }

// class MazdaComponent extends CarComponent {
//     getName() {
//         return 32;
//     }
// }

// const mazda = new MazdaComponent();
// mazda.getName();

//// =========================================== generics
// interface Component<T> {
//     getValue(): T;
// }

// class StringComponent implements Component<string> {
//     getValue() {
//         return 'some string';
//     }
// }