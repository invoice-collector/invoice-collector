
import { SketchCollector } from '../../sketchCollector';

export class CityOfVancouverPermitsAndLicencesCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_vancouver_permits_and_licences",
        name: "City of Vancouver Permits & Licences",
        description: "i18n.collectors.city_of_vancouver_permits_and_licences.description",
        version: "0",
        website: "https://plposweb.vancouver.ca/Public/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23370.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://plposweb.vancouver.ca/Public/Login.aspx",
    }

    constructor() {
        super(CityOfVancouverPermitsAndLicencesCollector.CONFIG);
    }
}
