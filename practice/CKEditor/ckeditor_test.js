import {
	ClassicEditor,
	Essentials,
	Bold,
	Italic,
	Font,
	Paragraph,
	Heading, 
	Code, CodeBlock,
	Link, 
	Image, ImageUpload, ImageInsert, ImageInsertViaUrl,
	TodoList, List, ListProperties
} from 'https://cdn.ckeditor.com/ckeditor5/43.2.0/ckeditor5.js';

console.log(ClassicEditor);


// editor1
ClassicEditor
	.create(document.querySelector('#editor1'), {
		plugins: [Essentials, Bold, Italic, Font, Paragraph],
		toolbar: [
			'undo', 'redo', '|', 'bold', 'italic', '|',
			'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
		]
	})
	.then ((newEditor) => {
		// console.log(`newEditor ==>`, newEditor);
	})
	.catch ((error) => {
		console.error(error);
	});

	
// editor2
ClassicEditor
	.create(document.querySelector('#editor2'), {
		plugins: [Essentials, Bold, Italic, Font, Paragraph],
		toolbar: [
			'undo', 'redo', '|', 'bold', 'italic', '|',
			'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
		]
	});


// editor3
ClassicEditor
	.create(document.querySelector('#editor3'), {
		plugins: [Essentials, Bold, Italic, Heading, Code, Link, Image, ImageInsert, TodoList, List],
		toolbar: [
			'heading', '|', 'bold', 'italic', 'code', '|', 'link', 'insertImage', '|', 'todoList', 'bulletedList', 'numberedList'
		]
	})
	.then ((newEditor) => {
		// console.log(`newEditor ==>`, newEditor);
	})
	.catch ((error) => {
		console.error(error);
	});


/* 基本測試 */
ClassicEditor
	.create(document.querySelector('#editorBase1'), {
		plugins: [],
		toolbar: [],
	})
	.catch ((error) => {
		console.error(error);
	});
	
ClassicEditor
	.create(document.querySelector('#editorBase2'), {
		plugins: [Essentials],
		toolbar: ['undo', 'redo'],
	})
	.catch ((error) => {
		console.error(error);
	});
	
ClassicEditor
	.create(document.querySelector('#editorBase3'), {
		plugins: [
			Essentials, 
			Bold, Italic
		],
		toolbar: [
			'undo', 'redo', '|', 
			'bold', 'italic', '|'
		],
	})
	.catch ((error) => {
		console.error(error);
	});
	
ClassicEditor
	.create(document.querySelector('#editorBase4'), {
		plugins: [Paragraph],
		toolbar: [],
	})
	.catch ((error) => {
		console.error(error);
	});
	
ClassicEditor
	.create(document.querySelector('#editorBase5'), {
		plugins: [Heading],
		toolbar: [],
	})
	.catch ((error) => {
		console.error(error);
	});
	
ClassicEditor
	.create(document.querySelector('#editorBase6'), {
		plugins: [Essentials, Heading],
		toolbar: [],
	})
	.catch ((error) => {
		console.error(error);
	});
	
ClassicEditor
	.create(document.querySelector('#editorBase7'), {
		plugins: [Essentials, Paragraph],
		toolbar: ['undo', 'redo'],
	})
	.catch ((error) => {
		console.error(error);
	});


/* 各種工具測試 */
// Heading
ClassicEditor
	.create(document.querySelector('#editorHeading'), {
		plugins: [Essentials, Heading],
		toolbar: ['heading'],
	})
	.catch ((error) => {
		console.error(error);
	});

// Bold, Italic
ClassicEditor
	.create(document.querySelector('#editorBoldItalic'), {
		plugins: [
			Essentials, Heading,
			Bold, Italic,
		],
		toolbar: [
			'heading', '|',
			'bold', 'italic', '|',
		],
	})
	.catch ((error) => {
		console.error(error);
	});
	
// Code, CodeBlock
ClassicEditor
	.create(document.querySelector('#editorCode'), {
		plugins: [
			Essentials, Paragraph,
			Code, CodeBlock,
		],
		toolbar: [
			'code', 'codeBlock'
		],
	})
	.catch ((error) => {
		console.error(error);
	});
	
// TodoList, List
ClassicEditor
	.create(document.querySelector('#editorList'), {
		plugins: [
			Essentials, Paragraph, 
			TodoList, 
			List,
		],
		toolbar: [
			'todoList', 
			'bulletedList', 'numberedList'
		]
	})
	.catch ((error) => {
		console.error(error);
	});
	
// ListProperties
ClassicEditor
	.create(document.querySelector('#editorList2'), {
		plugins: [
			Essentials, Paragraph, 
			ListProperties,
		],
		toolbar: [
			'bulletedList', 'numberedList'
		]
	})
	.catch ((error) => {
		console.error(error);
	});
	
// List, ListProperties
ClassicEditor
	.create(document.querySelector('#editorList3'), {
		plugins: [
			Essentials, Paragraph, 
			List, ListProperties,
		],
		toolbar: [
			'bulletedList', 'numberedList'
		],
		list: {
			properties: {
				styles: false,	// 多種清單樣式
				startIndex: true,	// 序號起始值
				reversed: true	// 反向序號
			}
		}
	})
	.catch ((error) => {
		console.error(error);
	});
	
// Link
ClassicEditor
	.create(document.querySelector('#editorLink'), {
		plugins: [
			Essentials, Paragraph, 
			Link,
		],
		toolbar: ['link'],
	})
	.catch ((error) => {
		console.error(error);
	});

	
/* 圖片 */
// Image1
ClassicEditor
	.create(document.querySelector('#editorImage1'), {
		plugins: [
			Essentials, Paragraph, 
			Image, 
			// ImageUpload 或 ImageInsert 均可使用 uploadImage
			ImageUpload,
			// ImageInsert,
		],
		toolbar: ['uploadImage'],
	})
	.catch ((error) => {
		console.error(error);
	});
	
// Image2
ClassicEditor
	.create(document.querySelector('#editorImage2'), {
		plugins: [
			Essentials, Paragraph, 
			Image, 
			// ImageUpload,
			ImageInsert,
		],
		toolbar: ['insertImage', 'uploadImage'],
	})
	.catch ((error) => {
		console.error(error);
	});
	
// Image3
ClassicEditor
	.create(document.querySelector('#editorImage3'), {
		plugins: [
			Essentials, Paragraph, 
			Image, 
			ImageInsertViaUrl,
		],
		toolbar: ['insertImage'],
	})
	.catch ((error) => {
		console.error(error);
	});
