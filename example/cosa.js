var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, dni) {
        var _this = this;
        this.decirNombre = function () { return console.log(_this.nombre); }; // método
        this.nombre = nombre;
        this.dni = 39245500;
    }
    return Persona;
}());
var Programador = /** @class */ (function (_super) {
    __extends(Programador, _super);
    function Programador(nombre, dni) {
        var _this = _super.call(this, nombre, dni) || this;
        _this.gritar = function () { return console.log('LA P*** MADRE NO ME ANDA NADA'); };
        return _this;
    }
    return Programador;
}(Persona));
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, dni) {
        var _this = _super.call(this, nombre, dni) || this;
        _this.gritar = function () { return console.log('LA P*** MADRE NO ENTIENDO NADA'); };
        return _this;
    }
    return Estudiante;
}(Persona));
var guille = new Programador('Guille', 39245500);
var pepe = new Estudiante('Pepe', 222222);
guille.gritar();
pepe.gritar();
