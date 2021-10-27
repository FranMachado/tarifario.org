export default {
  fetchRatesTree: () => {
    return [
      {
        categoryName: `Category`,
        categoryId:1,
        categoryDescription: `Desc category`,
        categoryParentId: null,
        categoryChilds: [],
        rates: [
          {
            title: `Rate`,
            a: 10,
            b: 15,
            c: 50,
          },
        ],
      },
    ];
  },
};
