
import { SketchCollector } from '../../sketchCollector';

export class EwagkamenzCollector extends SketchCollector {

    static CONFIG = {
        id: "ewagkamenz",
        name: "ewagkamenz",
        description: "i18n.collectors.ewagkamenz.description",
        version: "0",
        website: "https://portal.ewagkamenz.de/BKP/Rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2175539.jpg",
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
        entryUrl: "https://portal.ewagkamenz.de/BKP/Rechnungen",
    }

    constructor() {
        super(EwagkamenzCollector.CONFIG);
    }
}
