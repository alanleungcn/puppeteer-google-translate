function errFileSize(): never {
	throw new Error('Document size exceeds 10MB');
}

function errFileType(type: string): never {
	throw new Error(`Extension .${type} not supported`);
}

function errInvalidType(type: string): never {
	throw new Error(`Expected string or string array, received ${type}`);
}

function errTextOverflow(len: number): never {
	throw new Error(`Expected <= 5000 characters, received ${len}`);
}

function errTextLenZero(): never {
	throw new Error('Expected one or more character, received none');
}

function errArrayLenZero(): never {
	throw new Error('Expected one or more element, received none');
}

export {
	errFileSize,
	errFileType,
	errInvalidType,
	errTextLenZero,
	errTextOverflow,
	errArrayLenZero
};
