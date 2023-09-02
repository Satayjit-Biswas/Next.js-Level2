export const getData = async (link) => {
    const res = await fetch(`${link}`, {
        // cache: "force-cache",
        // next:{
        //   revalidate:5
        // },
        //Created Built time and By Default add If you not added , and it is getStatcProps and SSG

        cache: "no-store", // ServerSite render And SSR
    });
    const data = await res.json();
    return data;
};
