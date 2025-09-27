
import { SketchCollector } from '../../sketchCollector';

export class InterstateWasteServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "interstate_waste_services",
        name: "Interstate Waste Services",
        description: "i18n.collectors.interstate_waste_services.description",
        version: "0",
        website: "https://secure.billtrust.com/interstatewaste/ig/open",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798677.jpg",
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
        entryUrl: "https://secure.billtrust.com/interstatewaste/ig/open",
    }

    constructor() {
        super(InterstateWasteServicesCollector.CONFIG);
    }
}
