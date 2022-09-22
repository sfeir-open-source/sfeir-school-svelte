type Person = {
	id: string;
	firstname: string;
	lastname: string;
	position: string;
	phone: string;
	email: string;
	photo: string;
	managerId: string;
	manager: string;
	gender: 'm' | 'f' | 'o';
};

type People = Person[];

type RadioOption = {
	value: string;
	label: string;
};
