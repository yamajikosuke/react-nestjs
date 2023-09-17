import React from "react";

export const Sort: React.FC = () => {
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

  function compare(a: any, b: any) {
    // Use toUpperCase() to ignore character casing
    const genreA = a.genre.toUpperCase();
    const genreB = b.genre.toUpperCase();

    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  }
  function compareRegions(a: any, b: any) {
    const dataA = a.displayContents.title.en;
    const dataB = b.displayContents.title.en;
    console.log(dataA, dataB);
    let comparison = 0;
    if (dataA > dataB) {
      comparison = 1;
    } else if (dataA < dataB) {
      comparison = -1;
    }
    return comparison;
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Sort</h1>
        <div>
          <a
            href="https://www.webprofessional.jp/sort-an-array-of-objects-in-javascript/"
            target="_blank"
            rel="noreferrer"
          >
            参考サイト
          </a>
          <a
            href="http://kokushin.hatenablog.com/entry/2016/04/08/JavaScript%E3%81%A7%E9%85%8D%E5%88%97%E5%86%85%E3%81%AE%E6%95%B0%E5%80%A4%E3%82%92%E6%98%87%E9%A0%86%E3%83%BB%E9%99%8D%E9%A0%86%E3%81%A7%E3%82%BD%E3%83%BC%E3%83%88%EF%BC%88%E4%B8%A6%E3%81%B3%E6%9B%BF"
            target="_blank"
            rel="noreferrer"
          >
            参考サイト
          </a>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={() => sortHoge()}>
              hoge
            </button>
          </div>
          <div className="control">
            <button
              className="button is-link is-light"
              onClick={() => sortFuga()}
            >
              fuga
            </button>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={() => sortA()}>
              降順
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">昇順</button>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={() => sortBands()}>
              bands.sort
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">昇順</button>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={() => sortRegions()}>
              regions.sort
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">昇順</button>
          </div>
        </div>
      </div>
    </section>
  );
};
