
import { SketchCollector } from '../../sketchCollector';

export class CaptainamzCollector extends SketchCollector {

    static CONFIG = {
        id: "captainamz",
        name: "CaptainAMZ",
        description: "i18n.collectors.captainamz.description",
        version: "0",
        website: "https://captainamz.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/533876.jpg",
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
        entryUrl: "https://captainamz.com/account/login",
    }

    constructor() {
        super(CaptainamzCollector.CONFIG);
    }
}
