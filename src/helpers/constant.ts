import { type } from "os";
import { schoolTypes } from "./types";

export const school: schoolTypes[] = [
	{
		id: 'school1',
		image: "https://www.collinsdictionary.com/images/full/school_309241295.jpg",
		schoolName: "Deal School District"

	},
	{
		id: 'school2',
		schoolName: "Salem City School, New Jersey",
		image: `https://img.freepik.com/free-vector/school-building-educational-institution-college_107791-1051.jpg?w=200`

	},

];

// export const tableBodyArray = [
//     {
//         "FINDEET RATING": {

//             "STUDENT-TEACHER RATIO": {
//                 school1: "89",
//                 school2: "45",
//             },
//             "AVERAGE TEACHER SALARY": {
//                 school1: "2:9",
//                 school2: "",
//             },
//             "ONLINE TEACHING": {
//                 school1: "34",
//                 school2: "69",
//             },
//         }
//     },
//     {
//         "KEY SCHOOL STATS": {
//             "SCHOOL ID CARD": {
//                 school1: true,
//                 school2: true,
//             },
//             "LIBRARY DURATION": {
//                 school1: 350,
//                 school2: 300,
//             },
//             "RESUMPTION DATE": {
//                 school1: "Soap",
//                 school2: "Soap",
//             },
//         }
//     },
//     {
//         "ACADEMIC STATS": {
//             "SCHOOL FEES": {
//                 school1: "yes",
//                 school2: "Naa",
//             },
//             "LIBRARY STAT": {
//                 school1: "233.9",
//                 school2: "90",
//             },
//             "CLOSING DATE": {
//                 school1: "March",
//                 school2: "April",
//             },
//         }
//     },
//     {
//         "TEACHER STATS": {
//             "SCHOOL UNIFORM": {
//                 school1: "yes",
//                 school2: "Naa",
//             },
//             "STAT": {
//                 school1: "233.9",
//                 school2: "90",
//             },
//             "RESUMPTION DATE": {
//                 school1: "Soap",
//                 school2: "Bag",
//             },
//         }
//     },
//     {
//         "FEE STRUCTURE": {
//             "SCHOOL BUS": {
//                 school1: "100",
//                 school2: "200",
//             },
//             "LIBRARY BOOKS": {
//                 school1: "9",
//                 school2: "90",
//             },
//             "BREAK TIME": {
//                 school1: "2pm",
//                 school2: "1pm",
//             },
//         }
//     },
// ]

type tableBodyProps = {
	[key: string]: {
		[key: string]: {
			[key: string]: string | number | boolean

		}
	}


}
export const tableBodyArrayObject: tableBodyProps = {
	"FINDEET RATING": {
		"STUDENT-TEACHER RATIO": {
			school1: "89",
			school2: "45",
		},
		"AVERAGE TEACHER SALARY": {
			school1: "2:9",
			school2: "",
		},
		"ONLINE TEACHING": {
			school1: "34",
			school2: "69",
		},
	},
	"KEY SCHOOL STATS": {
		"SCHOOL ID CARD": {
			school1: true,
			school2: true,
		},
		"LIBRARY DURATION": {
			school1: 350,
			school2: 300,
		},
		"RESUMPTION DATE": {
			school1: "Soap",
			school2: "Soap",
		},
	},
	"ACADEMIC STATS": {
		"SCHOOL FEES": {
			school1: "yes",
			school2: "Naa",
		},
		"LIBRARY STAT": {
			school1: "233.9",
			school2: "90",
		},
		"CLOSING DATE": {
			school1: "March",
			school2: "April",
		},
	},
	"TEACHER STATS": {
		"SCHOOL UNIFORM": {
			school1: "yes",
			school2: "Naa",
		},
		"STAT": {
			school1: "233.9",
			school2: "90",
		},
		"RESUMPTION DATE": {
			school1: "Soap",
			school2: "Bag",
		},
	},
	"FEE STRUCTURE": {
		"SCHOOL BUS": {
			school1: "100",
			school2: "200",
		},
		"LIBRARY BOOKS": {
			school1: "9",
			school2: "90",
		},
		"BREAK TIME": {
			school1: "2pm",
			school2: "1pm",
		},
	},
	"FEE ARRANGEMENT": {
		"PART PAYMENT": {
			school1: "200",
			school2: "20",
		},
		"FULL PAYMENT": {
			school1: "900",
			school2: "900",
		},
		"BREAK TIME": {
			school1: "2pm",
			school2: "1pm",
		},
	},
}





export const convertObjectToArray = (object: tableBodyProps | ArrayLike<tableBodyProps>) => {
	// get the keys of the object
	const keys = Object.keys(object);
	// get the values of the object
	const values = Object.values(object) ?? [];
	// create an array to store the converted object
	const convertedObject = [];
	// loop through the keys and values
	for (let i = 0; i < keys.length; i++) {
		// get the key and value
		const key = keys[i];
		const value = values[i];
		// push the key and value to the array
		convertedObject.push({ [key]: value });
	}
	// return the converted object
	return {
		convertedObject,
		keys,
		values,
	};

}

export const convertedObject = convertObjectToArray(tableBodyArrayObject);

// return the keys with the highest value in the object





export const findMax = (item: any) => {
// get the highest value in the object
const max = Math.max(...Object.values(item));
// get the key of the highest value
const key = Object.keys(item).filter((key) => item[key] === max);
// return the key and value
return {
	max,
	key
};
	
}
