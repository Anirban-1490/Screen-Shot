import axios from "axios";

export default async function handler(req, res) {
    const { url, quality, width, height, pop_up, full_page, device, scale } =
        req.body;

    if (req.method !== "POST")
        return res.status(405).send("Only GET request is allowed");
    if (!url)
        return res.status(400).send("Empty or invaild url. Please try again");
    const urlObj = new URL("https://website-screenshot-api.exponential.host/");
    for (let [key, value] of Object.entries({
        ...req.body,
        export_format: "jpeg",
    })) {
        if (value) {
            value = value == "on" ? "true" : value;

            urlObj.searchParams.append(key, value);
        }
    }

    try {
        const response = await axios.get(urlObj.href, {
            headers: {
                exponential_api_secret: process.env.API_KEY,
            },
            responseType: "arraybuffer",
        });
        res.status(200).json({ message: "Successful", data: response.data });
    } catch (error) {
        res.status(error.response.status).send(error.message);
    }
}
