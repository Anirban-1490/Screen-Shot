export const ServerlessPath = {
    path:
        process.env.NODE_ENV == "production"
            ? "https://screen-shot-quick.vercel.app"
            : "http://localhost:3000",
};
