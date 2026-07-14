const { createApp } = Vue;

createApp({
    data() {
        return {
            // Control de pestañas
            pagina: "calificaciones",

            // ==========================
            // CALIFICACIONES
            // ==========================
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

            // ==========================
            // REGISTRO
            // ==========================
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
        // =================================
        // CALCULAR NOTAS
        // =================================
        calcular() {
            // Limpiar errores anteriores
            this.errorNota1 = "";
            this.errorNota2 = "";
            this.errorNota3 = "";
            this.errorAsistencia = "";

            this.promedio = "";
            this.mensaje = "";

            let valido = true;

            // Validar Nota 1
            if (this.nota1 === "") {
                this.errorNota1 = "El campo Nota 1 es requerido";
                valido = false;
            } else if (Number(this.nota1) < 10 || Number(this.nota1) > 70) {
                this.errorNota1 = "La nota debe estar entre 10 y 70";
                valido = false;
            }

            // Validar Nota 2
            if (this.nota2 === "") {
                this.errorNota2 = "El campo Nota 2 es requerido";
                valido = false;
            } else if (Number(this.nota2) < 10 || Number(this.nota2) > 70) {
                this.errorNota2 = "La nota debe estar entre 10 y 70";
                valido = false;
            }

            // Validar Nota 3
            if (this.nota3 === "") {
                this.errorNota3 = "El campo Nota 3 es requerido";
                valido = false;
            } else if (Number(this.nota3) < 10 || Number(this.nota3) > 70) {
                this.errorNota3 = "La nota debe estar entre 10 y 70";
                valido = false;
            }

            // Validar asistencia
            if (this.asistencia === "") {
                this.errorAsistencia = "El campo Asistencia % es requerido";
                valido = false;
            } else if (Number(this.asistencia) < 0 || Number(this.asistencia) > 100) {
                this.errorAsistencia = "La asistencia debe estar entre 0 y 100";
                valido = false;
            }

            if (!valido) {
                return;
            }

            // Cálculo promedio ponderado a un decimal (Estilo Escala Chilena 10 - 70)
            this.promedio = (
                (Number(this.nota1) * 0.35) +
                (Number(this.nota2) * 0.35) +
                (Number(this.nota3) * 0.30)
            ).toFixed(1);

            // Determinar estado
            if (Number(this.promedio) >= 40 && Number(this.asistencia) >= 80) {
                this.mensaje = "Aprobado";
            } else {
                this.mensaje = "Reprobado";
            }
        },

        // =================================
        // REGISTRO
        // =================================
        registrar() {
            this.errorNombre = "";
            this.errorCorreo = "";
            this.errorPassword = "";
            this.errorRepetir = "";

            let valido = true;

            // Nombre
            if (this.nombre.trim() === "") {
                this.errorNombre = "El campo nombre es requerido";
                valido = false;
            }

            // Correo
            const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.correo === "") {
                this.errorCorreo = "El campo correo es requerido";
                valido = false;
            } else if (!formatoCorreo.test(this.correo)) {
                this.errorCorreo = "Ingrese un correo válido";
                valido = false;
            }

            // Contraseña
            if (this.password === "") {
                this.errorPassword = "El campo contraseña es requerido";
                valido = false;
            }

            // Repetir contraseña
            if (this.repetir === "") {
                this.errorRepetir = "Debe repetir la contraseña";
                valido = false;
            } else if (this.password !== this.repetir) {
                this.errorRepetir = "Las contraseñas no coinciden";
                valido = false;
            }

            if (valido) {
                alert("El registro se ha realizado correctamente");
                this.nombre = "";
                this.correo = "";
                this.password = "";
                this.repetir = "";
            }
        }
    }
}).mount("#app");