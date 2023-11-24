export default async (request) => {
        const url = new URL(request.url);
        const params = new URLSearchParams(url.search);
        if (params.has('ComSys2023')) {
                const new_url = new URL("/event/comsys2023/", request.url);
                return new_url;
        }
        url.hostname = 'www.ipsj.or.jp';
        url.port = 80;
        return Response.redirect(url);
};
