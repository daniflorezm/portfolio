module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/contact-project.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$resend__$5b$external$5d$__$28$resend$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$resend$29$__ = __turbopack_context__.i("[externals]/resend [external] (resend, esm_import, [project]/node_modules/resend)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$resend__$5b$external$5d$__$28$resend$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$resend$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$resend__$5b$external$5d$__$28$resend$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$resend$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const resend = new __TURBOPACK__imported__module__$5b$externals$5d2f$resend__$5b$external$5d$__$28$resend$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$resend$29$__["Resend"](process.env.RESEND_API_KEY);
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const { email } = req.body;
    if (!email || typeof email !== 'string') {
        return res.status(400).json({
            error: 'Email is required'
        });
    }
    if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({
            error: 'Resend API key not configured'
        });
    }
    try {
        const data = await resend.emails.send({
            from: 'Portfolio <no-reply@resend.dev>',
            to: 'greenfourtech@gmail.com',
            subject: 'Nuevo interesado en tu portfolio',
            html: `<p>Nuevo correo interesado: <b>${email}</b></p>`
        });
        if (data.error) {
            throw new Error(data.error.message || 'Error enviando el correo');
        }
        return res.status(200).json({
            success: true
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message || 'Error enviando el correo'
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ff40bd09._.js.map