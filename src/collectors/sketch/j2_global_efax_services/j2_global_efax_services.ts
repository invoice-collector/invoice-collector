
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class J2GlobalEfaxServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "j2_global_efax_services",
        name: "J2 Global Efax Services",
        description: "i18n.collectors.j2_global_efax_services.description",
        version: "0",
        website: "https://www.efax.com/myaccount/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167032.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.efax.com/myaccount/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(J2GlobalEfaxServicesCollector.CONFIG);
    }
}
