
import { SketchCollector } from '../../sketchCollector';

export class BellCanadaMediumAndLargeBusinessPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "bell_canada_medium_and_large_business_portal",
        name: "Bell Canada - Medium & Large Business Portal",
        description: "i18n.collectors.bell_canada_medium_and_large_business_portal.description",
        version: "0",
        website: "https://www.businessportal.bell.ca/auth/Login?LOCALE=en_US",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4487681.jpg",
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
        entryUrl: "https://www.businessportal.bell.ca/auth/Login?LOCALE=en_US",
    }

    constructor() {
        super(BellCanadaMediumAndLargeBusinessPortalCollector.CONFIG);
    }
}
