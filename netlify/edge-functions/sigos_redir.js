export default async (request) => {
        const url = new URL(request.url);
        const params = new URLSearchParams(url.search);
        if (params.has('ComSys2023')) {
                url.pathname = '/event/comsys2023/';
        } else {
                url.hostname = 'www.ipsj.or.jp';
                url.protocol = 'http:';
                url.port = 80;
        }
        console.log(url);
        return Response.redirect(url);
};
