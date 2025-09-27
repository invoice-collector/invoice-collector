
import { SketchCollector } from '../../sketchCollector';

export class KpsysCollector extends SketchCollector {

    static CONFIG = {
        id: "kpsys",
        name: "kpsys",
        description: "i18n.collectors.kpsys.description",
        version: "0",
        website: "https://aff.kpsys.de/auszahlungen.cgi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1722889.jpg",
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
        entryUrl: "https://aff.kpsys.de/auszahlungen.cgi",
    }

    constructor() {
        super(KpsysCollector.CONFIG);
    }
}
