import { statSync } from 'fs';

function isExtensionValid(extension: string): boolean {
	if (
		[
			'doc',
			'docx',
			'odf',
			'pdf',
			'ppt',
			'pptx',
			'ps',
			'rtf',
			'txt',
			'xls',
			'xlsx'
		].includes(extension)
	)
		return true;
	return false;
}

function isFileSizeValid(path: string): boolean {
	const stat = statSync(path);
	if (stat.size > 1048576) return false;
	return true;
}

export { isExtensionValid, isFileSizeValid };
