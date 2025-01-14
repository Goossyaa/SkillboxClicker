(function () {
    // Определяем, поддерживает ли браузер Brotli
    const isBrotliSupported = 'CompressionStream' in window;

    // Лог для отладки
    console.log(`Brotli supported: ${isBrotliSupported}`);

    // Перезапись функции locateFile для Unity WebGL
    window.Module = window.Module || {};
    window.Module.locateFile = function (path) {
        // Если Brotli поддерживается, добавляем ".br" к пути
        if (isBrotliSupported) {
            return path + ".br";
        }

        // Если Brotli не поддерживается, возвращаем оригинальный путь
        return path;
    };
})();
