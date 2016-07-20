export class Consts {    
    public static get URL_PREFIX():string { return "/fediz-idp/services/rs/"; }

    // Until we have Paging
    public static get LISTSIZE():string { return "500"; }
    public static isLoggedIn: boolean = false;
}