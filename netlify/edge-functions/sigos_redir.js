export default async (request) => {
        const url = new URL(request.url);
        const params = new URLSearchParams(url.search);
        if (params.has('ComSys2023')) {
                const new_url = new URL("/event/comsys2023/", request.url);
                console.log(new_url);
                return new_url;
        }
        url.hostname = 'www.ipsj.or.jp';
        url.protocol = 'http:';
        url.port = 80;
        console.log(url);
        return Response.redirect(url);
};
