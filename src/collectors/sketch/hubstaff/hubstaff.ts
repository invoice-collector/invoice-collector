
import { SketchCollector } from '../../sketchCollector';

export class HubstaffCollector extends SketchCollector {

    static CONFIG = {
        id: "hubstaff",
        name: "Hubstaff",
        description: "i18n.collectors.hubstaff.description",
        version: "0",
        website: "https://account.hubstaff.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44088.jpg",
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
        entryUrl: "https://account.hubstaff.com/login",
    }

    constructor() {
        super(HubstaffCollector.CONFIG);
    }
}
