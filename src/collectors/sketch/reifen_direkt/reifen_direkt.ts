
import { SketchCollector } from '../../sketchCollector';

export class ReifenDirektCollector extends SketchCollector {

    static CONFIG = {
        id: "reifen_direkt",
        name: "Reifen Direkt",
        description: "i18n.collectors.reifen_direkt.description",
        version: "0",
        website: "https://www.reifendirekt.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4572186.jpg",
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
        entryUrl: "https://www.reifendirekt.de/login",
    }

    constructor() {
        super(ReifenDirektCollector.CONFIG);
    }
}
