
import { SketchCollector } from '../../sketchCollector';

export class CarboneCollector extends SketchCollector {

    static CONFIG = {
        id: "carbone",
        name: "Carbone",
        description: "i18n.collectors.carbone.description",
        version: "0",
        website: "https://studio.carbone.io/#/studio",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1487163.jpg",
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
        entryUrl: "https://studio.carbone.io/#/studio",
    }

    constructor() {
        super(CarboneCollector.CONFIG);
    }
}
