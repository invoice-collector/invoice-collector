
import { SketchCollector } from '../../sketchCollector';

export class EwheelCollector extends SketchCollector {

    static CONFIG = {
        id: "ewheel",
        name: "Ewheel",
        description: "i18n.collectors.ewheel.description",
        version: "0",
        website: "https://ewheel.es/es/mi-cuenta",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4210275.jpg",
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
        entryUrl: "https://ewheel.es/es/mi-cuenta",
    }

    constructor() {
        super(EwheelCollector.CONFIG);
    }
}
