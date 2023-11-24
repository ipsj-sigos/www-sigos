export default async (request) => {
        var url = new URL(request.url);
        const params = new URLSearchParams(url.search);
        if (params.has('ComSys2023')) {
                url.pathname = '/event/comsys2023/';
                url.search = '';
        } else {
                url = request.url.replace(/^.*\/sig\/os/, "http://www.ipsj.or.jp/sig/os");
        }
        console.log(url);
        return Response.redirect(url);
};
