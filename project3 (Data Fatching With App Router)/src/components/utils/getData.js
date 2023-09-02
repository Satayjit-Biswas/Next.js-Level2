export const getData = async () => {
    const res = await fetch("http://localhost:5000/watches", {
        cache: "force-cache",
    });
    const data = await res.json();
    return data
};
