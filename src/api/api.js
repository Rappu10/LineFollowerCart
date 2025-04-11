const API_URL = "https://canesa.shop/api.php"; // URL del servidor

// Usuario y contraseña fijos para acceso exclusivo
const FIXED_USER = { email: "admin@canesa.com", password: "admin123" };

// Función de ayuda para manejar tiempo de espera
const fetchWithTimeout = (url, options, timeout = 10000) => {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Tiempo de espera agotado")), timeout)
        ),
    ]);
};

// Obtener usuarios
export const fetchUsers = async () => {
    try {
        const response = await fetchWithTimeout(API_URL, { method: "GET" });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error al obtener usuarios:", error.message);
        return { success: false, error: "No se pudieron obtener los usuarios." };
    }
};

// Agregar usuario
export const addUser = async (name, email, password) => {
    if (!name || !email || !password) {
        return { success: false, error: "Todos los campos son obligatorios." };
    }

    try {
        const response = await fetchWithTimeout(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error al agregar usuario:", error.message);
        return { success: false, error: "No se pudo registrar el usuario." };
    }
};

// Iniciar sesión
export const loginUser = async (email, password) => {
    if (!email || !password) {
        return { success: false, error: "Correo y contraseña son obligatorios." };
    }

    // Verificar credenciales fijas primero
    if (email === FIXED_USER.email && password === FIXED_USER.password) {
        return { success: true, user: { email: FIXED_USER.email } };
    }

    try {
        const response = await fetchWithTimeout(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, action: "login" }),
        });

        if (response.status === 401) {
            return { success: false, error: "Correo o contraseña incorrectos." };
        }

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        // Asegúrate de que la respuesta contenga `user`
        if (data.success) {
            return { success: true, user: data.user || null };
        } else {
            return { success: false, error: data.error || "Credenciales incorrectas." };
        }
    } catch (error) {
        console.error("Error en el inicio de sesión:", error.message);
        return { success: false, error: "Hubo un problema con la conexión. Inténtalo de nuevo." };
    }
};
