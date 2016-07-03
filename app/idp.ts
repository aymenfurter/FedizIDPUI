export class IDP { 
  	
  	constructor(
  		public realm: string,    	
    	public uri: string,    	
    	public serviceDisplayName: string,
    	public serviceDescription: string,    	
    	public idpUrl: string,
    	public stsUrl: string,    	
    	public certificate: string,
    	public certificatePassword: string,    	
    	public provideIdpList: string,
    	public useCurrentIdp: string,    	
    	public rpSingleSignOutCleanupConfirmation: string,        	
    	public rpSingleSignOutConfirmation: string    	
  	) {  }

};
