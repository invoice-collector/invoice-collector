
import { SketchCollector } from '../../sketchCollector';

export class NeuroflashCollector extends SketchCollector {

    static CONFIG = {
        id: "neuroflash",
        name: "Neuroflash",
        description: "i18n.collectors.neuroflash.description",
        version: "0",
        website: "https://app.neuro-flash.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1361509.jpg",
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
        entryUrl: "https://app.neuro-flash.com",
    }

    constructor() {
        super(NeuroflashCollector.CONFIG);
    }
}
