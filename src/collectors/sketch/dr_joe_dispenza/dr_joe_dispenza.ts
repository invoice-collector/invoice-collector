
import { SketchCollector } from '../../sketchCollector';

export class DrJoeDispenzaCollector extends SketchCollector {

    static CONFIG = {
        id: "dr_joe_dispenza",
        name: "Dr. Joe Dispenza",
        description: "i18n.collectors.dr_joe_dispenza.description",
        version: "0",
        website: "https://drjoedispenza.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2508541.jpg",
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
        entryUrl: "https://drjoedispenza.com/login",
    }

    constructor() {
        super(DrJoeDispenzaCollector.CONFIG);
    }
}
