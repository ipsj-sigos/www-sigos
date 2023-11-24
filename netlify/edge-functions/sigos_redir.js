export default async (request) => {
        var url = new URL(request.url);
        console.log(url);
        const params = new URLSearchParams(url.search);
        if (params.has('ComSys2023')) {
                url.pathname = '/event/comsys2023/';
                url.search = '';
        } else {
                url.hostname = 'www.ipsj.or.jp';
                url.protocol = 'http:';
                url.port = '';
                url.search = url.search.replace(/=$/, '');
        }
        console.log(url);
        return Response.redirect(url);
};
