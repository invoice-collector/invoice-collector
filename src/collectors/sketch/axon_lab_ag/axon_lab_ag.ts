
import { SketchCollector } from '../../sketchCollector';

export class AxonLabAgCollector extends SketchCollector {

    static CONFIG = {
        id: "axon_lab_ag",
        name: "Axon Lab AG",
        description: "i18n.collectors.axon_lab_ag.description",
        version: "0",
        website: "https://www.axonlab.com/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2021184.jpg",
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
        entryUrl: "https://www.axonlab.com/profile",
    }

    constructor() {
        super(AxonLabAgCollector.CONFIG);
    }
}
