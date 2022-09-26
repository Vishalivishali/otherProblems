const { filter } = require("@laufire/utils/collection");

const array = [
	[
		{
			name: 'karpagam',
			country: 'india',
		},
		{
			name: 'abi',
			country: 'india',
		},
		{
			name: 'anitha',
			country: 'india',
		},
		{
			name: 'kavya',
			country: 'india',
		}
	],
	[
		{
			name: 'arun',
			country: 'india',
		},
		{
			name: 'abinaya',
			country: 'india',
		},
		{
			name: 'kavya',
			country: 'india',
		},
		{
			name: 'anitha',
			country: 'india',
		}
	],
	[
		{
			name: 'anitha',
            country: 'india',
		},
		{
			name: 'aishu',
			country: 'india',
      },
    ],
];

const getResult = array.flat().map((ele) => (ele.name));
console.log(getResult);

