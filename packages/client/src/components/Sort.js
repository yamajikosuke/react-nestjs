import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Sort = () => {
    const hoge = ["e", "b", "c", "d", "a"];
    const foo = [9, 2, 3, "random", "panda"];
    const fuga = ["あ", "え", "い", "お", "う"];
    const bands = [
        { genre: "Rap", band: "Migos", albums: 2 },
        { genre: "Pop", band: "Coldplay", albums: 4 },
        { genre: "Classic", band: "dummy", albums: 4 },
        { genre: "Rock", band: "Breaking Benjamins", albums: 1 },
    ];
    const regions = [
        {
            companyId: "2",
            defaultId: "002",
            categoryId: "0002",
            displayContents: {
                title: {
                    de: "Asien",
                    en: "Asia",
                    fr: "Asie",
                    it: "Asia",
                    ja: "アジア",
                    ko: "아시아",
                },
            },
        },
        {
            companyId: "2",
            defaultId: "001",
            categoryId: "0001",
            displayContents: {
                title: {
                    de: "Europa",
                    en: "Europa",
                    fr: "Europe ",
                    it: "Europa",
                    ja: "ヨーロッパ",
                    ko: "유럽",
                },
            },
        },
        {
            companyId: "1",
            defaultId: "002",
            categoryId: "0002",
            displayContents: {
                title: {
                    de: "Japan",
                    en: "Japan",
                    fr: "Japon",
                    it: "Giappone",
                    ja: "日本",
                    ko: "일본",
                },
            },
        },
    ];
    const sortHoge = () => {
        hoge.sort();
        console.log(hoge);
    };
    const sortFuga = () => {
        fuga.sort();
        console.log(fuga);
    };
    const sortA = () => {
        foo.sort();
        console.log(foo);
    };
    const sortBands = () => {
        bands.sort(compare);
        console.log(bands);
    };
    const sortRegions = () => {
        const regionsBuffer = regions.slice();
        console.log(regionsBuffer);
        regions.sort(compareRegions);
        console.log(regions);
    };
    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const genreA = a.genre.toUpperCase();
        const genreB = b.genre.toUpperCase();
        let comparison = 0;
        if (genreA > genreB) {
            comparison = 1;
        }
        else if (genreA < genreB) {
            comparison = -1;
        }
        return comparison;
    }
    function compareRegions(a, b) {
        const dataA = a.displayContents.title.en;
        const dataB = b.displayContents.title.en;
        console.log(dataA, dataB);
        let comparison = 0;
        if (dataA > dataB) {
            comparison = 1;
        }
        else if (dataA < dataB) {
            comparison = -1;
        }
        return comparison;
    }
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Sort" }), _jsxs("div", { children: [_jsx("a", { href: "https://www.webprofessional.jp/sort-an-array-of-objects-in-javascript/", target: "_blank", rel: "noreferrer", children: "\u53C2\u8003\u30B5\u30A4\u30C8" }), _jsx("a", { href: "http://kokushin.hatenablog.com/entry/2016/04/08/JavaScript%E3%81%A7%E9%85%8D%E5%88%97%E5%86%85%E3%81%AE%E6%95%B0%E5%80%A4%E3%82%92%E6%98%87%E9%A0%86%E3%83%BB%E9%99%8D%E9%A0%86%E3%81%A7%E3%82%BD%E3%83%BC%E3%83%88%EF%BC%88%E4%B8%A6%E3%81%B3%E6%9B%BF", target: "_blank", rel: "noreferrer", children: "\u53C2\u8003\u30B5\u30A4\u30C8" })] }), _jsxs("div", { className: "field is-grouped", children: [_jsx("div", { className: "control", children: _jsx("button", { className: "button is-link", onClick: () => sortHoge(), children: "hoge" }) }), _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link is-light", onClick: () => sortFuga(), children: "fuga" }) })] }), _jsxs("div", { className: "field is-grouped", children: [_jsx("div", { className: "control", children: _jsx("button", { className: "button is-link", onClick: () => sortA(), children: "\u964D\u9806" }) }), _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link is-light", children: "\u6607\u9806" }) })] }), _jsxs("div", { className: "field is-grouped", children: [_jsx("div", { className: "control", children: _jsx("button", { className: "button is-link", onClick: () => sortBands(), children: "bands.sort" }) }), _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link is-light", children: "\u6607\u9806" }) })] }), _jsxs("div", { className: "field is-grouped", children: [_jsx("div", { className: "control", children: _jsx("button", { className: "button is-link", onClick: () => sortRegions(), children: "regions.sort" }) }), _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link is-light", children: "\u6607\u9806" }) })] })] }) }));
};
