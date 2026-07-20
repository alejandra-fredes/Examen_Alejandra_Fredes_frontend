const { createApp } = Vue;

createApp({
    data() {
        return {
            // Control de pestañas
            pagina: "calificaciones",

            //  CALIFICACIONES 
            nota1: "",
            nota2: "",
            nota3: "",
            asistencia: "",

            promedio: "",
            mensaje: "",

            errorNota1: "",
            errorNota2: "",
            errorNota3: "",
            errorAsistencia: "",

            // REGISTRO
            
            nombre: "",
            correo: "",
            password: "",
            repetir: "",

            errorNombre: "",
            errorCorreo: "",
            errorPassword: "",
            errorRepetir: ""
        };
    },

    methods: {

        
        // CALCULAR NOTAS
        
        calcular() {

            let valido = true;

            // Validar Nota 1
            if (this.nota1 === "") {
                this.errorNota1 = "El campo Nota 1 es requerido";
                valido = false;
            }

            // Validar Nota 2
            if (this.nota2 === "") {
                this.errorNota2 = "El campo Nota 2 es requerido";
                valido = false;
            }

            // Validar Nota 3
            if (this.nota3 === "") {
                this.errorNota3 = "El campo Nota 3 es requerido";
                valido = false;
            }

            // Validar asistencia
            if (this.asistencia === "") {
                this.errorAsistencia = "El campo Asistencia % es requerido";
                valido = false;
            }

            if (!valido) {
                return;
            }

            // Promedio ponderado
            this.promedio = (
                (Number(this.nota1) * 0.35) +
                (Number(this.nota2) * 0.35) +
                (Number(this.nota3) * 0.30)
            ).toFixed(1);

            // Resultado
            if (Number(this.promedio) >= 40 && Number(this.asistencia) >= 80) {
                this.mensaje = "Aprobado";
            } else {
                this.mensaje = "Reprobado";
            }
        },

        
        // REGISTRO
        
        registrar() {

            let valido = true;

            if (this.nombre.trim() === "") {
                this.errorNombre = "El campo nombre es requerido";
                valido = false;
            }

            const formatoCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

            if (this.correo.trim() === "") {
                this.errorCorreo = "El campo correo es requerido";
                valido = false;
            } else if (!formatoCorreo.test(this.correo)) {
                this.errorCorreo = "Ingrese un correo válido";
                valido = false;
            }

            if (this.password === "") {
                this.errorPassword = "El campo contraseña es requerido";
                valido = false;
            }

            if (this.repetir === "") {
                this.errorRepetir = "Debe repetir la contraseña";
                valido = false;
            } else if (this.password !== this.repetir) {
                this.errorRepetir = "Las contraseñas no coinciden";
                valido = false;
            }

            if (!valido) {
                return;
            }

            alert("El registro se ha realizado correctamente");

            this.nombre = "";
            this.correo = "";
            this.password = "";
            this.repetir = "";

            this.errorNombre = "";
            this.errorCorreo = "";
            this.errorPassword = "";
            this.errorRepetir = "";
        }
    },
        watch: {

        
        // NOTA 1
        
        nota1(valor) {
            if (valor === "") {
                this.errorNota1 = "";
            } else if (Number(valor) < 10 || Number(valor) > 70) {
                this.errorNota1 = "La nota debe estar entre 10 y 70";
            } else {
                this.errorNota1 = "";
            }
        },

        
        // NOTA 2
        
        nota2(valor) {
            if (valor === "") {
                this.errorNota2 = "";
            } else if (Number(valor) < 10 || Number(valor) > 70) {
                this.errorNota2 = "La nota debe estar entre 10 y 70";
            } else {
                this.errorNota2 = "";
            }
        },

        
        // NOTA 3
        
        nota3(valor) {
            if (valor === "") {
                this.errorNota3 = "";
            } else if (Number(valor) < 10 || Number(valor) > 70) {
                this.errorNota3 = "La nota debe estar entre 10 y 70";
            } else {
                this.errorNota3 = "";
            }
        },

        
        // ASISTENCIA
        
        asistencia(valor) {
            if (valor === "") {
                this.errorAsistencia = "";
            } else if (Number(valor) < 0 || Number(valor) > 100) {
                this.errorAsistencia = "La asistencia debe estar entre 0 y 100";
            } else {
                this.errorAsistencia = "";
            }
        },

        
        // NOMBRE
        
        nombre(valor) {
            if (valor.trim() === "") {
                this.errorNombre = "El campo nombre es requerido";
            } else {
                this.errorNombre = "";
            }
        },

        
        // CORREO
        
        correo(valor) {

            const formatoCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

            if (valor.trim() === "") {
                this.errorCorreo = "El campo correo es requerido";
            } else if (!formatoCorreo.test(valor)) {
                this.errorCorreo = "Ingrese un correo válido";
            } else {
                this.errorCorreo = "";
            }
        },

        
        // CONTRASEÑA
        
        password(valor) {

            if (valor === "") {
                this.errorPassword = "El campo contraseña es requerido";
            } else {
                this.errorPassword = "";
            }

            if (this.repetir !== "") {
                if (valor !== this.repetir) {
                    this.errorRepetir = "Las contraseñas no coinciden";
                } else {
                    this.errorRepetir = "";
                }
            }
        },

        
        // REPETIR CONTRASEÑA
        
        repetir(valor) {

            if (valor === "") {
                this.errorRepetir = "Debe repetir la contraseña";
            } else if (valor !== this.password) {
                this.errorRepetir = "Las contraseñas no coinciden";
            } else {
                this.errorRepetir = "";
            }
        }

    }

}).mount("#app");