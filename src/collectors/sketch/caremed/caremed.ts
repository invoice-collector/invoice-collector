
import { SketchCollector } from '../../sketchCollector';

export class CaremedCollector extends SketchCollector {

    static CONFIG = {
        id: "caremed",
        name: "CareMed",
        description: "i18n.collectors.caremed.description",
        version: "0",
        website: "https://caremedgmbh.de/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4418062.jpg",
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
        entryUrl: "https://caremedgmbh.de/account/login",
    }

    constructor() {
        super(CaremedCollector.CONFIG);
    }
}
