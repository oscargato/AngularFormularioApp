export class Book {
	public id:number;
	public title:string;
	public author:string;
	public url?:string;

	constructor(id:number, tit:string, aut:string, url:string){
		this.id = id;
		this.title = tit;
		this.author = aut;
		this.url = url;
	}
}
